import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sultan Kazbek — Growth Craft",
  description: "Operations & Growth. +64% роста и 6.3× ROAS в OTAN за 2 года.",
  metadataBase: new URL("https://suulliish.github.io/sultan-lusion/"),
  alternates: { canonical: "./" },
  openGraph: {
    title: "Sultan Kazbek — Growth Craft",
    description: "Operations & Growth. +64% роста и 6.3× ROAS в OTAN за 2 года.",
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sultan Kazbek",
  url: "https://suulliish.github.io/sultan-lusion/",
  email: "mailto:kazsultan.uni@gmail.com",
  jobTitle: "Operations & Growth",
  description: "Operations & Growth. +64% роста и 6.3× ROAS в OTAN за 2 года.",
  address: { "@type": "PostalAddress", addressLocality: "Astana", addressCountry: "KZ" },
  worksFor: { "@type": "Organization", name: "OTAN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F0F1FA] text-[#0B0B10]">{children}</body>
    </html>
  );
}
