import { siteConfig } from "@/content/site";

export function StructuredData() {
  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      description: siteConfig.description,
      areaServed: "PL",
      founder: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.owner,
      jobTitle: "WEBCON BPS Developer",
      worksFor: { "@id": `${siteConfig.url}/#business` },
      url: `${siteConfig.url}/o-mnie`,
    },
  ];

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
