"use client"

import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/services"

export default function Services() {
  const router = useRouter()

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Soluciones integrales de diseño y publicidad para transformar tu visión en realidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                onClick={() => router.push(`/servicios/${service.id}`)}
                className="bg-card p-6 sm:p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all text-sm">
                  Ver más detalles
                  <ArrowRight size={16} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
