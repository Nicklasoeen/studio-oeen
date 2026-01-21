"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    name: "Nettsider",
    title: "Nettsider som fanger oppmerksomhet og bygger tillit.",
    description: "Hver nettside er skreddersydd for din bedrift – fra design til utvikling. Jeg kombinerer moderne designprinsipper med cutting-edge teknologi for å skape nettsider som ikke bare ser fantastiske ut, men som også konverterer besøkende til kunder.",
  },
  {
    name: "Systemer",
    title: "Skreddersydde digitale løsninger som effektiviserer arbeidsflyten.",
    description: "Fra interne verktøy til kundeportaler – jeg bygger systemer som løser reelle utfordringer. Webapplikasjoner, API-integrasjoner og automatisering som sparer tid og ressurser.",
  },
  {
    name: "Branding",
    title: "Visuell identitet som skiller deg ut og blir husket.",
    description: "En sterk merkevare er mer enn bare en logo. Jeg hjelper deg med å utvikle en helhetlig visuell identitet som kommuniserer hvem du er og hva du står for. Logo, fargepalett, typografi og designsystem.",
  },
  {
    name: "SEO",
    title: "Bli funnet av de som faktisk leter etter det du tilbyr.",
    description: "Jeg optimaliserer nettsiden din for søkemotorer slik at du rangerer høyere i Google. Teknisk SEO, hastighetsoptimalisering, strukturerte data og innholdsstrategi.",
  },
  {
    name: "Hosting",
    title: "Rask, sikker og pålitelig hosting du kan stole på.",
    description: "Premium hosting med fokus på hastighet og oppetid. Automatiske sikkerhetskopier, SSL-sertifikat, DDoS-beskyttelse og 24/7 overvåking.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-16">
          {/* Left - Services List */}
          <div className="lg:w-64 shrink-0">
            <span className="text-sm font-medium text-black">
              Tjenester
            </span>

            <ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
              {services.map((service, index) => (
                <li key={service.name}>
                  <button
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    style={{ 
                      fontVariationSettings: activeIndex === index ? '"wght" 700' : '"wght" 400',
                      transition: 'font-variation-settings 0.25s ease'
                    }}
                    className="text-xl sm:text-2xl lg:text-3xl text-left text-black cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle - Heading & Description */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium leading-[1.2] tracking-[-0.02em] text-black transition-all duration-300">
              {services[activeIndex].title}
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl transition-all duration-300">
              {services[activeIndex].description}
            </p>
          </div>

          {/* Right - Button */}
          <div className="lg:w-48 shrink-0 lg:text-right mt-2 lg:mt-0">
            <Link
              href="/tjenester"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-black transition-all hover:border-black"
            >
              Alle tjenester
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

