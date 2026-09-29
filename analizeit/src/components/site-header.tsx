"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/content/site";

import { ArrowUpRight, CloseIcon, MenuIcon } from "./icons";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || !open) return;
      setOpen(false);
      requestAnimationFrame(() => menuButton.current?.focus());
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      delete document.body.dataset.menuOpen;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Wordmark compact onClick={() => setOpen(false)} />
        <nav aria-label="Główna nawigacja" className="desktop-nav">
          {navigation.slice(1, 4).map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link aria-current={active ? "page" : undefined} className="desktop-nav__link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link className="header-cta" href="/kontakt">
          Porozmawiajmy
          <span aria-hidden="true"><ArrowUpRight size={20} /></span>
        </Link>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          ref={menuButton}
          type="button"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className={`mobile-nav${open ? " mobile-nav--open" : ""}`} id="mobile-navigation" inert={!open}>
        <nav aria-label="Nawigacja mobilna" className="mobile-nav__inner">
          {navigation.map((item, index) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link aria-current={active ? "page" : undefined} className="mobile-nav__link" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
