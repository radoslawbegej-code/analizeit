import type { Metadata } from "next";

import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { scenarios, services, servicesPageContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Usługi",
  description: "Digitalizacja procesów, integracje KSeF i ERP, raportowanie Power BI i SSRS oraz obsługa baz Microsoft SQL Server.",
  alternates: { canonical: "/uslugi" },
};

export default function ServicesPage() {
  return (
    <div className="digital-subpage">
      <PageHero eyebrow={servicesPageContent.eyebrow} lead={servicesPageContent.lead} title={servicesPageContent.title} />
      <section className="service-detail-section">
        <Container>
          {services.map((service) => (
            <article className="service-detail" id={service.slug} key={service.number}>
              <div className="service-detail__title">
                <h2>{service.title}</h2>
              </div>
              <div className="service-detail__body">
                <p>{service.description}</p>
                <ul>
                  {service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <section className="architecture-section section-pad">
        <Container>
          <SectionHeading
            description={servicesPageContent.architectureBody}
            eyebrow={servicesPageContent.architectureEyebrow}
            title={servicesPageContent.architectureTitle}
          />
          <ArchitectureDiagram />
        </Container>
      </section>
      <section className="collaboration-section section-pad">
        <Container>
          <SectionHeading eyebrow={servicesPageContent.modelEyebrow} title={servicesPageContent.modelTitle} />
          <div className="scenario-grid scenario-grid--light">
            {scenarios.map((scenario) => (
              <article className="scenario-card" key={scenario.number}>
                <div><h3>{scenario.title}</h3><p>{scenario.body}</p></div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Container className="cta-wrap"><CtaBand eyebrow="Porozmawiajmy o zakresie" title="Dobierzmy właściwy punkt wejścia." /></Container>
    </div>
  );
}

