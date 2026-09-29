import Image from "next/image";
import Link from "next/link";
import type { Realization } from "@/content/realizations";
import { realizationPhotographs } from "@/content/realization-media";
import { ArrowUpRight } from "./icons";
import "./realization-grid.css";

export function RealizationGrid({ items }: { items: Realization[] }) {
  return (
    <div className="process-list">
      {items.map((item, index) => (
        <article className="process-list__item" key={item.slug}>
          <Link
            className="process-list__link"
            href={`/realizacje/${item.slug}`}
            aria-labelledby={`${item.slug}-title`}
          >
            <div className="process-list__media">
              <Image
                src={realizationPhotographs[item.motif]}
                alt=""
                fill
                sizes="(max-width: 760px) 92vw, (max-width: 1200px) 44vw, 560px"
                priority={index === 0}
              />
            </div>

            <div className="process-list__copy">
              <h2 id={`${item.slug}-title`}>{item.title}</h2>
              <p>{item.summary}</p>
              <p className="process-list__technology">{item.technologies.join(" · ")}</p>
              <span className="process-list__action">
                Zobacz przebieg
                <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
