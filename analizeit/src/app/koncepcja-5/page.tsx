import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

import { conceptFiveContent as content } from "@/content/concept-five";

import styles from "./concept-five.module.css";

export const metadata: Metadata = {
  title: "Koncepcja 05 — ANALIZE",
  description: "Profesjonalna koncepcja strony eksperta WEBCON BPS.",
  robots: { index: false, follow: false },
};

export default function ConceptFivePage() {
  return (
    <div className={styles.consultingPage}>
      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroShade} aria-hidden="true" />

        <header className={styles.header}>
          <Link className={styles.logo} href="/koncepcja-5" aria-label="ANALIZE — strona główna">
            <span aria-hidden="true">{"//"}</span> ANALIZE
          </Link>
          <nav aria-label="Główna nawigacja">
            {content.navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Link className={styles.headerCta} href="/kontakt">
            Kontakt <span aria-hidden="true"><ArrowUpRight size={18} /></span>
          </Link>
        </header>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className={styles.heroLead}>{content.hero.lead}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/kontakt">
              {content.hero.primaryAction} <span aria-hidden="true"><ArrowUpRight size={20} /></span>
            </Link>
            <a className={styles.textLink} href="#uslugi">
              {content.hero.secondaryAction} <span aria-hidden="true"><ArrowUpRight size={18} /></span>
            </a>
          </div>
        </div>

        <p className={styles.heroCaption}>Radosław Begej / niezależny ekspert WEBCON BPS</p>
      </section>

      <div className={styles.proof} aria-label="Najważniejsze informacje">
        {content.proof.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <section className={styles.offer} id="uslugi" aria-labelledby="offer-title">
        <div className={styles.sectionIntro}>
          <p className={styles.darkEyebrow}>{content.offer.eyebrow}</p>
          <h2 id="offer-title">{content.offer.title}</h2>
          <p>{content.offer.intro}</p>
        </div>

        <div className={styles.services}>
          {content.offer.services.map((service) => (
            <article key={service.number}>
              <span className={styles.serviceNumber}>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className={styles.serviceMeta}>{service.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cooperation} id="wspolpraca" aria-labelledby="cooperation-title">
        <div className={styles.cooperationImage} aria-hidden="true">
          <span>ANALIZE</span>
        </div>
        <div className={styles.cooperationCopy}>
          <p className={styles.eyebrow}>{content.cooperation.eyebrow}</p>
          <h2 id="cooperation-title">{content.cooperation.title}</h2>
          <p>{content.cooperation.body}</p>
          <ul>
            {content.cooperation.situations.map((situation, index) => (
              <li key={situation}>
                <span>0{index + 1}</span> {situation}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.about} id="o-mnie" aria-labelledby="about-title">
        <div className={styles.aboutCopy}>
          <p className={styles.darkEyebrow}>{content.about.eyebrow}</p>
          <h2 id="about-title">{content.about.title}</h2>
          <p>{content.about.body}</p>
          <Link className={styles.aboutLink} href="/o-mnie">
            Poznaj moje podejście <span aria-hidden="true"><ArrowUpRight size={18} /></span>
          </Link>
        </div>
        <div className={styles.portraitPlaceholder}>
          <span>RB</span>
          <p>{content.about.portraitLabel}</p>
        </div>
      </section>

      <section className={styles.close} aria-labelledby="close-title">
        <p className={styles.darkEyebrow}>{content.close.eyebrow}</p>
        <h2 id="close-title">{content.close.title}</h2>
        <Link className={styles.closeButton} href="/kontakt">
          {content.close.action} <span aria-hidden="true"><ArrowUpRight size={20} /></span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.footerLogo} href="/koncepcja-5">
          <span aria-hidden="true">{"//"}</span> ANALIZE
        </Link>
        <p>Radosław Begej · WEBCON BPS</p>
        <nav aria-label="Stopka">
          <Link href="/koncepcja-4">Poprzednia koncepcja</Link>
          <Link href="/polityka-prywatnosci">Prywatność</Link>
        </nav>
      </footer>
    </div>
  );
}
