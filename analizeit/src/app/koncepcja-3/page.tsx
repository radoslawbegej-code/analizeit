import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight } from "@/components/icons";
import { ProcessLens } from "@/components/process-lens";

export const metadata: Metadata = {
  title: "Koncepcja Process Lens",
  description: "Jasna, kolorowa koncepcja strony ANALIZE oparta na autorskim efekcie soczewki procesu.",
  robots: { index: false, follow: false },
};

export default function ConceptThreePage() {
  return (
    <div className="lens-page">
      <header className="lens-header">
        <Link className="lens-brand" href="/koncepcja-3">ANALIZE<span>●</span></Link>
        <p>Radosław Begej<br />WEBCON BPS</p>
        <nav aria-label="Nawigacja koncepcji Process Lens">
          <Link href="/uslugi">Co robię</Link>
          <Link href="/o-mnie">O mnie</Link>
          <Link className="lens-contact" href="/kontakt">Porozmawiajmy <ArrowUpRight size={16} /></Link>
        </nav>
      </header>

      <main className="lens-main">
        <section className="lens-hero">
          <div className="lens-hero__copy">
            <div className="lens-hero__eyebrow"><span>01</span> SYSTEMY PROCESOWE</div>
            <h1>Chaos<br />wchodzi.<br /><em>Logika</em><br />wychodzi.</h1>
            <p>Analizuję, projektuję i wdrażam procesy w WEBCON BPS. Od pierwszego pytania do rozwiązania, które daje się rozwijać.</p>
          </div>

          <div className="lens-hero__visual">
            <ProcessLens />
          </div>

          <div className="lens-hero__aside">
            <span>JEDNA OSOBA</span>
            <strong>Od analizy<br />do wdrożenia.</strong>
            <Link href="/kontakt">Mam proces do omówienia <ArrowUpRight size={18} /></Link>
          </div>
        </section>

        <section className="lens-tldr" aria-label="Skrót oferty">
          <article className="lens-tldr__intro">
            <span>W SKRÓCIE</span>
            <h2>Wchodzę w projekt<br />w trzech momentach.</h2>
          </article>
          <Link className="lens-service lens-service--lime" href="/uslugi">
            <span>01</span><h3>Od zera</h3><p>Potrzeba → analiza → wdrożenie</p><i><ArrowUpRight size={28} /></i>
          </Link>
          <Link className="lens-service lens-service--lavender" href="/uslugi">
            <span>02</span><h3>W trakcie</h3><p>Development i wsparcie zespołu</p><i><ArrowUpRight size={28} /></i>
          </Link>
          <Link className="lens-service lens-service--orange" href="/uslugi">
            <span>03</span><h3>Po wdrożeniu</h3><p>Audyt, naprawa i dalszy rozwój</p><i><ArrowUpRight size={28} /></i>
          </Link>
        </section>
      </main>

      <footer className="lens-footer">
        <span>ANALIZE IT</span>
        <p>Proces nie musi być prosty.<br />Rozwiązanie musi być czytelne.</p>
        <Link href="/kontakt">Napisz wiadomość <ArrowUpRight size={18} /></Link>
      </footer>
    </div>
  );
}
