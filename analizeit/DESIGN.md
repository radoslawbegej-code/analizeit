# ANALIZE — kierunek i system wizualny

## Pozycjonowanie

ANALIZE prezentuje kompetencje w projektowaniu i wdrażaniu rozwiązań procesowych: WEBCON BPS, integracje, KSeF, Power BI, SSRS i Microsoft SQL Server. Strona ma budować zaufanie przez porządek, konkret i techniczną wiarygodność, nie przez efektowną dekorację.

Odbiorcy:

- właściciele procesów, osoby operacyjne i zarządzające, które potrzebują zrozumieć rezultat biznesowy;
- IT i zespoły techniczne, które oceniają wykonalność, integracje i jakość realizacji.

## Charakter

Język wizualny: ciemny, spokojny, redakcyjny i techniczny. Minimalizm oznacza precyzję, nie pustkę. Sekcje powinny opierać się na typografii, strukturze, subtelnych regułach i rzeczywistych materiałach: zdjęciach, procesach, danych oraz diagramach.

Jednym rozpoznawalnym motywem jest uporządkowany przepływ: linie, relacje i sekwencje mają obrazować sposób pracy tylko wtedy, gdy odpowiadają realnej strukturze procesu.

Globalne tło publicznych widoków może wykorzystywać bardzo subtelne linie przepływu procesu przy krawędziach ekranu. To warstwa ambientowa, nie diagram: niska kontrastowość, brak interakcji, brak przecinania głównej hierarchii treści i wyłączenie ruchu przy `prefers-reduced-motion`. Nie zastępować jej blobami, glow ani dekoracyjną siatką.

## Tokeny

- Tło główne: `#151917` (`--digital-bg`).
- Powierzchnia spokojnej sekcji: `#1b211d`.
- Panel pomocniczy: `#1d2320` (`--digital-panel`).
- Tekst główny: `#f4f6ed` (`--digital-text`).
- Tekst pomocniczy: `#a5afa8` (`--digital-muted`).
- Akcent: `#d2fa7c` (`--digital-accent`). Stosować oszczędnie: primary CTA, focus, aktywny stan lub kluczowy punkt procesu.
- Linie: półprzezroczysta biel w przedziale około `#ffffff20`–`#ffffff40`.
- Nagłówki: Manrope 500, tracking od `-0.02em` do `-0.04em`.
- Tekst i kontrolki: Source Sans 3, 400–600, bazowo 1–1.1875 rem z line-height 1.6–1.7.
- IBM Plex Mono wyłącznie dla prawdziwych danych, kodu i technicznych diagramów.
- Promień: zdjęcia 3 px, przyciski 4 px, pola 6 px. Karty nie są domyślnym kontenerem.

## Kompozycja

- Maksymalna szerokość i gutter wynikają z istniejącego `.container` (około 1360 px).
- Odstępy między dużymi sekcjami: zwykle 4.5–8 rem, celowo zróżnicowane.
- Nagłówek sekcji powinien prowadzić do treści, a odstęp nad nim być większy niż pod nim.
- Nie powtarzaj tego samego układu w sąsiadujących sekcjach.
- Sekwencje mogą używać numeracji i linii łączącej, ponieważ kolejność jest znaczeniem, nie dekoracją.

## Interakcje

- Jeden dominujący CTA na widok; linki tekstowe i secondary CTA pozostają spokojniejsze.
- Focus-visible: 2 px w kolorze akcentu z czytelnym offsetem.
- Strzałka kontrolki przechodzi z ukosu do poziomu na hover/focus; porusza się znak, nie hit area.
- Animacje interfejsu zwykle 160–280 ms z `cubic-bezier(.22,1,.36,1)`.
- `prefers-reduced-motion` usuwa ruch, ale zachowuje zmianę stanu.

## Antywzorce

Bez wyraźnej potrzeby nie stosować blobów, glow, glassmorphismu, gradient text, zagnieżdżonych kart, identycznych trzykolumnowych kart, dekoracyjnego monospace, nieuzasadnionych badge’y, ogromnych ikon, ilustracji stock SaaS i ogólnych haseł marketingowych.

## Responsive

- Desktop wykorzystuje asymetrię i szerokość do pokazania relacji między treściami.
- Tablet redukuje liczbę kolumn i utrzymuje czytelne grupowanie.
- Mobile zachowuje znaczenie układu przez kolejność, pionowe osie procesu, krótsze miary tekstu i pełne cele dotykowe.
- Weryfikować co najmniej 1440 px, 1024 px, 768 px, 390 px i 320 px oraz brak poziomego overflow.

## Źródła implementacji

- Fonty: `src/app/layout.tsx`.
- Globalny kontrakt wizualny i interakcje: `src/app/site-system.css`.
- Strona główna: `src/app/digital-home.css` oraz `src/components/home-continuation.css`.
- Trwałe preferencje użytkownika: `.ui-craft/brief.md` i `.ui-craft/tokens.md`.

