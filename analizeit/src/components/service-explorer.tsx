"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./icons";

const areas = [
  {
    name: "Procesy", title: "Od dokumentu do decyzji.",
    description: "Projektuję przebieg pracy, buduję aplikację i łączę ją z systemami, z których korzysta firma.",
    links: [{ label: "Analiza procesu", slug: "analiza" }, { label: "Aplikacje i integracje", slug: "aplikacje-integracje" }, { label: "Audyt i rozwój", slug: "audyt-rozwoj" }],
  },
  {
    name: "Raporty", title: "Dane, z których coś wynika.",
    description: "Przygotowuję raporty do analizy kosztów i budżetu oraz zestawienia operacyjne do eksportu i druku.",
    links: [{ label: "Power BI", slug: "power-bi" }, { label: "Reporting Services", slug: "reporting-services" }],
  },
  {
    name: "Dane", title: "Zaplecze Twoich aplikacji.",
    description: "Projektuję struktury baz, porządkuję dane i optymalizuję zapytania. Dbam o utrzymanie SQL Server.",
    links: [{ label: "Microsoft SQL Server", slug: "sql-server" }],
  },
];

function ServiceDiagram({ area }: { area: number }) {
  if (area === 1) return (
    <div className="service-scene service-scene--reports" role="img" aria-label="Dane o kosztach, budżecie i terminach zasilają raporty interaktywne Power BI oraz wydruki i zestawienia SSRS.">
      <div className="service-scene__sources"><span>Koszty</span><span>Budżet</span><span>Terminy</span></div>
      <div className="service-scene__trunk" aria-hidden="true" />
      <div className="service-scene__reports"><div><strong>Power BI</strong><span>Analiza i porównania</span><div className="service-scene__filters" aria-hidden="true"><i>Okres ↓</i><i>Dział ↓</i></div></div><div><strong>SSRS</strong><span>Wydruki i zestawienia</span><div className="service-scene__formats" aria-hidden="true">PDF <span>/</span> Excel</div></div></div>
    </div>
  );
  if (area === 2) return (
    <div className="service-scene service-scene--data" role="img" aria-label="Przykładowy model relacyjny: faktury powiązane z miejscami powstawania kosztów przez klucz MPKId.">
      <div className="service-schema"><strong>Faktury</strong><span><b>PK</b> Id</span><span><b>FK</b> MPKId</span><span>Kwota</span></div>
      <div className="service-schema__relation" aria-hidden="true"><span>n</span><i /><span>1</span></div>
      <div className="service-schema"><strong>MPK</strong><span><b>PK</b> Id</span><span>Kod</span><span>Nazwa</span></div>
    </div>
  );
  return (
    <div className="service-scene service-scene--process" role="img" aria-label="Faktura z KSeF przechodzi przez opis kosztu i akceptację, a następnie trafia do systemu ERP.">
      <div className="service-scene__end">KSeF</div>
      <div className="service-scene__route" aria-hidden="true"><i /><ArrowRight /></div>
      <div className="service-scene__process"><span>Opis kosztu</span><div aria-hidden="true">↓</div><strong>Akceptacja</strong></div>
      <div className="service-scene__route" aria-hidden="true"><i /><ArrowRight /></div>
      <div className="service-scene__end">ERP</div>
    </div>
  );
}

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const controls = useRef<Array<HTMLButtonElement | null>>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % areas.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + areas.length - 1) % areas.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = areas.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    controls.current[next]?.focus();
  }
  return (
    <div className="service-explorer">
      <div className="service-explorer__tabs" role="tablist" aria-label="Obszary usług" aria-orientation="vertical">
        {areas.map((area, index) => <button type="button" role="tab" aria-selected={active === index} aria-controls={`service-panel-${index}`} id={`service-tab-${index}`} tabIndex={active === index ? 0 : -1} ref={(node) => { controls.current[index] = node; }} onKeyDown={(event) => navigate(event, index)} onClick={() => setActive(index)} key={area.name}><span>{area.name}<i>.</i></span><ArrowUpRight size={30} /></button>)}
      </div>
      {areas.map((area, index) => <div className="service-explorer__panel" role="tabpanel" id={`service-panel-${index}`} aria-labelledby={`service-tab-${index}`} tabIndex={0} hidden={active !== index} key={area.name}>
        <div className="service-explorer__canvas"><h3>{area.title}</h3><ServiceDiagram area={index} /></div>
        <p>{area.description}</p>
        <div className="service-explorer__links">{area.links.map((link) => <Link href={`/uslugi#${link.slug}`} key={link.slug}>{link.label}<ArrowUpRight size={18} /></Link>)}</div>
      </div>)}
    </div>
  );
}
