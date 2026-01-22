import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/config";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Personvern",
  description: "Personvernpolicy for Øen Webdesign. Les om hvordan vi samler inn og behandler personopplysninger i henhold til norsk personvernlovgivning.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/personvern`,
  },
};

export default function PersonvernPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 sm:pt-28 lg:pt-40 pb-16 sm:pb-20 lg:pb-32">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 block">Personvern</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-[-0.02em] text-black mb-4 sm:mb-6">
                Personvernpolicy
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Sist oppdatert: {new Date().toLocaleDateString('no-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-8 sm:space-y-10">
              {/* Introduksjon */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Introduksjon
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Øen Webdesign ("vi", "oss", "vår") respekterer ditt personvern og er forpliktet til å beskytte dine personopplysninger. Denne personvernpolicyn forklarer hvordan vi samler inn, bruker og beskytter dine personopplysninger når du besøker vår nettside.
                </p>
              </section>

              {/* Personansvarlig */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Personansvarlig
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Personansvarlig for behandlingen av personopplysninger er:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>Nicklas Øen</strong><br />
                    Øen Webdesign<br />
                    Ekrhovdbakken 1<br />
                    5360 Kolltveit<br />
                    Norge
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 mt-4">
                    E-post: <a href="mailto:hei@oeen.no" className="text-black hover:underline">hei@oeen.no</a><br />
                    Telefon: <a href="tel:+4799408474" className="text-black hover:underline">+47 994 08 474</a>
                  </p>
                </div>
              </section>

              {/* Hvilke opplysninger samler vi inn */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Hvilke opplysninger samler vi inn?
                </h2>
                
                <h3 className="text-xl sm:text-2xl font-medium text-black mb-3 sm:mb-4 mt-6">
                  Automatisk innsamlet informasjon
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Når du besøker vår nettside, samler vi automatisk inn visse tekniske opplysninger gjennom Google Analytics:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li>IP-adresse (anonymisert)</li>
                  <li>Nettlesertype og versjon</li>
                  <li>Operativsystem</li>
                  <li>Besøkte sider og tidspunkt for besøk</li>
                  <li>Hvor du kom fra (referrer)</li>
                  <li>Skjermoppløsning og enhetstype</li>
                  <li>Geografisk lokasjon (by/nivå, ikke eksakt adresse)</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-medium text-black mb-3 sm:mb-4 mt-6">
                  Informasjon du gir oss
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Hvis du kontakter oss gjennom kontaktformularen eller e-post, samler vi inn:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li>Navn</li>
                  <li>E-postadresse</li>
                  <li>Telefonnummer (hvis oppgitt)</li>
                  <li>Melding/henvendelse</li>
                </ul>
              </section>

              {/* Hvordan bruker vi opplysningene */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Hvordan bruker vi opplysningene?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Vi bruker de innsamlede opplysningene til følgende formål:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li><strong>Forbedre nettsiden:</strong> Vi analyserer hvordan besøkende bruker nettsiden for å forbedre brukeropplevelsen og innholdet</li>
                  <li><strong>Besvare henvendelser:</strong> Vi bruker kontaktinformasjon til å svare på henvendelser og kommunisere med deg</li>
                  <li><strong>Statistikk og analyse:</strong> Vi bruker anonymiserte data til å forstå trender og forbedre tjenestene våre</li>
                  <li><strong>Teknisk drift:</strong> Vi bruker tekniske opplysninger for å sikre at nettsiden fungerer optimalt</li>
                </ul>
              </section>

              {/* Google Analytics */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Google Analytics
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Vi bruker Google Analytics for å analysere hvordan besøkende bruker nettsiden vår. Google Analytics bruker cookies og lignende teknologier for å samle inn informasjon om bruken av nettsiden.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Google Analytics behandler data på vegne av oss i henhold til Googles personvernpolicy. Du kan lese mer om hvordan Google behandler data her:{" "}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Du kan velge bort Google Analytics ved å installere Google Analytics Opt-out Browser Add-on:{" "}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Google Analytics Opt-out
                  </a>
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Cookies
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Vi bruker cookies for å forbedre brukeropplevelsen og analysere trafikken på nettsiden. Cookies er små tekstfiler som lagres på din enhet når du besøker en nettside.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Du kan kontrollere og slette cookies gjennom innstillingene i nettleseren din. Merk at hvis du deaktiverer cookies, kan noen funksjoner på nettsiden ikke fungere optimalt.
                </p>
              </section>

              {/* Dine rettigheter */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Dine rettigheter
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  I henhold til personvernloven har du følgende rettigheter:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li><strong>Innsyn:</strong> Du har rett til å få innsyn i hvilke personopplysninger vi behandler om deg</li>
                  <li><strong>Rettelse:</strong> Du har rett til å få rettet feilaktige eller ufullstendige opplysninger</li>
                  <li><strong>Sletting:</strong> Du har rett til å kreve sletting av personopplysninger i visse tilfeller</li>
                  <li><strong>Begrensning:</strong> Du har rett til å kreve begrensning av behandlingen i visse tilfeller</li>
                  <li><strong>Dataportabilitet:</strong> Du har rett til å få utlevert dine personopplysninger i et strukturt format</li>
                  <li><strong>Innsigelse:</strong> Du har rett til å gjøre innsigelse mot behandlingen av personopplysninger</li>
                </ul>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  For å utøve dine rettigheter, kan du kontakte oss på e-post:{" "}
                  <a href="mailto:hei@oeen.no" className="text-black hover:underline">
                    hei@oeen.no
                  </a>
                </p>
              </section>

              {/* Datasikkerhet */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Datasikkerhet
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Vi tar datasikkerhet på alvor og har implementert passende tekniske og organisatoriske tiltak for å beskytte dine personopplysninger mot uautorisert tilgang, tap, endring eller destruksjon.
                </p>
              </section>

              {/* Deling av opplysninger */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Deling av opplysninger
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Vi deler ikke dine personopplysninger med tredjeparter, bortsett fra:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li><strong>Google Analytics:</strong> For analyseformål (se avsnittet om Google Analytics)</li>
                  <li><strong>Vercel:</strong> Vår hostingleverandør som behandler data på våre vegne</li>
                  <li><strong>Juridisk påkrevd:</strong> Hvis vi er juridisk forpliktet til å dele opplysninger</li>
                </ul>
              </section>

              {/* Oppbevaring */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Oppbevaring av opplysninger
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Vi oppbevarer personopplysninger så lenge det er nødvendig for å oppfylle formålene de ble innsamlet for, eller så lenge vi er juridisk forpliktet til å oppbevare dem. Google Analytics-data oppbevares i henhold til Googles retningslinjer (standard 26 måneder).
                </p>
              </section>

              {/* Endringer i personvernpolicy */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Endringer i personvernpolicy
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Vi kan oppdatere denne personvernpolicyn fra tid til annen. Eventuelle endringer vil bli publisert på denne siden med en oppdatert "Sist oppdatert"-dato. Vi oppfordrer deg til å gjennomgå denne siden jevnlig for å holde deg informert om hvordan vi beskytter dine personopplysninger.
                </p>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4 sm:mb-6">
                  Kontakt oss
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Hvis du har spørsmål om denne personvernpolicyn eller vår behandling av personopplysninger, kan du kontakte oss:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>Øen Webdesign</strong><br />
                    E-post: <a href="mailto:hei@oeen.no" className="text-black hover:underline">hei@oeen.no</a><br />
                    Telefon: <a href="tel:+4799408474" className="text-black hover:underline">+47 994 08 474</a>
                  </p>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Du har også rett til å klage til Datatilsynet hvis du mener at behandlingen av personopplysninger strider mot personvernloven.{" "}
                  <a 
                    href="https://www.datatilsynet.no" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    www.datatilsynet.no
                  </a>
                </p>
              </section>
            </div>

            {/* Back Link */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tilbake til forsiden
              </Link>
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

