import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { RealizationGrid } from "@/components/realization-grid";
import { realizations } from "@/content/realizations";
import "./realizacje.css";

export const metadata: Metadata = {
  title: "Przykłady procesów — digitalizacja i integracje",
  description: "Faktury i KSeF, zakupy, onboarding, umowy, automatyzacja danych oraz raportowanie Power BI.",
  alternates: { canonical: "/realizacje" },
};

export default function RealizationsPage() {
  return (
    <div className="digital-subpage realizations-page">
      <section className="realizations-intro" aria-labelledby="realizations-title">
        <Container>
          <h1 id="realizations-title">Przykłady procesów.</h1>
          <p>
            Poniżej pokazuję kilka typowych obszarów, w których WEBCON BPS może połączyć
            pracę użytkowników z danymi i systemami firmy. Każdy przykład jest punktem
            wyjścia — rzeczywisty proces wynika z zasad konkretnej organizacji.
          </p>
        </Container>
      </section>

      <section className="realizations-catalog" aria-label="Lista przykładowych procesów">
        <Container>
          <RealizationGrid items={realizations} />
        </Container>
      </section>

      <Container className="cta-wrap">
        <CtaBand title="Masz podobny proces, ale inne reguły i systemy?" />
      </Container>
    </div>
  );
}
