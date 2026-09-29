import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight } from "@/components/icons";
import { SpecificationWorkbench } from "@/components/specification-workbench";

export const metadata: Metadata = {
  title: "Koncepcja Process Specification",
  description: "Alternatywna koncepcja strony ANALIZE oparta na interaktywnej specyfikacji procesu.",
  robots: { index: false, follow: false },
};

export default function ConceptTwoPage() {
  return (
    <div className="concept-page concept-page--spec">
      <header className="concept-header">
        <Link className="concept-brand" href="/koncepcja-2">
          ANALIZE<span>.</span><small>PROCESS ENGINEERING</small>
        </Link>
        <div className="concept-header__meta">
          <span>STATUS <i /> AVAILABLE</span>
          <span>SPEC / 01</span>
          <span>RADOSŁAW BEGEJ</span>
        </div>
        <nav aria-label="Nawigacja koncepcji">
          <Link href="/uslugi">ZAKRES</Link>
          <Link href="/o-mnie">PROFIL</Link>
          <Link className="concept-header__contact" href="/kontakt">KONTAKT <ArrowUpRight size={18} /></Link>
        </nav>
      </header>

      <main className="spec-concept-main">
        <section className="spec-concept-intro">
          <div className="spec-concept-intro__meta">
            <span>01 / PODEJŚCIE</span>
            <span>LOW-CODE ≠ LOW-LOGIC</span>
          </div>
          <div className="spec-concept-intro__copy">
            <h1>Porządkuję<br /><span>złożoność.</span></h1>
            <p>Z potrzeby biznesowej tworzę jednoznaczną logikę, a z niej — rozwiązanie WEBCON BPS.</p>
          </div>
          <div className="spec-concept-intro__footer">
            <Link href="/kontakt">OPISZ PROCES <ArrowUpRight size={18} /></Link>
            <div><span>ANALIZA</span><span>ARCHITEKTURA</span><span>DEVELOPMENT</span></div>
          </div>
        </section>

        <section className="spec-concept-workspace" aria-label="Interaktywna specyfikacja procesu">
          <SpecificationWorkbench />
        </section>
      </main>

      <footer className="concept-footer concept-footer--spec">
        <span>PROCES JAKO LOGIKA</span>
        <span>DECYZJE JAKO REGUŁY</span>
        <span>INTEGRACJE JAKO KONTRAKTY</span>
        <span>ZMIANA JAKO WERSJA</span>
      </footer>
    </div>
  );
}
