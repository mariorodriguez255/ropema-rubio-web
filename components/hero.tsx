"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="inicio"
      aria-label="Sección principal de Ropema Rubio"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/marble-reception-desk.jpg"
            alt="Mostrador de recepción en mármol negro elegante - Trabajo realizado por Ropema Rubio"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={75}
          />

          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

          {/* Animated particles effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Content - Centered with improved text readability */}
      <div className="container mx-auto px-4 z-10 pt-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 text-white/90 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Desde 1946 transformando espacios
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Expertos en Mármoles,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-green-400 to-primary bg-clip-text text-transparent">
              Granitos y Porcelánicos
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos espacios con la belleza natural de la piedra, combinando tradición y modernidad en Madrid
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="/#contact" aria-label="Contactar con Ropema Rubio">
                Contactar Ahora
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/#projects" aria-label="Ver proyectos de mármol y granito de Ropema Rubio">
                Ver Proyectos
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/#about" aria-label="Desplazarse hacia abajo para conocer más sobre Ropema Rubio">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <ChevronDown className="h-6 w-6 text-white" />
          </div>
        </Link>
      </div>
    </section>
  )
}
