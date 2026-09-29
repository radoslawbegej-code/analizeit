import Image from "next/image";
import Link from "next/link";
import type { Realization } from "@/content/realizations";
import { realizationPhotographs } from "@/content/realization-media";
import { ArrowUpRight } from "./icons";
import "./realization-grid.css";

export function RealizationGrid({ items }: { items: Realization[] }) {
  return (
    <div className="project-catalog">
      {items.map((item, index) => (
        <article className={`project-entry${index === 0 ? " project-entry--featured" : ""}`} key={item.slug}>
          <Link className="project-entry__link" href={`/realizacje/${item.slug}`} aria-labelledby={`${item.slug}-title`}>
            <div className="project-entry__image">
              <Image src={realizationPhotographs[item.motif]} alt="" fill
                sizes="(max-width: 700px) 90vw, (max-width: 1400px) 46vw, 620px"
                priority={index === 0} />
            </div>
            <div className="project-entry__body">
              <span className="project-entry__category">{item.category.toLocaleLowerCase("pl-PL")}</span>
              <h3 id={`${item.slug}-title`}>{item.title}</h3>
              <p>{item.summary}</p>
              <p className="project-entry__technology">{item.technologies.slice(0, 3).join(" · ")}</p>
              <span className="project-entry__action">Zobacz przykład <span className="arrow-surface" aria-hidden="true"><ArrowUpRight size={22} /></span></span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
