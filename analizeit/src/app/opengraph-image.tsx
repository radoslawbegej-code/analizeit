import { ImageResponse } from "next/og";

export const alt = "ANALIZE — rozwiązania procesowe w WEBCON BPS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#eef0f2",
          color: "#111418",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 38, fontWeight: 800, letterSpacing: "-2px" }}>
          ANALIZE<span style={{ color: "#3758f9" }}>.</span>
        </div>
        <div style={{ alignItems: "flex-end", display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 790 }}>
            <span style={{ color: "#6a6962", fontSize: 18, letterSpacing: "4px", marginBottom: 24 }}>WEBCON BPS · ANALIZA · DEVELOPMENT</span>
            <span style={{ fontSize: 72, fontWeight: 500, letterSpacing: "-4px", lineHeight: 0.98 }}>Proces nie kończy się na diagramie.</span>
          </div>
          <div style={{ alignItems: "center", background: "#111418", display: "flex", height: 118, justifyContent: "center", width: 118 }}>
            <span style={{ background: "#2457ff", height: 24, width: 24 }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
