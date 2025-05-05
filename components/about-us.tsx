import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Gem } from "lucide-react"

export default function AboutUs() {
  // Definir una imagen de respaldo
  const fallbackImage = "/placeholder.svg?height=800&width=600"

  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Calidad Premium en Mármoles y Granitos",
      description: "Seleccionamos los mejores materiales para garantizar resultados excepcionales en cada proyecto.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Más de 75 Años de Experiencia",
      description: "Desde 1946 perfeccionando el arte del mármol, granito y porcelánicos en Madrid.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Equipo Profesional Especializado",
      description: "Artesanos con amplia formación y experiencia en el trabajo con piedra natural y porcelánicos.",
    },
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: "Proyectos Personalizados",
      description:
        "Adaptamos cada trabajo a las necesidades específicas de nuestros clientes, desde el diseño hasta la instalación.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" aria-label="Sobre Ropema Rubio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Ropema Rubio</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre la historia de excelencia y tradición que nos ha convertido en referentes del sector de mármoles,
            granitos y porcelánicos en Madrid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about/fachada-taller-corregido.jpg"
              alt="Fachada del taller de Ropema Rubio en Madrid - Especialistas en mármoles y granitos"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Historia en el Sector del Mármol y Granito</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Fundada en 1946, Ropema Rubio nació como un pequeño taller familiar especializado en la artesanía del
              mármol en Madrid. A lo largo de más de siete décadas, hemos evolucionado hasta convertirnos en una empresa
              de referencia en el sector, manteniendo siempre nuestra esencia: la pasión por el trabajo bien hecho en
              mármoles, granitos y porcelánicos.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nuestra filosofía se basa en combinar técnicas tradicionales con las últimas innovaciones tecnológicas,
              permitiéndonos ofrecer soluciones personalizadas en piedra natural y porcelánicos que satisfacen las
              necesidades más exigentes de nuestros clientes en Madrid y alrededores.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Hoy, con la tercera generación al frente, seguimos comprometidos con la excelencia y la calidad que han
              definido nuestra trayectoria desde el primer día, ofreciendo los mejores servicios en mármoles, granitos y
              porcelánicos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
