import { ArrowRight } from "./icons";

export function ArchitectureDiagram() {
  return (
    <div className="system-map" role="img" aria-label="System ERP, API i dane referencyjne są połączone z obiegiem. Obieg obsługuje formularze, reguły i uprawnienia oraz przekazuje dane do powiadomień, archiwum i raportów.">
      <div className="system-map__group"><span>System ERP</span><span>API zewnętrzne</span><span>Dane referencyjne</span></div>
      <ArrowRight size={26} />
      <div className="system-map__core"><strong>Obieg procesu</strong><div><span>Formularze</span><span>Reguły</span><span>Uprawnienia</span><span>Integracje</span></div></div>
      <ArrowRight size={26} />
      <div className="system-map__group"><span>Powiadomienia</span><span>Archiwum</span><span>Raporty</span></div>
    </div>
  );
}
