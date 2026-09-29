import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ANALIZE — rozwiązania procesowe",
    short_name: "ANALIZE",
    description: "Analiza, development i optymalizacja rozwiązań WEBCON BPS.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef0f2",
    theme_color: "#eef0f2",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
