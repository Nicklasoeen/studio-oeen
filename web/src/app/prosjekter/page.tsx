import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjects } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { siteUrl } from "@/lib/config";
import Header from "@/components/Header";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Prosjekter",
  description: "Se eksempler på nettsider og digitale løsninger jeg har utviklet. Fra moderne nettsider til komplekse webapplikasjoner - se hvordan jeg har hjulpet bedrifter med å modernisere sin digitale tilstedeværelse.",
  keywords: ["webdesign prosjekter", "nettside eksempler", "web utvikling prosjekter", "portfolio", "case studies", "webdesign Norge"],
  openGraph: {
    title: "Prosjekter | Øen Webdesign",
    description: "Se eksempler på nettsider og digitale løsninger jeg har utviklet. Fra moderne nettsider til komplekse webapplikasjoner.",
    url: `${siteUrl}/prosjekter`,
  },
  alternates: {
    canonical: `${siteUrl}/prosjekter`,
  },
};

export default async function ProsjekterPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-[-0.02em] text-black mb-4 sm:mb-6">
            Prosjekter
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl leading-relaxed">
            <span className="text-black">Se hvordan jeg har forvandlet idéer til virkelighet, og oppdag historiene bak</span>{" "}
            <span className="text-gray-400">vellykkede prosjekter som skaper ekte verdi.</span>
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          {projects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects.filter((p: any) => p.slug?.current).map((project: any) => (
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
                    
                    {/* Project Image */}
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).width(1200).height(900).quality(75).auto("format").url()}
                        alt={project.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600" />
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="mt-4">
                    <p className="text-base text-gray-500">{project.client}</p>
                    <p className="text-xl font-medium text-black">
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
                      }).join(' & ')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">Ingen prosjekter ennå.</p>
          )}
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

