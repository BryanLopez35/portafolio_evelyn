"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import { getServiceById, services } from "@/data/services"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const service = getServiceById(params.id as string)

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
          <button
            onClick={() => router.push("/#servicios")}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Servicios
          </button>
        </div>
      </div>
    )
  }

  const Icon = service.icon
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/#servicios")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Servicios
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="text-primary" size={40} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-white/90 leading-relaxed">{service.fullDescription}</p>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-card/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
                <p className="text-white/80 mb-6">
                  Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold w-full justify-center"
                >
                  Solicitar Consulta
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios de nuestro <span className="text-primary">{service.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground">Por qué somos la mejor opción para tu proyecto</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <Check className="text-primary" size={16} />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro <span className="text-primary">Proceso</span>
            </h2>
            <p className="text-lg text-muted-foreground">Cómo trabajamos para garantizar resultados excepcionales</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-16 md:py-24 bg-gradient-to-r from-secondary via-secondary/90 to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para impulsar tu marca con {service.title}?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Contáctanos hoy para una consulta gratuita y descubre cómo podemos transformar tu visión en realidad
          </p>

          {/* Contact Info */}
          <div className="bg-border/30 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-border mb-6 sm:mb-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-2 text-sm sm:text-base">Email</p>
            <a
              href="mailto:evelyn.alvarez.haro@uabc.edu.mx"
              className="text-lg sm:text-xl md:text-2xl font-bold text-primary hover:underline break-all"
            >
              evelyn.alvarez.haro@uabc.edu.mx
            </a>
          </div>

          {/* Form */}
          <form className="bg-border/30 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 border border-border max-w-2xl mx-auto">
            <input type="hidden" name="service" value={service.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea
              placeholder={`Cuéntanos sobre tu proyecto de ${service.title}`}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors mb-3 sm:mb-4 text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-black font-bold py-2.5 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors text-base sm:text-lg"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Otros Servicios</h2>
            <p className="text-lg text-muted-foreground">Descubre más formas en las que podemos ayudarte</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => {
              const OtherIcon = otherService.icon
              return (
                <div
                  key={otherService.id}
                  onClick={() => router.push(`/servicios/${otherService.id}`)}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <OtherIcon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{otherService.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{otherService.shortDescription}</p>
                  <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Ver más
                    <ArrowRight size={16} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
