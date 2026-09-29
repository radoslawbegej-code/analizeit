export function AmbientProcessFlow() {
  return (
    <div className="ambient-process" aria-hidden="true">
      <svg
        className="ambient-process__right"
        viewBox="0 0 720 980"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M690 40 C520 120 615 245 430 330 C270 405 355 520 165 610 C42 668 82 807 210 940" />
        <path d="M742 188 C570 236 626 394 470 470 C330 538 408 676 250 760 C164 806 136 878 178 986" />
        <circle cx="430" cy="330" r="5" />
        <circle cx="165" cy="610" r="5" />
        <circle cx="470" cy="470" r="4" />
      </svg>

      <svg
        className="ambient-process__left"
        viewBox="0 0 620 820"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-40 90 C115 145 46 270 204 334 C352 394 284 520 448 590 C548 634 584 716 552 854" />
        <circle cx="204" cy="334" r="4" />
        <circle cx="448" cy="590" r="5" />
      </svg>
    </div>
  );
}
