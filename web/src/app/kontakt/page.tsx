import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/config";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ta kontakt for en uforpliktende prat om ditt neste webdesign-prosjekt. Jeg hjelper med modernisering av nettsider, utvikling av nye digitale løsninger og forbedring av brukeropplevelsen.",
  keywords: ["kontakt webdesigner", "webdesign konsultasjon", "nettside hjelp", "web utvikling kontakt"],
  openGraph: {
    title: "Kontakt | Øen Webdesign",
    description: "Ta kontakt for en uforpliktende prat om ditt neste webdesign-prosjekt.",
    url: `${siteUrl}/kontakt`,
  },
  alternates: {
    canonical: `${siteUrl}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 sm:pt-28 lg:pt-40 pb-16 sm:pb-20 lg:pb-32">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
              
              {/* Left Column - Content */}
              <div>
                <span className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 block">Kontakt</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-[-0.02em] text-black mb-4 sm:mb-6">
                  La oss skape noe fantastisk sammen
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 sm:mb-12 max-w-lg">
                  Har du et prosjekt i tankene, eller bare lyst til en uforpliktende prat? Jeg er alltid åpen for nye muligheter og spennende samarbeid.
                </p>

                {/* Contact Info */}
                <div className="space-y-8 sm:space-y-10">
                  {/* Email */}
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2 block">E-post</span>
                    <a 
                      href="mailto:nicklas.lodoen.oen@gmail.com" 
                      className="group inline-flex items-center gap-2 sm:gap-3 text-base sm:text-xl font-medium text-black hover:text-gray-600 transition-colors break-all sm:break-normal"
                    >
                      nicklas.lodoen.oen@gmail.com
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2 block">Telefon</span>
                    <a 
                      href="tel:+4799408474" 
                      className="text-base sm:text-xl font-medium text-black hover:text-gray-600 transition-colors"
                    >
                      +47 994 08 474
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2 block">Adresse</span>
                    <p className="text-base sm:text-xl font-medium text-black">
                      Ekrhovdbakken 1,<br />
                      5360 Kolltveit
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-200">
                  <span className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 block">Følg meg</span>
                  <div className="flex gap-6">
                    <a 
                      href="https://no.linkedin.com/in/nicklas-%C3%B8en-55a654225" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-medium">LinkedIn</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Photo & Info */}
              <div className="hidden lg:flex flex-col items-start justify-start ml-auto">
                <div className="relative w-[448px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 mb-6">
                  <Image
                    src="/ansatt-transparent.png"
                    alt="Nicklas Øen"
                    fill
                    className="object-cover"
                    priority
                    sizes="448px"
                  />
                </div>
                
                {/* About Info */}
                <div className="w-full max-w-md text-left">
                  <h3 className="text-xl font-medium text-black mb-2">Nicklas Øen</h3>
                  <p className="text-sm text-gray-600 mb-4">Webdesigner & Utvikler</p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Jeg er en dedikert utvikler og designer som brenner for å skape nettsider som både ser bra ut og fungerer sømløst. Med erfaring innen de fleste webteknologier kan jeg skreddersy løsninger som passer akkurat ditt behov.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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

