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
        </div>
        <div className="site-footer__nav">
          <p className="micro-label">Nawigacja</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="site-footer__contact">
          <p className="micro-label">Kontakt</p>
          {siteConfig.contact.email ? (
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}<ArrowUpRight size={15} />
            </a>
          ) : (
            <Link href="/kontakt">Porozmawiajmy<ArrowUpRight size={15} /></Link>
          )}
          {siteConfig.contact.linkedin ? (
            <a href={siteConfig.contact.linkedin} rel="noreferrer" target="_blank">
              LinkedIn<ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
        <span>{siteConfig.owner}</span>
        <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
      </div>
    </footer>
  );
}
