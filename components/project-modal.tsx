"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { X, FileText, ZoomIn, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Configuración de gestos - ajustado para evitar cierres accidentales
  const minSwipeDistance = 80 // Aumentado para gestos más intencionales
  const minVerticalSwipeDistance = 120 // Requiere más distancia para cerrar
  const swipeVelocityThreshold = 0.5 // Velocidad mínima para detectar swipe intencional

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [project])

  // Navegación de imágenes
  const handlePrevImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation()
    if (selectedImageIndex !== null && project?.images) {
      setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : project.images!.length - 1))
    }
  }, [selectedImageIndex, project])

  const handleNextImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation()
    if (selectedImageIndex !== null && project?.images) {
      setSelectedImageIndex((prev) => (prev! < project.images!.length - 1 ? prev! + 1 : 0))
    }
  }, [selectedImageIndex, project])

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Navegación en galería de imágenes
      if (selectedImageIndex !== null) {
        if (e.key === "ArrowLeft") handlePrevImage(e)
        if (e.key === "ArrowRight") handleNextImage(e)
        if (e.key === "Escape") setSelectedImageIndex(null)
        if (e.key === "z" || e.key === "Z") setIsZoomed(!isZoomed)
      }
      // Cerrar modal principal
      if (e.key === "Escape" && selectedImageIndex === null) {
        onClose()
      }
    }

    if (project) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImageIndex, project, onClose, handlePrevImage, handleNextImage, isZoomed])

  // Manejo de gestos táctiles
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY)
    
    // Calcular la proporción para determinar si es un gesto intencional
    const horizontalRatio = Math.abs(distanceX) / Math.abs(distanceY)

    // Navegación horizontal entre imágenes - solo si es claramente horizontal
    if (isHorizontalSwipe && Math.abs(distanceX) > minSwipeDistance && horizontalRatio > 2) {
      if (distanceX > 0) {
        handleNextImage()
      } else {
        handlePrevImage()
      }
    }
  }

  // Doble tap para zoom
  const [lastTap, setLastTap] = useState(0)
  const handleDoubleTap = () => {
    const now = Date.now()
    const DOUBLE_TAP_DELAY = 300

    if (now - lastTap < DOUBLE_TAP_DELAY) {
      setIsZoomed(!isZoomed)
    }
    setLastTap(now)
  }

  // Wheel para navegación (scroll horizontal)
  const handleWheel = (e: React.WheelEvent) => {
    if (selectedImageIndex !== null && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault()
      if (e.deltaX > 0) {
        handleNextImage()
      } else {
        handlePrevImage()
      }
    }
  }

  if (!project) return null

  const totalImages = project.type === "single" ? 1 : project.images?.length || 0

  return (
    <>
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
        onClick={onClose}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="bg-card rounded-xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto custom-scrollbar animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border p-3 sm:p-4 flex justify-between items-start sm:items-center gap-2 z-10">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground truncate">{project.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-all duration-200 hover:rotate-90"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-3 sm:p-4 md:p-6">
            {/* Single Image */}
            {project.type === "single" && (
              <div 
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] group cursor-pointer" 
                onClick={() => setSelectedImageIndex(0)}
                onDoubleClick={handleDoubleTap}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-lg">
                  <ZoomIn
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
                    size={48}
                  />
                </div>
              </div>
            )}

            {/* Gallery or Complete Project - Masonry Layout */}
            {(project.type === "gallery" || project.type === "complete") && project.images && (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-3 md:gap-4 space-y-2 sm:space-y-3 md:space-y-4">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative break-inside-avoid group cursor-pointer"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={img}
                        alt={`${project.title} - ${idx + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
                          size={32}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PDF Viewer */}
            {project.type === "pdf" && project.pdfUrl && (
              <div className="space-y-3 sm:space-y-4">
                {/* Visor optimizado para móviles */}
                <div className="block sm:hidden">
                  <object
                    data={project.pdfUrl}
                    type="application/pdf"
                    className="w-full h-[70vh] rounded-lg border border-border"
                  >
                    <div className="bg-muted/50 border border-border rounded-lg p-4 text-center h-[70vh] flex flex-col items-center justify-center">
                      <FileText className="mx-auto mb-3 text-primary" size={40} />
                      <p className="text-sm text-muted-foreground mb-4 px-4">
                        Tu navegador no puede mostrar el PDF. Descárgalo para verlo.
                      </p>
                      <a
                        href={project.pdfUrl}
                        download
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-sm"
                      >
                        <FileText size={18} />
                        Descargar PDF
                      </a>
                    </div>
                  </object>
                </div>

                {/* Visor de PDF para tablets y desktop */}
                <iframe
                  src={project.pdfUrl}
                  className="hidden sm:block w-full h-[500px] md:h-[600px] rounded-lg border border-border custom-scrollbar"
                  title={project.title}
                />
                
                {/* Botón de descarga */}
                <a
                  href={project.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                >
                  <FileText size={20} />
                  Descargar PDF
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Image Gallery Viewer */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black z-[60] flex items-center justify-center animate-fade-in select-none"
          onClick={() => setSelectedImageIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={handleWheel}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-200 hover:rotate-90 z-10"
            aria-label="Cerrar galería"
          >
            <X size={28} className="text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-sm z-10">
            {selectedImageIndex + 1} / {totalImages}
          </div>

          {/* Zoom Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsZoomed(!isZoomed)
            }}
            className="absolute top-4 left-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-200 z-10"
            aria-label={isZoomed ? "Reducir zoom" : "Ampliar zoom"}
          >
            {isZoomed ? <Minimize2 size={24} className="text-white" /> : <Maximize2 size={24} className="text-white" />}
          </button>

          {/* Navigation Buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 z-10 hover:scale-110 active:scale-95"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={32} className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 z-10 hover:scale-110 active:scale-95"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={32} className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div 
            ref={imageRef}
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={handleDoubleTap}
          >
            <Image
              src={
                project.type === "single"
                  ? project.thumbnail
                  : project.images?.[selectedImageIndex] || project.thumbnail
              }
              alt={`${project.title} - ${selectedImageIndex + 1}`}
              fill
              className={`object-contain animate-scale-in transition-transform duration-300 ${
                isZoomed ? "scale-150 cursor-move" : "cursor-zoom-in"
              }`}
              onClick={(e) => {
                e.stopPropagation()
                handleDoubleTap()
              }}
            />
          </div>

          {/* Thumbnail Strip */}
          {totalImages > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4">
              <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2 justify-center">
                {(project.type === "gallery" || project.type === "complete") && project.images?.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImageIndex(idx)
                    }}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                      idx === selectedImageIndex
                        ? "ring-2 ring-primary scale-110"
                        : "opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions hint */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50 text-xs text-center px-4">
            <div className="hidden md:block">
              Usa las flechas ← → o los botones para navegar | Doble clic o Z para zoom | ESC para cerrar
            </div>
            <div className="md:hidden">
              Desliza ← → para navegar | Doble tap para zoom
            </div>
          </div>
        </div>
      )}
    </>
  )
}
