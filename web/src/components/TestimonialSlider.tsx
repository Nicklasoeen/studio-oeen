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
  project?: {
    _id: string;
    title: string;
    slug: { current: string };
  };
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="rounded-2xl bg-gray-100 p-10 lg:p-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          {testimonial.image ? (
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src={urlFor(testimonial.image).width(800).height(1000).url()}
                alt={testimonial.author}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-300 to-gray-400" />
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-sm text-gray-600">
            <button
              onClick={goToPrevious}
              className="hover:text-black transition-colors"
              aria-label="Forrige"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span>{currentIndex + 1}/{testimonials.length}</span>
            <button
              onClick={goToNext}
              className="hover:text-black transition-colors"
              aria-label="Neste"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Quote */}
        <div className="flex flex-col justify-center">
          <blockquote className="text-2xl sm:text-3xl lg:text-[2.25rem] font-normal leading-[1.3] tracking-[-0.02em] text-black">
            "{testimonial.quote}"
          </blockquote>

          <div className="mt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-black">
              {testimonial.author},
            </p>
            {testimonial.role && (
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-black">
                {testimonial.role}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

