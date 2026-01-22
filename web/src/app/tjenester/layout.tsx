import type { Metadata } from "next";
import { siteUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Tjenester",
  description: "Jeg tilbyr skreddersydde nettsider, digitale systemer, branding, SEO og hosting. Hvert prosjekt tilpasses kundens behov, med fokus på brukervennlighet, design og funksjonalitet som fungerer i praksis.",
  keywords: ["webdesign tjenester", "nettside utvikling", "digital branding", "SEO tjenester", "web hosting", "webdesigner tjenester"],
  openGraph: {
    title: "Tjenester | Øen Webdesign",
    description: "Jeg tilbyr skreddersydde nettsider, digitale systemer, branding, SEO og hosting.",
    url: `${siteUrl}/tjenester`,
  },
  alternates: {
    canonical: `${siteUrl}/tjenester`,
  },
};

export default function TjenesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

