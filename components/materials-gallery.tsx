import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function MaterialsGallery() {
  const materials = [
    {
      name: "Mármol Blanco Carrara",
      description: "Elegante mármol italiano con delicadas vetas grises sobre fondo blanco.",
      image: "/images/materials/marble-composition.jpg",
    },
    {
      name: "Granito Negro Zimbabwe",
      description: "Granito de color negro intenso con pequeñas motas que aportan profundidad y carácter.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Mármol Crema Marfil",
      description: "Mármol de tonalidad beige cálido con suaves vetas que aportan elegancia.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Materiales</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trabajamos con los mejores materiales seleccionados cuidadosamente para cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src={material.image || "/placeholder.svg"}
                  alt={material.name}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{material.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{material.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
