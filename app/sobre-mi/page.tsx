"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import DemoReel from "@/components/demo-reel"
import Image from "next/image"
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobelightroom, SiCanva, SiAdobepremierepro, SiCoreldraw } from "react-icons/si"
import { Paintbrush } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SobreMiPage() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push("/#contacto")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Evelyn <span className="text-primary">Haro</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Diseñadora Gráfica · Tijuana, México
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Evelyn-Haro.jpg"
                    alt="Evelyn Haro - Diseñadora Gráfica"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                    Mi Historia
                  </h2>
                  <div className="w-20 h-1 bg-primary rounded-full" />
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Soy <span className="text-foreground font-semibold">Evelyn Haro</span>, diseñadora gráfica de Tijuana. Desde que inicié mi carrera, descubrí que el diseño no solo es estética: es una forma de contar historias, construir identidades y conectar emociones con marcas.
                  </p>

                  <p>
                    Mi enfoque combina <span className="text-foreground font-semibold">creatividad, intuición visual y estrategia</span>. Para mí, un buen diseño es aquel que comunica sin necesidad de explicarlo, que se siente honesto y funcional.
                  </p>

                  <p>
                    He tenido la oportunidad de trabajar en <span className="text-foreground font-semibold">agencias, estudios de impresión, clínicas y proyectos inmobiliarios</span>, donde aprendí a desarrollar identidad visual, contenido digital, campañas y fotografía. Cada proyecto me ha permitido explorar nuevas formas de expresión, desde lo urbano y moderno hasta lo estético-femenino que caracteriza mi estilo.
                  </p>

                  <p>
                    Mi propósito profesional es <span className="text-foreground font-semibold">elevar la presencia visual de cada marca</span> con la que colaboro. Quiero que mis clientes se sientan acompañados, entendidos y orgullosos de su identidad visual.
                  </p>

                  <p className="text-foreground font-semibold italic">
                    Creo en el diseño claro, elegante y emotivo. Creo en los detalles. Creo en crear algo que permanezca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Áreas de <span className="text-primary">Especialización</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Servicios que ofrezco con pasión y experiencia
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Identidad Visual",
                  description: "Diseño de logos, branding y sistemas visuales coherentes que reflejan la esencia de cada marca."
                },
                {
                  title: "Contenido Digital",
                  description: "Creación de contenido visual para redes sociales, web y plataformas digitales."
                },
                {
                  title: "Campañas Publicitarias",
                  description: "Desarrollo de conceptos creativos y piezas publicitarias efectivas y memorables."
                },
                {
                  title: "Fotografía",
                  description: "Dirección de arte y fotografía de producto, eventos y contenido de marca."
                },
                {
                  title: "Diseño Editorial",
                  description: "Maquetación de revistas, catálogos, brochures y material impreso."
                },
                {
                  title: "Consultoría Creativa",
                  description: "Asesoría estratégica para elevar la presencia visual de tu marca."
                }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Software */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Herramientas <span className="text-primary">Profesionales</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Software y tecnologías que domino para crear diseños excepcionales
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
                { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
                { name: "InDesign", icon: SiAdobeindesign, color: "#FF3366" },
                { name: "Lightroom", icon: SiAdobelightroom, color: "#31A8FF" },
                { name: "Canva", icon: SiCanva, color: "#00C4CC" },
                { name: "Premiere", icon: SiAdobepremierepro, color: "#9999FF" },
                { name: "Procreate", icon: Paintbrush, color: "#FF6B6B" },
                { name: "CorelDRAW", icon: SiCoreldraw, color: "#00B050" }
              ].map((tool, index) => {
                const Icon = tool.icon
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col items-center justify-center gap-3 text-center group"
                  >
                    <Icon 
                      className="w-12 h-12 group-hover:scale-110 transition-transform" 
                      style={{ color: tool.color }}
                    />
                    <p className="text-sm font-semibold text-foreground">
                      {tool.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Demo Reel */}
        <DemoReel />

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              ¿Trabajamos <span className="text-primary">Juntos?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Si buscas una diseñadora comprometida con elevar tu marca, me encantaría conocer tu proyecto.
            </p>
            <button
              onClick={handleContactClick}
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 font-bold text-lg hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Iniciar Conversación
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
