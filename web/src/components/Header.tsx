"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/prosjekter", label: "Prosjekter" },
    { href: "/tjenester", label: "Tjenester" },
    { href: "/om-meg", label: "Om meg" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo - prioritized for fast header render */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/new-oeen-black.svg"
                alt="Øen"
                width={100}
                height={40}
                priority
                className="h-8 sm:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? "text-black font-medium"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side - CTA & Hamburger */}
            <div className="flex items-center gap-3">
              {/* CTA Button - desktop only */}
              <Link
                href="/kontakt"
                className="hidden md:inline-flex rounded-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
              >
                Kontakt
              </Link>

              {/* Hamburger Menu Button - mobile only */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "64px" }}
      >
        <nav className="flex flex-col px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-4 text-2xl font-medium border-b border-gray-100 transition-colors ${
                isActive(link.href) ? "text-black" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setIsMenuOpen(false)}
            className={`py-4 text-2xl font-medium transition-colors ${
              isActive("/kontakt") ? "text-black" : "text-gray-600"
            }`}
          >
            Kontakt
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          style={{ top: "64px" }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
