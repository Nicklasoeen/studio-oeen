import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getFeaturedTestimonials } from "@/lib/queries";
import { siteUrl } from "@/lib/config";
import Header from "@/components/Header";

// Lazy load below-fold components
const ImageShowcase = dynamic(() => import("@/components/ImageShowcase"), {
  loading: () => <div className="min-h-[400px]" />,
});

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Om meg",
  description: "Jeg er en dedikert webdesigner og utvikler som brenner for å skape nettsider som både ser bra ut og fungerer sømløst. Med erfaring innen Next.js, React og moderne webteknologier hjelper jeg bedrifter med å modernisere sine digitale løsninger.",
  keywords: ["webdesigner", "web utvikler", "Next.js utvikler", "React utvikler", "webdesign Norge", "freelance webdesigner"],
  openGraph: {
    title: "Om meg | Øen Webdesign",
    description: "Jeg er en dedikert webdesigner og utvikler som brenner for å skape nettsider som både ser bra ut og fungerer sømløst.",
    url: `${siteUrl}/om-meg`,
  },
  alternates: {
    canonical: `${siteUrl}/om-meg`,
  },
};

const services = [
  {
    title: "Webdesign",
    description: "Med erfaring innen nettsidebyggere som WordPress, Wix, Framer & Webflow er jeg sikker på at vi finner riktig løsning for deg.",
  },
  {
    title: "UX & UI Design",
    description: "Jeg lager brukerfokuserte digitale løsninger med erfaring i Figma og Adobe XD, fra brukerundersøkelser og prototyper til UI-design, UX-testing og responsivt design.",
  },
  {
    title: "Søkemotoroptimalisering",
    description: "Alle nettsider blir søkemotoroptimaliserte og fokus på at de scorer bra i søkeresultatene.",
  },
  {
    title: "Drift",
    description: "Alle nettsider kan driftes av meg om dette er noe du ønsker, ellers kan nettsiden også driftes av deg om dette passer bedre.",
  },
];

const process = [
  {
    number: "01",
    title: "Behov & mål",
    description: "Jeg starter alltid med en grundig samtale for å forstå virksomheten, målgruppen og hva du ønsker å oppnå med nettsiden.",
  },
  {
    number: "02",
    title: "Planlegging & struktur",
    description: "Basert innsikten lager jeg skisser, wireframes og en tydelig struktur som legger grunnlaget for design og funksjonalitet.",
  },
  {
    number: "03",
    title: "Utkast & prototype",
    description: "På større prosjekter utvikler jeg design gjennom Figma eller XD som deretter blir omgjort til WordPress eller noe annet som vi sammen har kommet frem til. På mindre prosjekter blir forsiden ofte brukt som utkast og vi tar en gjennomgang før videre arbeid.",
  },
  {
    number: "04",
    title: "Produksjon & lansering",
    description: "Når designet er godkjent, bygger jeg nettsiden med fokus på brukervennlighet, responsivitet og kvalitet, deretter blir lansering avtalt og gjennomført. Deretter går avtalen over til drift om dette er avtalt.",
  },
];

export default async function OmMegPage() {
  const testimonials = await getFeaturedTestimonials();
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <span className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 block">Om meg</span>
          <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-[-0.02em] text-black mb-4 sm:mb-6">
            En webdesigner som moderniserer og gir nytt liv i gamle nettsider
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Med erfaring innen de fleste webteknologier kan jeg skreddersy nettsider av de fleste typer
          </p>
        </div>
      </section>

      {/* Hero Images */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/Untitled design (72).png"
                alt="Laptop mockup"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/Untitled design (50).png"
                alt="Phone mockup"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-24">
            {/* Left Label */}
            <div className="lg:w-48 shrink-0">
              <span className="text-sm text-black">Hvem er jeg?</span>
            </div>
            
            {/* Right Content */}
            <div className="flex-1 max-w-4xl">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-6 sm:mb-10">
                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em] mb-6 sm:mb-8">
                    <span className="text-black">Jeg er en dedikert utvikler og designer som brenner for å skape nettsider som både ser bra ut og fungerer sømløst.</span>
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                    <p>
                      For meg handler hvert prosjekt om mer enn bare design, det handler om å gi bedrifter et digitalt uttrykk de kan være stolte av, og som virkelig representerer hvem de er.
                    </p>
                    <p>
                      Jeg jobber tett med kundene mine og legger vekt på å forstå virksomheten deres, målene deres og det som gjør dem unike. Det gjør at jeg kan skreddersy løsninger som ikke bare er teknisk solide, men også gjennomtenkte, brukervennlige og visuelt tydelige.
                    </p>
                  </div>
                </div>
                
                {/* Photo */}
                <div className="lg:w-80 shrink-0">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
                    <Image
                      src="/ansatt-transparent.png"
                      alt="Nicklas Øen"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Med lidenskap for faget og øye for detaljer leverer jeg arbeid som kombinerer kreativitet, struktur og kvalitet. Målet mitt er alltid det samme: å bygge nettsider som gjør en forskjell for deg, for kundene dine og for merkevaren din.
                </p>
                <p>
                  Hvis du ønsker en trygg, personlig og profesjonell samarbeidspartner som virkelig bryr seg om resultatet, er du på rett sted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="/Untitled design (75).png"
              alt="Work showcase"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-24">
            {/* Left Label */}
            <div className="lg:w-48 shrink-0">
              <span className="text-sm text-black">Tjenester</span>
            </div>
            
            {/* Right Content */}
            <div className="flex-1 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em] mb-10 sm:mb-12">
                <span className="text-black">Jeg tilbyr skreddersydde nettsider og digitale løsninger for bedrifter som ønsker å styrke sin tilstedeværelse på nett.</span>{" "}
                <span className="text-gray-400">Hvert prosjekt tilpasses kundens behov, med fokus på brukervennlighet, design og funksjonalitet som fungerer i praksis.</span>
              </h2>
              
              <div className="space-y-8 sm:space-y-10">
                {services.map((service) => (
                  <div key={service.title}>
                    <h3 className="text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ImageShowcase testimonials={testimonials} />

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-24">
            {/* Left Label */}
            <div className="lg:w-48 shrink-0">
              <span className="text-sm text-black">Prosessen</span>
            </div>
            
            {/* Right Content */}
            <div className="flex-1 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em] text-black mb-10 sm:mb-12">
                Slik jobber jeg når jeg starter på produksjon av en nettside for deg
              </h2>
              
              <div className="space-y-8 sm:space-y-12">
                {process.map((step) => (
                  <div key={step.number} className="flex gap-4 sm:gap-6">
                    <span className="text-base sm:text-lg font-medium text-gray-400 shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-24 items-start">
            {/* Left Label */}
            <div className="lg:w-48 shrink-0">
              <span className="text-sm text-black">Prosjekter</span>
            </div>
            
            {/* Middle Content */}
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em]">
                <span className="text-black">Se hvordan vi har gjort idéer om til virkelighet, og utforsk historiene bak</span>{" "}
                <span className="text-gray-400">vellykkede produktdesign som virkelig gjør en forskjell.</span>
              </h2>
            </div>
            
            {/* Right Button */}
            <div className="lg:shrink-0 mt-2 lg:mt-0">
              <Link
                href="/prosjekter"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 sm:px-6 sm:py-4 text-sm font-medium text-black transition-all hover:border-black"
              >
                Se prosjekter
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex flex-col border-t border-gray-800">
        <div className="flex-1 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32">
          <div className="mx-auto max-w-screen-2xl">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-10 sm:gap-12 lg:gap-16">
              {/* Left - CTA */}
              <div className="lg:max-w-xl">
                <span className="text-xs sm:text-sm text-white mb-4 sm:mb-6 block">Kontakt</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-[1.15] tracking-[-0.02em] mb-8 sm:mb-10">
                  Har du et prosjekt i tankene? Jeg er alltid åpen for en uforpliktende prat.
                </h2>
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 sm:px-6 sm:py-4 text-sm font-medium text-black transition-all hover:bg-gray-100"
                >
                  Kontakt
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
                
                {/* Contact Info */}
                <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                  <a 
                    href="mailto:hei@oeen.no" 
                    className="block text-sm sm:text-base text-white/70 hover:text-white transition-colors"
                  >
                    hei@oeen.no
                  </a>
                  <a 
                    href="tel:+4799408474" 
                    className="block text-sm sm:text-base text-white/70 hover:text-white transition-colors"
                  >
                    +47 994 08 474
                  </a>
                </div>
              </div>

              {/* Right - Navigation */}
              <div className="flex gap-10 sm:gap-16 lg:gap-24">
                {/* Pages */}
                <div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li>
                      <Link href="/" className="text-sm sm:text-base text-white hover:text-gray-400 transition-colors">
                        Hjem
                      </Link>
                    </li>
                    <li>
                      <Link href="/prosjekter" className="text-sm sm:text-base text-white hover:text-gray-400 transition-colors">
                        Prosjekter
                      </Link>
                    </li>
                    <li>
                      <Link href="/tjenester" className="text-sm sm:text-base text-white hover:text-gray-400 transition-colors">
                        Tjenester
                      </Link>
                    </li>
                    <li>
                      <Link href="/om-meg" className="text-sm sm:text-base text-white hover:text-gray-400 transition-colors">
                        Om meg
                      </Link>
                    </li>
                    <li>
                      <Link href="/kontakt" className="text-sm sm:text-base text-white hover:text-gray-400 transition-colors">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social */}
                <div>
                  <a 
                    href="https://no.linkedin.com/in/nicklas-%C3%B8en-55a654225" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-4 sm:gap-8 text-sm sm:text-base text-white hover:text-gray-400 transition-colors"
                  >
                    LinkedIn
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mx-auto max-w-screen-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <p className="text-white text-xs sm:text-sm">
              Copyright @ {new Date().getFullYear()} Øen Webdesign
            </p>
            <Link href="/personvern" className="text-white text-xs sm:text-sm hover:text-gray-400 transition-colors">
              Personvern
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

