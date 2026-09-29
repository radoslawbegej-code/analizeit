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
            <div className="process-detail__title">
              <h1 id="realization-title">{item.title}</h1>
              <p>{item.summary}</p>
            </div>

            <dl className="process-detail__meta">
              <div>
                <dt>Obszar</dt>
                <dd>{item.category}</dd>
              </div>
              <div>
                <dt>Uczestnicy</dt>
                <dd>{item.roles.join(" · ")}</dd>
              </div>
              <div>
                <dt>Technologie</dt>
                <dd>{item.technologies.join(" · ")}</dd>
              </div>
            </dl>
          </div>

          <div className="process-detail__photograph">
            <Image
              src={photographs[item.motif]}
              alt=""
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </Container>
      </section>

      <Container>
        <section className="process-detail__comparison" aria-label="Problem i model rozwiązania">
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
          <div className="process-detail__section-heading">
            <h2 id="process-title">Przebieg procesu.</h2>
            <p>
              Kolejność pokazuje logikę przykładowego rozwiązania. Konkretne kroki,
              role i reguły są zawsze dopasowywane do organizacji.
            </p>
          </div>

          <ol className="process-detail__steps">
            {item.steps.map((step, stepIndex) => (
              <li key={step.title}>
                <span className="process-detail__step-number">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="process-detail__integrations" aria-labelledby="integrations-title">
          <div className="process-detail__section-heading">
            <h2 id="integrations-title">Integracje i automatyzacja.</h2>
            <p>
              Poniżej są miejsca, w których proces korzysta z danych zewnętrznych,
              automatycznych reguł lub komunikacji z innymi systemami.
            </p>
          </div>

          <div className="process-detail__integration-list">
            {item.integrations.map((integration) => (
              <article key={integration.title}>
                <h3>{integration.title}</h3>
                <p>{integration.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-detail__outcomes" aria-labelledby="effects-title">
          <div className="process-detail__section-heading">
            <h2 id="effects-title">Co ma się zmienić.</h2>
            <p>
              Oczekiwane zmiany dotyczą codziennej pracy, dostępności informacji
              i kontroli nad przebiegiem sprawy.
            </p>
          </div>

          <ul>
            {item.effects.map((effect) => <li key={effect}>{effect}</li>)}
          </ul>

          <p className="process-detail__note">
            To model przykładowy. Zakres efektów zależy od organizacji, jakości danych
            i przyjętego sposobu wdrożenia.
          </p>
        </section>

        <section className="process-detail__contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Masz podobny proces,<br />ale inne reguły?</h2>
          <Link href="/kontakt">Porozmawiajmy <ArrowUpRight size={28} /></Link>
        </section>

        <Link className="process-detail__next" href={`/realizacje/${next.slug}`}>
          <div>
            <span>Następny przykład</span>
            <h2>{next.title}</h2>
          </div>
          <ArrowUpRight size={30} />
        </Link>
      </Container>
    </div>
  );
}
