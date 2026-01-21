"use client";

import Image from "next/image";

const logos = [
  { src: "/customer-logos/cropped-Original-logo-16-08-01-A.jpg", alt: "Kunde" },
  { src: "/customer-logos/grs.svg", alt: "GRS" },
  { src: "/customer-logos/logo (3).svg", alt: "Kunde" },
  { src: "/customer-logos/logo-300x72.png", alt: "Kunde" },
  { src: "/dLoUR5MLAFZLcvhu2KJyMuZEWCY.webp", alt: "SCA" },
  { src: "/customer-logos/unnamed (1).png", alt: "Kunde" },
  { src: "/logo-black.D-BIoPYZ_Z16TYm3.webp", alt: "Kunde" },
];

export default function LogoMarquee() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="mb-8 text-center">
        <span className="text-sm font-medium text-gray-500">Stolte samarbeidspartnere</span>
      </div>
      
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll hover:pause-animation">
          {/* First set */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-12 lg:mx-16"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={50}
                className="h-10 lg:h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-12 lg:mx-16"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={50}
                className="h-10 lg:h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


