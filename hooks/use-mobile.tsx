"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para verificar si la pantalla es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Verificar inicialmente
    checkMobile()

    // Agregar listener para cambios de tamaño de ventana
    window.addEventListener("resize", checkMobile)

    // Limpiar listener al desmontar
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}
