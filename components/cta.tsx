"use client"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas potenciar tu marca?</h2>
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          Contáctanos hoy para una consulta gratuita y descubre cómo podemos transformar tu visión en una estrategia
          visual ganadora
        </p>

        {/* Contact Info */}
        <div className="bg-border/30 backdrop-blur-md rounded-lg p-6 border border-border mb-8 max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-2">Email</p>
          <a href="mailto:info@publicidaddiseno.com" className="text-2xl font-bold text-primary hover:underline">
            info@publicidaddiseno.com
          </a>
        </div>

        {/* Form */}
        <form className="bg-border/30 backdrop-blur-md rounded-lg p-8 border border-border max-w-2xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
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
            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg"
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
