"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientImage from "./client-image"

export default function Projects() {
  const categories = ["Todos", "Encimeras", "Revestimientos", "Escaleras", "Baños", "Recepciones", "Chimeneas", "Mesas"]
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Proyectos con las nuevas imágenes clasificadas
  const projects = [
    {
      id: 1,
      category: "Encimeras",
      title: "Cocina con Encimera de Mármol Gris",
      description: "Elegante cocina con encimeras de mármol gris veteado y muebles de madera clara",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/94b62b09-57e2-428c-b335-12160e343011-LCLlHngV1RiWDCmWniyzWlGqrplNGV.webp",
      alt: "Cocina moderna con encimeras de mármol gris veteado - Ropema Rubio Madrid",
    },
    {
      id: 2,
      category: "Revestimientos",
      title: "Panel de Mármol Negro Marquina",
      description: "Revestimiento de pared en mármol negro con vetas blancas características",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ad53278b-8ffc-4a8a-9462-8ed040d71e40-JfASTZovcZ4O2KUOTqAyu4IbWhsOOK.webp",
      alt: "Panel de mármol negro con vetas blancas - Ropema Rubio Madrid",
    },
    {
      id: 3,
      category: "Encimeras",
      title: "Cocina Moderna con Mármol Veteado",
      description: "Diseño contemporáneo con encimeras y revestimiento en mármol gris con vetas doradas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21615123-ca2e-46bc-aea0-e6fcc8e01e45-Y8se45JCEgOTCOTJTak5lUE4WYnygc.webp",
      alt: "Cocina moderna con encimeras y revestimiento de mármol gris con vetas doradas - Ropema Rubio",
    },
    {
      id: 4,
      category: "Escaleras",
      title: "Escalera Flotante con Barandilla de Cristal",
      description: "Elegante escalera de mármol beige con diseño flotante y barandilla de cristal",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/257c3519-67b3-4c9b-9d47-187e95f61310-9dMfOsoG4ut4e0NQqjvR2Ku5pos7zA.webp",
      alt: "Escalera moderna de mármol beige con barandilla de cristal - Ropema Rubio",
    },
    {
      id: 5,
      category: "Escaleras",
      title: "Escalera Curva con Iluminación LED",
      description: "Innovador diseño de escalera curva en mármol con iluminación LED integrada",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/230d8ff5-65fb-4194-83b8-28ad518e75dc-sVZpprnka5aLPIOLcDjRvgEiIec7CT.webp",
      alt: "Escalera curva de mármol con iluminación LED integrada - Ropema Rubio Madrid",
    },
    {
      id: 6,
      category: "Revestimientos",
      title: "Showroom con Nichos Iluminados",
      description: "Espacio comercial con paredes de mármol blanco y nichos con iluminación integrada",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/727081cb-2715-47a7-bd0a-0244b6a90b64-6DtbSoCniX82wZlgobNLXtrcAVchDv.webp",
      alt: "Interior moderno con paredes de mármol blanco y nichos iluminados - Ropema Rubio",
    },
    {
      id: 7,
      category: "Baños",
      title: "Revestimiento de Baño en Mármol Blanco",
      description: "Elegante pared de baño completamente revestida en mármol blanco con vetas grises",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b5b5432c-a6c0-4600-8d76-a95305e224d8-AAc3hoWD35UsVEAgtMJYlqdPmjCRhW.webp",
      alt: "Pared de baño revestida en mármol blanco con vetas grises - Ropema Rubio",
    },
    {
      id: 8,
      category: "Baños",
      title: "Cabina de Ducha en Mármol Veteado",
      description: "Exclusiva cabina de ducha revestida en mármol blanco con vetas marrones pronunciadas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34bd712c-cb3c-4808-bbc1-4af5f1516392-avU44sbSOJDWUWKvXGr8l0vD2Ra1xX.webp",
      alt: "Cabina de ducha en mármol blanco con vetas marrones - Ropema Rubio Madrid",
    },
    {
      id: 9,
      category: "Chimeneas",
      title: "Sala de Estar con Chimenea Integrada",
      description: "Diseño contemporáneo de sala con pared de mármol blanco y chimenea integrada",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bcc91625-f5cb-45bd-b936-38b9aed62be9-LRu6620zmVoVddL70euKt2sOGVDLA5.webp",
      alt: "Sala de estar con pared de mármol blanco y chimenea integrada - Ropema Rubio",
    },
    {
      id: 10,
      category: "Recepciones",
      title: "Mostrador de Recepción Geométrico",
      description: "Impresionante mostrador de recepción en mármol negro con diseño angular moderno",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/638665f2-ef13-4271-9ba2-ac8e488b5a70-jGwJhEVOYw9IbAQgyAIQM8Hl9yRyIW.webp",
      alt: "Mostrador de recepción en mármol negro con diseño geométrico - Ropema Rubio Madrid",
    },
    {
      id: 11,
      category: "Recepciones",
      title: "Mostrador en Proceso de Fabricación",
      description: "Vista del proceso de fabricación de mostrador de recepción en mármol blanco en nuestro taller",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11bd09fb-0de1-492b-b43e-1327822da1b7-x4gpeOOqiFUaO2aNzsiR8HCXsWewk8.webp",
      alt: "Proceso de fabricación de mostrador de mármol blanco en taller Ropema Rubio",
    },
    {
      id: 12,
      category: "Baños",
      title: "Baño de Lujo con Hidromasaje",
      description: "Elegante baño con bañera de hidromasaje y lavabos dobles en mármol gris veteado",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9ee309e0-c96e-422d-96c8-110ac33b6ce0%202-L7RUBYPz1fB6OLEJX20sqz6bgahWG2.webp",
      alt: "Baño de lujo con bañera de hidromasaje y lavabos en mármol gris - Ropema Rubio",
    },
    {
      id: 13,
      category: "Encimeras",
      title: "Cocina con Encimeras de Mármol Beige",
      description: "Moderna cocina con encimeras de mármol beige veteado y muebles en tonos tierra",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14f1ca39-3222-41e2-92ca-6bb62b888543-3Fr4sDPMYHJqhqoQHB1iuCH1Vy8mIN.webp",
      alt: "Cocina moderna con encimeras de mármol beige veteado - Ropema Rubio Madrid",
    },
    {
      id: 14,
      category: "Baños",
      title: "Baño Moderno con Vistas Urbanas",
      description: "Exclusivo baño con bañera empotrada y lavabo integrado en mármol beige con gran ventanal",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2b8aaa91-9396-42a4-b475-0481ce681a33-rVPpXBIADiIZfT5ARmBL64JugVKMFJ.webp",
      alt: "Baño moderno con bañera empotrada en mármol beige y vistas urbanas - Ropema Rubio",
    },
    {
      id: 15,
      category: "Mesas",
      title: "Mesa de Comedor Redonda en Mármol Negro",
      description: "Elegante mesa de comedor redonda en mármol negro con vetas doradas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5a2147d0-35fe-454e-bed8-b66ea37c1f1a-GjvoxDFANqkce5WHWsqdIFX7oQvNTB.webp",
      alt: "Mesa de comedor redonda en mármol negro con vetas doradas - Ropema Rubio Madrid",
    },
    {
      id: 16,
      category: "Baños",
      title: "Ducha de Lujo con Mármol Veteado",
      description: "Impresionante ducha revestida en mármol con vetas doradas pronunciadas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9bcd1454-c894-41ab-88d8-06152cd954e1-5fZKI3h9U4pTvhPHXyk4Q9FhmQybHP.webp",
      alt: "Ducha de lujo revestida en mármol con vetas doradas - Ropema Rubio Madrid",
    },
    {
      id: 17,
      category: "Escaleras",
      title: "Escalera con Iluminación LED Nocturna",
      description: "Vista nocturna de escalera curva con iluminación LED perimetral integrada",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce84c305-53ab-4b95-a71f-2aaf884c380c-pqrfKWjhqyu6FyJHx4U94FqHv2VghQ.webp",
      alt: "Escalera curva con iluminación LED nocturna - Ropema Rubio Madrid",
    },
    {
      id: 18,
      category: "Encimeras",
      title: "Cocina Exterior con Vistas Panorámicas",
      description: "Cocina exterior en terraza con encimeras de cuarzo gris y vistas de la ciudad",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/43a3ced6-6751-4a0b-b948-b77d0691d67e-mIxW42D5C4WcT5ssSlorTwLsw2GbGY.webp",
      alt: "Cocina exterior con encimeras de cuarzo gris y vistas panorámicas - Ropema Rubio",
    },
    {
      id: 19,
      category: "Mesas",
      title: "Mesa de Comedor con Revestimiento de Mármol",
      description: "Sala de estar con mesa de mármol blanco veteado y mueble con revestimiento de mármol",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5fa91e03-3fbc-49be-8421-5b420ab05b9d-6YTBqq4QaWC2TtVix2oP0qGUEDfNg0.webp",
      alt: "Mesa de comedor de mármol blanco y mueble con revestimiento - Ropema Rubio Madrid",
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
                      <ClientImage
                        src={project.image}
                        fallbackSrc={placeholderImage}
                        alt={project.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
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
