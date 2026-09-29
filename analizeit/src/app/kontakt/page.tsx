import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
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
  const hasDirectContact = Boolean(siteConfig.contact.email || siteConfig.contact.phone || siteConfig.contact.linkedin);

  return (
    <div className="digital-subpage">
      <PageHero eyebrow={contactContent.eyebrow} lead={contactContent.lead} title={contactContent.title} />
      <section className="contact-section">
        <Container>
          <div className="contact-grid">
            <div className="contact-form-wrap">
              <h2>{contactContent.formTitle}</h2>
              <ContactForm />
            </div>
            <aside className="direct-contact">
              <h2>{contactContent.directTitle}</h2>
              {hasDirectContact ? (
                <div className="direct-contact__links">
                  {siteConfig.contact.email ? <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> : null}
                  {siteConfig.contact.phone ? <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>{siteConfig.contact.phone}</a> : null}
                  {siteConfig.contact.linkedin ? <a href={siteConfig.contact.linkedin} rel="noreferrer" target="_blank">LinkedIn <ArrowUpRight size={20} /></a> : null}
                </div>
              ) : (
                <div className="direct-contact__empty"><span>!</span><p>{contactContent.unavailable}</p></div>
              )}
              <div className="direct-contact__meta">
                <span>Marka</span><strong>{siteConfig.name}</strong>
                <span>Ekspert</span><strong>{siteConfig.owner}</strong>
                <span>Specjalizacja</span><strong>Digitalizacja procesów</strong>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}

