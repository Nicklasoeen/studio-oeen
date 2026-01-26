"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const services = [
  {
    id: "nettsider",
    name: "Nettsider",
    description: "Jeg lager nettsider som fanger oppmerksomhet og bygger tillit. Hver nettside er skreddersydd for din bedrift – fra design til utvikling, med fokus på brukeropplevelse og konvertering.",
    includes: [
      "UI/UX Design",
      "Responsivt design",
      "Next.js & React",
      "Headless CMS",
      "Ytelsesoptimalisering",
      "Sikkerhet & GDPR",
    ],
    image: "/Untitled design (75).png",
  },
  {
    id: "systemer",
    name: "Systemer",
    description: "Skreddersydde digitale løsninger som effektiviserer arbeidsflyten din. Fra interne verktøy til kundeportaler – jeg bygger systemer som løser reelle utfordringer.",
    includes: [
      "Webapplikasjoner",
      "Kundeportaler",
      "Interne verktøy",
      "API-integrasjoner",
      "Databaseløsninger",
      "Automatisering",
    ],
    image: "/Untitled design (57).png",
  },
  {
    id: "branding",
    name: "Branding",
    description: "En sterk merkevare er mer enn bare en logo. Jeg utvikler helhetlig visuell identitet som kommuniserer hvem du er og hva du står for.",
    includes: [
      "Logo & visuell identitet",
      "Fargepalett",
      "Typografi",
      "Ikonografi",
      "Brandguide",
      "Sosiale medier-profiler",
    ],
    image: "/Screenshot 2026-01-02 at 12.13.42.png",
  },
  {
    id: "seo",
    name: "SEO",
    description: "Bli funnet av de som faktisk leter etter det du tilbyr. Jeg optimaliserer nettsiden din for søkemotorer slik at du rangerer høyere i Google.",
    includes: [
      "Teknisk SEO",
      "Hastighetsoptimalisering",
      "Søkeordsanalyse",
      "Innholdsstrategi",
      "Strukturerte data",
      "Lokal SEO",
    ],
    image: "/image-gen (10).png",
  },
  {
    id: "hosting",
    name: "Hosting",
    description: "Rask, sikker og pålitelig hosting du kan stole på. Din nettside kjører på moderne infrastruktur med automatiske sikkerhetskopier og 24/7 overvåking.",
    includes: [
      "Premium hosting",
      "SSL-sertifikat",
      "Automatisk backup",
      "DDoS-beskyttelse",
      "CDN",
      "Domeneadministrasjon",
    ],
    image: "/image-gen (2).jpg",
  },
];

export default function TjenesterPage() {
  const [activeId, setActiveId] = useState(services[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = services[0].id;
      
      services.forEach((service) => {
        const element = sectionRefs.current[service.id];
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = service.id;
          }
        }
      });
      
      setActiveId(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 py-12">
                <span className="text-sm font-medium text-black">
                  Tjenester
                </span>
                <ul className="mt-6 space-y-2">
                  {services.map((service) => (
                    <li key={service.id}>
                      <button
                        onMouseEnter={() => setActiveId(service.id)}
                        onClick={() => scrollToSection(service.id)}
                        style={{
                          fontVariationSettings: activeId === service.id ? '"wght" 700' : '"wght" 400',
                          transition: 'font-variation-settings 0.25s ease',
                        }}
                        className="text-xl sm:text-2xl lg:text-3xl text-left text-black cursor-pointer"
                      >
                        {service.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Service Sections */}
            <main className="flex-1 lg:pl-16">
            {services.map((service, index) => (
              <section
                key={service.id}
                id={service.id}
                ref={(el) => { sectionRefs.current[service.id] = el; }}
                className={`py-10 sm:py-16 lg:py-24 ${index !== 0 ? 'border-t border-gray-300' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                  {/* Left - Content */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4 sm:mb-6">
                      {service.name}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10">
                      {service.description}
                    </p>

                    {/* Services Include */}
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4 sm:mb-6 block">
                        Inkluderer:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right - Image */}
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </section>
            ))}
            </main>
          </div>
        </div>
      </div>

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

