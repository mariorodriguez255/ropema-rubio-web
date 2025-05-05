import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" aria-label="Pie de página de Ropema Rubio">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ropema Rubio</h3>
            <p className="text-gray-400 mb-4">
              Expertos en mármoles, granitos y porcelánicos desde 1946. Calidad, experiencia y profesionalidad en cada
              proyecto en Madrid.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Ir a la página de inicio de Ropema Rubio"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Conocer más sobre Ropema Rubio"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Ver proyectos de mármol y granito"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Contactar con Ropema Rubio"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Servicios de Mármol y Granito</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Encimeras de Cocina en Mármol y Granito</li>
              <li className="text-gray-400">Suelos y Revestimientos en Piedra Natural</li>
              <li className="text-gray-400">Escaleras y Barandillas de Mármol</li>
              <li className="text-gray-400">Fachadas y Exteriores en Piedra</li>
              <li className="text-gray-400">Baños y Spa en Mármol y Porcelánicos</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto con Ropema Rubio</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Calle Cobre 18</p>
              <p className="mb-2">Moraleja de Enmedio, Madrid</p>
              <p className="mb-2">España</p>
              <p className="mb-2">
                <Link
                  href="tel:+34625506334"
                  className="hover:text-primary transition-colors"
                  aria-label="Llamar a Ropema Rubio"
                >
                  +34 625 50 63 34
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:manuelropema@gmail.com"
                  className="hover:text-primary transition-colors"
                  aria-label="Enviar email a Ropema Rubio"
                >
                  manuelropema@gmail.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ropema Rubio - Mármoles, Granitos y Porcelánicos. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            <Link href="https://ropemarubio.com" className="hover:text-primary transition-colors">
              ropemarubio.com
            </Link>{" "}
            |
            <Link href="https://ropemarubio.es" className="hover:text-primary transition-colors ml-2">
              ropemarubio.es
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
