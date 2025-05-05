"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

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

  // Fondo transparente cuando no se ha hecho scroll, más opaco cuando sí
  const headerBg = isScrolled || isMenuOpen ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"

  // Texto siempre blanco para mejor contraste con el fondo de imagen
  const textColor = "text-white"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image
                src="/images/logo/ropema-logo.png"
                alt="Ropema Rubio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-bold ${textColor}`}>Ropema Rubio</span>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-primary ${
                  pathname === link.href ? "text-primary font-semibold" : textColor
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link href="/#contact">Contactar</Link>
            </Button>
          </nav>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className={`h-6 w-6 ${textColor}`} />}
          </button>
        </div>
      </div>

      {/* Menú móvil con color menos intenso */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/80 backdrop-blur-md border-t border-gray-700/50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-2 px-3 rounded-md text-base ${
                    pathname === link.href ? "bg-primary/20 text-primary font-medium" : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-600/50 mt-2">
                <Button asChild className="w-full justify-center">
                  <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                    Contactar
                  </Link>
                </Button>
              </div>

              {/* Información de contacto mejorada */}
              <div className="pt-3 border-t border-gray-600/50 mt-2 space-y-4">
                <Link
                  href="tel:+34625506334"
                  className="flex items-center space-x-3 p-2 rounded-md bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-white font-medium">+34 625 50 63 34</span>
                </Link>
                <Link
                  href="mailto:manuelropema@gmail.com"
                  className="flex items-center space-x-3 p-2 rounded-md bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-white font-medium break-all">manuelropema@gmail.com</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
