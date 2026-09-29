"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

export function RealizationSlider({ children, count }: { children: ReactNode; count: number }) {
  const track = useRef<HTMLDivElement>(null);
  const id = useId();
  const [position, setPosition] = useState({ start: 0, visible: 3 });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const visible = Number(getComputedStyle(element).getPropertyValue("--cards-visible")) || 1;
      const first = element.children[0] as HTMLElement | undefined;
      const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
      const stride = (first?.getBoundingClientRect().width ?? element.clientWidth) + gap;
      const start = Math.max(0, Math.min(count - visible, Math.round(element.scrollLeft / stride)));
      setPosition(previous => previous.start === start && previous.visible === visible ? previous : { start, visible });
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => { element.removeEventListener("scroll", update); observer.disconnect(); };
  }, [count]);

  function goTo(start: number) {
    const element = track.current;
    if (!element) return;
    const target = element.children[Math.max(0, Math.min(count - position.visible, start))] as HTMLElement;
    const left = target.getBoundingClientRect().left - element.getBoundingClientRect().left + element.scrollLeft;
    element.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  const pages = Math.ceil(count / position.visible);
  const page = Math.min(pages - 1, Math.round(position.start / position.visible));
  return (
    <div className="realization-slider" role="region" aria-roledescription="karuzela" aria-label="Zakresy projektów">
      <div className="realization-slider__controls">
        <span className="realization-slider__range" aria-live="polite" aria-atomic="true">Przewijaj realizacje</span>
        <div className="realization-slider__arrows">
          <button type="button" aria-label="Poprzednie realizacje" aria-controls={id} disabled={position.start === 0} onClick={() => goTo(position.start - position.visible)}><ArrowLeft size={22} /></button>
          <button type="button" aria-label="Następne realizacje" aria-controls={id} disabled={position.start >= count - position.visible} onClick={() => goTo(position.start + position.visible)}><ArrowRight size={22} /></button>
        </div>
      </div>
      <div ref={track} id={id} className="realization-grid" tabIndex={0} aria-label="Przewijaj realizacje strzałkami w lewo i w prawo" onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowRight") { event.preventDefault(); goTo(position.start + position.visible); }
        if (event.key === "ArrowLeft") { event.preventDefault(); goTo(position.start - position.visible); }
        if (event.key === "Home") { event.preventDefault(); goTo(0); }
        if (event.key === "End") { event.preventDefault(); goTo(count - position.visible); }
      }}>{children}</div>
      <div className="realization-slider__footer">
        <div className="realization-slider__pagination" aria-label="Strony realizacji">{Array.from({ length: pages }, (_, index) => <button key={index} type="button" aria-label={`Pokaż realizacje ${index * position.visible + 1}–${Math.min(count, (index + 1) * position.visible)}`} aria-current={page === index ? "true" : undefined} aria-controls={id} onClick={() => goTo(index * position.visible)}><span /></button>)}</div>
      </div>
    </div>
  );
}
