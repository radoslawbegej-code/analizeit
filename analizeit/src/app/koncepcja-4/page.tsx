import type { Metadata } from "next";
import Link from "next/link";
import { KineticIdentity } from "@/components/kinetic-identity";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Koncepcja 04 — ANALIZE",
  description: "Typograficzna koncepcja strony ANALIZE.",
  robots: { index: false, follow: false },
};

const entryPoints = [
  {
    number: "01",
    title: "Od zera",
    text: "Analiza, architektura i wdrożenie nowego procesu.",
  },
  {
    number: "02",
    title: "W trakcie",
    text: "Wsparcie projektu, który potrzebuje konkretnej kompetencji.",
  },
  {
    number: "03",
    title: "Po wdrożeniu",
    text: "Audyt, uporządkowanie i dalszy rozwój rozwiązania.",
  },
];

export default function ConceptFourPage() {
  return (
    <div className="identity-page">
      <header className="identity-header">
        <Link className="identity-logo" href="/koncepcja-4" aria-label="ANALIZE — strona główna">
          ANALIZE<span aria-hidden="true">°</span>
        </Link>
        <p>Radosław Begej / WEBCON BPS</p>
        <Link className="identity-contact" href="/kontakt">
          Porozmawiajmy
        </Link>
      </header>

      <main>
        <section className="identity-hero" aria-labelledby="identity-title">
          <div className="identity-intro">
            <p className="identity-kicker">Analiza · projekt · development</p>
            <h1 id="identity-title">
              Nie automatyzuję
              <br />
              <em>chaosu.</em>
            </h1>
            <p className="identity-lead">
              Najpierw porządkuję proces. Potem buduję rozwiązanie, które ma sens — dla ludzi,
              danych i biznesu.
            </p>
          </div>

          <KineticIdentity />
        </section>

        <section className="identity-entry" aria-labelledby="entry-title">
          <div className="identity-entry-heading">
            <p className="identity-kicker">Trzy momenty współpracy</p>
            <h2 id="entry-title">
              Gdzie mogę
              <br />
              wejść w projekt?
            </h2>
          </div>

          <div className="identity-entry-list">
            {entryPoints.map((point) => (
              <article key={point.number}>
                <span>{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="identity-close" aria-labelledby="close-title">
          <p>Masz proces, który trzeba przemyśleć?</p>
          <h2 id="close-title">Zacznijmy od rozmowy.</h2>
          <Link href="mailto:kontakt@analize.pl">
            kontakt@analize.pl <span aria-hidden="true"><ArrowUpRight size={28} /></span>
          </Link>
        </section>
      </main>

      <footer className="identity-footer">
        <p>© {new Date().getFullYear()} ANALIZE</p>
        <nav aria-label="Stopka">
          <Link href="/">Obecna wersja</Link>
          <Link href="/koncepcja-3">Koncepcja 03</Link>
          <Link href="/polityka-prywatnosci">Prywatność</Link>
        </nav>
      </footer>
    </div>
  );
}
