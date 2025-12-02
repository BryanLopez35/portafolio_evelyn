"use client"

import { Palette, Smartphone, TrendingUp, Users, Video, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Diseño Gráfico",
      description:
        "Diseño de identidad visual, logotipos, banners y materiales de marketing que capturan la esencia de tu marca",
    },
    {
      icon: Smartphone,
      title: "Diseño de Redes Sociales",
      description: "Contenido visual optimizado para todas las plataformas con estrategia de engagement y alcance",
    },
    {
      icon: TrendingUp,
      title: "Branding Digital",
      description: "Desarrollo completo de marca: identidad, posicionamiento y estrategia digital integrada",
    },
    {
      icon: Users,
      title: "Publicidad Visual",
      description: "Campañas publicitarias impactantes para medios digitales y tradicionales con ROI comprobado",
    },
    {
      icon: Video,
      title: "Producción de Video",
      description: "Videos comerciales, animaciones y contenido multimedia profesional para tu marca",
    },
    {
      icon: Zap,
      title: "Consultoría de Marca",
      description: "Asesoría estratégica para potenciar tu marca y conectar auténticamente con tu público objetivo",
    },
  ]

  return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales de diseño y publicidad para transformar tu visión en realidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
