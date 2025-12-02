"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      category: "fotografia",
      title: "Fotografía y Edición Digital",
      description: "Sesiones fotográficas profesionales con edición de alto nivel para campañas publicitarias",
      image: "/professional-photography-editing-campaign.jpg",
    },
    {
      category: "fotografia",
      title: "Catálogo Fotográfico de Productos",
      description: "Fotografía especializada para e-commerce con post-producción profesional",
      image: "/product-photography-ecommerce.jpg",
    },
    {
      category: "fotografia",
      title: "Edición de Video Corporativo",
      description: "Post-producción y edición digital de videos para contenido corporativo",
      image: "/corporate-video-editing.jpg",
    },
    {
      category: "impresos",
      title: "Impresos a Gran Escala",
      description: "Diseño y producción de vallas publicitarias, banners y material POP",
      image: "/large-scale-printing-billboards.jpg",
    },
    {
      category: "impresos",
      title: "Diseño de Flyers y Brochures",
      description: "Material impreso de alto impacto para distribución y eventos",
      image: "/flyers-brochures-design.jpg",
    },
    {
      category: "ilustracion",
      title: "Ilustración Digital",
      description: "Ilustraciones personalizadas y arte digital para campañas de marca",
      image: "/digital-illustration-art.jpg",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestro <span className="text-primary">Portafolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos destacados que demuestran nuestro expertise y creatividad
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "fotografia", "impresos", "ilustracion"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-primary/10"
              }`}
            >
              {category === "all"
                ? "Todos"
                : category === "fotografia"
                  ? "Fotografía"
                  : category === "impresos"
                    ? "Impresos"
                    : "Ilustración"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  {/* Removed the condition for video category as it's not present in the new projects list */}
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Showcase */}
        <div className="bg-secondary text-white rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Experiencia del Cliente</h3>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Mira cómo nuestras campañas generan impacto real en el negocio de nuestros clientes. Casos de éxito
                verificados con ROI medible.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold inline-flex items-center gap-2">
                <Play size={20} className="fill-white" />
                Ver Demo
              </button>
            </div>
            <div className="h-64 md:h-80 bg-primary/20 flex items-center justify-center">
              <div className="text-center">
                <Play size={48} className="text-white fill-white mx-auto mb-4" />
                <p className="text-white/70">Video Promocional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
