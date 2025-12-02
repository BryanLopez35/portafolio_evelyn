"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "El equipo transformó completamente nuestra marca. Los resultados superaron nuestras expectativas y el ROI fue excepcional.",
      author: "Juan Pérez",
      position: "CEO, TechStart Solutions",
      rating: 5,
    },
    {
      quote:
        "Profesionales de alto nivel. La calidad del trabajo y la comunicación fueron impecables. Totalmente recomendados.",
      author: "María López",
      position: "Directora de Marketing, Retail Plus",
      rating: 5,
    },
    {
      quote: "Nuestras campañas en redes sociales aumentaron 300% en engagement. Excelente estrategia y ejecución.",
      author: "Carlos Mendoza",
      position: "Emprendedor, E-commerce Innovation",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Opiniones de <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios reales de empresas que han crecido con nosotros
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic text-lg">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">¿Listo para transformar tu marca?</p>
          <a
            href="#contacto"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
          >
            Inicia tu Proyecto Hoy
          </a>
        </div>
      </div>
    </section>
  )
}
