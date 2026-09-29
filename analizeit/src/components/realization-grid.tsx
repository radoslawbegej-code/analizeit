import Image from "next/image";
import Link from "next/link";
import type { Realization } from "@/content/realizations";
import { realizationPhotographs } from "@/content/realization-media";
import { ArrowUpRight } from "./icons";
import "./realization-grid.css";

export function RealizationGrid({ items }: { items: Realization[] }) {
  return (
    <div className="process-index">
      {items.map((item, index) => (
        <article className="process-index__entry" key={item.slug}>
          <Link
            className="process-index__link"
            href={`/realizacje/${item.slug}`}
            aria-labelledby={`${item.slug}-title`}
          >
            <div className="process-index__media">
              <Image
                src={realizationPhotographs[item.motif]}
                alt=""
                fill
                sizes="(max-width: 760px) 92vw, (max-width: 1200px) 34vw, 430px"
                priority={index === 0}
              />
            </div>

            <div className="process-index__content">
              <span className="process-index__category">{item.category}</span>
              <h3 id={`${item.slug}-title`}>{item.title}</h3>
              <p>{item.summary}</p>
            </div>

            <dl className="process-index__meta">
              <div>
                <dt>Uczestnicy</dt>
                <dd>{item.roles.slice(0, 3).join(" · ")}</dd>
              </div>
              <div>
                <dt>Technologie</dt>
                <dd>{item.technologies.slice(0, 3).join(" · ")}</dd>
              </div>
            </dl>

            <span className="process-index__action" aria-hidden="true">
              <span>Otwórz przykład</span>
              <span className="arrow-surface">
                <ArrowUpRight size={22} />
              </span>
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}
