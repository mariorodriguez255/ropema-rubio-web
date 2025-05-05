import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import { Suspense } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ropema Rubio | Mármoles, Granitos y Porcelánicos de Alta Calidad en Madrid",
  description:
    "Especialistas en mármoles, granitos y porcelánicos desde 1946. Diseñamos, fabricamos e instalamos encimeras, suelos y revestimientos para proyectos residenciales y comerciales en Madrid.",
  keywords:
    "Ropema Rubio, mármoles Madrid, granitos, porcelánicos, encimeras de cocina, suelos de mármol, revestimientos, proyectos a medida",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="py-20">Cargando sección...</div>}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<div className="py-20">Cargando sección...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="py-20">Cargando sección...</div>}>
        <Contact />
      </Suspense>
    </main>
  )
}
