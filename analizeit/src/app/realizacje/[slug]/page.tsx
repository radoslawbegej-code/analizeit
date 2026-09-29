import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import { realizations } from "@/content/realizations";
import { processPresentations } from "@/content/process-presentations";
import "../realizacje.css";
import "./detail.css";

type PageProps = { params: Promise<{ slug: string }> };

const photographs = {
  invoice: "/digital-finance.jpg",
  purchase: "/digital-purchasing.jpg",
  people: "/process-consulting.jpg",
  contract: "/digital-contracts.jpg",
  data: "/digital-reporting.jpg",
  report: "/digital-reporting.jpg",
};

export function generateStaticParams() {
  return realizations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = realizations.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/realizacje/${item.slug}` },
  };
}

export default async function RealizationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const index = realizations.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();

  const item = realizations[index];
  const presentation = processPresentations[item.motif];
  const next = realizations[(index + 1) % realizations.length];

  return (
    <div className="digital-subpage process-detail">
      <section className="process-detail__hero" aria-labelledby="realization-title">
        <Container>
          <Link className="realization-back" href="/realizacje">
            <ArrowLeft size={18} /> Wszystkie przykłady
          </Link>
          <div className="process-detail__intro">
            <h1 id="realization-title">{item.title}</h1>
          </div>
          <div className="process-detail__photograph">
            <Image src={photographs[item.motif]} alt="" fill priority sizes="(max-width: 1400px) 100vw, 1400px" />
          </div>
        </Container>
      </section>

      <Container>
        <section className="process-detail__comparison" aria-label="Problem i rozwiązanie">
          <div>
            <h2>Co utrudnia pracę.</h2>
            <p>{presentation.problem}</p>
          </div>
          <div>
            <h2>Jak można to uporządkować.</h2>
            <p>{presentation.solution}</p>
          </div>
        </section>

        <section className="process-detail__process" aria-labelledby="process-title">
          <h2 id="process-title">Jak przebiega proces.</h2>
          <ol className="process-detail__stages">
            {presentation.stages.map((stage) => (
              <li key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </li>
            ))}
          </ol>
          <p className="process-detail__technology">{item.technologies.join(" · ")}</p>
        </section>

        <section className="process-detail__outcomes" aria-labelledby="effects-title">
          <h2 id="effects-title">Co zmienia taki proces.</h2>
          <ul>{item.effects.map((effect) => <li key={effect}>{effect}</li>)}</ul>
          <p className="process-detail__note">
            Zakres efektów zależy od organizacji, jakości danych i przyjętego sposobu wdrożenia.
          </p>
        </section>

        <section className="process-detail__contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Masz podobny<br />proces?</h2>
          <Link href="/kontakt">Porozmawiajmy <ArrowUpRight size={28} /></Link>
        </section>

        <Link className="process-detail__next" href={`/realizacje/${next.slug}`}>
          <div>
            <span>Zobacz także</span>
            <h2>{next.title}</h2>
          </div>
          <ArrowUpRight size={30} />
        </Link>
      </Container>
    </div>
  );
}
