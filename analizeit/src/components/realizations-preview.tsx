import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { ArrowUpRight } from "./icons";

const featured = [
  { title: "Od faktury do księgowania.", text: "KSeF, akceptacje i ERP połączone w jeden obieg.", image: "/digital-finance.jpg", slug: "faktury-i-ksef" },
  { title: "Dane, które pomagają decydować.", text: "Wspólny obraz kosztów, zaległości i pracy zespołu.", image: "/digital-reporting.jpg", slug: "raportowanie-i-monitoring-procesow" },
];

export function RealizationsPreview() {
  return (
    <section className="home-projects ds-section" aria-labelledby="realizations-preview-title">
      <Container>
        <div className="home-section-heading"><h2 id="realizations-preview-title">Rozwiązania w praktyce.</h2><Link className="ds-text-link" href="/realizacje">Wszystkie realizacje <ArrowUpRight size={20} /></Link></div>
        <div className="home-projects__grid">{featured.map(project => <Link className="home-project" href={`/realizacje/${project.slug}`} key={project.slug}>
          <div className="home-project__image"><Image src={project.image} alt="" fill sizes="(max-width: 600px) 100vw, 50vw" /><span className="home-round-arrow" aria-hidden="true"><ArrowUpRight size={24} /></span></div>
          <h3>{project.title}</h3><p>{project.text}</p>
        </Link>)}</div>
      </Container>
    </section>
  );
}
