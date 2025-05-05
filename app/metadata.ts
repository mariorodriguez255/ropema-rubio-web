import type { Metadata } from "next"

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://ropemarubio.com"),
  title: {
    default: "Ropema Rubio | Expertos en Mármoles, Granitos y Porcelánicos desde 1946",
    template: "%s | Ropema Rubio",
  },
  description:
    "Empresa especializada en la elaboración y colocación de mármoles, granitos y porcelánicos con más de 75 años de experiencia en Madrid.",
  keywords: [
    "Ropema Rubio",
    "mármol",
    "granito",
    "porcelánicos",
    "encimeras",
    "suelos",
    "revestimientos",
    "Madrid",
    "España",
  ],
  authors: [{ name: "Ropema Rubio" }],
  creator: "Ropema Rubio",
  publisher: "Ropema Rubio",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ropemarubio.com",
    siteName: "Ropema Rubio",
    title: "Ropema Rubio | Expertos en Mármoles, Granitos y Porcelánicos desde 1946",
    description:
      "Empresa especializada en la elaboración y colocación de mármoles, granitos y porcelánicos con más de 75 años de experiencia en Madrid.",
    images: [
      {
        url: "/images/logo/ropema-logo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ropema Rubio - Mármoles y Granitos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ropema Rubio | Expertos en Mármoles y Granitos",
    description:
      "Empresa especializada en la elaboración y colocación de mármoles, granitos y porcelánicos con más de 75 años de experiencia en Madrid.",
    images: ["/images/logo/ropema-logo-og.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
