import type { Realization } from "./realizations";

type ProcessPresentation = {
  problem: string;
  solution: string;
  stages: { title: string; text: string }[];
};

export const processPresentations: Record<Realization["motif"], ProcessPresentation> = {
  invoice: {
    problem: "Faktura krąży między pocztą, arkuszami i księgowością. Nie wiadomo, kto ma ją zatwierdzić ani czego jeszcze brakuje.",
    solution: "Dokument, opis kosztu i decyzje trafiają do jednego obiegu. Każda osoba widzi, co ma zrobić, a finanse znają status sprawy.",
    stages: [
      { title: "Wpływ i kontrola", text: "Faktura trafia z KSeF lub innego źródła. System sprawdza kompletność danych, kontrahenta i duplikaty." },
      { title: "Opis i akceptacja", text: "Koszt zostaje przypisany do budżetu. Dokument trafia do właściwych osób zgodnie z regułami firmy." },
      { title: "Księgowanie i nadzór", text: "Zatwierdzone dane trafiają do ERP. Zespół widzi potwierdzenia, zaległości i sprawy wymagające uwagi." },
    ],
  },
  purchase: {
    problem: "Potrzeba zakupu, zgoda na wydatek i zamówienie żyją osobno. Pełny koszt staje się widoczny dopiero przy fakturze.",
    solution: "Jeden proces łączy zgłoszenie potrzeby z budżetem, dostawcą i odbiorem. Koszty są widoczne, zanim powstanie zobowiązanie.",
    stages: [
      { title: "Potrzeba i budżet", text: "Pracownik określa, czego potrzebuje i na kiedy. Właściciel budżetu sprawdza środki i zatwierdza wydatek." },
      { title: "Zamówienie", text: "Zakupy wybierają dostawcę. Zatwierdzone pozycje trafiają do ERP, z powiązaniem do pierwotnego zgłoszenia." },
      { title: "Odbiór i rozliczenie", text: "Zespół potwierdza dostawę, również częściową. Koszt pozostaje powiązany z zamówieniem i wykorzystaniem budżetu." },
    ],
  },
  people: {
    problem: "Nowa osoba zaczyna pracę, ale sprzęt, dostępy i dokumenty mają różnych właścicieli. Gotowość trzeba sprawdzać w kolejnych mailach.",
    solution: "Jedno zgłoszenie uruchamia wspólny plan HR, IT i administracji. Przełożony widzi przygotowania oraz sprawy, które wymagają reakcji.",
    stages: [
      { title: "Zgłoszenie i plan", text: "HR podaje stanowisko, lokalizację i datę rozpoczęcia. Na tej podstawie powstaje plan zadań i terminów." },
      { title: "Przygotowanie", text: "Działy równolegle organizują sprzęt, dokumenty i stanowisko. Przyznanie dostępów wymaga odpowiednich akceptacji." },
      { title: "Pierwszy dzień", text: "Wspólny widok pokazuje wykonane zadania i braki. Przypomnienia pomagają zamknąć przygotowania na czas." },
    ],
  },
  contract: {
    problem: "Różne wersje umowy krążą w wiadomościach. Po podpisaniu trudno znaleźć aktualny dokument, właściciela i termin odnowienia.",
    solution: "Wspólny rejestr łączy dokument z historią uzgodnień i odpowiedzialną osobą. Po podpisaniu nadal pilnuje terminów oraz zobowiązań.",
    stages: [
      { title: "Projekt i uzgodnienia", text: "Umowa powstaje z szablonu. Biznes, prawnicy i finanse opiniują tę samą, wskazaną wersję." },
      { title: "Akceptacja i podpis", text: "Warunki zatwierdzają uprawnione osoby. Proces prowadzi dokument przez uzgodnioną ścieżkę podpisu." },
      { title: "Rejestr i terminy", text: "Podpisana umowa, aneksy i dane kontrahenta są w jednym miejscu. Przypomnienia wyprzedzają odnowienie lub wypowiedzenie." },
    ],
  },
  data: {
    problem: "Duże paczki danych trzeba ręcznie sprawdzać przed importem. Jeden błąd potrafi zatrzymać całość, a ponowienie grozi duplikatami.",
    solution: "Każdy rekord ma własny status i historię. Poprawne dane są przetwarzane, a wyjątki trafiają do osoby, która może je skorygować.",
    stages: [
      { title: "Import i walidacja", text: "Dane trafiają z pliku lub API. System sprawdza format, kompletność, powiązania i reguły biznesowe." },
      { title: "Obsługa wyjątków", text: "Błędne rekordy trafiają do korekty. Poprawne dane czekają w kolejce, bez blokowania całej paczki." },
      { title: "Przekazanie i kontrola", text: "Dane są wysyłane partiami. Odpowiedzi API i historia prób pozwalają uzgodnić wynik oraz wznowić operację." },
    ],
  },
  report: {
    problem: "Działy raportują według różnych definicji i na inny moment. Zanim powstanie wspólny obraz, ktoś ręcznie łączy arkusze.",
    solution: "Wspólny model danych i uzgodnione wskaźniki dają zespołom ten sam punkt odniesienia. Raport prowadzi od ogólnego wyniku do konkretnej sprawy.",
    stages: [
      { title: "Źródła i definicje", text: "Łączymy dane procesowe, SQL i API. Z biznesem ustalamy znaczenie wskaźników oraz zasady kontroli jakości." },
      { title: "Czytelne raporty", text: "Power BI pokazuje widoki dopasowane do zarządu i zespołów. Filtry pozwalają przejść do szczegółów procesu." },
      { title: "Aktualność i decyzje", text: "Dane odświeżają się według harmonogramu. Widoczne zaległości i obciążenie zespołów pomagają ustalić priorytety." },
    ],
  },
};
