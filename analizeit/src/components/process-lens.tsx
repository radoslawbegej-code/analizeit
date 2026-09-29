"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useRef, useState } from "react";

const orderedSteps = [
  { code: "01", label: "Wniosek" },
  { code: "02", label: "Walidacja" },
  { code: "03", label: "Decyzja" },
  { code: "04", label: "Integracja" },
  { code: "05", label: "Rezultat" },
];

export function ProcessLens() {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 66, y: 52 });
  const [dragging, setDragging] = useState(false);

  function updatePosition(event: PointerEvent<HTMLDivElement>) {
    const rect = surfaceRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(17, Math.min(83, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(24, Math.min(76, ((event.clientY - rect.top) / rect.height) * 100));
    setPosition({ x, y });
  }

  const lensStyle = {
    "--lens-x": `${position.x}%`,
    "--lens-y": `${position.y}%`,
  } as CSSProperties;

  return (
    <div
      className={`process-lens${dragging ? " is-dragging" : ""}`}
      onPointerDown={(event) => {
        setDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePosition(event);
      }}
      onPointerMove={(event) => {
        if (dragging || event.pointerType === "mouse") updatePosition(event);
      }}
      onPointerUp={(event) => {
        setDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      ref={surfaceRef}
      role="img"
      aria-label="Interaktywna ilustracja: soczewka ANALIZE porządkuje chaotyczny proces w pięć czytelnych etapów"
      style={lensStyle}
    >
      <div className="process-lens__caption">
        <span>PRZESUŃ SOCZEWKĘ</span>
        <span>CHAOS → LOGIKA</span>
      </div>

      <div className="process-lens__chaos" aria-hidden="true">
        <span className="chaos-note chaos-note--a">mail?</span>
        <span className="chaos-note chaos-note--b">kto akceptuje</span>
        <span className="chaos-note chaos-note--c">BRAK DANYCH</span>
        <span className="chaos-note chaos-note--d">ERP!</span>
        <span className="chaos-note chaos-note--e">wrócić do autora</span>
        <span className="chaos-note chaos-note--f">status?</span>
        <span className="chaos-note chaos-note--g">Excel_final_3</span>
        <svg viewBox="0 0 800 500">
          <path d="M30 190C100 70 210 340 300 205S470 80 530 220 680 420 780 235" />
          <path d="M90 420C160 300 190 115 330 390S545 110 730 385" />
          <path d="M20 300 150 245 260 330 420 140 610 310 770 95" />
          <circle cx="144" cy="246" r="8" /><circle cx="301" cy="205" r="8" /><circle cx="530" cy="220" r="8" /><circle cx="611" cy="310" r="8" />
        </svg>
      </div>

      <div className="process-lens__glass" aria-hidden="true">
        <div className="process-lens__ordered">
          <span className="ordered-kicker">ANALIZE / PROCESS MODEL</span>
          <div className="ordered-flow">
            {orderedSteps.map((step, index) => (
              <div className="ordered-step" key={step.code}>
                <i>{step.code}</i>
                <strong>{step.label}</strong>
                {index < orderedSteps.length - 1 ? <span>→</span> : null}
              </div>
            ))}
          </div>
          <span className="ordered-result">JEDNA LOGIKA · JASNE ROLE · KONTROLOWANE WYJĄTKI</span>
        </div>
      </div>

      <div className="process-lens__badge" aria-hidden="true">
        <span>A</span>
        <small>ANALIZE</small>
      </div>
    </div>
  );
}
