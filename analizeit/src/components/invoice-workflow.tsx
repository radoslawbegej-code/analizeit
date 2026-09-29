"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const stages = ["Wpływ", "Weryfikacja", "Opis kosztu", "Akceptacja", "Księgowanie"];

export function InvoiceWorkflow() {
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(true);
  const figure = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateVisibility = () => setVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .2 });
    if (figure.current) observer.observe(figure.current);
    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <figure className={`workflow-map${paused || !inView || !visible ? " workflow-map--paused" : ""}`} ref={figure}>
      <svg className="workflow-map__drawing" viewBox="0 0 560 520" role="img" aria-labelledby="invoice-cycle-title">
        <title id="invoice-cycle-title">Obieg dokumentu: wpływ, weryfikacja, opis kosztu, akceptacja i księgowanie.</title>
        <circle className="workflow-map__ring" cx="280" cy="255" r="207" />
        <circle className="workflow-map__progress" cx="280" cy="255" r="207" pathLength="100" transform="rotate(-90 280 255)" />
        {stages.map((label, index) => {
          const angle = (index * 72 - 90) * Math.PI / 180;
          const x = 280 + 207 * Math.cos(angle);
          const y = 255 + 207 * Math.sin(angle);
          return (
            <g key={label} className="workflow-map__stop" style={{ "--stage-delay": `${index * 4 - 20}s` } as CSSProperties}>
              <circle className="workflow-map__point" cx={x} cy={y} r="4" />
              <circle className="workflow-map__halo" cx={x} cy={y} r="11" />
              <text className="workflow-map__label" x={x} y={y + (index === 2 || index === 3 ? 34 : -24)} textAnchor="middle">{label}</text>
            </g>
          );
        })}
        <g className="workflow-map__cursor" aria-hidden="true"><circle cx="280" cy="48" r="3" /></g>
        <g transform="translate(280 255)" aria-hidden="true">
          <g className="workflow-map__symbol">
            <path className="workflow-map__paper" d="M-46-64H19L46-37V64H-46Z" />
            <path className="workflow-map__fold" d="M19-64V-37H46" />
            <path className="workflow-map__intake" d="M0-22V17m-10-10 10 10L10 7" />
            <path className="workflow-map__scan" d="M-32 0H32" />
            <path className="workflow-map__pen" d="m9 12 17-17 7 7-17 17-10 3Z M23-2l7 7" />
            <path className="workflow-map__line workflow-map__line--one" pathLength="1" d="M-25-13H25" />
            <path className="workflow-map__line workflow-map__line--two" pathLength="1" d="M-25 1H25" />
            <path className="workflow-map__line workflow-map__line--three" pathLength="1" d="M-25 15H7" />
            <path className="workflow-map__check" pathLength="1" d="m-16 32 11 11 23-27" />
          </g>
          <path className="workflow-map__archive" d="M-59 56v21H59V56M-59 56h35l7 8h34l7-8h35" />
        </g>
      </svg>
      <button className="workflow-map__motion" type="button" aria-label={paused ? "Wznów animację obiegu" : "Wstrzymaj animację obiegu"} onClick={() => setPaused((value) => !value)}>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">{paused ? <path d="m4 2 6 4-6 4Z" fill="currentColor" /> : <path d="M4 2v8M8 2v8" stroke="currentColor" strokeWidth="1.5" />}</svg>
      </button>
    </figure>
  );
}

