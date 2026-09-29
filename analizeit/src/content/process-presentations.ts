import type { Realization } from "./realizations";

type ProcessPresentation = {
  problem: string;
  solution: string;
};

export const processPresentations: Record<Realization["motif"], ProcessPresentation> = {
  invoice: {
    problem:
      "Faktura trafia z KSeF lub innego źródła, ale opis kosztu, akceptacje i status księgowania są obsługiwane osobno. Trudno szybko sprawdzić, czego brakuje i kto powinien wykonać kolejny krok.",
    solution:
      "WEBCON prowadzi dokument przez opis kosztu i akceptację, a integracje z KSeF i ERP dostarczają dane oraz statusy. Wyjątki i błędy pozostają widoczne w tej samej sprawie.",
  },
  purchase: {
    problem:
      "Zapotrzebowanie, zgoda budżetowa, zamówienie i odbiór funkcjonują w kilku miejscach. Status trzeba uzgadniać ręcznie, a pełny koszt często staje się widoczny dopiero przy fakturze.",
    solution:
      "Jedna sprawa łączy potrzebę zakupu z budżetem, dostawcą, zamówieniem i odbiorem. Każda pozycja zachowuje powiązanie z pierwotnym zgłoszeniem, także przy dostawach częściowych.",
  },
  people: {
    problem:
      "HR, IT i administracja przygotowują nową osobę równolegle, ale każde zadanie ma innego właściciela. Bez wspólnego statusu braki wychodzą często dopiero przed pierwszym dniem pracy.",
    solution:
      "Jedno zgłoszenie uruchamia zestaw zadań zależny od stanowiska, lokalizacji i daty rozpoczęcia. Przełożony widzi, co jest gotowe, a co nadal wymaga działania.",
  },
  contract: {
    problem:
      "Wersje umowy, uwagi i akceptacje krążą między wiadomościami i plikami. Po podpisaniu trzeba dodatkowo pilnować aneksów, właściciela umowy oraz terminów odnowienia i wypowiedzenia.",
    solution:
      "Jeden rejestr łączy dokument z wersjami, opiniami i decyzjami. Po podpisaniu ta sama sprawa służy do nadzoru nad terminami i kolejnymi zmianami umowy.",
  },
  data: {
    problem:
      "Przy dużym imporcie pojedynczy błąd może zatrzymać całą paczkę. Ręczna weryfikacja zajmuje czas, a ponowienie wysyłki bez historii prób zwiększa ryzyko duplikatów.",
    solution:
      "Każdy rekord jest walidowany i wysyłany niezależnie. Poprawne dane przechodzą dalej, błędy trafiają do korekty, a odpowiedzi API i historia prób pozostają zapisane.",
  },
  report: {
    problem:
      "Dane do raportowania pochodzą z kilku źródeł i nie zawsze używają tych samych definicji statusów, okresów i wskaźników. Duża część pracy polega więc na ręcznym uzgadnianiu danych.",
    solution:
      "Najpierw powstaje wspólny model danych i definicje KPI. Na nim opierają się raporty Power BI, które pozwalają przejść od wyniku zbiorczego do konkretnego procesu i danych źródłowych.",
  },
};
