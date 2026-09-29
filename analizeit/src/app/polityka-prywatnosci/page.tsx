import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { privacyContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacje o prywatności i przetwarzaniu danych w serwisie ANALIZE.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="digital-subpage">
      <PageHero eyebrow={privacyContent.eyebrow} lead={privacyContent.updated} title={privacyContent.title} />
      <section className="legal-section">
        <Container>
          <div className="legal-content">
            {privacyContent.sections.map((section, index) => (
              <article key={section.title}>
                <span>0{index + 1}</span>
                <div><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

