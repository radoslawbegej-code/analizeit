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
        title="Proces, dane i integracje w jednym modelu."
        lead="To nie są gotowe szablony do skopiowania. Każdy przykład pokazuje, jak można uporządkować role, decyzje, dane i integracje w typowym procesie biznesowym — od pierwszego zgłoszenia po monitoring i raportowanie."
      />

      <section className="realizations-catalog" id="projekty" aria-labelledby="realizations-catalog-title">
        <Container>
          <div className="realizations-catalog__heading">
            <h2 id="realizations-catalog-title">Obszary zastosowań</h2>
            <p>{realizations.length} modeli procesów</p>
          </div>
          <RealizationGrid items={realizations} />
        </Container>
      </section>

      <Container className="cta-wrap">
        <CtaBand title="Masz podobny proces, ale inne reguły i systemy?" />
      </Container>
    </div>
  );
}
