"use client";

import Image from "next/image";

const customerLogos = [
  { src: "/customer-logos/cropped-Original-logo-16-08-01-A.jpg", alt: "Customer logo" },
  { src: "/customer-logos/grs.svg", alt: "GRS" },
  { src: "/customer-logos/logo (3).svg", alt: "Customer logo" },
  { src: "/customer-logos/logo-300x72.png", alt: "Customer logo" },
  { src: "/customer-logos/logo-white.BT5UMVwi_Z2vqahy (1).webp", alt: "Customer logo" },
  { src: "/customer-logos/SCA_logo_2025-neg-wide-cropped.svg", alt: "SCA" },
  { src: "/customer-logos/unnamed (1).png", alt: "Customer logo" },
];

export default function LogoSlider() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f0] py-4">
      {/* Scrolling container */}
      <div className="flex animate-scroll">
        {/* First set of logos */}
        <div className="flex shrink-0 items-center">
          {customerLogos.map((logo, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[11px] font-medium tracking-widest text-black/70 uppercase whitespace-nowrap px-6">
                Fornøyde kunder
              </span>
              <div className="flex h-8 w-28 items-center justify-center px-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={28}
                  className="h-5 w-auto object-contain brightness-0 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0 items-center">
          {customerLogos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex items-center">
              <span className="text-[11px] font-medium tracking-widest text-black/70 uppercase whitespace-nowrap px-6">
                Fornøyde kunder
              </span>
              <div className="flex h-8 w-28 items-center justify-center px-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={28}
                  className="h-5 w-auto object-contain brightness-0 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

