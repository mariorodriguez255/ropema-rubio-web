"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export default function OptimizedImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
