import type { Realization } from "./realizations";

type ProcessPresentation = {
  problem: string;
  solution: string;
};

export const processPresentations: Record<Realization["motif"], ProcessPresentation> = {
  invoice: {
    problem:
      "Faktura trafia do organizacji, ale jej dalsza obsługa jest rozproszona. Opis kosztu, akceptacje i status księgowania trzeba ustalać w kilku miejscach, a brak lub duplikat często wychodzi dopiero na końcu procesu.",
    solution:
      "Jeden obieg łączy dokument z opisem kosztu, regułami akceptacji i statusem integracji. KSeF oraz ERP pozostają źródłami danych, a WEBCON porządkuje decyzje, odpowiedzialność i obsługę wyjątków.",
  },
  purchase: {
    problem:
      "Potrzeba zakupu, zgoda budżetowa, zamówienie i odbiór są obsługiwane oddzielnie. W efekcie trudno ocenić zobowiązania przed fakturą i szybko ustalić, na jakim etapie jest konkretna pozycja.",
    solution:
      "Proces zachowuje jedno powiązanie od zapotrzebowania do odbioru. Decyzje budżetowe, dane dostawcy i status zamówienia są widoczne w tej samej sprawie, także przy dostawach częściowych.",
  },
  people: {
    problem:
      "Informacja o nowym pracowniku uruchamia zadania w kilku działach, ale bez wspólnego planu. Sprzęt, dokumenty i dostępy mają różnych właścicieli, a opóźnienie jednego obszaru może być widoczne dopiero tuż przed rozpoczęciem pracy.",
    solution:
      "Jedno zgłoszenie tworzy zestaw zadań zależny od stanowiska, lokalizacji i daty rozpoczęcia. HR, IT, administracja i przełożony pracują równolegle, a wspólny status pokazuje, czego jeszcze brakuje.",
  },
  contract: {
    problem:
      "Wersje umowy, uwagi i akceptacje krążą między wiadomościami i plikami. Po podpisaniu dochodzi kolejny problem: trzeba pamiętać o właścicielu umowy, aneksach oraz terminach odnowienia lub wypowiedzenia.",
    solution:
      "Rejestr umów łączy dokument z jego wersjami, opiniami i decyzjami. Po podpisaniu ten sam proces przechodzi w tryb nadzoru nad terminami, zobowiązaniami i powiązanymi dokumentami.",
  },
  data: {
    problem:
      "Przy dużym imporcie jeden błędny rekord może zatrzymać całą paczkę. Ręczna weryfikacja jest wolna, a ponawianie wysyłki bez historii prób zwiększa ryzyko duplikatów i niejasnych statusów.",
    solution:
      "Walidacja i wysyłka są rozdzielone na poziom pojedynczego rekordu. Poprawne dane mogą przejść dalej, błędy trafiają do korekty, a każda próba komunikacji z API pozostawia jednoznaczny ślad.",
  },
  report: {
    problem:
      "Dane potrzebne do raportowania pochodzą z kilku źródeł i często mają różne definicje statusów lub okresów. Zanim powstanie raport, część pracy polega na ręcznym uzgadnianiu, co właściwie oznacza dana liczba.",
    solution:
      "Najpierw powstaje wspólny model danych i definicje KPI. Dopiero na tej podstawie budowane są raporty Power BI, które pozwalają przejść od wyniku zbiorczego do procesu, etapu lub danych źródłowych.",
  },
};
