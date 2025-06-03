import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ErrorBoundary from "@/components/error-boundary"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ropemarubio.com"),
  title: "Ropema Rubio | Expertos en Mármoles, Granitos y Porcelánicos desde 1946",
  description:
    "Empresa especializada en la elaboración y colocación de mármoles, granitos y porcelánicos con más de 75 años de experiencia en Madrid. Encimeras, suelos, revestimientos y proyectos a medida.",
  keywords: "mármol, granito, porcelánicos, encimeras, suelos, revestimientos, Madrid, España, Ropema Rubio",
  authors: [{ name: "Ropema Rubio" }],
  creator: "Ropema Rubio",
  publisher: "Ropema Rubio",
  alternates: {
    canonical: "/",
    languages: {
      es: "https://ropemarubio.es",
    },
  },
  robots: {
    index: true,
    follow: true,
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
  verification: {
    google: "verificacion-google", // Reemplazar con el código real de verificación
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ropemarubio.com" />
        <link rel="alternate" href="https://ropemarubio.es" hrefLang="es" />
        <meta name="geo.region" content="ES-MD" />
        <meta name="geo.placename" content="Madrid" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ErrorBoundary>
            <Suspense>
              <Navbar />
              {children}
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </ThemeProvider>

        {/* Vercel Analytics */}
        <Analytics />

        {/* Structured Data / Schema.org */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ropema Rubio",
              url: "https://ropemarubio.com",
              logo: "https://ropemarubio.com/images/logo/ropema-logo.png",
              description:
                "Empresa especializada en la elaboración y colocación de mármoles, granitos y porcelánicos con más de 75 años de experiencia en Madrid.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Cobre 18",
                addressLocality: "Moraleja de Enmedio",
                addressRegion: "Madrid",
                postalCode: "28950",
                addressCountry: "ES",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34625506334",
                contactType: "customer service",
                email: "manuelropema@gmail.com",
              },
              sameAs: ["https://ropemarubio.es"],
            }),
          }}
        />

        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Ropema Rubio",
              image: "https://ropemarubio.com/images/logo/ropema-logo.png",
              url: "https://ropemarubio.com",
              telephone: "+34625506334",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Cobre 18",
                addressLocality: "Moraleja de Enmedio",
                addressRegion: "Madrid",
                postalCode: "28950",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.2984722,
                longitude: -3.8969444,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$",
              servesCuisine: "Mármoles, Granitos, Porcelánicos",
            }),
          }}
        />
      </body>
    </html>
  )
}
