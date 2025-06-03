"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

// Importar el nuevo componente LogoWithBackground
import LogoWithBackground from "./logo-with-background"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Detectar scroll para cambiar el estilo de la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Controlar el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/#about" },
    { name: "Proyectos", href: "/#projects" },
    { name: "Contacto", href: "/#contact" },
  ]

  // Fondo con efecto glassmorphism cuando se hace scroll
  const headerBg =
    isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20" : "bg-transparent"

  // Texto que cambia según el estado del scroll
  const textColor = isScrolled ? "text-gray-900" : "text-white"
  const logoTextColor = isScrolled ? "text-gray-900" : "text-white"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <LogoWithBackground
              isScrolled={isScrolled}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className={`font-bold text-lg ${logoTextColor} transition-colors duration-300`}>Ropema Rubio</span>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  pathname === link.href ? "text-primary font-semibold" : textColor
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="/#contact">Contactar</Link>
            </Button>
          </nav>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className={`h-6 w-6 ${textColor} transition-colors duration-300`} />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil modernizado */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-xl">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-gray-700 hover:bg-gray-100/80 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200/50">
                <Button
                  asChild
                  className="w-full justify-center bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary transition-all duration-300"
                >
                  <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                    Contactar
                  </Link>
                </Button>
              </div>

              {/* Información de contacto mejorada */}
              <div className="pt-4 border-t border-gray-200/50 space-y-4">
                <Link
                  href="tel:+34625506334"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-primary/5 hover:from-blue-100 hover:to-primary/10 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-primary p-2 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">+34 625 50 63 34</span>
                </Link>

                <Link
                  href="mailto:manuelropema@gmail.com"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-green-50 hover:from-primary/10 hover:to-green-100 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-primary to-green-600 p-2 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm break-all">manuelropema@gmail.com</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
