"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                Publicidad que <span className="text-primary">impulsa</span> tu marca
              </h1>
              <p className="text-lg md:text-xl text-white/80 text-balance">
                Transformamos ideas en campañas visuales impactantes que conectan con tu audiencia y generan resultados
                reales
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#portafolio"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
              >
                Ver Portafolio
                <ArrowRight size={20} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
              >
                Contactar
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">150+</div>
                <p className="text-white/70">Proyectos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <p className="text-white/70">Satisfacción</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <p className="text-white/70">Años</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="h-32 bg-primary/30 rounded-xl flex items-center justify-center">
                  <span className="text-white/50 text-center">Proyectos Creativos</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-primary/20 rounded-lg"></div>
                  <div className="h-24 bg-primary/20 rounded-lg"></div>
                  <div className="h-24 bg-primary/20 rounded-lg"></div>
                  <div className="h-24 bg-primary/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
