"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  uniform sampler2D uMap;
  uniform float uTime;
  uniform float uIntro;

  void main() {
    vUv = uv;
    vec3 transformed = position;
    vec4 sampleColor = texture2D(uMap, uv);
    float blueMask = smoothstep(0.04, 0.32, sampleColor.b - sampleColor.r);
    float movingArea = blueMask * smoothstep(0.34, 0.62, uv.y);
    float slowWave = sin(uTime * 0.72 + uv.y * 5.2 + uv.x * 1.35);
    float secondaryWave = sin(uTime * 0.43 + uv.y * 2.7 - uv.x * 2.9);
    transformed.z += movingArea * (slowWave * 0.0055 + secondaryWave * 0.0025);
    transformed.x += movingArea * sin(uTime * 0.38 + uv.y * 3.6) * 0.0015;
    transformed.y -= (1.0 - uIntro) * 0.026;
    transformed.z -= (1.0 - uIntro) * 0.055;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uMap;
  uniform float uTime;
  uniform float uIntro;

  void main() {
    vec4 base = texture2D(uMap, vUv);
    if (base.a < 0.01) discard;

    float blueMask = smoothstep(0.04, 0.32, base.b - base.r);
    float edgeSample = 0.006;
    float alphaLeft = texture2D(uMap, vUv - vec2(edgeSample, 0.0)).a;
    float alphaRight = texture2D(uMap, vUv + vec2(edgeSample, 0.0)).a;
    float alphaDown = texture2D(uMap, vUv - vec2(0.0, edgeSample)).a;
    float alphaUp = texture2D(uMap, vUv + vec2(0.0, edgeSample)).a;
    float alphaDifference = max(max(abs(base.a - alphaLeft), abs(base.a - alphaRight)), max(abs(base.a - alphaDown), abs(base.a - alphaUp)));
    float cardEdge = smoothstep(0.025, 0.22, alphaDifference) * smoothstep(0.08, 0.7, base.a);

    float glintTime = clamp((uTime - 1.75) / 2.0, 0.0, 1.0);
    float glintEnvelope = smoothstep(0.0, 0.12, glintTime) * (1.0 - smoothstep(0.86, 1.0, glintTime));
    float edgeCoordinate = vUv.x * 0.72 + vUv.y * 0.38;
    float glintCenter = mix(0.26, 0.92, glintTime);
    float edgeGlint = exp(-pow((edgeCoordinate - glintCenter) / 0.13, 2.0));
    edgeGlint *= cardEdge * blueMask * glintEnvelope;

    vec4 color = base;
    color.rgb = mix(color.rgb, vec3(0.72, 0.79, 1.0), edgeGlint * 0.18);
    color.a = base.a * smoothstep(0.0, 0.82, uIntro);

    gl_FragColor = color;
  }
`;

export function HeroThree() {
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
    const camera = new THREE.PerspectiveCamera(34, 2 / 3, 0.1, 10);
    camera.position.z = 3.45;

    const geometry = new THREE.PlaneGeometry(1.5, 2.25, 72, 108);
    const uniforms = {
      uMap: { value: new THREE.Texture() },
      uTime: { value: 0 },
      uIntro: { value: reduceMotion ? 1 : 0 },
    };
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms,
      vertexShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frame = 0;
    let ready = false;
    const startedAt = performance.now();

    const render = () => {
      if (!ready) return;
      if (!reduceMotion) {
        const elapsed = (performance.now() - startedAt) / 1000;
        const introProgress = Math.min(1, elapsed / 1.35);
        const easedIntro = 1 - Math.pow(1 - introProgress, 3);
        uniforms.uTime.value = elapsed;
        uniforms.uIntro.value = easedIntro;
        mesh.scale.setScalar(0.985 + easedIntro * 0.015);
      }
      renderer.render(scene, camera);
      if (!reduceMotion) frame = window.requestAnimationFrame(render);
    };

    const texture = new THREE.TextureLoader().load("/hero-transformation.png", () => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      uniforms.uMap.value = texture;
      ready = true;
      render();
    });

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      renderer.setSize(Math.max(1, width), Math.max(1, height), false);
      camera.aspect = width / Math.max(1, height);
      camera.updateProjectionMatrix();
      if (ready) renderer.render(scene, camera);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas aria-label="Kartka przechodząca w cyfrową formę" className="v2-hero__canvas" ref={canvasRef} role="img" />;
}
