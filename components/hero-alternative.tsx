"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  // Usar el hook personalizado para detectar si es móvil
  const isMobile = useMobile(768) // 768px es el breakpoint md de Tailwind

  // Definir imágenes de respaldo en caso de que las principales fallen
  const fallbackDesktopImage = "/placeholder.svg?height=1080&width=1920"
  const fallbackMobileImage = "/placeholder.svg?height=1080&width=720"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Imagen para móvil */}
          {isMobile ? (
            <Image
              src="/images/hero/marble-interior-mobile.jpg"
              alt="Interior elegante con paredes de mármol blanco y nichos iluminados"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={90}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                if (target.src !== fallbackMobileImage) {
                  target.src = fallbackMobileImage
                }
              }}
            />
          ) : (
            /* Imagen para escritorio */
            <Image
              src="/images/hero/marble-reception-desk.jpg"
              alt="Mostrador de recepción en mármol negro elegante"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={90}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                if (target.src !== fallbackDesktopImage) {
                  target.src = fallbackDesktopImage
                }
              }}
            />
          )}

          {/* Semi-transparent overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        </div>
      </div>

      {/* Content - Centered with improved text readability */}
      <div className="container mx-auto px-4 z-10 pt-16 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Expertos en Mármoles y Granitos desde 1946
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Transformamos espacios con la belleza natural de la piedra, combinando tradición y modernidad
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/#contact">Contactar Ahora</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              <Link href="/#projects">Ver Proyectos</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/#about" aria-label="Desplazarse hacia abajo">
          <ChevronDown className="h-10 w-10 text-white" />
        </Link>
      </div>
    </section>
  )
}
