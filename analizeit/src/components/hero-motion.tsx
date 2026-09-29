"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";

export function HeroMotion() {
  const anchorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hero = anchorRef.current?.closest<HTMLElement>(".v2-hero");
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from(".v2-hero__line", {
        autoAlpha: 0,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.11,
        y: 42,
      });

      gsap.from(".v2-hero__lead", {
        autoAlpha: 0,
        delay: 0.42,
        duration: 0.9,
        ease: "power2.out",
        y: 24,
      });

    }, hero);

    return () => context.revert();
  }, []);

  return <span aria-hidden="true" ref={anchorRef} />;
}
