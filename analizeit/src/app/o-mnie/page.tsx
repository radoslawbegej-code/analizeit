import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight } from "@/components/icons";
import { aboutContent, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "O mnie — Radosław Begej",
  description: "Radosław Begej — analiza biznesowa, aplikacje WEBCON BPS, integracje i dane. Poznaj mój sposób pracy i współpracy przy projektach.",
  alternates: { canonical: "/o-mnie" },
};

export default function AboutPage() {
  return (
    <div className="digital-subpage about-page">
      <section className="about-intro" aria-labelledby="about-title">
        <Container>
          <nav className="page-breadcrumb" aria-label="Ścieżka strony">
            <Link href="/">Start</Link><span aria-hidden="true">/</span><span aria-current="page">O mnie</span>
          </nav>

          <div className="about-intro__layout">
            <div className="about-intro__copy">
              <h1 id="about-title">Radosław<br />Begej</h1>
              <p className="about-intro__lead">Analizuję proces.<br />Potem przekładam go na rozwiązanie.</p>
              <p className="about-intro__description">
                Pracuję od wymagań i modelu procesu po implementację w WEBCON BPS,
                integracje, SQL i raportowanie. Dzięki temu decyzje biznesowe nie giną
                między analizą a developmentem.
              </p>

              <div className="about-intro__actions">
                <Link className="about-contact-link" href="/kontakt">
                  Porozmawiajmy <ArrowUpRight size={22} />
                </Link>
                {siteConfig.contact.linkedin ? (
                  <a className="site-text-link" href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn <ArrowUpRight size={18} />
                    <span className="visually-hidden"> — otwiera się w nowej karcie</span>
                  </a>
                ) : null}
              </div>
            </div>

            <div className="about-intro__portrait">
              <Image
                src="/radoslaw-begej-portrait-retouched.png"
                alt="Radosław Begej"
                width={1271}
                height={1238}
                sizes="(max-width: 760px) 90vw, (max-width: 1200px) 40vw, 480px"
                priority
              />
            </div>
          </div>

          <div className="about-toolkit">
            <p>Technologie, z którymi pracuję</p>
            <ul aria-label="Technologie">
              <li>WEBCON BPS</li>
              <li>SQL Server</li>
              <li>Power BI / SSRS</li>
              <li>REST API</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="about-approach" aria-labelledby="approach-title">
        <Container>
          <div className="about-approach__layout">
            <div className="about-approach__intro">
              <h2 id="approach-title">Zaczynam od tego,<br />jak naprawdę przebiega praca.</h2>
              <p>
                Rozmawiam z osobami, które wykonują proces. Sprawdzam, gdzie czekają
                na informacje, co przepisują ręcznie, które wyjątki wracają najczęściej
                i gdzie decyzja zatrzymuje całą sprawę.
              </p>
              <p>
                Mogę poprowadzić rozwiązanie od analizy do wdrożenia albo dołączyć
                do zespołu tam, gdzie potrzebne są konkretne kompetencje.
              </p>
              <Link className="site-text-link" href="/uslugi">
                Zakres współpracy <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="about-approach__principles">
              {aboutContent.principles.map((principle) => (
                <article key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="cta-wrap">
        <CtaBand title="Masz proces, który trzeba uporządkować?" />
      </Container>
    </div>
  );
}
