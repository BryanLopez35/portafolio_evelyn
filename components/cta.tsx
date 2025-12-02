"use client"

export default function CTA() {
  return (
    <section id="contacto" className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary text-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">¿Necesitas potenciar tu marca?</h2>
        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
          Contáctanos hoy para una consulta gratuita y descubre cómo podemos transformar tu visión en una estrategia
          visual ganadora
        </p>

        {/* Contact Info */}
        <div className="bg-border/30 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-border mb-6 sm:mb-8 max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-2 text-sm sm:text-base">Email</p>
          <a href="mailto:evelyn.alvarez.haro@uabc.edu.mx" className="text-lg sm:text-xl md:text-2xl font-bold text-primary hover:underline break-all">
            evelyn.alvarez.haro@uabc.edu.mx
          </a>
        </div>

        {/* Form */}
        <form className="bg-border/30 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 border border-border max-w-2xl mx-auto mb-6 sm:mb-8">
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
            placeholder="Cuéntanos sobre tu proyecto"
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

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="w-12 h-12 bg-border/30 hover:bg-primary rounded-full flex items-center justify-center transition-colors font-bold text-foreground hover:text-black"
          >
            f
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-border/30 hover:bg-primary rounded-full flex items-center justify-center transition-colors font-bold text-foreground hover:text-black"
          >
            in
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-border/30 hover:bg-primary rounded-full flex items-center justify-center transition-colors font-bold text-foreground hover:text-black"
          >
            ig
          </a>
        </div>
      </div>
    </section>
  )
}
