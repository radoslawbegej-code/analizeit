import Link from "next/link";

import { ArrowRight } from "./icons";
import { ContinuumThree } from "./continuum-three";

const chapters = [
  {
    number: "01",
    label: "Analiza procesu",
    title: "Najpierw odsłaniamy logikę.",
    body: "Porządkuję role, dane, wyjątki i decyzje, zanim staną się kosztowną zmianą podczas wdrożenia.",
    variant: "diagnosis",
  },
  {
    number: "02",
    label: "Development WEBCON BPS",
    title: "Potem zamieniamy ją w działający przepływ.",
    body: "Buduję czytelne formularze, obiegi, reguły i integracje gotowe do codziennej pracy.",
    variant: "flow",
  },
  {
    number: "03",
    label: "Audyt i optymalizacja",
    title: "Rozwiązanie ma rozwijać się bez chaosu.",
    body: "Wchodzę w istniejące rozwiązanie, wskazuję dług i układam bezpieczny plan dalszego rozwoju.",
    variant: "layers",
  },
];

function Motif({ variant }: { variant: string }) {
  return (
    <div className={`continuum-motif continuum-motif--${variant}`} aria-hidden="true">
      <ContinuumThree variant={variant as "diagnosis" | "flow" | "layers"} />
    </div>
  );
}

export function ExpertiseSlider() {
  return (
    <section className="process-continuum" aria-labelledby="expertise-title">
      <header className="process-continuum__head">
        <span>Od problemu do rozwiązania</span>
        <h2 id="expertise-title">Ten sam proces.<br /><em>Trzy różne momenty.</em></h2>
        <p>Motyw dokumentu zmienia się razem z pracą: najpierw porządkuje, później prowadzi, a na końcu pozwala bezpiecznie rozwijać rozwiązanie.</p>
      </header>
      <div className="process-continuum__chapters">
        {chapters.map((chapter) => (
          <article className={`continuum-chapter continuum-chapter--${chapter.variant}`} key={chapter.number}>
            <div className="continuum-chapter__copy">
              <span>{chapter.number} / {chapter.label}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.body}</p>
              <Link href="/uslugi">Poznaj zakres <ArrowRight size={18} /></Link>
            </div>
            <Motif variant={chapter.variant} />
          </article>
        ))}
      </div>
    </section>
  );
}
