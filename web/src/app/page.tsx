import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getFeaturedProjects, getFeaturedTestimonials } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { siteUrl } from "@/lib/config";
import Header from "@/components/Header";

// Lazy load below-fold components to reduce initial JS bundle
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ImageShowcase = dynamic(() => import("@/components/ImageShowcase"), {
  loading: () => <div className="min-h-[400px]" />,
});

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Webdesign og Nettsideutvikling | Profesjonell Webdesigner i Norge",
  description: "Øen Webdesign tilbyr profesjonell webdesign og nettsideutvikling. Jeg hjelper bedrifter med å modernisere utdaterte nettsider og utvikle nye digitale løsninger. Spesialisert på moderne webdesign, responsive nettsider og optimalisering for søkemotorer. Kontakt meg for en uforpliktende prat om ditt neste webdesign-prosjekt.",
  keywords: ["webdesign", "nettside", "nettsideutvikling", "webdesigner", "webdesign Norge", "nettside utvikler", "modernisering nettsider", "responsive webdesign", "Next.js", "React", "digital design", "web utvikling", "SEO", "brukeropplevelse", "UX design"],
  openGraph: {
    title: "Webdesign og Nettsideutvikling | Øen Webdesign",
    description: "Profesjonell webdesign og nettsideutvikling i Norge. Jeg hjelper bedrifter med å modernisere utdaterte nettsider og utvikle nye digitale løsninger som tiltrekker kunder, bygger tillit og driver vekst.",
    url: siteUrl,
    type: "website",
    locale: "no_NO",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default async function Home() {
  const [projects, testimonials] = await Promise.all([
    getFeaturedProjects(),
    getFeaturedTestimonials(),
  ]);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Øen Webdesign",
    "description": "Profesjonell webdesign og nettsideutvikling i Norge. Jeg hjelper bedrifter med å modernisere utdaterte nettsider, utvikle nye digitale løsninger og optimalisere for søkemotorer. Spesialisert på moderne webdesign, responsive nettsider og brukeropplevelse.",
    "url": siteUrl,
    "logo": `${siteUrl}/logo/new-oeen-black.svg`,
    "image": `${siteUrl}/logo/new-oeen-black.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ekrhovdbakken 1",
      "addressLocality": "Kolltveit",
      "postalCode": "5360",
      "addressCountry": "NO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47-994-08-474",
      "contactType": "customer service",
      "email": "hei@oeen.no",
      "availableLanguage": "Norwegian"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Norge"
    },
    "serviceType": ["Webdesign", "Nettsideutvikling", "Modernisering av nettsider", "Digital design", "Responsive webdesign", "SEO", "Brukeropplevelse"],
    "knowsAbout": ["Next.js", "React", "TypeScript", "Webdesign", "Nettside", "UX Design", "UI Design", "Responsive Design", "Søkemotoroptimalisering"],
    "keywords": "webdesign, nettside, nettsideutvikling, webdesigner, webdesign Norge, responsive design, SEO"
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          {/* Services Tags */}
          <div className="mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm text-gray-600">
              Webdesign · Nettsider · Branding · Hosting
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-[-0.02em]">
            <span className="text-black">Jeg hjelper bedrifter med å transformere utdaterte nettsider til moderne digitale opplevelser</span>{" "}
            <span className="text-gray-400">som tiltrekker kunder, bygger tillit og driver vekst.</span>
          </h1>

          {/* SEO-friendly intro text */}
          <div className="mt-6 sm:mt-8 max-w-3xl">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Som erfaren webdesigner og utvikler spesialiserer jeg meg på å skape moderne nettsider som kombinerer profesjonelt design med avansert teknologi. Jeg tilbyr alt fra komplett nettsideutvikling og modernisering av eksisterende nettsider til optimalisering for søkemotorer og forbedring av brukeropplevelsen. Med fokus på responsive design, rask lastetid og brukervennlighet, hjelper jeg bedrifter i hele Norge med å styrke sin digitale tilstedeværelse.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-3 sm:px-6 sm:py-4 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
              aria-label="Kontakt meg for webdesign og nettsideutvikling"
            >
              Kom i kontakt
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="prosjekter" className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="mx-auto max-w-screen-2xl">
          {/* SEO-friendly section intro */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4">
              Webdesign og Nettsideutvikling Prosjekter
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Utforsk eksempler på nettsider og digitale løsninger jeg har utviklet for bedrifter i ulike bransjer. Fra moderne nettsider til komplekse webapplikasjoner – hvert prosjekt er skreddersydd for å møte kundens unike behov og mål.
            </p>
          </div>

          {projects?.length > 0 ? (
            <>
              {/* First Project - Full Width */}
              {projects[0] && projects[0].slug?.current && (
                <Link href={`/prosjekter/${projects[0].slug.current}`} className="group block">
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/9]">
                    {/* Arrow Icon */}
                    <div className="absolute bottom-6 left-6 z-10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all group-hover:bg-white group-hover:text-black">
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Project Image - LCP element, prioritized */}
                    {projects[0].mainImage ? (
                      <Image
                        src={urlFor(projects[0].mainImage).width(2400).height(1350).quality(80).auto("format").url()}
                        alt={`${projects[0].client} - ${projects[0].title} nettside utviklet av Øen Webdesign`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <Image
                        src="/image-gen (9).png"
                        alt="Moderne nettside design og utvikling eksempel - Øen Webdesign"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="mt-3 sm:mt-4">
                    <p className="text-lg sm:text-xl font-medium text-black">{projects[0].client}</p>
                    <p className="text-sm sm:text-base text-gray-500">
                      {projects[0].categories?.map((cat: string) => {
                        const labels: Record<string, string> = {
                          'nettside': 'Nettside',
                          'system': 'System',
                          'grafisk': 'Grafisk',
                          'app': 'App',
                          'e-handel': 'E-handel',
                          'innholdsproduksjon': 'Innholdsproduksjon'
                        };
                        return labels[cat] || cat;
                      }).join(', ')}
                    </p>
                  </div>
                </Link>
              )}

              {/* Remaining Projects - 2 Column Grid */}
              {projects.length > 1 && (
                <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {projects.slice(1).filter((p: any) => p.slug?.current).map((project: any) => (
                    <Link 
                      key={project._id} 
                      href={`/prosjekter/${project.slug.current}`} 
                      className="group block"
                    >
                      <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                        {/* Arrow Icon */}
                        <div className="absolute bottom-4 left-4 z-10">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all group-hover:bg-white group-hover:text-black">
                            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Project Image - below fold, lazy loaded */}
                        {project.mainImage ? (
                          <Image
                            src={urlFor(project.mainImage).width(1200).height(900).quality(75).auto("format").url()}
                            alt={`${project.client} - ${project.title} webdesign prosjekt utviklet av Øen Webdesign`}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600 transition-transform duration-500 group-hover:scale-[1.02]" aria-label="Webdesign prosjekt placeholder" />
                        )}
                      </div>
                      
                      {/* Project Info */}
                      <div className="mt-3 sm:mt-4">
                        <p className="text-base sm:text-lg font-medium text-black">{project.client}</p>
                        <p className="text-sm text-gray-500">
                          {project.categories?.map((cat: string) => {
                            const labels: Record<string, string> = {
                              'nettside': 'Nettside',
                              'system': 'System',
                              'grafisk': 'Grafisk',
                              'app': 'App',
                              'e-handel': 'E-handel',
                              'innholdsproduksjon': 'Innholdsproduksjon'
                            };
                            return labels[cat] || cat;
                          }).join(', ')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Fallback - Show placeholder */
            <Link href="#" className="group block">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9]">
                {/* Arrow Icon */}
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all group-hover:bg-white group-hover:text-black">
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                
                {/* Placeholder Image */}
                <Image
                  src="/image-gen (9).png"
                  alt="Moderne nettside design og webdesign eksempel - Øen Webdesign"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              
              {/* Project Info */}
              <div className="mt-3 sm:mt-4">
                <p className="text-lg sm:text-xl font-medium text-black">Seafood Corporate Advisors AS</p>
                <p className="text-sm sm:text-base text-gray-500">Nettside</p>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section aria-label="Webdesign tjenester">
        <ServicesSection />
      </section>

      {/* Visual Showcase Section */}
      <ImageShowcase testimonials={testimonials} />

      {/* Projects CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8">
            {/* Label */}
            <div className="lg:w-48 shrink-0">
              <span className="text-sm font-medium text-black">Prosjekter</span>
            </div>
            
            {/* Heading */}
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em] mb-4">
                <span className="text-black">Se hvordan vi har gjort idéer om til virkelighet.</span>{" "}
                <span className="text-gray-400">Bli med inn i historiene bak vellykkede design som virkelig gjør en forskjell.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Utforsk vårt portefølje av webdesign og nettsideutvikling prosjekter. Fra moderne nettsider til komplekse digitale løsninger – hvert prosjekt viser vår ekspertise innen webdesign, brukeropplevelse og teknisk utvikling. <Link href="/prosjekter" className="text-black underline hover:no-underline">Se alle prosjekter</Link> for å få inspirasjon til ditt neste webdesign-prosjekt.
              </p>
            </div>
            
            {/* Button */}
            <div className="lg:w-48 shrink-0 lg:text-right mt-2 lg:mt-0">
              <Link
                href="/prosjekter"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-black transition-all hover:border-black"
                aria-label="Se alle webdesign og nettsideutvikling prosjekter"
              >
                Se flere
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
