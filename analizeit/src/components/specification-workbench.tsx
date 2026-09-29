"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type SpecKey = "trigger" | "require" | "decide" | "route" | "sync" | "close";

const specification: Array<{
  key: SpecKey;
  line: string;
  keyword: string;
  value: string;
  annotation: string;
  title: string;
  description: string;
  checks: string[];
}> = [
  {
    key: "trigger",
    line: "01",
    keyword: "TRIGGER",
    value: "nowy_wniosek",
    annotation: "zdarzenie początkowe",
    title: "Proces zaczyna się od jednoznacznego zdarzenia.",
    description: "Określam moment utworzenia sprawy oraz kontekst, który musi zostać zapisany już na wejściu.",
    checks: ["źródło zdarzenia", "autor i czas", "stan początkowy"],
  },
  {
    key: "require",
    line: "02",
    keyword: "REQUIRE",
    value: "koszt · centrum · właściciel",
    annotation: "kontrakt danych",
    title: "Brakujące dane są obsługiwane, nie ignorowane.",
    description: "Definiuję minimalny zestaw informacji i sposób reakcji, gdy użytkownik lub integracja nie dostarczy pełnego kontekstu.",
    checks: ["walidacja pól", "dane referencyjne", "ścieżka uzupełnienia"],
  },
  {
    key: "decide",
    line: "03",
    keyword: "DECIDE",
    value: "kwota > limit",
    annotation: "reguła biznesowa",
    title: "Decyzja jest regułą, a nie ukrytym warunkiem.",
    description: "Próg, warianty i wyjątki pozostają jawne. Można je przetestować, wyjaśnić i bezpiecznie zmienić.",
    checks: ["warunek wejścia", "wariant TAK / NIE", "ślad decyzji"],
  },
  {
    key: "route",
    line: "04",
    keyword: "ROUTE",
    value: "przełożony → finanse",
    annotation: "przydział zadań",
    title: "Odpowiedzialność trafia do właściwej roli.",
    description: "Routing uwzględnia strukturę, zastępstwa i przekroczenia czasu, zamiast opierać się na wpisanym na stałe użytkowniku.",
    checks: ["role procesowe", "zastępstwa", "eskalacja czasu"],
  },
  {
    key: "sync",
    line: "05",
    keyword: "SYNC",
    value: "ERP / REST",
    annotation: "wymiana danych",
    title: "Integracja ma kontrakt i scenariusz awarii.",
    description: "Określam kierunek, zakres danych, potwierdzenie zapisu oraz reakcję procesu na brak odpowiedzi systemu.",
    checks: ["mapowanie danych", "obsługa błędu", "ponowienie operacji"],
  },
  {
    key: "close",
    line: "06",
    keyword: "CLOSE",
    value: "zapis · audyt · komunikat",
    annotation: "rezultat procesu",
    title: "Zakończenie pozostawia czytelny rezultat.",
    description: "Sprawa ma określony stan końcowy, historię wykonanych działań i informację zrozumiałą dla użytkownika.",
    checks: ["status końcowy", "historia zmian", "powiadomienie"],
  },
];

export function SpecificationWorkbench() {
  const [active, setActive] = useState<SpecKey>("decide");
  const [running, setRunning] = useState(false);
  const selected = specification.find((item) => item.key === active) ?? specification[0];

  function runSpecification() {
    setRunning(false);
    window.requestAnimationFrame(() => setRunning(true));
  }

  return (
    <div className={`spec-workbench${running ? " is-running" : ""}`}>
      <div className="spec-workbench__toolbar">
        <div className="spec-workbench__path">
          <span>ANALIZE</span><i>/</i><span>MODELE</span><i>/</i><strong>OBSŁUGA_KOSZTU.01</strong>
        </div>
        <button onClick={runSpecification} type="button">
          <i aria-hidden="true">▶</i> PRZETESTUJ PRZEBIEG
        </button>
      </div>

      <div className="spec-workbench__main">
        <div className="spec-editor">
          <div className="spec-editor__head">
            <span>SPECYFIKACJA PROCESU</span>
            <span>6 REGUŁ / 1 INTEGRACJA</span>
          </div>
          <div className="spec-editor__code" role="list" aria-label="Reguły procesu">
            <div className="spec-editor__declaration">
              <span>00</span>
              <code><b>PROCESS</b> obsługa_kosztu <em>{"{"}</em></code>
            </div>
            {specification.map((item, index) => (
              <button
                aria-pressed={active === item.key}
                className={`spec-row${active === item.key ? " is-active" : ""}`}
                key={item.key}
                onAnimationEnd={() => index === specification.length - 1 && setRunning(false)}
                onClick={() => setActive(item.key)}
                style={{ "--run-delay": `${index * 0.42}s` } as CSSProperties}
                type="button"
              >
                <span className="spec-row__line">{item.line}</span>
                <code>
                  <b>{item.keyword}</b>
                  <strong>{item.value}</strong>
                  <em>{"// "}{item.annotation}</em>
                </code>
                <i aria-hidden="true" />
              </button>
            ))}
            <div className="spec-editor__declaration">
              <span>07</span>
              <code><em>{"}"}</em></code>
            </div>
          </div>
          <div className="spec-trace" aria-label="Przykładowy przebieg testu">
            <span>TRACE</span>
            <div>
              {[
                ["00", "INPUT"],
                ["01", "VALID"],
                ["02", "PATH—B"],
                ["03", "ASSIGNED"],
                ["04", "HTTP 200"],
                ["05", "CLOSED"],
              ].map(([code, label], index) => (
                <i key={code} style={{ "--run-delay": `${index * 0.42}s` } as CSSProperties}>
                  <small>{code}</small>{label}
                </i>
              ))}
            </div>
          </div>
        </div>

        <aside aria-live="polite" className="spec-inspector">
          <div className="spec-inspector__head">
            <span>EXPLAIN / {selected.line}</span>
            <i />
          </div>
          <div className="spec-inspector__body">
            <span>{selected.keyword}</span>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
          </div>
          <div className="spec-inspector__checks">
            <span>SPRAWDZAM</span>
            <ul>
              {selected.checks.map((check, index) => <li key={check}><i>0{index + 1}</i>{check}</li>)}
            </ul>
          </div>
        </aside>
      </div>

      <div className="spec-workbench__status">
        <span><i className="status-ok" /> MODEL POPRAWNY</span>
        <span>TRYB / ROBOCZY</span>
        <span>PLATFORMA / WEBCON BPS</span>
      </div>
    </div>
  );
}
