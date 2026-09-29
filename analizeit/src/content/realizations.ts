export type Realization = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  motif: "invoice" | "purchase" | "people" | "contract" | "data" | "report";
  technologies: string[];
  roles: string[];
  challenge: string;
  solution: string;
  steps: { title: string; description: string }[];
  integrations: { title: string; description: string }[];
  effects: string[];
};

export const realizations: Realization[] = [
  {
    slug: "faktury-i-ksef", category: "FINANSE", title: "Faktury i KSeF", motif: "invoice",
    summary: "Rejestracja, opis kosztu i akceptacja faktury połączone z KSeF oraz przekazaniem danych do ERP.",
    technologies: ["WEBCON BPS", "KSeF", "ERP", "REST API", "SQL Server"],
    roles: ["Księgowość", "Właściciele kosztów", "Zakupy", "IT"],
    challenge: "Faktury, opisy kosztów i decyzje są rozproszone między pocztą, arkuszami i systemem księgowym. Trudno ustalić, kto powinien zatwierdzić dokument, czy dane są kompletne i czy faktura została już przekazana do ERP.",
    solution: "Wspólny proces w WEBCON BPS łączy rejestrację dokumentu, kontrolę danych, opis kosztów i akceptację. Integracje z KSeF i ERP wiążą dokument ze statusem jego obsługi, a raporty pokazują zaległości i odpowiedzialność poszczególnych działów.",
    steps: [
      { title: "Rejestracja", description: "Pobranie dokumentu z KSeF lub rejestracja z innego uzgodnionego źródła." },
      { title: "Walidacja", description: "Kontrola kompletności, kontrahenta, duplikatów i powiązania z zamówieniem." },
      { title: "Opis kosztu", description: "Przypisanie kosztu do projektu, budżetu i odpowiedzialnego działu." },
      { title: "Akceptacja", description: "Decyzje według wartości dokumentu i uprawnień właścicieli budżetu." },
      { title: "Integracja ERP", description: "Przekazanie zatwierdzonych danych i zapis potwierdzenia albo błędu." },
      { title: "Monitoring", description: "Widok terminów, dokumentów oczekujących i statusów integracji." },
    ],
    integrations: [
      { title: "KSeF i kontrola dokumentów", description: "Pobieranie faktur oraz ich identyfikatorów, kontrola duplikatów i rejestrowanie statusów komunikacji w uzgodnionym zakresie integracji." },
      { title: "ERP i dane finansowe", description: "Wymiana słowników, danych kosztowych i statusów przez dostępne API. Kontrolowane ponowienie operacji zapobiega wielokrotnemu przekazaniu tej samej faktury." },
      { title: "Reguły i raportowanie", description: "Automatyczny dobór ścieżki akceptacji, przypomnienia o terminach oraz zestawienia zaległości i błędów na podstawie danych procesu i SQL Server." },
    ],
    effects: ["Mniej ręcznego przepisywania danych między systemami", "Jedna historia akceptacji i przekazań", "Wspólny status dokumentu dla finansów i biznesu", "Mniej braków wykrywanych dopiero przy księgowaniu"],
  },
  {
    slug: "proces-zakupowy", category: "ZAKUPY", title: "Proces zakupowy", motif: "purchase",
    summary: "Od zgłoszenia potrzeby i kontroli budżetu po zamówienie, odbiór oraz powiązanie kosztu z ERP.",
    technologies: ["WEBCON BPS", "ERP", "REST API", "SQL Server"],
    roles: ["Działy biznesowe", "Zakupy", "Finanse", "Magazyn"],
    challenge: "Zapotrzebowania trafiają do zakupów różnymi kanałami. Zgoda na wydatek, zamówienie u dostawcy i odbiór dostawy funkcjonują osobno, więc finanse nie widzą pełnego obrazu zobowiązań i wykorzystania budżetu.",
    solution: "Jeden proces łączy potrzeby działów z decyzjami budżetowymi, zamówieniami w ERP i potwierdzeniami odbioru. Każda pozycja zachowuje powiązanie ze zgłaszającym, budżetem i dostawcą, również przy dostawach częściowych.",
    steps: [
      { title: "Zapotrzebowanie", description: "Określenie potrzeb, uzasadnienia, terminu oraz miejsca dostawy." },
      { title: "Kontrola budżetu", description: "Sprawdzenie dostępnych środków i istniejących zobowiązań." },
      { title: "Akceptacja", description: "Zgoda właściciela budżetu i dodatkowe decyzje według progów kwotowych." },
      { title: "Zamówienie", description: "Wybór dostawcy i przekazanie zatwierdzonych pozycji do ERP." },
      { title: "Odbiór", description: "Potwierdzenie ilości i jakości, z osobną obsługą brakujących pozycji." },
      { title: "Rozliczenie", description: "Powiązanie kosztu z zamówieniem i raport wykorzystania budżetu." },
    ],
    integrations: [
      { title: "Budżety i słowniki ERP", description: "Pobieranie centrów kosztowych, dostawców i danych budżetowych. Rezerwacja środków w uzgodnionym systemie oraz ponowna kontrola przed zamówieniem." },
      { title: "Zamówienia przez API", description: "Tworzenie zamówienia i odbieranie statusu realizacji. Powiązanie identyfikatorów pozwala śledzić pozycję od potrzeby do dostawy." },
      { title: "Akceptacje i nadzór", description: "Dobór osób decyzyjnych, przypomnienia i eskalacje. Raporty SQL zestawiają otwarte potrzeby, opóźnione dostawy i zaangażowanie budżetów." },
    ],
    effects: ["Widoczność kosztów przed złożeniem zamówienia", "Jedna historia od potrzeby do odbioru", "Mniej ręcznego uzgadniania statusów", "Kontrola dostaw częściowych i odchyleń budżetu"],
  },
  {
    slug: "onboarding-pracownika", category: "HR / IT", title: "Onboarding pracownika", motif: "people",
    summary: "Wspólny plan HR, IT, administracji i przełożonego: zadania, dostępy i gotowość przed pierwszym dniem.",
    technologies: ["WEBCON BPS", "Microsoft 365", "REST API"],
    roles: ["HR", "IT", "Administracja", "Przełożony"],
    challenge: "Informacja o nowej osobie uruchamia serię maili do różnych zespołów. Sprzęt, dostępy, dokumenty i stanowisko mają innych właścicieli, a przełożony nie ma jednego miejsca, w którym sprawdzi gotowość do pierwszego dnia pracy.",
    solution: "Zgłoszenie w WEBCON BPS uruchamia równoległe zadania dla HR, IT, administracji i przełożonego. Zakres zależy od roli, lokalizacji i daty rozpoczęcia. Wspólny widok pokazuje zależności, terminy i zadania wymagające interwencji.",
    steps: [
      { title: "Zgłoszenie HR", description: "Wprowadzenie roli, lokalizacji i uzgodnionej daty rozpoczęcia pracy." },
      { title: "Plan wdrożenia", description: "Dobór zadań i terminów z szablonu odpowiadającego stanowisku." },
      { title: "Zadania równoległe", description: "IT przygotowuje sprzęt, HR dokumenty, a administracja stanowisko." },
      { title: "Dostępy", description: "Akceptacja wymaganych uprawnień i uruchomienie uzgodnionych integracji." },
      { title: "Gotowość", description: "Potwierdzenie wykonania zadań przed pierwszym dniem pracy." },
      { title: "Podsumowanie", description: "Przełożony widzi kompletność przygotowań i otwarte sprawy." },
    ],
    integrations: [
      { title: "Microsoft 365", description: "Powiadomienia i zadania powiązane z identyfikatorem sprawy. Operacje na kontach lub grupach przez zatwierdzone API po akceptacji wymaganych dostępów." },
      { title: "Równoległa praca działów", description: "Automatyczne tworzenie zadań, przypisanie właścicieli i wyliczanie terminów względem daty zatrudnienia. Zmiana daty uruchamia aktualizację planu." },
      { title: "Kontrola gotowości", description: "Przypomnienia i eskalacje brakujących zadań oraz zbiorczy widok gotowości. Uprawnienia ograniczają dostęp do danych pracownika do potrzeb danej roli." },
    ],
    effects: ["Spójna koordynacja HR, IT i administracji", "Mniej ręcznego rozsyłania zadań", "Widoczność braków przed pierwszym dniem", "Historia decyzji o dostępach i wykonanych zadań"],
  },
  {
    slug: "zarzadzanie-umowami", category: "PRAWO / ADMINISTRACJA", title: "Zarządzanie umowami", motif: "contract",
    summary: "Projekt, opiniowanie i akceptacja umowy połączone z wersjonowaniem, podpisem oraz kontrolą terminów.",
    technologies: ["WEBCON BPS", "Microsoft 365", "ERP"],
    roles: ["Biznes", "Dział prawny", "Finanse", "Administracja"],
    challenge: "Kolejne wersje umowy krążą w wiadomościach. Biznes, prawnicy i finanse opiniują różne pliki, a po podpisaniu trudno ustalić obowiązującą wersję, właściciela umowy oraz termin wypowiedzenia lub odnowienia.",
    solution: "Centralny rejestr łączy dokumenty, wersje, opinie i decyzje z kontrahentem oraz właścicielem biznesowym. Proces prowadzi umowę od szablonu do podpisu, a po zawarciu nadzoruje terminy i zobowiązania.",
    steps: [
      { title: "Projekt", description: "Przygotowanie umowy z szablonu i przypisanie właściciela biznesowego." },
      { title: "Opiniowanie", description: "Uzgodnienia prawne, finansowe i biznesowe na wskazanej wersji." },
      { title: "Akceptacja", description: "Zatwierdzenie warunków zgodnie z reprezentacją i zasadami organizacji." },
      { title: "Podpis", description: "Obsługa uzgodnionej ścieżki podpisu i potwierdzenie jej zakończenia." },
      { title: "Repozytorium", description: "Zapis podpisanego dokumentu, aneksów i relacji do kontrahenta." },
      { title: "Terminy", description: "Nadzór nad odnowieniem, wypowiedzeniem i realizacją zobowiązań." },
    ],
    integrations: [
      { title: "Dokumenty i wersje", description: "Współpraca z Microsoft 365 w uzgodnionym modelu edycji. Opinie i zgody są powiązane z konkretną wersją dokumentu." },
      { title: "Kontrahenci i zobowiązania", description: "Powiązanie rejestru z danymi ERP, zamówieniami i kosztami. Sposób wymiany danych zależy od interfejsów systemu źródłowego." },
      { title: "Podpis i przypomnienia", description: "Zadania dla osób podpisujących lub połączenie z wybraną usługą podpisu. Alerty wyprzedzają terminy wypowiedzenia i odnowienia." },
    ],
    effects: ["Centralizacja dokumentów i aneksów", "Jednoznaczna wersja będąca przedmiotem akceptacji", "Historia uzgodnień i odpowiedzialności", "Mniejsze ryzyko przeoczenia terminów"],
  },
  {
    slug: "automatyzacja-procesu-operacyjnego", category: "OPERACJE / DANE", title: "Automatyzacja procesu operacyjnego", motif: "data",
    summary: "Import dużych paczek danych, walidacja każdego rekordu, obsługa wyjątków i kontrolowana wysyłka do API.",
    technologies: ["WEBCON BPS", "REST API", "SQL Server"],
    roles: ["Operacje", "Właściciele danych", "IT", "Systemy zewnętrzne"],
    challenge: "Duże paczki danych wymagają ręcznego sprawdzania i poprawiania przed importem do systemów zewnętrznych. Pojedynczy błędny rekord lub niedostępność API zatrzymuje pracę, a ponowienie całej paczki grozi duplikatami.",
    solution: "Proces rozdziela przyjęcie paczki, walidację danych i wysyłkę do API. SQL Server przechowuje dane robocze i wyniki kontroli, a WEBCON BPS koordynuje obsługę wyjątków. Każdy rekord ma własny status, identyfikator i historię prób przekazania.",
    steps: [
      { title: "Import paczki", description: "Przyjęcie danych z pliku lub API i nadanie identyfikatora operacji." },
      { title: "Walidacja", description: "Kontrola formatu, wymaganych pól, relacji i reguł biznesowych." },
      { title: "Obsługa wyjątków", description: "Odseparowanie błędów do korekty bez blokowania poprawnych rekordów." },
      { title: "Kolejka", description: "Przygotowanie poprawnych rekordów do wysyłki w kontrolowanych partiach." },
      { title: "Wysyłka API", description: "Przekazanie danych, odczyt odpowiedzi i zapis statusu każdej próby." },
      { title: "Uzgodnienie", description: "Porównanie przyjętych, odrzuconych i oczekujących rekordów." },
    ],
    integrations: [
      { title: "Walidacja w SQL Server", description: "Kontrole kompletności, spójności i duplikatów przed wysyłką. Błędy są opisane na poziomie rekordu, aby operator wiedział, co poprawić." },
      { title: "Odporna komunikacja REST API", description: "Przetwarzanie partiami, uwzględnienie limitów API i kontrolowane ponowienia. Identyfikatory operacji oraz uzgadnianie odpowiedzi ograniczają duplikaty przy niejednoznacznym wyniku wysyłki." },
      { title: "Nadzór operacyjny", description: "WEBCON BPS kieruje wyjątki do właścicieli danych. Monitoring pokazuje kolejkę, przyczyny odrzuceń i operacje wymagające wznowienia." },
    ],
    effects: ["Automatyczna kontrola poprawności danych", "Mniej ręcznej pracy przy dużych importach", "Korekta błędów na poziomie pojedynczego rekordu", "Możliwość wznowienia z pełną historią przetwarzania"],
  },
  {
    slug: "raportowanie-i-monitoring-procesow", category: "ANALITYKA", title: "Raportowanie i monitoring procesów", motif: "report",
    summary: "Wspólny model danych dla WEBCON, SQL i API oraz raporty Power BI oparte na uzgodnionych definicjach KPI.",
    technologies: ["Power BI", "WEBCON BPS", "SQL Server", "REST API"],
    roles: ["Zarząd", "Właściciele procesów", "Analitycy", "IT"],
    challenge: "Każdy dział przygotowuje raport według własnych definicji i na inny moment. Dane z procesów, baz SQL i systemów zewnętrznych trzeba ręcznie łączyć, zanim można ocenić zaległości, obciążenie zespołów i miejsca przestoju.",
    solution: "Wspólny model danych łączy zdarzenia procesowe z danymi biznesowymi. Dashboardy Power BI pokazują uzgodnione KPI oraz pozwalają przejść od obrazu całej organizacji do konkretnego procesu, etapu lub grupy spraw.",
    steps: [
      { title: "Źródła", description: "Wskazanie danych WEBCON BPS, baz SQL i zewnętrznych API." },
      { title: "Przygotowanie", description: "Ujednolicenie identyfikatorów, dat i statusów oraz kontrola jakości." },
      { title: "Model danych", description: "Powiązanie źródeł i uzgodnienie definicji wskaźników z biznesem." },
      { title: "Dashboardy", description: "Widoki zarządcze i operacyjne z filtrami oraz możliwością analizy szczegółów." },
      { title: "Odświeżanie", description: "Aktualizacja według harmonogramu i nadzór nad dostępnością źródeł." },
      { title: "Decyzje", description: "Analiza zaległości, obciążenia i etapów wymagających usprawnienia." },
    ],
    integrations: [
      { title: "Spójny model danych", description: "Łączenie historii WEBCON BPS, widoków SQL i danych udostępnionych przez REST API. Wspólne definicje zapewniają porównywalność raportów." },
      { title: "Power BI i dostęp do informacji", description: "Dashboardy dopasowane do zarządu i właścicieli procesów. Uprawnienia i filtrowanie danych są projektowane zgodnie z odpowiedzialnością użytkowników." },
      { title: "Monitoring jakości i aktualności", description: "Kontrola odświeżania, brakujących danych i niespójnych statusów. Widoczny moment aktualizacji pozwala ocenić, z jakiego okresu pochodzą informacje." },
    ],
    effects: ["Jedne definicje wskaźników dla wszystkich odbiorców", "Mniej ręcznego składania raportów", "Widoczność zaległości i etapów wymagających uwagi", "Możliwość przejścia od KPI do danych źródłowych"],
  },
];
