import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ArrowUpRight } from "@/components/icons";
import { contactContent, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z ANALIZE w sprawie analizy, developmentu lub optymalizacji rozwiązania WEBCON BPS.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <div className="digital-subpage contact-page">
      <PageHero eyebrow={contactContent.eyebrow} lead={contactContent.lead} title={contactContent.title} />

      <section className="contact-section" aria-labelledby="contact-direct-title">
        <Container>
          <div className="contact-direct">
            <div className="contact-direct__intro">
              <h2 id="contact-direct-title">Na początek wystarczy kontekst.</h2>
              <p>
                Napisz, jaki proces chcesz uporządkować, na jakim etapie jest projekt
                i co dziś wymaga najwięcej ręcznej pracy albo pilnowania.
              </p>
            </div>

            <div className="contact-direct__action">
              <p>
                Nie potrzebujesz gotowej specyfikacji. Kilka zdań o obecnym sposobie pracy
                wystarczy, żeby ustalić sensowny kolejny krok.
              </p>

              {siteConfig.contact.linkedin ? (
                <a
                  className="contact-direct__link"
                  href={siteConfig.contact.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Napisz na LinkedIn
                  <ArrowUpRight size={22} />
                  <span className="visually-hidden"> — otwiera się w nowej karcie</span>
                </a>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
