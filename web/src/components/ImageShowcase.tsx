"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  role?: string;
  image?: any;
  logo?: any;
  project?: {
    _id: string;
    title: string;
    slug: { current: string };
  };
}

interface ImageShowcaseProps {
  testimonials: Testimonial[];
}

export default function ImageShowcase({ testimonials }: ImageShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7]">
          {/* All images stacked, only current one visible */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial._id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {testimonial.image ? (
                <Image
                  src={urlFor(testimonial.image).width(1920).height(840).quality(75).auto("format").url()}
                  alt="Kundeprosjekt"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1536px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
              )}
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Quote and Author */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-12 lg:left-12 lg:right-12">
            <blockquote className="text-white text-base sm:text-xl lg:text-3xl font-medium max-w-3xl leading-snug mb-2 sm:mb-4">
              "{current.quote}"
            </blockquote>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <p className="text-white text-sm sm:text-base font-medium">{current.author}</p>
              {current.role && (
                <>
                  <span className="text-white/50">·</span>
                  <p className="text-white/70 text-sm sm:text-base">{current.role}</p>
                </>
              )}
            </div>
          </div>

          {/* Next button */}
          {testimonials.length > 1 && (
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-12 lg:right-12 flex items-center gap-2 sm:gap-3 text-white/70 hover:text-white transition-colors cursor-pointer group"
            >
              <span className="text-xs sm:text-sm hidden sm:inline">Neste referanse</span>
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 group-hover:border-white/60 transition-colors">
                <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
