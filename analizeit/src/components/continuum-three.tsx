"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";

type Variant = "diagnosis" | "flow" | "layers";

const assets: Record<Variant, { aspect: number; path: string }> = {
  diagnosis: { aspect: 10 / 7, path: "/continuum-analysis.svg" },
  flow: { aspect: 20 / 9, path: "/continuum-development.svg" },
  layers: { aspect: 62 / 25, path: "/continuum-optimization.svg" },
};

const variantIndex: Record<Variant, number> = {
  diagnosis: 0,
  flow: 1,
  layers: 2,
};

const vertexShader = `
  varying vec2 vUv;
  uniform float uEntry;
  uniform float uTime;
  uniform float uVariant;

  float easeOut(float value) {
    return 1.0 - pow(1.0 - value, 3.0);
  }

  void main() {
    vUv = uv;
    vec3 transformed = position;
    float entry = easeOut(uEntry);
    float pending = 1.0 - entry;

    if (uVariant < 0.5) {
      float layer = floor(clamp((uv.y - 0.21) * 4.5, 0.0, 2.0));
      transformed.x += pending * (layer - 1.0) * 0.05;
      transformed.y += pending * layer * 0.045;
      transformed.z += pending * layer * 0.03;
    } else if (uVariant < 1.5) {
      float side = uv.x < 0.5 ? -1.0 : 1.0;
      transformed.x += side * pending * 0.16;
    } else {
      float band = floor(clamp((uv.y - 0.28) * 8.0, 0.0, 3.0));
      transformed.x -= pending * band * 0.055;
    }

    float calm = sin(uTime * 0.48 + uv.x * 1.6) * 0.003;
    transformed.z += calm * smoothstep(0.18, 0.82, uv.y) * smoothstep(0.0, 1.0, uEntry);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uMap;
  uniform float uEntry;
  uniform float uTime;
  uniform float uVariant;

  void main() {
    vec4 base = texture2D(uMap, vUv);
    if (base.a < 0.02) discard;

    float blue = smoothstep(0.12, 0.42, base.b - base.r);
    float activation = smoothstep(0.62, 0.96, uEntry);
    float coordinate = uVariant < 1.5 ? vUv.y : vUv.x;
    float accentReveal = smoothstep(coordinate - 0.14, coordinate + 0.14, activation);
    float grey = dot(base.rgb, vec3(0.299, 0.587, 0.114));
    base.rgb = mix(vec3(grey), base.rgb, 1.0 - blue * (1.0 - accentReveal));

    float highlightPosition = 0.5 + 0.5 * sin(uTime * 0.36);
    float highlight = exp(-pow((vUv.x - highlightPosition) / 0.045, 2.0));
    base.rgb += vec3(0.035, 0.045, 0.065) * highlight * blue * smoothstep(0.94, 1.0, uEntry);
    base.a *= smoothstep(0.02, 0.18, uEntry);
    gl_FragColor = base;
  }
`;

export function ContinuumThree({ variant }: { variant: Variant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 10);
    camera.position.z = variant === "diagnosis" ? 4.2 : 5.1;

    const { aspect, path } = assets[variant];
    const width = variant === "diagnosis" ? 2.8 : 3.35;
    const geometry = new THREE.PlaneGeometry(width, width / aspect, 96, 72);
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uEntry: { value: reduceMotion ? 1 : 0 },
        uMap: { value: new THREE.Texture() },
        uTime: { value: 0 },
        uVariant: { value: variantIndex[variant] },
      },
      vertexShader,
    });
    material.depthWrite = false;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let ready = false;
    let visible = false;
    let enteredAt = performance.now();
    let frame = 0;

    const render = () => {
      if (ready) {
        const now = performance.now();
        if (!visible) {
          const bounds = canvas.getBoundingClientRect();
          if (bounds.top < window.innerHeight * 0.88 && bounds.bottom > window.innerHeight * 0.12) {
            visible = true;
            enteredAt = now;
          }
        }
        material.uniforms.uTime.value = reduceMotion ? 0 : now / 1000;
        material.uniforms.uEntry.value = reduceMotion ? 1 : visible ? Math.min(1, (now - enteredAt) / 1350) : 0;
        renderer.render(scene, camera);
      }
      if (!reduceMotion) frame = window.requestAnimationFrame(render);
    };

    const texture = new THREE.TextureLoader().load(path, () => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      material.uniforms.uMap.value = texture;
      ready = true;
      render();
    });

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      renderer.setSize(Math.max(1, bounds.width), Math.max(1, bounds.height), false);
      camera.aspect = bounds.width / Math.max(1, bounds.height);
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [variant]);

  return <canvas aria-hidden="true" className="continuum-three" ref={canvasRef} />;
}
