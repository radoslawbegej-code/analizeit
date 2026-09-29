# ANALIZE — standard pracy nad frontendem

## Cel projektu

To jest polskojęzyczna strona firmy technologicznej i konsultingowej specjalizującej się w digitalizacji procesów biznesowych, WEBCON BPS, automatyzacji workflow, integracjach systemów, Power BI, Microsoft SQL Server oraz rozwiązaniach low-code/no-code.

Treści są kierowane jednocześnie do osób biznesowych i technicznych. Pisz konkretnie: opisuj problem, sposób rozwiązania, rezultat, odpowiedzialność i techniczne uwarunkowania. Unikaj pustych obietnic i generycznych sloganów w rodzaju „Transform your business”.

## Obowiązkowe skille

- Przed projektowaniem nowej sekcji lub większą zmianą UI użyj `frontend-design`, a następnie `frontend-design-premium`.
- Do oceny istniejącego UI i finalnego wykończenia używaj `impeccable` (`critique`, potem `polish`).
- Do niezależnego przeglądu accessibility, responsywności i jakości interakcji używaj `ui-ux-pro-max`.
- Skille projektowe są wersjonowane w `.agents/skills/`. Nie zastępuj ich luźnymi, jednorazowymi promptami.
- Przed zmianą UI przeczytaj `.ui-craft/brief.md`, `.ui-craft/tokens.md` i `DESIGN.md`, jeśli istnieje.

## Kierunek wizualny

Strona ma być premium, nowoczesna, techniczna, dojrzała i wiarygodna. Preferowany język to editorial enterprise: mocna typografia, wyraźna hierarchia, świadomy grid, zróżnicowany rytm sekcji i treść jako główny materiał projektu.

Nie używaj bez wyraźnego uzasadnienia:

- gradientowych blobów, dekoracyjnych glow effects ani glassmorphismu;
- nadmiaru zaokrąglonych kart, cards inside cards i powtarzalnych siatek trzech kart;
- przypadkowych badge’y, ogromnych ikon, ilustracji SaaS i floating elements;
- przesadnych cieni i dekoracji bez funkcji;
- małych uppercase labeli nad każdym nagłówkiem;
- numeracji, jeśli treść nie jest rzeczywistą sekwencją;
- generycznych sloganów, fikcyjnych wyników i niezweryfikowanych claimów.

Każda sekcja ma odpowiadać na jedno pytanie użytkownika. Nie opakowuj każdej grupy treści w kartę. Asymetria jest pożądana tylko wtedy, gdy poprawia kompozycję albo kolejność czytania.

## System wizualny

- Obowiązującym źródłem decyzji jest `DESIGN.md`; implementacja tokenów znajduje się głównie w `src/app/site-system.css` i `src/app/digital-home.css`.
- Zachowuj aktualny ciemny charakter strony, limonkowy akcent oraz typografię Manrope + Source Sans 3.
- Typografia jest elementem identyfikacji: utrzymuj czytelną skalę, odpowiedni line-height, sensowną szerokość tekstu i świadome odstępy.
- Jeden ekran ma jeden wyraźny primary CTA. Secondary CTA musi być mniej dominujący i mieć inną wagę wizualną.
- Interaktywne strzałki korzystają ze wspólnego zachowania opisanego w `.ui-craft/brief.md`; nie twórz lokalnych wariantów bez uzasadnienia.

## UI/UX i accessibility

- Każdy element musi mieć funkcję. Jeśli nie wspiera zrozumienia, nawigacji, zaufania lub działania, usuń go.
- Używaj natywnych elementów semantycznych. Link służy do nawigacji, przycisk do akcji.
- Zapewnij widoczny `focus-visible`, pełną obsługę klawiatury, właściwe nazwy dostępności i kontrast WCAG 2.2 AA.
- Cele dotykowe na mobile powinny mieć co najmniej 44 × 44 px.
- Hover nie może być jedynym nośnikiem informacji. Ruch musi respektować `prefers-reduced-motion`.
- Formularze mają czytelne etykiety, powiązane komunikaty błędów i zachowują wprowadzone dane.

## Responsywność

Każdą większą zmianę sprawdzaj na desktopie, tablecie i telefonie. Mobile projektuj jako osobny kontekst: zmieniaj rytm, kolejność, gęstość i sposób nawigacji, a nie tylko układaj wszystkie elementy pionowo. Sprawdzaj brak poziomego scrolla, długie polskie teksty, orientację poziomą i skalowanie do 200%.

## Obowiązkowy workflow po większej zmianie UI

1. Wczytaj `frontend-design`, kontekst projektu i aktualne tokeny.
2. Zdefiniuj krótki kierunek: hierarchię, grid, typografię i jeden charakterystyczny zabieg.
3. Zaimplementuj zmianę w istniejącym stacku, bez dokładania drugiego systemu stylowania.
4. Uruchom aplikację i sprawdź rzeczywisty rendering.
5. Zrób jedną zbiorczą inspekcję desktop + tablet + mobile; wykonaj screenshoty, jeśli narzędzia na to pozwalają.
6. Oceń spacing, typografię, hierarchy, alignment, responsywność, focus i kontrast.
7. Uruchom Impeccable critique i popraw problemy o najwyższym wpływie.
8. Uruchom Impeccable polish.
9. Wykonaj końcowy review przez `ui-ux-pro-max`.
10. Uruchom `pnpm lint`, `pnpm typecheck`, `pnpm build` i adekwatne testy Playwright.
11. Nie uznawaj elementu za skończony wyłącznie na podstawie JSX/CSS.

## Zasada zmian

Przy modyfikowaniu istniejącego UI zachowuj elementy, które są już dobre. Najpierw naprawiaj najsłabsze miejsca, a trwałe decyzje zapisuj w `DESIGN.md` lub `.ui-craft/brief.md`. Nie wykonuj pełnego redesignu bez wyraźnej zgody użytkownika.

