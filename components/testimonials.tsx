"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Creo que capturaron perfectamente el concepto que estábamos buscando para el diseño de nuestra app",
      author: "Antonio Martínez",
      position: "ATTANA",
      rating: 5,
    },
    {
      quote:
        "Gran trabajo y compromiso en el diseño de toda la identidad de mi proyecto que está en puerta GAD",
      author: "Corachi Ramírez",
      position: "NAKEJI DENTAL Y NEW LIFE HOSPITAL",
      rating: 5,
    },
    {
      quote: "Me gustó el concepto de mi logo con mi nombre para incursionar en mi carrera como dentista, me parece muy personal",
      author: "Alan Cruz",
      position: "CIRUJANO DENTISTA",
      rating: 5,
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Opiniones de <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios reales de empresas que han crecido con nosotros
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 sm:p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic text-base sm:text-lg">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">¿Listo para transformar tu marca?</p>
          <a
            href="#contacto"
            className="inline-block bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold text-base sm:text-lg"
          >
            Inicia tu Proyecto Hoy
          </a>
        </div>
      </div>
    </section>
  )
}
