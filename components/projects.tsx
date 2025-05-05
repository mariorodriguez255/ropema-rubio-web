"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientImage from "./client-image"

export default function Projects() {
  const categories = ["Todos", "Encimeras", "Suelos", "Fachadas", "Escaleras", "Baños", "Revestimientos"]
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Proyectos con las nuevas imágenes clasificadas y optimizadas para SEO
  const projects = [
    {
      id: 1,
      category: "Encimeras",
      title: "Mostrador de Recepción en Mármol Negro",
      description: "Diseño geométrico y angular para espacio corporativo realizado por Ropema Rubio en Madrid",
      image: "/images/projects/recepcion-marmol-negro.jpg",
      alt: "Mostrador de recepción en mármol negro con diseño geométrico - Ropema Rubio Madrid",
    },
    {
      id: 2,
      category: "Revestimientos",
      title: "Chimenea con Revestimiento de Mármol",
      description: "Revestimiento en mármol gris veteado para chimenea empotrada - Trabajo de Ropema Rubio",
      image: "/images/projects/chimenea-marmol-gris.jpg",
      alt: "Chimenea con revestimiento de mármol gris veteado - Ropema Rubio Madrid",
    },
    {
      id: 3,
      category: "Fachadas",
      title: "Columnas de Mármol para Espacios Comerciales",
      description: "Instalación de columnas y estanterías en piedra natural por Ropema Rubio",
      image: "/images/projects/columnas-marmol.jpg",
      alt: "Columnas de mármol en espacio comercial - Instalación por Ropema Rubio",
    },
    {
      id: 4,
      category: "Revestimientos",
      title: "Mueble de Salón con Chimenea Integrada",
      description: "Combinación de mármol negro y revestimiento de pared - Diseño exclusivo de Ropema Rubio",
      image: "/images/projects/salon-marmol-negro.jpg",
      alt: "Mueble de salón con chimenea integrada en mármol negro - Ropema Rubio Madrid",
    },
    {
      id: 5,
      category: "Escaleras",
      title: "Escalera Curva con Iluminación LED",
      description: "Diseño moderno con iluminación LED integrada - Proyecto de Ropema Rubio en Madrid",
      image: "/images/projects/escalera-curva-led.jpg",
      alt: "Escalera curva de mármol con iluminación LED integrada - Ropema Rubio",
    },
    {
      id: 6,
      category: "Revestimientos",
      title: "Showroom con Nichos Iluminados en Mármol",
      description: "Paredes de mármol blanco con nichos y mostrador integrado - Trabajo de Ropema Rubio",
      image: "/images/projects/showroom-marmol.jpg",
      alt: "Showroom con paredes de mármol blanco y nichos iluminados - Ropema Rubio Madrid",
    },
    {
      id: 7,
      category: "Escaleras",
      title: "Escalera con Iluminación Perimetral en Mármol",
      description: "Escalones de mármol oscuro con iluminación LED en los bordes - Proyecto de Ropema Rubio",
      image: "/images/projects/escalera-led-oscura.jpg",
      alt: "Escalera de mármol oscuro con iluminación perimetral LED - Ropema Rubio",
    },
    {
      id: 8,
      category: "Baños",
      title: "Baño Completo en Mármol Gris Veteado",
      description: "Revestimiento integral en mármol gris veteado para baño de lujo - Ropema Rubio Madrid",
      image: "/images/projects/bano-marmol-gris.jpg",
      alt: "Baño completo revestido en mármol gris veteado - Instalación por Ropema Rubio",
    },
    {
      id: 9,
      category: "Encimeras",
      title: "Mesa y Mueble para Salón en Mármol Blanco",
      description: "Combinación de mármol blanco y madera con iluminación integrada - Diseño de Ropema Rubio",
      image: "/images/projects/salon-mueble-marmol.jpg",
      alt: "Mesa de mármol blanco y mueble con iluminación integrada - Ropema Rubio Madrid",
    },
    {
      id: 10,
      category: "Escaleras",
      title: "Escalera Flotante de Mármol con Barandilla de Cristal",
      description: "Diseño minimalista con peldaños de mármol y cristal - Proyecto exclusivo de Ropema Rubio",
      image: "/images/projects/escalera-marmol-cristal.jpg",
      alt: "Escalera flotante de mármol con barandilla de cristal - Ropema Rubio Madrid",
    },
  ]

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  // Asegurarse de que currentImageIndex sea válido cuando cambian los proyectos filtrados
  useEffect(() => {
    if (filteredProjects.length > 0 && currentImageIndex >= filteredProjects.length) {
      setCurrentImageIndex(0)
    }
  }, [filteredProjects, currentImageIndex])

  const handlePrevImage = () => {
    if (filteredProjects.length === 0) return
    setCurrentImageIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    if (filteredProjects.length === 0) return
    setCurrentImageIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1))
  }

  // Placeholder para usar cuando no hay imagen disponible
  const placeholderImage = "/placeholder.svg?height=600&width=800"

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
      aria-label="Proyectos destacados de Ropema Rubio"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos Destacados en Mármol y Granito</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados en mármol, granito y porcelánicos realizados por Ropema
            Rubio en Madrid.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
              aria-label={`Filtrar por ${category}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No se encontraron proyectos en esta categoría.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProjects.map((project, index) => (
              <Dialog
                key={project.id}
                open={isDialogOpen && currentImageIndex === index}
                onOpenChange={(open) => {
                  setIsDialogOpen(open)
                  if (open) setCurrentImageIndex(index)
                }}
              >
                <DialogTrigger asChild>
                  <div className="aspect-square relative overflow-hidden rounded-md cursor-pointer shadow-md hover:shadow-lg transition-all">
                    <ClientImage
                      src={project.image}
                      fallbackSrc={placeholderImage}
                      alt={project.alt || project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="sr-only">Ver proyecto de {project.title} - Ropema Rubio</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                  {filteredProjects.length > 0 && (
                    <div className="relative h-[80vh] w-full bg-black">
                      <ClientImage
                        src={filteredProjects[currentImageIndex]?.image}
                        fallbackSrc={placeholderImage}
                        alt={
                          filteredProjects[currentImageIndex]?.alt ||
                          filteredProjects[currentImageIndex]?.title ||
                          "Proyecto de mármol y granito por Ropema Rubio"
                        }
                        fill
                        className="object-contain"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePrevImage()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                        aria-label="Ver proyecto anterior"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNextImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                        aria-label="Ver proyecto siguiente"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
