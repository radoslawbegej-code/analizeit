import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight } from "@/components/icons";
import { ProcessWorkbench } from "@/components/process-workbench";

export const metadata: Metadata = {
  title: "Koncepcja Process Workbench",
  description: "Alternatywna koncepcja strony ANALIZE oparta na interaktywnym modelu procesu.",
  robots: { index: false, follow: false },
};

export default function ConceptPage() {
  return (
    <div className="concept-page">
      <header className="concept-header">
        <Link className="concept-brand" href="/koncepcja">
          ANALIZE<span>.</span><small>PROCESS SYSTEMS</small>
        </Link>
        <div className="concept-header__meta">
          <span>STATUS <i /> AVAILABLE</span>
          <span>PL / 2026</span>
          <span>RADOSŁAW BEGEJ</span>
        </div>
        <nav aria-label="Nawigacja koncepcji">
          <Link href="/uslugi">ZAKRES</Link>
          <Link href="/o-mnie">PROFIL</Link>
          <Link className="concept-header__contact" href="/kontakt">KONTAKT <ArrowUpRight size={18} /></Link>
        </nav>
      </header>

      <main className="concept-main">
        <section className="concept-intro">
          <div className="concept-intro__index">01 / PRAKTYKA</div>
          <div className="concept-intro__copy">
            <h1>Nadaję<br />procesom<br /><span>logikę.</span></h1>
            <p>Analiza, architektura i development WEBCON BPS prowadzone przez jedną osobę.</p>
          </div>
          <div className="concept-intro__action">
            <Link href="/kontakt">OTWÓRZ TEMAT <ArrowUpRight size={18} /></Link>
            <span>RADOSŁAW BEGEJ<br />WEBCON BPS DEVELOPER</span>
          </div>
        </section>

        <section className="concept-workspace" aria-label="Interaktywny model współpracy">
          <ProcessWorkbench />
        </section>
      </main>

      <footer className="concept-footer">
        <span>ANALIZA WYMAGAŃ</span>
        <span>ARCHITEKTURA</span>
        <span>WORKFLOW</span>
        <span>INTEGRACJE</span>
        <span>AUDYT</span>
      </footer>
    </div>
  );
}
