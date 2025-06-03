import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  // Información de contacto
  const phoneNumber = "+34 625 50 63 34"
  const email = "manuelropema@gmail.com"
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios de mármoles y granitos."

  // Función para crear el enlace de WhatsApp con mensaje predefinido
  const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    return `https://wa.me/${phoneNumber.replace(/\+/g, "").replace(/\s/g, "")}?text=${encodedMessage}`
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      aria-label="Contacto con Ropema Rubio"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 text-primary text-sm font-medium">
            <MessageSquare className="w-4 h-4" />
            Hablemos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
            Contacta con Ropema Rubio
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos a tu disposición para ayudarte con cualquier consulta o proyecto de mármoles, granitos y
            porcelánicos en Madrid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contáctanos directamente</h3>

            <div className="space-y-6">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 group">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="bg-gradient-to-br from-primary to-green-600 p-3 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Llámanos</h4>
                      <Link
                        href={`tel:${phoneNumber}`}
                        className="text-primary hover:text-primary/80 text-lg font-medium transition-colors duration-300"
                        aria-label="Llamar a Ropema Rubio"
                      >
                        {phoneNumber}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Envíanos un email</h4>
                      <Link
                        href={`mailto:${email}`}
                        className="text-primary hover:underline text-lg break-all"
                        aria-label="Enviar email a Ropema Rubio"
                      >
                        {email}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Escríbenos por WhatsApp para una respuesta rápida sobre mármoles y granitos
                      </p>
                      <Button asChild className="w-full sm:w-auto">
                        <Link
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chatear por WhatsApp con Ropema Rubio"
                        >
                          Chatear por WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Información de Contacto de Ropema Rubio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Calle Cobre 18, Moraleja de Enmedio, Madrid, España
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horario</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lun - Vie: 7:00 - 15:00
                      <br />
                      Fines de semana: Cerrado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.5764772204166!2d-3.8969444!3d40.2984722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41f5c5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sCalle%20Cobre%2C%2018%2C%2028950%20Moraleja%20de%20Enmedio%2C%20Madrid!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Ropema Rubio - Mármoles y Granitos en Madrid"
                aria-label="Mapa de ubicación de Ropema Rubio en Calle Cobre 18, Moraleja de Enmedio, Madrid"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
