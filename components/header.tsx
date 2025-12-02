"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const navLinks = [
    { href: "/#servicios", label: "Servicios", hasDropdown: true },
    { href: "/#portafolio", label: "Portafolio", hasDropdown: false },
    { href: "/sobre-mi", label: "Sobre Mí", hasDropdown: false },
    { href: "/#contacto", label: "Contacto", hasDropdown: false },
  ];

  // Función para manejar la navegación
  const handleNavigation = (href: string) => {
    // Si el link es a una página dedicada (no tiene #)
    if (!href.includes("#")) {
      router.push(href);
      setIsOpen(false);
      setIsServicesOpen(false);
      return;
    }

    if (isHomePage) {
      // Si estamos en la página de inicio, solo hacemos scroll
      const section = document.querySelector(href.replace("/", ""));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegamos al inicio y luego al hash
      router.push(href);
    }
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <Image
              src="/BorderSnap-logo.png"
              alt="BorderSnap Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              BorderSnap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                ref={link.hasDropdown ? dropdownRef : null}
              >
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl z-50 py-2 animate-fade-in">
                        <button
                          onClick={() => handleNavigation("/#servicios")}
                          className="w-full text-left block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors font-medium"
                        >
                          Ver todos los servicios
                        </button>
                        <div className="border-t border-border my-2"></div>
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <button
                              key={service.id}
                              onClick={() => {
                                router.push(`/servicios/${service.id}`);
                                setIsServicesOpen(false);
                              }}
                              className="w-full flex items-start gap-3 px-4 py-2.5 text-foreground hover:bg-muted transition-colors text-left"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                                <Icon className="text-primary" size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium">
                                  {service.title}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                  {service.shortDescription.slice(0, 50)}...
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => handleNavigation("/#contacto")}
            className="hidden sm:inline-block bg-primary text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base"
          >
            Solicita Presupuesto
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-80 max-w-[85vw] bg-card border-l border-border shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-2 animate-fade-in">
              <Image
                src="/BorderSnap-logo.png"
                alt="BorderSnap Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">
                BorderSnap
              </span>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="animate-slide-in-right"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setIsMobileServicesOpen(!isMobileServicesOpen)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="mt-2 ml-2 space-y-1">
                          <button
                            onClick={() => {
                              handleNavigation("/#servicios");
                              setIsMobileServicesOpen(false);
                            }}
                            className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-primary hover:bg-muted rounded-lg transition-colors font-medium animate-fade-in"
                          >
                            Ver todos los servicios
                          </button>
                          <div className="border-t border-border my-2"></div>
                          {services.map((service, serviceIndex) => {
                            const Icon = service.icon;
                            return (
                              <button
                                key={service.id}
                                onClick={() => {
                                  router.push(`/servicios/${service.id}`);
                                  setIsOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-foreground hover:bg-muted rounded-lg transition-colors text-left animate-slide-in-right"
                                style={{
                                  animationDelay: `${serviceIndex * 30}ms`,
                                  animationFillMode: "both",
                                }}
                              >
                                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                  <Icon className="text-primary" size={16} />
                                </div>
                                <span className="text-sm font-medium">
                                  {service.title}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div
            className="p-4 border-t border-border animate-slide-up"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            <button
              onClick={() => handleNavigation("/#contacto")}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold text-center shadow-lg"
            >
              Solicita Presupuesto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
