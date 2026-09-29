import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "./container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Container>
        <nav className="page-breadcrumb" aria-label="Ścieżka strony">
          <Link href="/">Start</Link><span aria-hidden="true">/</span><span aria-current="page">{eyebrow}</span>
        </nav>
        <div className="page-hero__grid">
          <div className="page-hero__content">
            <h1>{title}</h1>
            <p className="page-hero__lead">{lead}</p>
          </div>
          {aside ? <div className="page-hero__aside">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
