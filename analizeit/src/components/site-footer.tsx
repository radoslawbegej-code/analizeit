import Link from "next/link";

import { navigation, siteConfig } from "@/content/site";

import { ArrowUpRight } from "./icons";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <Wordmark />
          <p className="site-footer__statement">
            Digitalizacja procesów w WEBCON BPS, integracje systemów
            i raportowanie oparte na uporządkowanych danych.
          </p>
        </div>

        <div className="site-footer__nav">
          <p className="micro-label">Nawigacja</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>

        <div className="site-footer__contact">
          <p className="micro-label">Kontakt</p>
          <Link href="/kontakt">Porozmawiajmy<ArrowUpRight size={15} /></Link>
          {siteConfig.contact.linkedin ? (
            <a href={siteConfig.contact.linkedin} rel="noopener noreferrer" target="_blank">
              LinkedIn<ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
        <span>{siteConfig.owner}</span>
        <Link href="/polityka-prywatnosci">Prywatność</Link>
      </div>
    </footer>
  );
}
