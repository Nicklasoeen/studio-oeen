import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getProjects } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { siteUrl } from "@/lib/config";
import { PortableText } from "next-sanity";
import Header from "@/components/Header";

export const revalidate = 60;

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects?.map((project: any) => ({
    slug: project.slug.current,
  })) || [];
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  
  if (!project) {
    return {
      title: "Prosjekt ikke funnet",
    };
  }
  
  const title = `${project.client} - ${project.title}`;
  const description = project.excerpt || project.subheading || `Nettside og digital løsning for ${project.client}. ${project.title}.`;
  const categories = project.categories?.map((cat: string) => {
    const labels: Record<string, string> = {
      'nettside': 'Nettside',
      'system': 'System',
      'grafisk': 'Grafisk',
      'app': 'App',
      'e-handel': 'E-handel',
      'innholdsproduksjon': 'Innholdsproduksjon'
    };
    return labels[cat] || cat;
  }).join(', ') || '';
  
  return {
    title,
    description,
    keywords: [
      "webdesign prosjekt",
      project.client,
      categories,
      "nettside utvikling",
      "digital løsning"
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/prosjekter/${slug}`,
      type: "website",
      ...(project.mainImage && {
        images: [{
          url: urlFor(project.mainImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.client}`,
        }],
      }),
    },
    alternates: {
      canonical: `${siteUrl}/prosjekter/${slug}`,
    },
  };
}

// Custom PortableText components for project description
const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em] text-black mb-6 sm:mb-8">
        {children}
      </h2>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em] text-black mb-6 sm:mb-8">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-medium leading-[1.2] text-black mb-4 sm:mb-6">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-base sm:text-lg leading-relaxed text-black mb-6">
        {children}
      </p>
    ),
  },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    'nettside': 'Nettside',
    'system': 'System',
    'grafisk': 'Grafisk',
    'app': 'App',
    'e-handel': 'E-handel',
    'innholdsproduksjon': 'Innholdsproduksjon'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Project Info */}
      <section className="pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap gap-x-8 sm:gap-x-16 gap-y-4 mb-8 sm:mb-12">
            {project.industry && (
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Industri</p>
                <p className="text-sm sm:text-base font-medium text-black">{project.industry}</p>
              </div>
            )}
            <div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">Kunde</p>
              <p className="text-sm sm:text-base font-medium text-black">{project.client}</p>
            </div>
            {project.categories && project.categories.length > 0 && (
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Leveranse</p>
                <p className="text-sm sm:text-base font-medium text-black">
                  {project.categories.map((cat: string) => categoryLabels[cat] || cat).join(', ')}
                </p>
              </div>
            )}
            {project.completedAt && (
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">År</p>
                <p className="text-sm sm:text-base font-medium text-black">
                  {new Date(project.completedAt).getFullYear()}
                </p>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-[-0.02em] text-black">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Main Image */}
      {project.mainImage && (
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-28">
          <div className="mx-auto max-w-screen-2xl">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
              <Image
                src={urlFor(project.mainImage).width(1920).height(1080).quality(80).auto("format").url()}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Description Block */}
      {(project.subheading || project.description) && (
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-28">
          <div className="mx-auto max-w-screen-2xl">
            <div className="max-w-4xl mx-auto lg:mx-0">
              {/* Subheading */}
              {project.subheading && (
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-[-0.02em] text-black mb-6 sm:mb-8">
                  {project.subheading}
                </h2>
              )}
              
              {project.description && (
                <PortableText 
                  value={project.description} 
                  components={portableTextComponents}
                />
              )}
              
              {/* Visit Website Button */}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-gray-200 px-6 py-4 text-sm font-medium text-black transition-all hover:border-black mt-4"
                >
                  Besøk nettside
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
          <div className="mx-auto max-w-screen-2xl">
            {/* Gallery Header */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black">
                Flere bilder fra prosjektet
              </h2>
            </div>
            
            {/* Gallery Grid - Varied layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {project.gallery.map((item: any, index: number) => {
                // First item and every 3rd after that is full width
                const isFullWidth = index === 0 || (index > 0 && (index - 0) % 3 === 0);
                const isVideo = item._type === 'file' || item.asset?._ref?.startsWith('file-');
                
                return (
                  <div 
                    key={index} 
                    className={`relative rounded-xl sm:rounded-2xl overflow-hidden ${isFullWidth ? 'md:col-span-2 aspect-[4/3] sm:aspect-[16/9]' : 'aspect-[4/3]'}`}
                  >
                    {isVideo ? (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source 
                          src={`https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${item.asset._ref.replace('file-', '').replace('-mp4', '.mp4').replace('-webm', '.webm').replace('-mov', '.mov')}`}
                          type={item.asset._ref.includes('mp4') ? 'video/mp4' : item.asset._ref.includes('webm') ? 'video/webm' : 'video/quicktime'}
                        />
                      </video>
                    ) : (
                      <Image
                        src={urlFor(item).width(isFullWidth ? 1920 : 1200).height(isFullWidth ? 1080 : 900).quality(75).auto("format").url()}
                        alt={`${project.title} - Bilde ${index + 1}`}
                        fill
                        loading="lazy"
                        sizes={isFullWidth ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 50vw"}
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* See Other Projects */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
        <div className="mx-auto max-w-screen-2xl">
          <Link
            href="/prosjekter"
            className="group inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-black transition-colors"
          >
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Se andre prosjekter
          </Link>
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
