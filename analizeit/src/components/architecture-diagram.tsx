import { ArrowRight } from "./icons";

export function ArchitectureDiagram() {
  return (
    <div
      className="system-map"
      role="img"
      aria-label="ERP, KSeF, API i dane SQL zasilają proces w WEBCON BPS. Proces obsługuje formularze, reguły, uprawnienia i akcje, a wyniki trafiają do systemów biznesowych, raportowania i powiadomień."
    >
      <div className="system-map__group">
        <span>System ERP</span>
        <span>KSeF / REST API</span>
        <span>SQL / słowniki</span>
      </div>

      <ArrowRight size={26} />

      <div className="system-map__core">
        <strong>WEBCON BPS</strong>
        <div>
          <span>Formularze</span>
          <span>Reguły</span>
          <span>Uprawnienia</span>
          <span>Akcje</span>
        </div>
      </div>

      <ArrowRight size={26} />

      <div className="system-map__group">
        <span>Systemy biznesowe</span>
        <span>Power BI / SSRS</span>
        <span>Powiadomienia</span>
      </div>
    </div>
  );
}
