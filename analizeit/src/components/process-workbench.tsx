"use client";

import { useState } from "react";

type StageKey = "discover" | "design" | "build" | "improve";

const stages: Record<StageKey, {
  code: string;
  label: string;
  title: string;
  description: string;
  outputs: string[];
}> = {
  discover: {
    code: "01",
    label: "Rozpoznaj",
    title: "Najpierw ustalam, co naprawdę ma się zmienić.",
    description: "Proces, role, dane i wyjątki trafiają do jednego modelu. Bez rozdzielania rozmowy biznesowej od decyzji technicznych.",
    outputs: ["mapa procesu", "reguły i wyjątki", "zakres rozwiązania"],
  },
  design: {
    code: "02",
    label: "Zaprojektuj",
    title: "Logika przed interfejsem.",
    description: "Projektuję model danych, przebieg sprawy, uprawnienia i integracje zanim formularz zacznie przesłaniać sens procesu.",
    outputs: ["architektura", "model danych", "punkty integracji"],
  },
  build: {
    code: "03",
    label: "Zbuduj",
    title: "Projekt i implementacja pozostają połączone.",
    description: "Buduję aplikację w WEBCON BPS, testuję ścieżki i dokumentuję decyzje. Nie przekazuję projektu do anonimowego etapu realizacji.",
    outputs: ["aplikacja WEBCON", "integracje", "testy i dokumentacja"],
  },
  improve: {
    code: "04",
    label: "Usprawniaj",
    title: "Proces zaczyna mówić dopiero po uruchomieniu.",
    description: "Analizuję problemy użytkowników, dług rozwiązania i nowe potrzeby. Zmiany trafiają do uporządkowanego planu rozwoju.",
    outputs: ["audyt rozwiązania", "plan zmian", "dalszy rozwój"],
  },
};

const stageOrder: StageKey[] = ["discover", "design", "build", "improve"];

export function ProcessWorkbench() {
  const [active, setActive] = useState<StageKey>("design");
  const selected = stages[active];

  return (
    <div className="workbench">
      <div className="workbench__toolbar">
        <div>
          <span className="workbench__project">WBX—014</span>
          <strong>MODEL WSPÓŁPRACY</strong>
        </div>
        <span className="workbench__live"><i /> INTERAKTYWNY</span>
      </div>

      <div className="workbench__body">
        <div className="workbench__model">
          <div className="workbench__axis workbench__axis--x" aria-hidden="true" />
          <div className="workbench__axis workbench__axis--y" aria-hidden="true" />
          <span className="workbench__coord workbench__coord--top">Y / 048</span>
          <span className="workbench__coord workbench__coord--side">X / 112</span>

          <svg aria-hidden="true" className="workbench__connections" viewBox="0 0 800 440">
            <defs>
              <marker id="workbench-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
                <path d="M0 0 7 3.5 0 7Z" />
              </marker>
            </defs>
            <path d="M110 219H233" />
            <path d="M299 219H405" />
            <path className="connection-active" d="M471 219H576" />
            <path d="M642 219H718" />
            <path className="connection-branch" d="M438 252V330H555" />
            <path className="connection-feedback" d="M609 330H680V120H266V186" />
          </svg>

          <span className="workbench__start" aria-hidden="true"><i /></span>
          <span className="workbench__end" aria-hidden="true"><i /></span>

          <div className="workbench__nodes">
            {stageOrder.map((key) => {
              const stage = stages[key];
              const isActive = key === active;
              return (
                <button
                  aria-pressed={isActive}
                  className={`workbench-node workbench-node--${key}${isActive ? " is-active" : ""}`}
                  key={key}
                  onClick={() => setActive(key)}
                  type="button"
                >
                  <span>{stage.code}</span>
                  <strong>{stage.label}</strong>
                  <i aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <button className="workbench__integration" onClick={() => setActive("build")} type="button">
            <span>INT—04</span>
            <strong>API / ERP</strong>
          </button>

          <div className="workbench__hint">WYBIERZ ETAP, ABY ZOBACZYĆ SZCZEGÓŁY</div>
        </div>

        <aside aria-live="polite" className="workbench__inspector">
          <div className="inspector__top">
            <span>ETAP / {selected.code}</span>
            <span>●</span>
          </div>
          <div className="inspector__content">
            <p>{selected.label}</p>
            <h2>{selected.title}</h2>
            <div className="inspector__rule" />
            <p className="inspector__description">{selected.description}</p>
          </div>
          <div className="inspector__outputs">
            <span>REZULTAT</span>
            <ol>
              {selected.outputs.map((output, index) => (
                <li key={output}><span>0{index + 1}</span>{output}</li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      <div className="workbench__footer">
        <span>4 ETAPY</span>
        <span>1 ODPOWIEDZIALNOŚĆ</span>
        <span>WEBCON BPS</span>
      </div>
    </div>
  );
}
