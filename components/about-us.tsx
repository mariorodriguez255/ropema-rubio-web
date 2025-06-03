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
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      aria-label="Sobre Ropema Rubio"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 text-primary text-sm font-medium">
            <Award className="w-4 h-4" />
            Nuestra Historia
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
            Sobre Ropema Rubio
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre la historia de excelencia y tradición que nos ha convertido en referentes del sector de mármoles,
            granitos y porcelánicos en Madrid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/about/fachada-taller-corregido.jpg"
              alt="Fachada del taller de Ropema Rubio en Madrid - Especialistas en mármoles y granitos"
              fill
              className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
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
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 group"
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-green-600/10 p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
