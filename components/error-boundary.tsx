"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("Error capturado por ErrorBoundary:", event.error)
      setHasError(true)
      // Prevenir que el error se propague
      event.preventDefault()
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Ha ocurrido un error inesperado</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Lo sentimos, ha ocurrido un problema al cargar esta página. Por favor, intente recargar la página.
          </p>
          <Button
            onClick={() => {
              setHasError(false)
              window.location.reload()
            }}
          >
            Recargar página
          </Button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
