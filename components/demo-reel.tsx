"use client"

import { Play } from "lucide-react"
import { useState, useRef } from "react"

export default function DemoReel() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <section id="demo-reel" className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.08),transparent_60%)]" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <Play className="w-4 h-4" />
              Video Showreel
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-foreground">
            Demo <span className="text-primary">Reel</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Un recorrido visual por mis proyectos más destacados
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Decorative Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            {/* Video Wrapper */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-primary/10">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/videos/Portafolio.png"
                onPause={handlePause}
                onPlay={() => setIsPlaying(true)}
              >
                <source src="/videos/Portafolio.mp4" type="video/mp4" />
                <source src="/videos/Portafolio.webm" type="video/webm" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-black/30 group/play"
                  aria-label="Reproducir video"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 group-hover/play:scale-[2] transition-transform duration-500" />
                    <div className="relative bg-white rounded-full p-6 sm:p-8 shadow-2xl transform group-hover/play:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 sm:w-12 sm:h-12 text-primary fill-primary translate-x-0.5" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div className="mt-8 text-center space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-base sm:text-lg text-foreground font-medium">
              Una selección de mis proyectos más destacados en diseño gráfico y branding
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo transformo ideas en identidades visuales memorables que conectan con las audiencias
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
