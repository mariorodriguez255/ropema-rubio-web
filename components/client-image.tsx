"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface ClientImageProps extends Omit<ImageProps, "src"> {
  src: string
  fallbackSrc?: string
}

export default function ClientImage({ src, fallbackSrc = "/placeholder.svg", alt, ...props }: ClientImageProps) {
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
