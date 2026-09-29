import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./icons";
import { Container } from "./container";
import { InvoiceWorkflow } from "./invoice-workflow";
import "./digital-hero.css";

export function DigitalHero() {
  return (
    <section className="digital-hero" aria-labelledby="digital-title">
      <Container>
        <div className="digital-hero__layout">
          <div className="digital-hero__copy">
            <h1 id="digital-title" className="digital-hero__title">
              Firma rośnie.
              <em>Ręcznej pracy nie musi przybywać.</em>
            </h1>
            <p>
              Projektuję i rozwijam rozwiązania w WEBCON BPS, które porządkują obiegi,
              automatyzują powtarzalne zadania i łączą dane między systemami. Mniej
              przepisywania, pilnowania terminów i pracy obok procesu.
            </p>
            <div className="digital-hero__actions">
              <Link className="digital-hero__primary" href="/kontakt">
                Porozmawiajmy <ArrowUpRight size={20} />
              </Link>
              <Link className="digital-hero__secondary" href="/uslugi">
                Zobacz zakres usług <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <InvoiceWorkflow />
        </div>
      </Container>
    </section>
  );
}
