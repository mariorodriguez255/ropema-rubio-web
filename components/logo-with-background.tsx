"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface LogoWithBackgroundProps {
  isScrolled: boolean
  className?: string
}

export default function LogoWithBackground({ isScrolled, className = "" }: LogoWithBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`relative h-10 w-10 ${className}`}>
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
      </div>
    )
  }

  return (
    <div
      className={`relative h-10 w-10 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 p-1 rounded-md" : ""
      } ${className}`}
    >
      <Image src="/images/logo/ropema-logo.png" alt="Ropema Rubio Logo" fill className="object-contain" priority />
    </div>
  )
}
