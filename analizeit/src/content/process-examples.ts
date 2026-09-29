export type ProcessExample = {
  slug: string;
  number: string;
  category: string;
  shortTitle: string;
  title: string;
  summary: string;
  situation: string;
  roles: string[];
  scope: { title: string; body: string }[];
  steps: { title: string; owner: string }[];
  exceptions: string;
  result: string;
};

// Illustrative scenarios, not claims about completed client engagements.
export const processExamples: ProcessExample[] = [
  {
    slug: "zaopatrzenie-sklepow", number: "01", category: "Sieci handlowe",
    shortTitle: "Zaopatrzenie sklepów",
    title: "Od potrzeb sklepu do potwierdzonej dostawy.",
    summary: "Materiały do codziennej pracy i pakiety wyposażenia na otwarcia nowych placówek.",
    situation: "Sklepy zgłaszają zapotrzebowanie w mailach i arkuszach. Centrala zbiera listy, sprawdza budżety i ustala dostawy. Przy otwarciu nowej placówki dochodzą pakiety startowe, kilku dostawców i termin, którego nie można przesunąć.",
    roles: ["Kierownik sklepu", "Kierownik regionalny", "Dział zakupów", "Magazyn / dostawca"],
    scope: [
      { title: "Codzienne zaopatrzenie", body: "Katalog materiałów eksploatacyjnych: środki czystości, papier do drukarek, etykiety i opakowania. Sklep wybiera pozycje oraz ilości, a system sprawdza dostępny limit i termin dostawy." },
      { title: "Otwarcie nowej placówki", body: "Lista wyposażenia dobrana do formatu sklepu. Zamówienie jest powiązane z datą otwarcia, a każda grupa materiałów ma osobny termin dostarczenia i osobę odpowiedzialną." },
      { title: "Zakupy i odbiór", body: "Zatwierdzone zapotrzebowania można łączyć w zamówienia do dostawców. Sklep potwierdza odebrane ilości, a braki pozostają otwarte do uzupełnienia." },
    ],
    steps: [{ title: "Zapotrzebowanie", owner: "Sklep" }, { title: "Kontrola limitu", owner: "Reguły budżetowe" }, { title: "Akceptacja", owner: "Region / centrala" }, { title: "Realizacja", owner: "Zakupy i dostawca" }, { title: "Odbiór", owner: "Sklep" }],
    exceptions: "Częściowa dostawa, brak produktu i zamiennik, zamówienie pilne poza harmonogramem, przekroczenie limitu oraz zmiana terminu otwarcia sklepu. Każdy wyjątek ma wskazaną osobę decyzyjną.",
    result: "Centrala widzi, czego potrzebują sklepy, co jest zamówione i czego jeszcze brakuje. Kierownik placówki sprawdza status poszczególnych pozycji bez odtwarzania korespondencji.",
  },
  {
    slug: "dokumenty-kosztowe", number: "02", category: "Finanse",
    shortTitle: "Dokumenty kosztowe",
    title: "Faktura z opisem, akceptacją i historią decyzji.",
    summary: "Rejestracja dokumentu, przypisanie kosztu, akceptacja i przekazanie do księgowości.",
    situation: "Dokument trafia do księgowości, ale brakuje informacji o zakupie, budżecie lub osobie zatwierdzającej. Opis kosztu krąży między działami, a termin płatności zbliża się niezależnie od postępu uzgodnień.",
    roles: ["Księgowość", "Właściciel kosztu", "Osoba akceptująca"],
    scope: [
      { title: "Rejestracja i weryfikacja", body: "Jeden rejestr dokumentów z kontrolą duplikatów, danych kontrahenta i terminów. Faktura może być powiązana z zamówieniem, umową lub potwierdzeniem odbioru." },
      { title: "Opis i podział kosztu", body: "Wskazanie celu wydatku, miejsca powstawania kosztu i projektu. Jeden dokument można rozdzielić między kilka budżetów, z odpowiedzialnością przypisaną do każdej części." },
      { title: "Akceptacja i księgowość", body: "Ścieżka zależy od wartości i właściciela budżetu. Po zebraniu wymaganych decyzji kompletny dokument trafia do księgowości, a historia pozostaje przy sprawie." },
    ],
    steps: [{ title: "Rejestracja", owner: "Księgowość" }, { title: "Weryfikacja", owner: "Kontrola dokumentu" }, { title: "Opis kosztu", owner: "Właściciel kosztu" }, { title: "Akceptacja", owner: "Właściciel budżetu" }, { title: "Księgowanie", owner: "Księgowość" }],
    exceptions: "Korekta faktury, rozbieżność z zamówieniem, brak potwierdzenia dostawy, zwrot do uzupełnienia opisu i zastępstwo osoby zatwierdzającej. Dokument sporny pozostaje oznaczony do wyjaśnienia.",
    result: "Widać, na czyją decyzję czeka dokument i czy zbliża się termin płatności. Księgowość otrzymuje uzgodniony opis oraz komplet zatwierdzeń.",
  },
  {
    slug: "zamowienia-biurowe", number: "03", category: "Administracja",
    shortTitle: "Zamówienia biurowe",
    title: "Potrzeby zespołów w jednym zamówieniu.",
    summary: "Wspólny katalog, limity działowe i zbiorcze zakupy materiałów do biura.",
    situation: "Pracownicy zgłaszają zakupy różnymi kanałami. Administracja ręcznie łączy listy, usuwa duplikaty i wyjaśnia, kto zamówił daną rzecz. Pojedyncze zakupy utrudniają planowanie dostaw i kontrolę wydatków.",
    roles: ["Pracownik", "Kierownik działu", "Administracja", "Dostawca"],
    scope: [
      { title: "Katalog i okna zamówień", body: "Papier, materiały piśmiennicze, artykuły kuchenne i drobne wyposażenie w jednym katalogu. Zgłoszenia zbierane są do ustalonej daty, z określeniem działu i miejsca dostawy." },
      { title: "Limit i konsolidacja", body: "Kontrola budżetu działu przed zakupem. Administracja łączy zaakceptowane pozycje w zamówienia zbiorcze, zachowując powiązanie z każdym zgłaszającym." },
      { title: "Dostawa i wydanie", body: "Potwierdzenie odbioru od dostawcy, a następnie wydania pracownikowi lub działowi. Niezrealizowane pozycje pozostają widoczne w kolejnej dostawie." },
    ],
    steps: [{ title: "Wybór z katalogu", owner: "Pracownik" }, { title: "Zatwierdzenie", owner: "Kierownik działu" }, { title: "Zamówienie zbiorcze", owner: "Administracja" }, { title: "Dostawa", owner: "Dostawca" }, { title: "Wydanie", owner: "Administracja" }],
    exceptions: "Produkt spoza katalogu, zakup pilny, przekroczenie limitu, niedostępność pozycji i zwrot towaru. Zakupy niestandardowe wymagają uzasadnienia oraz wskazanej akceptacji.",
    result: "Administracja pracuje na jednej liście potrzeb, a pracownik widzi, czy jego zamówienie jest zatwierdzone, zamówione czy gotowe do odbioru.",
  },
  {
    slug: "wyjazdy-pracownicze", number: "04", category: "Pracownicy i rozliczenia",
    shortTitle: "Wyjazdy pracownicze",
    title: "Od zgody na wyjazd do rozliczenia wydatków.",
    summary: "Plan podróży, akceptacja budżetu, zaliczka i rozliczenie w ramach jednej sprawy.",
    situation: "Zgoda przełożonego zostaje w mailu, rezerwacje w innym wątku, a rachunki pojawiają się po powrocie. Trudno powiązać planowany koszt z rzeczywistymi wydatkami i ustalić, czego brakuje do zamknięcia wyjazdu.",
    roles: ["Pracownik", "Przełożony", "Administracja", "Księgowość"],
    scope: [
      { title: "Wniosek przed wyjazdem", body: "Cel, miejsce, daty, planowany transport i szacowany koszt. Wniosek jest przypisany do budżetu lub projektu, a przełożony podejmuje decyzję przed rezerwacjami." },
      { title: "Przygotowanie podróży", body: "Zadania dotyczące transportu, noclegu i ewentualnej zaliczki trafiają do właściwych osób. Zmiana terminu lub budżetu pozostaje w historii wniosku." },
      { title: "Rozliczenie po powrocie", body: "Pracownik uzupełnia faktyczny przebieg podróży i dołącza dokumenty wydatków. Rozliczenie uwzględnia zaliczkę oraz zasady organizacji, a księgowość weryfikuje kompletność." },
    ],
    steps: [{ title: "Plan wyjazdu", owner: "Pracownik" }, { title: "Zgoda i budżet", owner: "Przełożony" }, { title: "Rezerwacje", owner: "Administracja" }, { title: "Rozliczenie", owner: "Pracownik" }, { title: "Weryfikacja", owner: "Księgowość" }],
    exceptions: "Odwołanie lub przedłużenie wyjazdu, zmiana kosztu, brak dokumentu wydatku, rozliczenie w innej walucie i niewykorzystana zaliczka. Zmiany wpływające na budżet wracają do akceptacji.",
    result: "Plan, zgody, rezerwacje i wydatki są połączone. Pracownik wie, co uzupełnić, a księgowość widzi zaliczkę i dokumenty potrzebne do zamknięcia rozliczenia.",
  },
];
