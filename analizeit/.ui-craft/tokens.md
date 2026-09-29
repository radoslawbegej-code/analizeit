# Bieżący system wizualny

- Powierzchnie: tło `#151917`, panel `#1d2320`, spokojne sekcje `#1b211d`.
- Tekst: główny `#f4f6ed`, pomocniczy `#a5afa8`; limonka `#d2fa7c` jest akcentem.
- Nagłówki: Manrope 500, logo 700. Tracking od -0.02em do -0.04em. Duży tekst nie przekracza 6rem.
- Treść i kontrolki: Source Sans 3, 400–600; tekst główny 1.0625–1.1875rem, interlinia 1.65–1.7. Obie rodziny mają polskie znaki i są hostowane przez next/font.
- IBM Plex Mono pozostaje dla istniejących technicznych diagramów i dawnych koncepcji, nie służy jako dekoracja strony O mnie.
- Geometria: istniejący kontener 1360px i responsywny gutter. Sekcje 4.5–8rem; grupy .75–2rem; elementy fotograficzne 3px, przyciski 4px, pola formularzy 6px.
- Strzałki: wspólna zmiana tła i obrót z ukosu do poziomu na hover/focus-visible, CSS 280ms `cubic-bezier(.22,1,.36,1)` w obie strony. Obraca się sam znak, tło i hit area pozostają nieruchome. Przy reduced-motion zmiana stanu jest natychmiastowa. Wyłączone przyciski nie reagują. Strzałki powrotu wskazują w lewo; strzałki diagramów pozostają statyczne.

Źródło implementacji: `src/app/site-system.css`, fonty w `src/app/layout.tsx`.
