import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";

// Only load font weights actually used in the design
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://studio-oeen.vercel.app'),
  title: {
    default: "Øen Webdesign | Modernisering og utvikling av nettsider",
    template: "%s | Øen Webdesign"
  },
  description: "Profesjonell webdesign og utvikling av moderne nettsider. Jeg hjelper bedrifter med å modernisere utdaterte nettsider, utvikle nye digitale løsninger og forbedre brukeropplevelsen. Spesialisert på Next.js, React og moderne webteknologier.",
  keywords: ["webdesign", "nettside utvikling", "modernisering nettsider", "webdesigner Norge", "Next.js utvikler", "React utvikler", "digital design", "brukeropplevelse", "responsive design", "web utvikling"],
  authors: [{ name: "Nicklas Øen" }],
  creator: "Nicklas Øen",
  publisher: "Øen Webdesign",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "no_NO",
    url: "https://studio-oeen.vercel.app",
    siteName: "Øen Webdesign",
    title: "Øen Webdesign | Modernisering og utvikling av nettsider",
    description: "Profesjonell webdesign og utvikling av moderne nettsider. Jeg hjelper bedrifter med å modernisere utdaterte nettsider og utvikle nye digitale løsninger.",
    images: [
      {
        url: "/logo/new-oeen-black.svg",
        width: 1200,
        height: 630,
        alt: "Øen Webdesign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Øen Webdesign | Modernisering og utvikling av nettsider",
    description: "Profesjonell webdesign og utvikling av moderne nettsider.",
    images: ["/logo/new-oeen-black.svg"],
  },
  alternates: {
    canonical: "https://studio-oeen.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9CG8NHW5HS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9CG8NHW5HS');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
