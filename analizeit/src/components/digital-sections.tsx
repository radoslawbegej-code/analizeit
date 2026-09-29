import Link from "next/link";
import { Container } from "./container";
import { ArrowUpRight } from "./icons";
import { ServiceStory } from "./service-story";
import "./home-continuation.css";

const capabilities = [
  {
    title: "Aplikacje procesowe",
    text: "Obiegi, formularze i automatyzacje dopasowane do realnego sposobu pracy.",
    technology: "WEBCON BPS",
    href: "/uslugi#aplikacje-integracje",
  },
  {
    title: "Integracje systemów",
    text: "Wymiana danych bez ręcznego przepisywania między procesem a systemami firmy.",
    technology: "ERP · REST API · KSeF",
    href: "/uslugi#aplikacje-integracje",
  },
  {
    title: "Raportowanie i dane",
    text: "Raporty i źródła danych przygotowane tak, żeby wskaźniki dało się wyjaśnić i porównać.",
    technology: "Power BI · SSRS · SQL Server",
    href: "/uslugi#power-bi",
  },
];

export function DigitalSections() {
  return (
    <div className="digital-sections">
      <section className="ds-services ds-section" aria-labelledby="services-title">
        <div className="ds-services__content">
          <div className="ds-heading">
            <h2 id="services-title">Przykładowe procesy do digitalizacji.</h2>
          </div>
        </div>
        <ServiceStory />
      </section>

      <div className="home-continuation">
        <section className="home-capabilities" aria-labelledby="capabilities-title">
          <Container>
            <div className="home-company-heading">
              <h2 id="capabilities-title">Od procesu operacyjnego<br />po dane do decyzji.</h2>
              <Link className="home-company-link" href="/uslugi">
                Zobacz zakres usług <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="home-capabilities__list">
              {capabilities.map((item) => (
                <Link className="home-capability" href={item.href} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="home-capability__technology">{item.technology}</span>
                  <span className="home-company-arrow" aria-hidden="true">
                    <ArrowUpRight size={22} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="home-delivery" aria-labelledby="delivery-title">
          <Container>
            <div className="home-delivery__header">
              <h2 id="delivery-title">Uzgodniony zakres.<br />Czytelny przebieg prac.</h2>
            </div>

            <div className="home-delivery__statement" aria-label="Zasady współpracy">
              <p><span>Przed startem</span> <strong>ustalamy zakres i odpowiedzialności.</strong></p>
              <p><span>Przed wdrożeniem</span> <strong>sprawdzamy proces i wyjątki.</strong></p>
              <p><span>Po uruchomieniu</span> <strong>zostaje rozwiązanie gotowe do dalszego rozwoju.</strong></p>
            </div>
          </Container>
        </section>

        <section className="home-company-contact" aria-labelledby="contact-title">
          <Container>
            <div className="home-company-contact__layout">
              <h2 id="contact-title">Co dziś zabiera czas<br />w Twoim procesie?</h2>
              <div className="home-company-contact__action">
                <p>
                  Opisz proces, obecny sposób pracy i etap projektu.
                  <br />
                  Ustalmy, gdzie warto zacząć.
                </p>
                <Link href="/kontakt" className="home-company-contact__link">
                  Porozmawiajmy <ArrowUpRight size={22} />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
