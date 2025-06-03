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

  // Proyectos completos con todas las imágenes
  const projects = [
    {
      id: 1,
      category: "Encimeras",
      title: "Cocina Moderna con Encimera de Mármol Gris Veteado",
      description: "Cocina completa con isla central y revestimiento en mármol gris veteado - Ropema Rubio Madrid",
      image: "/images/projects/cocina-marmol-gris-veteado.webp",
      alt: "Cocina moderna con encimera de mármol gris veteado e isla central - Ropema Rubio Madrid",
    },
    {
      id: 2,
      category: "Encimeras",
      title: "Cocina con Isla en Mármol con Vetas Doradas",
      description: "Diseño elegante con encimeras de mármol y vetas doradas coordinadas - Trabajo de Ropema Rubio",
      image: "/images/projects/cocina-isla-marmol-dorado.webp",
      alt: "Cocina con isla y encimeras de mármol con vetas doradas - Ropema Rubio Madrid",
    },
    {
      id: 3,
      category: "Revestimientos",
      title: "Revestimiento de Pared en Mármol Negro Elegante",
      description: "Pared revestida en mármol negro con vetas blancas para espacios sofisticados - Ropema Rubio",
      image: "/images/projects/revestimiento-marmol-negro.webp",
      alt: "Revestimiento de pared en mármol negro con vetas blancas - Ropema Rubio Madrid",
    },
    {
      id: 4,
      category: "Escaleras",
      title: "Escalera Moderna con Peldaños de Mármol y Cristal",
      description: "Escalera con peldaños de mármol beige, barandilla de cristal e iluminación LED - Ropema Rubio",
      image: "/images/projects/escalera-marmol-cristal-led.webp",
      alt: "Escalera moderna con peldaños de mármol y barandilla de cristal con LED - Ropema Rubio",
    },
    {
      id: 5,
      category: "Escaleras",
      title: "Escalera Comercial Curva con Revestimiento de Mármol",
      description:
        "Diseño arquitectónico comercial con escalera curva y revestimiento de mármol - Proyecto de Ropema Rubio",
      image: "/images/projects/escalera-comercial-curva.webp",
      alt: "Escalera comercial curva con revestimiento de mármol y iluminación - Ropema Rubio",
    },
    {
      id: 6,
      category: "Baños",
      title: "Ducha Completa Revestida en Mármol Veteado",
      description: "Cabina de ducha con revestimiento integral en mármol blanco veteado - Ropema Rubio Madrid",
      image: "/images/projects/ducha-marmol-veteado.webp",
      alt: "Ducha completa revestida en mármol blanco con vetas grises - Ropema Rubio Madrid",
    },
    {
      id: 7,
      category: "Revestimientos",
      title: "Showroom con Nichos Iluminados en Mármol",
      description: "Espacio comercial con paredes de mármol, nichos iluminados y pedestales - Trabajo de Ropema Rubio",
      image: "/images/projects/showroom-marmol-nichos.webp",
      alt: "Showroom con paredes de mármol blanco, nichos iluminados y pedestales - Ropema Rubio",
    },
    {
      id: 8,
      category: "Baños",
      title: "Baño en Construcción con Mármol Veteado",
      description: "Proyecto de baño con revestimiento completo en mármol blanco veteado - Ropema Rubio Madrid",
      image: "/images/projects/bano-marmol-construccion.webp",
      alt: "Baño en construcción con revestimiento de mármol blanco veteado - Ropema Rubio",
    },
    {
      id: 9,
      category: "Revestimientos",
      title: "Salón Moderno con Chimenea y Mármol",
      description: "Salón elegante con chimenea integrada y revestimiento de mármol veteado - Diseño de Ropema Rubio",
      image: "/images/projects/salon-chimenea-marmol.webp",
      alt: "Salón moderno con chimenea y revestimiento de mármol blanco veteado - Ropema Rubio Madrid",
    },
    {
      id: 10,
      category: "Encimeras",
      title: "Mostrador de Recepción Flotante en Mármol Negro",
      description:
        "Mostrador comercial flotante en mármol negro con vetas blancas - Proyecto exclusivo de Ropema Rubio",
      image: "/images/projects/mostrador-recepcion-negro.webp",
      alt: "Mostrador de recepción flotante en mármol negro con vetas blancas - Ropema Rubio Madrid",
    },
    {
      id: 11,
      category: "Encimeras",
      title: "Mostrador en Construcción - Proceso de Fabricación",
      description: "Vista del proceso de fabricación de mostrador en mármol blanco veteado - Taller Ropema Rubio",
      image: "/images/projects/mostrador-taller-construccion.webp",
      alt: "Mostrador en construcción en taller de Ropema Rubio - Proceso de fabricación",
    },
    {
      id: 12,
      category: "Encimeras",
      title: "Cocina Exterior con Encimeras de Granito",
      description: "Cocina de terraza con encimeras de granito gris oscuro y vistas panorámicas - Ropema Rubio",
      image: "/images/projects/cocina-terraza-granito.webp",
      alt: "Cocina exterior con encimeras de granito gris y vistas a la ciudad - Ropema Rubio",
    },
    {
      id: 13,
      category: "Baños",
      title: "Baño de Lujo con Hidromasaje en Mármol",
      description: "Baño completo con bañera de hidromasaje y lavabos dobles en mármol gris veteado - Ropema Rubio",
      image: "/images/projects/bano-lujo-hidromasaje.webp",
      alt: "Baño de lujo con bañera de hidromasaje y mármol gris veteado - Ropema Rubio Madrid",
    },
    {
      id: 14,
      category: "Encimeras",
      title: "Mesa de Comedor con Mueble TV Integrado",
      description: "Mesa de mármol blanco veteado con mueble de TV y sistema de iluminación - Ropema Rubio",
      image: "/images/projects/mesa-comedor-marmol-tv.webp",
      alt: "Mesa de comedor de mármol con mueble TV integrado e iluminación - Ropema Rubio",
    },
    {
      id: 15,
      category: "Escaleras",
      title: "Escalera Curva con Iluminación LED Perimetral",
      description: "Escalera curva en mármol oscuro con iluminación LED integrada en los bordes - Ropema Rubio",
      image: "/images/projects/escalera-curva-led-oscura.webp",
      alt: "Escalera curva con iluminación LED perimetral en mármol oscuro - Ropema Rubio",
    },
    {
      id: 16,
      category: "Encimeras",
      title: "Mesa Redonda de Mármol Negro con Vetas Doradas",
      description: "Mesa de comedor redonda en mármol negro con espectaculares vetas doradas - Ropema Rubio",
      image: "/images/projects/mesa-redonda-marmol-negro.webp",
      alt: "Mesa redonda de mármol negro con vetas doradas en comedor moderno - Ropema Rubio",
    },
    {
      id: 17,
      category: "Baños",
      title: "Baño Completo con Ducha de Mármol Dorado",
      description: "Baño de lujo con ducha revestida en mármol dorado con vetas espectaculares - Ropema Rubio",
      image: "/images/projects/bano-ducha-marmol-dorado.webp",
      alt: "Baño con ducha de mármol dorado y vetas naturales - Ropema Rubio Madrid",
    },
    {
      id: 18,
      category: "Encimeras",
      title: "Cocina Moderna con Isla en Mármol Beige",
      description: "Cocina contemporánea con isla central en mármol beige y campana extractora negra - Ropema Rubio",
      image: "/images/projects/cocina-isla-marmol-beige.webp",
      alt: "Cocina moderna con isla de mármol beige y campana negra - Ropema Rubio Madrid",
    },
    {
      id: 19,
      category: "Baños",
      title: "Baño Urbano con Bañera Integrada en Mármol",
      description: "Baño moderno con bañera y lavabo integrados en mármol beige con vistas urbanas - Ropema Rubio",
      image: "/images/projects/bano-banera-urbano.webp",
      alt: "Baño urbano con bañera integrada en mármol beige y vistas a la ciudad - Ropema Rubio",
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
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      aria-label="Proyectos destacados de Ropema Rubio"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 text-primary text-sm font-medium">
            <span className="w-4 h-4 rounded-full bg-primary"></span>
            Nuestro Trabajo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
            Proyectos Destacados
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className="mb-2 transition-all duration-300 hover:scale-105"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800">
                    <div className="aspect-square relative overflow-hidden">
                      <ClientImage
                        src={project.image}
                        fallbackSrc={placeholderImage}
                        alt={project.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                        <p className="text-white/90 text-sm">{project.category}</p>
                      </div>
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
