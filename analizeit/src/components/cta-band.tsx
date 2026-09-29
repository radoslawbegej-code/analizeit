import Link from "next/link";

import { ArrowUpRight } from "./icons";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
};

export function CtaBand({
  title = "Zacznijmy od krótkiej rozmowy.",
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="cta-band__row">
        <h2>{title}</h2>
        <Link className="subpage-contact-link" href="/kontakt">
          Porozmawiajmy <ArrowUpRight size={24} />
        </Link>
      </div>
    </section>
  );
}
