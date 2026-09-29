"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "./icons";
import "./service-story.css";

const stories = [
  {
    title: "Faktury bez ręcznego obiegu.",
    description: "Od wpływu dokumentu po akceptację i księgowanie. Zawsze wiadomo, na czyją decyzję czeka faktura.",
    image: "/digital-finance.jpg",
    article: "Faktury i KSeF",
    slug: "faktury-i-ksef",
  },
  {
    title: "Kontrola wydatków przed zakupem.",
    description: "Potrzeba, budżet, zamówienie i dostawa w jednym procesie. Pełny obraz kosztów, zanim powstanie zobowiązanie.",
    image: "/digital-purchasing.jpg",
    article: "Proces zakupowy",
    slug: "proces-zakupowy",
  },
  {
    title: "Dobry początek od pierwszego dnia.",
    description: "Sprzęt, dostępy i dokumenty przygotowane na czas. HR, IT i przełożony pracują według wspólnego planu.",
    image: "/process-consulting.jpg",
    article: "Onboarding pracownika",
    slug: "onboarding-pracownika",
  },
  {
    title: "Umowy i terminy pod kontrolą.",
    description: "Aktualna wersja, historia uzgodnień i przypomnienia o terminach. Wszystko dostępne w jednym rejestrze.",
    image: "/digital-contracts.jpg",
    article: "Zarządzanie umowami",
    slug: "zarzadzanie-umowami",
  },
  {
    title: "Decyzje oparte na wspólnych danych.",
    description: "Koszty, zaległości i obciążenie zespołu w czytelnych raportach. Bez ręcznego łączenia kolejnych arkuszy.",
    image: "/digital-reporting.jpg",
    article: "Raportowanie i monitoring",
    slug: "raportowanie-i-monitoring-procesow",
  },
];

export function ServiceStory() {
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    id: number; x: number; scroll: number; moved: boolean;
    lastX: number; lastTime: number; velocity: number;
  } | null>(null);
  const motion = useRef({ frame: 0, target: 0 });
  const suppressClick = useRef(false);

  useEffect(() => () => cancelAnimationFrame(motion.current.frame), []);

  function stopMotion() {
    cancelAnimationFrame(motion.current.frame);
    motion.current.frame = 0;
  }

  function moveTo(container: HTMLDivElement, target: number) {
    motion.current.target = Math.max(0, Math.min(container.scrollWidth - container.clientWidth, target));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stopMotion();
      container.scrollLeft = motion.current.target;
      return;
    }
    if (motion.current.frame) return;
    let previous = performance.now();
    let position = container.scrollLeft;
    const tick = (now: number) => {
      const elapsed = Math.min(64, now - previous);
      previous = now;
      const remaining = motion.current.target - position;
      if (Math.abs(remaining) < 1) {
        container.scrollLeft = motion.current.target;
        motion.current.frame = 0;
        return;
      }
      position += remaining * (1 - Math.exp(-elapsed / 55));
      container.scrollLeft = position;
      motion.current.frame = requestAnimationFrame(tick);
    };
    motion.current.frame = requestAnimationFrame(tick);
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    const gesture = drag.current;
    if (!gesture || gesture.id !== event.pointerId) return;
    drag.current = null;
    const container = event.currentTarget;
    delete container.dataset.dragging;
    if (container.hasPointerCapture(event.pointerId)) container.releasePointerCapture(event.pointerId);
    if (cancelled) {
      stopMotion();
    } else if (gesture.moved) {
      const velocity = performance.now() - gesture.lastTime < 80 ? gesture.velocity : 0;
      // A short, bounded coast preserves the gesture without snapping to a card.
      moveTo(container, motion.current.target - Math.max(-180, Math.min(180, velocity * 130)));
    }
  }

  return (
    <div
      ref={rail}
      className="service-stories"
      role="region"
      aria-roledescription="karuzela"
      aria-label="Przykłady procesów do digitalizacji"
      aria-describedby="service-stories-help"
      tabIndex={0}
      onWheel={stopMotion}
        onDragStart={event => event.preventDefault()}
        onPointerDown={event => {
          stopMotion();
          suppressClick.current = false;
          // Touch and trackpad scrolling keep the browser's native inertia.
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          drag.current = {
            id: event.pointerId, x: event.clientX, scroll: event.currentTarget.scrollLeft,
            moved: false, lastX: event.clientX, lastTime: performance.now(), velocity: 0,
          };
        }}
        onPointerMove={event => {
          const gesture = drag.current;
          if (!gesture || gesture.id !== event.pointerId) return;
          const distance = event.clientX - gesture.x;
          if (!gesture.moved && Math.abs(distance) < 6) return;
          if (!gesture.moved) {
            gesture.moved = true;
            suppressClick.current = true;
            event.currentTarget.dataset.dragging = "true";
            event.currentTarget.setPointerCapture(event.pointerId);
          }
          const now = performance.now();
          const elapsed = Math.max(1, now - gesture.lastTime);
          gesture.velocity = .65 * gesture.velocity + .35 * ((event.clientX - gesture.lastX) / elapsed);
          gesture.lastX = event.clientX;
          gesture.lastTime = now;
          event.preventDefault();
          moveTo(event.currentTarget, gesture.scroll - distance);
        }}
        onPointerUp={event => finishDrag(event)}
        onPointerCancel={event => finishDrag(event, true)}
        onPointerLeave={event => {
          if (drag.current && !drag.current.moved) finishDrag(event, true);
        }}
        onLostPointerCapture={event => {
          if (drag.current) finishDrag(event, true);
        }}
        onClickCapture={event => {
          if (suppressClick.current && event.detail !== 0) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
        onKeyDown={event => {
          stopMotion();
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>(".service-story"));
          const current = links.indexOf(document.activeElement as HTMLAnchorElement);
          const index = event.key === "Home" ? 0 : event.key === "End" ? links.length - 1
            : Math.max(0, Math.min(links.length - 1, current + (event.key === "ArrowRight" ? 1 : -1)));
          links[index]?.focus();
        }}
      >
        <span id="service-stories-help" className="service-stories__sr">Użyj klawiszy strzałek lub Tab, aby przejść między przykładami. Enter otwiera opis procesu.</span>
        {stories.map(story => (
          <Link key={story.slug} href={`/realizacje/${story.slug}`} className="service-story" draggable={false}>
            <Image className="service-story__photo" src={story.image} alt="" fill sizes="(max-width: 600px) 86vw, (max-width: 1000px) 440px, (max-width: 1524px) 42vw, 640px" draggable={false} />
            <div className="service-story__content">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <span className="service-story__link">{story.article}<span className="service-story__arrow"><ArrowUpRight size={24} /></span></span>
            </div>
          </Link>
        ))}
    </div>
  );
}



