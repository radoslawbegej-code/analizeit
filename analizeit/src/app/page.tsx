import type { Metadata } from "next";
import { DigitalHero } from "@/components/digital-hero";
import { DigitalSections } from "@/components/digital-sections";

export const metadata: Metadata = {
  title: "ANALIZE — rozwiązania procesowe w WEBCON BPS",
  description: "Digitalizacja procesów, obieg faktur z KSeF, integracje ERP, raportowanie Power BI i SSRS oraz bazy Microsoft SQL Server.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="new-home">
      <DigitalHero />
      <DigitalSections />
    </div>
  );
}
