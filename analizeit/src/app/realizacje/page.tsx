import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
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
      <PageHero
        eyebrow="Przykłady procesów"
        title="Procesy i integracje w praktyce."
        lead="Przykładowe modele rozwiązań dla faktur, zakupów, onboardingu, umów, pracy z danymi i raportowania. Każdy pokazuje problem, przebieg procesu oraz miejsca, w których pojawiają się integracje i automatyzacja."
      />

      <section className="realizations-catalog" id="projekty" aria-labelledby="realizations-catalog-title">
        <Container>
          <div className="realizations-catalog__heading">
            <h2 id="realizations-catalog-title">Obszary zastosowań</h2>
            <p>{realizations.length} przykładów · procesy, integracje i dane</p>
          </div>
          <RealizationGrid items={realizations} />
        </Container>
      </section>

      <Container className="cta-wrap">
        <CtaBand title="Chcesz przełożyć podobny proces na własne środowisko?" />
      </Container>
    </div>
  );
}
