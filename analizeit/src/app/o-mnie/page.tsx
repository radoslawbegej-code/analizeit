import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight } from "@/components/icons";
import { siteConfig } from "@/content/site";

import "./about.css";

export const metadata: Metadata = {
  title: "O mnie — Radosław Begej",
  description:
    "Radosław Begej — WEBCON BPS, analiza procesów, integracje, SQL Server i raportowanie. Od wymagań po działające rozwiązanie.",
  alternates: { canonical: "/o-mnie" },
};

const workingPrinciples = [
  {
    title: "Analiza bez oderwania od wdrożenia",
    body:
      "Już podczas analizy biorę pod uwagę model danych, reguły, uprawnienia, integracje i późniejsze utrzymanie rozwiązania.",
  },
  {
    title: "Development bez zgadywania",
    body:
      "Formularze i automatyzacje wynikają z uzgodnionego procesu. Wyjątki i odpowiedzialność są ustalone zanim zaczną pojawiać się w kodzie i konfiguracji.",
  },
  {
    title: "Rozwój bez odkrywania systemu od nowa",
    body:
      "Porządkuję logikę i kluczowe decyzje projektowe tak, żeby kolejna zmiana nie zaczynała się od reverse engineeringu istniejącego rozwiązania.",
  },
];

export default function AboutPage() {
  return (
    <div className="digital-subpage about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <Container>
          <div className="about-hero__layout">
            <div className="about-hero__copy">
              <h1 id="about-title">Radosław Begej</h1>

              <p className="about-hero__role">
                Projektuję i rozwijam rozwiązania procesowe w WEBCON BPS
                oraz łączę je z danymi i systemami firmy.
              </p>

              <p className="about-hero__description">
                Łączę analizę z developmentem. Rozmawiam z użytkownikami, ustalam
                reguły i wyjątki, a później przekładam je na konfigurację WEBCON,
                integracje i dane.
              </p>

              <div className="about-hero__actions">
                <a className="about-hero__contact" href="#kontakt">
                  Napisz wiadomość <ArrowUpRight size={21} />
                </a>

                {siteConfig.contact.linkedin ? (
                  <a
                    className="about-hero__linkedin"
                    href={siteConfig.contact.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn <ArrowUpRight size={18} />
                    <span className="visually-hidden"> — otwiera się w nowej karcie</span>
                  </a>
                ) : null}
              </div>
            </div>

            <figure className="about-hero__portrait">
              <Image
                src="/radoslaw-begej-portrait-retouched.png"
                alt="Radosław Begej"
                width={1271}
                height={1238}
                sizes="(max-width: 760px) 92vw, (max-width: 1200px) 43vw, 560px"
                priority
              />
            </figure>
          </div>
        </Container>
      </section>

      <section className="about-thinking" aria-labelledby="thinking-title">
        <Container>
          <div className="about-thinking__layout">
            <h2 id="thinking-title">
              Najpierw chcę wiedzieć,
              <br />
              jak naprawdę wygląda praca.
            </h2>

            <div className="about-thinking__copy">
              <p>
                Rozmawiam z osobami, które wykonują proces. Sprawdzam, gdzie czekają
                na informacje, które dane są przepisywane ręcznie, gdzie powstają
                wyjątki i co zatrzymuje decyzję.
              </p>
              <p>
                Dopiero potem układam formularze, reguły, uprawnienia i integracje.
                Nie odwzorowuję obecnego sposobu pracy jeden do jednego, jeśli można
                go uprościć przed wdrożeniem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-work" aria-labelledby="work-title">
        <Container>
          <div className="about-work__heading">
            <h2 id="work-title">Jak pracuję</h2>
            <p>
              Jeśli decyzja biznesowa wpływa na dane, uprawnienia albo integrację,
              ustalam to od razu — nie dopiero podczas developmentu.
            </p>
          </div>

          <div className="about-work__rows">
            {workingPrinciples.map((principle) => (
              <article key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-stack" aria-labelledby="stack-title">
        <Container>
          <div className="about-stack__layout">
            <h2 id="stack-title">Technologie</h2>
            <p>
              WEBCON BPS <span aria-hidden="true">·</span> SQL Server{" "}
              <span aria-hidden="true">·</span> REST API{" "}
              <span aria-hidden="true">·</span> Power BI{" "}
              <span aria-hidden="true">·</span> SSRS
            </p>
          </div>
        </Container>
      </section>

      <section className="about-contact" id="kontakt" aria-labelledby="about-contact-title">
        <Container>
          <div className="about-contact__layout">
            <div className="about-contact__intro">
              <h2 id="about-contact-title">
                Opisz proces,
                <br />
                który chcesz usprawnić.
              </h2>
              <p>
                Nie potrzebujesz gotowej specyfikacji. Napisz, jak dziś wygląda praca,
                na jakim etapie jest projekt i co wymaga uporządkowania.
              </p>

              {siteConfig.contact.linkedin ? (
                <a
                  className="about-contact__linkedin"
                  href={siteConfig.contact.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wolisz LinkedIn? Napisz bezpośrednio <ArrowUpRight size={18} />
                  <span className="visually-hidden"> — otwiera się w nowej karcie</span>
                </a>
              ) : null}
            </div>

            <div className="about-contact__form">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
