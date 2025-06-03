"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Projects() {
  const categories = ["Todos", "Encimeras", "Revestimientos", "Escaleras", "Baños", "Recepciones"]
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Proyectos simplificados con imágenes locales
  const projects = [
    {
      id: 1,
      category: "Recepciones",
      title: "Mostrador de Recepción en Mármol Negro",
      description: "Elegante mostrador de recepción en mármol negro con acabado pulido",
      image: "/images/projects/recepcion-marmol-negro.jpg",
      alt: "Mostrador de recepción en mármol negro - Ropema Rubio Madrid",
    },
    {
      id: 2,
      category: "Revestimientos",
      title: "Chimenea con Revestimiento de Mármol",
      description: "Chimenea moderna con revestimiento de mármol gris veteado",
      image: "/images/projects/chimenea-marmol-gris.jpg",
      alt: "Chimenea con revestimiento de mármol gris - Ropema Rubio",
    },
    {
      id: 3,
      category: "Revestimientos",
      title: "Columnas de Mármol Clásicas",
      description: "Columnas decorativas en mármol blanco con acabado clásico",
      image: "/images/projects/columnas-marmol.jpg",
      alt: "Columnas de mármol blanco clásicas - Ropema Rubio Madrid",
    },
    {
      id: 4,
      category: "Revestimientos",
      title: "Salón con Revestimiento de Mármol Negro",
      description: "Elegante salón con paredes revestidas en mármol negro",
      image: "/images/projects/salon-marmol-negro.jpg",
      alt: "Salón con revestimiento de mármol negro - Ropema Rubio",
    },
    {
      id: 5,
      category: "Escaleras",
      title: "Escalera Curva con Iluminación LED",
      description: "Escalera curva en mármol con iluminación LED integrada",
      image: "/images/projects/escalera-curva-led.jpg",
      alt: "Escalera curva con LED - Ropema Rubio Madrid",
    },
    {
      id: 6,
      category: "Revestimientos",
      title: "Showroom de Mármol",
      description: "Showroom con diferentes tipos de mármol y acabados",
      image: "/images/projects/showroom-marmol.jpg",
      alt: "Showroom de mármol - Ropema Rubio",
    },
    {
      id: 7,
      category: "Escaleras",
      title: "Escalera con Iluminación LED",
      description: "Escalera moderna con iluminación LED perimetral",
      image: "/images/projects/escalera-led-oscura.jpg",
      alt: "Escalera con iluminación LED - Ropema Rubio Madrid",
    },
    {
      id: 8,
      category: "Baños",
      title: "Baño en Mármol Gris",
      description: "Baño completo revestido en mármol gris veteado",
      image: "/images/projects/bano-marmol-gris.jpg",
      alt: "Baño en mármol gris - Ropema Rubio",
    },
    {
      id: 9,
      category: "Encimeras",
      title: "Mueble con Encimera de Mármol",
      description: "Mueble de salón con encimera de mármol blanco",
      image: "/images/projects/salon-mueble-marmol.jpg",
      alt: "Mueble con encimera de mármol - Ropema Rubio Madrid",
    },
    {
      id: 10,
      category: "Escaleras",
      title: "Escalera de Mármol con Cristal",
      description: "Escalera de mármol con barandilla de cristal templado",
      image: "/images/projects/escalera-marmol-cristal.jpg",
      alt: "Escalera de mármol con cristal - Ropema Rubio",
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

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-white/90 text-sm">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                  {filteredProjects.length > 0 && (
                    <div className="relative h-[80vh] w-full bg-black/90 rounded-xl overflow-hidden">
                      <Image
                        src={filteredProjects[currentImageIndex]?.image || "/placeholder.svg"}
                        alt={
                          filteredProjects[currentImageIndex]?.alt ||
                          filteredProjects[currentImageIndex]?.title ||
                          "Proyecto de mármol y granito por Ropema Rubio"
                        }
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{filteredProjects[currentImageIndex]?.title}</h3>
                        <p className="text-sm text-gray-300">{filteredProjects[currentImageIndex]?.description}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePrevImage()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all duration-300 transform hover:scale-110"
                        aria-label="Ver proyecto anterior"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNextImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all duration-300 transform hover:scale-110"
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
