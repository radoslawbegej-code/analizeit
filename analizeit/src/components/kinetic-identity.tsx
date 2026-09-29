"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";

const modes = [
  {
    label: "Analizuję",
    note: "Oddzielam realną potrzebę od listy życzeń.",
  },
  {
    label: "Projektuję",
    note: "Układam logikę, dane, role i wyjątki.",
  },
  {
    label: "Buduję",
    note: "Wdrażam rozwiązanie w WEBCON BPS.",
  },
  {
    label: "Usprawniam",
    note: "Rozwijam proces, który już pracuje.",
  },
] as const;

const letters = ["A", "N", "A", "L", "I", "Z", "E"];

export function KineticIdentity() {
  const [activeMode, setActiveMode] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
    });
  }

  return (
    <div className={`kinetic-identity kinetic-identity--${activeMode}`}>
      <div
        className="kinetic-word"
        aria-label="ANALIZE"
        onPointerLeave={() => setCursor({ x: 0, y: 0 })}
        onPointerMove={handlePointerMove}
      >
        {letters.map((letter, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          const distance = 5 + index * 1.5;
          const style = {
            "--letter-x": `${cursor.x * distance * direction}px`,
            "--letter-y": `${cursor.y * (16 - index) * direction}px`,
            "--letter-r": `${cursor.x * direction * 1.2}deg`,
          } as CSSProperties;

          return (
            <span className="kinetic-letter" aria-hidden="true" key={`${letter}-${index}`}>
              <span style={style}>{letter}</span>
            </span>
          );
        })}
      </div>

      <div className="kinetic-controls">
        <div className="kinetic-modes" aria-label="Zakres pracy">
          {modes.map((mode, index) => (
            <button
              aria-pressed={activeMode === index}
              className={activeMode === index ? "is-active" : undefined}
              key={mode.label}
              onClick={() => setActiveMode(index)}
              type="button"
            >
              <span>0{index + 1}</span>
              {mode.label}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="kinetic-note">
          {modes[activeMode].note}
        </p>
      </div>
    </div>
  );
}
