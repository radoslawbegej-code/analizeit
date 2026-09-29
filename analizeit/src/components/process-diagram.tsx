export function ProcessDiagram() {
  return (
    <div
      aria-label="Schemat procesu obsługi wniosku z walidacją, ścieżką uzupełnienia, decyzją biznesową i integracją REST"
      className="process-system"
      role="img"
    >
      <div className="process-system__toolbar">
        <div>
          <span className="system-id">AP—01</span>
          <strong>Obsługa wniosku</strong>
        </div>
        <span className="system-status"><i aria-hidden="true" /> MODEL ZWERYFIKOWANY</span>
      </div>
      <div className="process-system__canvas">
        <svg aria-hidden="true" viewBox="0 0 760 500">
          <defs>
            <pattern height="20" id="process-grid" patternUnits="userSpaceOnUse" width="20">
              <path className="grid-line" d="M 20 0 L 0 0 0 20" fill="none" />
            </pattern>
            <marker id="arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6" refY="3.5">
              <path className="arrow-head" d="M0,0 L7,3.5 L0,7 Z" />
            </marker>
          </defs>
          <rect className="grid-fill" height="500" width="760" />
          <g className="lanes">
            <line x1="0" x2="760" y1="174" y2="174" />
            <line x1="0" x2="760" y1="334" y2="334" />
            <text x="18" y="33">UŻYTKOWNIK</text>
            <text x="18" y="199">BIZNES</text>
            <text x="18" y="359">SYSTEM</text>
          </g>

          <g className="flow-lines">
            <path d="M84 105 H126" />
            <path d="M262 105 H302" />
            <path className="flow-line--active" d="M370 105 H438 V246 H472" />
            <path d="M336 139 V226" />
            <path d="M270 258 H214 V138" />
            <path d="M600 258 H626" />
            <path className="flow-line--active" d="M566 292 V402 H518" />
            <path className="flow-line--active" d="M622 402 H680" />
          </g>

          <g className="flow-events">
            <circle className="event-start" cx="68" cy="105" r="15" />
            <circle className="event-end" cx="698" cy="258" r="15" />
            <circle className="event-end event-end--success" cx="698" cy="402" r="15" />
          </g>

          <g className="flow-tasks">
            <rect height="66" rx="2" width="136" x="126" y="72" />
            <text x="144" y="99">FORMULARZ</text>
            <text className="task-title" x="144" y="121">Rejestracja</text>

            <rect height="64" rx="2" width="132" x="270" y="226" />
            <text x="288" y="252">WYJĄTEK</text>
            <text className="task-title" x="288" y="274">Uzupełnienie</text>

            <rect height="64" rx="2" width="128" x="472" y="226" />
            <text x="490" y="252">ZADANIE</text>
            <text className="task-title" x="490" y="274">Akceptacja</text>

            <rect className="integration-task" height="64" rx="2" width="128" x="390" y="370" />
            <text x="408" y="396">INTEGRACJA</text>
            <text className="task-title" x="408" y="418">ERP / REST</text>
          </g>

          <g className="flow-decisions">
            <path d="M336 71 370 105 336 139 302 105Z" />
            <text x="319" y="102">DANE</text>
            <text x="312" y="115">PEŁNE?</text>

            <path d="M566 224 600 258 566 292 532 258Z" />
            <text x="548" y="255">ZGODA?</text>
          </g>

          <g className="flow-labels">
            <text x="380" y="96">TAK</text>
            <text x="344" y="185">NIE</text>
            <text x="608" y="250">NIE</text>
            <text x="574" y="324">TAK</text>
            <text x="650" y="244">ODRZUCENIE</text>
            <text x="653" y="388">ZAPIS</text>
          </g>
        </svg>
      </div>
      <div className="process-system__footer">
        <span><small>WĘZŁY</small><strong>08</strong></span>
        <span><small>DECYZJE</small><strong>02</strong></span>
        <span><small>WYJĄTKI</small><strong>01</strong></span>
        <span><small>INTEGRACJE</small><strong>REST</strong></span>
      </div>
    </div>
  );
}
