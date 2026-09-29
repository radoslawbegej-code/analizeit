import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { realizations } from "@/content/realizations";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/uslugi", "/realizacje", "/o-mnie", "/kontakt", "/polityka-prywatnosci", ...realizations.map(item => `/realizacje/${item.slug}`)];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/polityka-prywatnosci" ? 0.2 : 0.8,
  }));
}
