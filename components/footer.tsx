"use client"

import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/BorderSnap-logo.png"
                alt="BorderSnap Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-lg">BorderSnap</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Agencia de publicidad especializada en diseño gráfico y branding
              digital para marcas que quieren destacar
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#servicios"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#portafolio"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Diseño Gráfico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Redes Sociales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Publicidad Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} />
                <a
                  href="mailto:evelyn.alvarez.haro@uabc.edu.mx"
                  className="hover:text-white transition-colors"
                >
                  evelyn.alvarez.haro@uabc.edu.mx{" "}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Tijuana, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              >
                ig
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-white/50 text-sm">
            © {currentYear} PublicidadDiseño. Todos los derechos reservados. |
            Diseñado y desarrollado con ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
