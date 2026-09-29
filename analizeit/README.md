# ANALIZE

Polskojęzyczna strona marki ANALIZE zbudowana w Next.js. Serwis prezentuje ofertę projektowania, developmentu i optymalizacji rozwiązań procesowych w WEBCON BPS.

## Uruchomienie

Wymagane są Node.js i pnpm.

```bash
pnpm install
pnpm dev
```

Strona będzie dostępna pod adresem `http://localhost:3000`.

## Treści i konfiguracja

Cała treść oraz dane marki znajdują się w `src/content/site.ts`. Przed publikacją należy uzupełnić:

- docelową domenę w `.env.local` jako `NEXT_PUBLIC_SITE_URL`,
- webhook formularza jako `CONTACT_FORM_WEBHOOK_URL`,
- docelowy kanał kontaktu w `siteConfig.contact`,
- pełne dane działalności i finalną informację o prywatności zgodną z docelowym hostingiem oraz sposobem kontaktu.

Formularz na stronie „O mnie” wysyła dane przez `/api/contact` do skonfigurowanego webhooka. Bez `CONTACT_FORM_WEBHOOK_URL` endpoint zwraca czytelny błąd i nie udaje poprawnej wysyłki.

## Kontrola jakości

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test:e2e
```

Playwright sprawdza stronę na profilach desktop, tablet i mobile. Po pierwszym klonowaniu uruchom `pnpm exec playwright install`; jeżeli lokalny CDN blokuje pobieranie, można tymczasowo wskazać zainstalowaną przeglądarkę kanałem Playwrighta.

Zasady projektowe i obowiązkowy workflow znajdują się w `AGENTS.md`, a trwały system wizualny w `DESIGN.md`. Lokalne skille Codexa są wersjonowane w `.agents/skills/`.

Projekt jest przygotowany do wdrożenia na Vercel.
