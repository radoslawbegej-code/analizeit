export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  outcomes: string[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteConfig = {
  name: "ANALIZE",
  owner: "Radosław Begej",
  legalName: "Analize IT",
  url: configuredUrl || "https://analize.example",
  locale: "pl_PL",
  description:
    "Digitalizacja procesów w WEBCON BPS, integracje systemów, Power BI, SSRS i SQL Server — od analizy po rozwój działającego rozwiązania.",
  contact: {
    email: null as string | null,
    phone: null as string | null,
    linkedin: "https://www.linkedin.com/in/rados%C5%82aw-begej-6b7880168/" as string | null,
  },
};

export const navigation: NavItem[] = [
  { label: "Start", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Przykłady procesów", href: "/realizacje" },
  { label: "O mnie", href: "/o-mnie" },
  { label: "Kontakt", href: "/kontakt" },
];

export const homeContent = {
  eyebrow: "WEBCON BPS · ANALIZA · DEVELOPMENT",
  title: "Proces nie kończy się na diagramie.",
  lead:
    "Projektuję i wdrażam rozwiązania WEBCON BPS — od pierwszego warsztatu po rozwój systemu, który działa w codziennej pracy.",
  primaryCta: "Porozmawiajmy o procesie",
  secondaryCta: "Zobacz zakres współpracy",
  promise: {
    eyebrow: "Jedna odpowiedzialność",
    title: "Od niejasnej potrzeby do uporządkowanego rozwiązania.",
    body:
      "Łączę analizę biznesową z implementacją. Dzięki temu założenia nie giną między dokumentem, wykonaniem i późniejszym rozwojem systemu.",
  },
  servicesEyebrow: "Zakres współpracy",
  servicesTitle: "Wchodzę tam, gdzie proces potrzebuje konkretu.",
  scenariosEyebrow: "Trzy punkty wejścia",
  scenariosTitle: "Nowy projekt, dodatkowe kompetencje albo rozwiązanie wymagające naprawy.",
  aboutEyebrow: "Ekspert za marką",
  aboutTitle: "ANALIZE to praktyka prowadzona przez Radosława Begeja.",
  aboutBody:
    "Doświadczenie z projektów realizowanych w dużych organizacjach przekładam na bezpośrednią współpracę — bez warstw pośrednich, fikcyjnych historii i niepotrzebnego procesu wokół procesu.",
};

export const services: Service[] = [
  {
    number: "01",
    slug: "analiza",
    shortTitle: "Analiza",
    title: "Analiza i architektura procesu",
    description:
      "Porządkuję potrzeby, zależności i wyjątki, zanim staną się kosztownymi zmianami na etapie implementacji.",
    outcomes: [
      "warsztaty i mapowanie przebiegu procesu",
      "wymagania, role oraz reguły biznesowe",
      "model danych i koncepcja rozwiązania",
      "plan integracji i kolejnych etapów",
    ],
  },
  {
    number: "02",
    slug: "aplikacje-integracje",
    shortTitle: "Development",
    title: "Budowa aplikacji i integracje",
    description:
      "Przekładam uzgodnioną logikę na czytelne formularze, obiegi i automatyzacje gotowe do codziennego użycia.",
    outcomes: [
      "budowa i rozwój aplikacji procesowych",
      "formularze, ścieżki, reguły i uprawnienia",
      "integracje z ERP, API i KSeF",
      "obieg faktur kosztowych: opis, akceptacja i przekazanie do księgowości",
      "testy, dokumentacja i przygotowanie wdrożenia",
    ],
  },
  {
    number: "03",
    slug: "audyt-rozwoj",
    shortTitle: "Optymalizacja",
    title: "Audyt, optymalizacja i wsparcie",
    description:
      "Pomagam, gdy istniejące rozwiązanie przestało nadążać za organizacją, jest trudne w utrzymaniu albo wymaga niezależnego spojrzenia.",
    outcomes: [
      "przegląd logiki i architektury rozwiązania",
      "identyfikacja długu oraz wąskich gardeł",
      "plan usprawnień i bezpiecznej rozbudowy",
      "wsparcie zespołu lub konkretnego etapu projektu",
    ],
  },
  {
    number: "04",
    slug: "power-bi",
    shortTitle: "Power BI",
    title: "Raportowanie w Power BI",
    description: "Przygotowuję raporty kosztów, realizacji budżetu i przebiegu procesów. Łączę źródła danych i ustalam sposób liczenia wskaźników, żeby wyniki można było porównać.",
    outcomes: [
      "modele danych i miary DAX",
      "przygotowanie danych w Power Query",
      "raporty interaktywne i zestawienia zarządcze",
      "konfiguracja odświeżania i dostępu do raportów",
    ],
  },
  {
    number: "05",
    slug: "reporting-services",
    shortTitle: "Reporting Services",
    title: "SQL Server Reporting Services",
    description: "Tworzę i rozwijam raporty SSRS o ustalonym układzie: zestawienia operacyjne, wydruki i dokumenty przygotowane do eksportu. Pomagam też utrzymać istniejące raporty.",
    outcomes: [
      "raporty stronicowane RDL i parametry raportów",
      "zapytania i zestawy danych z SQL Server",
      "eksport do PDF i Excel",
      "publikacja, uprawnienia i subskrypcje raportów",
    ],
  },
  {
    number: "06",
    slug: "sql-server",
    shortTitle: "SQL Server",
    title: "Bazy danych Microsoft SQL Server",
    description: "Zajmuję się bazami, z których korzystają aplikacje i raporty. Projektuję struktury danych, piszę zapytania i procedury oraz diagnozuję problemy z wydajnością.",
    outcomes: [
      "projektowanie tabel, widoków i procedur T-SQL",
      "optymalizacja zapytań i indeksów",
      "import, migracja i porządkowanie danych",
      "utrzymanie baz, uprawnienia, kopie zapasowe i odtwarzanie",
    ],
  },
];

export const scenarios = [
  {
    number: "A",
    title: "Projekt od początku",
    body: "Masz proces i cel biznesowy. Potrzebujesz przełożyć je na architekturę oraz działające rozwiązanie.",
  },
  {
    number: "B",
    title: "Ekspert do projektu",
    body: "Masz zespół i rozpoczęty projekt. Potrzebujesz kogoś, kto przejmie analizę, implementację lub integracje.",
  },
  {
    number: "C",
    title: "Istniejące rozwiązanie",
    body: "System wymaga uporządkowania, optymalizacji albo planu dalszego rozwoju bez zatrzymywania pracy.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Rozpoznanie",
    body: "Cel, użytkownicy, dane i ograniczenia procesu.",
  },
  {
    number: "02",
    title: "Model",
    body: "Logika, role, wyjątki oraz punkty integracji.",
  },
  {
    number: "03",
    title: "Wdrożenie",
    body: "Implementacja, testy i świadome decyzje techniczne.",
  },
  {
    number: "04",
    title: "Rozwój",
    body: "Obserwacja działania i kolejne usprawnienia.",
  },
];

export const servicesPageContent = {
  eyebrow: "Usługi",
  title: "WEBCON BPS, integracje i dane.",
  lead:
    "Projektuję i rozwijam rozwiązania procesowe w WEBCON BPS, łączę je z ERP, KSeF i API, a dane wykorzystuję w Power BI, SSRS i SQL Server. Mogę poprowadzić całość albo wejść w konkretny fragment projektu.",
  modelEyebrow: "Model współpracy",
  modelTitle: "Cały projekt albo konkretny obszar.",
  architectureEyebrow: "Architektura rozwiązania",
  architectureTitle: "Proces nie działa w izolacji.",
  architectureBody:
    "Dlatego projekt obejmuje również dane wejściowe, reguły biznesowe, integracje z systemami źródłowymi oraz sposób wykorzystania informacji po zakończeniu obiegu.",
};

export const caseStudies: CaseStudy[] = [];

export const realizationsContent = {
  eyebrow: "Przykłady procesów",
  title: "Procesy i integracje w praktyce.",
  lead:
    "Każdą realizację opisuję przez problem, decyzje projektowe i uzyskany efekt. Materiały są obecnie przygotowywane do publikacji w zanonimizowanej formie.",
  emptyTitle: "Case studies są w przygotowaniu.",
  emptyBody:
    "Przygotowuję opisy projektów z uwzględnieniem poufności danych. Jeśli chcesz omówić podobny problem, napisz, z czym pracujesz.",
  framework: [
    {
      number: "01",
      title: "Problem",
      body: "Co realnie blokowało proces, użytkowników lub dalszy rozwój systemu.",
    },
    {
      number: "02",
      title: "Decyzja",
      body: "Jakie rozwiązanie zostało wybrane i dlaczego pasowało do ograniczeń projektu.",
    },
    {
      number: "03",
      title: "Efekt",
      body: "Co zmieniło się po wdrożeniu — wyłącznie na podstawie potwierdzonych informacji.",
    },
  ],
};

export const aboutContent = {
  eyebrow: "O mnie",
  title: "Radosław Begej. Od analizy do działającego procesu.",
  lead:
    "Pomagam firmom digitalizować procesy, automatyzować zadania i usprawniać codzienną pracę. Łączę analizę biznesową z tworzeniem aplikacji i pracą z danymi.",
  portraitLabel: "Miejsce na portret",
  portraitNote: "Zdjęcie zostanie dodane przed publikacją.",
  story: [
    "Od wielu lat wspieram biznes w optymalizacji procesów. Zajmuję się analizą wymagań, rozwojem aplikacji i baz danych oraz testowaniem oprogramowania. Dzięki temu mogę przejść z zespołem od opisania problemu do sprawdzenia, czy rozwiązanie działa w praktyce.",
    "Zaczynam od rozmów z osobami, które wykonują daną pracę. Ustalam, gdzie czekają na informacje, co przepisują ręcznie i które decyzje wstrzymują sprawę. Na tej podstawie projektuję obieg, automatyzuję powtarzalne kroki i przygotowuję dane potrzebne do dalszych usprawnień.",
  ],
  principles: [
    {
      title: "Najpierw sposób pracy",
      body: "Zanim powstanie formularz, ustalam, które kroki są potrzebne, kto za nie odpowiada i gdzie można uprościć obieg.",
    },
    {
      title: "Jawne decyzje projektowe",
      body: "Założenia, ograniczenia i kompromisy techniczne zapisuję tak, żeby było wiadomo, dlaczego rozwiązanie działa właśnie w ten sposób.",
    },
    {
      title: "Rozwój bez odtwarzania projektu",
      body: "Porządkuję logikę i dokumentuję kluczowe założenia, żeby kolejne zmiany nie zaczynały się od ponownego odkrywania istniejącego rozwiązania.",
    },
  ],
  competencies: [
    "aplikacje procesowe",
    "analiza wymagań",
    "modelowanie procesów",
    "architektura rozwiązania",
    "integracje API",
    "optymalizacja wdrożeń",
    "Power BI i modelowanie danych",
    "SQL Server Reporting Services (SSRS)",
    "Microsoft SQL Server i T-SQL",
  ],
};

export const contactContent = {
  eyebrow: "Kontakt",
  title: "Porozmawiajmy o procesie, który chcesz usprawnić.",
  lead:
    "Napisz, jak wygląda dziś praca, na jakim etapie jest projekt i co wymaga uporządkowania. Na tej podstawie łatwiej ustalić właściwy zakres rozmowy.",
};

export const privacyContent = {
  eyebrow: "Prywatność",
  title: "Prywatność w serwisie",
  updated: "Informacja o obecnej wersji strony",
  sections: [
    {
      title: "Dane zbierane przez stronę",
      paragraphs: [
        "Serwis nie udostępnia aktywnego formularza kontaktowego i nie zapisuje danych wpisywanych przez użytkownika w aplikacji.",
        "W obecnej wersji kod serwisu nie zawiera narzędzi analitycznych ani reklamowych i nie wykorzystuje opcjonalnych plików cookies do śledzenia użytkowników.",
      ],
    },
    {
      title: "Kontakt przez LinkedIn",
      paragraphs: [
        "Odnośnik kontaktowy prowadzi do zewnętrznego serwisu LinkedIn. Po przejściu na tę stronę obowiązują zasady prywatności i przetwarzania danych określone przez operatora LinkedIn.",
        "Informacje przekazane dobrowolnie w wiadomości mogą zostać wykorzystane do odpowiedzi i rozmowy o potencjalnej współpracy.",
      ],
    },
    {
      title: "Dane techniczne hostingu",
      paragraphs: [
        "Środowisko hostingowe może przetwarzać standardowe dane techniczne niezbędne do bezpiecznego udostępniania strony, takie jak adres IP, czas żądania lub informacje o przeglądarce.",
        "Przed uruchomieniem docelowej domeny zakres tych danych i okres ich przechowywania powinny zostać zweryfikowane względem wybranego dostawcy hostingu.",
      ],
    },
  ],
};


