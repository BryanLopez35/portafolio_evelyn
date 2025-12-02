"use client"

import { useState } from "react"
import Image from "next/image"
import { X, FileText, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  if (!project) return null

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImageIndex !== null && project.images) {
      setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : project.images!.length - 1))
    }
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImageIndex !== null && project.images) {
      setSelectedImageIndex((prev) => (prev! < project.images!.length - 1 ? prev! + 1 : 0))
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return
    if (e.key === "ArrowLeft") handlePrevImage(e as any)
    if (e.key === "ArrowRight") handleNextImage(e as any)
    if (e.key === "Escape") setSelectedImageIndex(null)
  }

  // Add keyboard navigation
  if (typeof window !== "undefined" && selectedImageIndex !== null) {
    window.addEventListener("keydown", handleKeyDown)
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
        onClick={onClose}
      >
        <div
          className="bg-card rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border p-4 flex justify-between items-center z-10">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-all duration-200 hover:rotate-90"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            {/* Single Image */}
            {project.type === "single" && (
              <div className="relative w-full h-[600px] group cursor-pointer" onClick={() => setSelectedImageIndex(0)}>
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
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
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
              <div className="space-y-4">
                <iframe
                  src={project.pdfUrl}
                  className="w-full h-[600px] rounded-lg border border-border custom-scrollbar"
                  title={project.title}
                />
                <a
                  href={project.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium hover:shadow-lg hover:scale-105"
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
          className="fixed inset-0 bg-black/98 z-[60] flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:rotate-90 z-10 backdrop-blur-sm"
          >
            <X size={28} className="text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm z-10">
            {selectedImageIndex + 1} / {project.type === "single" ? 1 : project.images?.length || 0}
          </div>

          {/* Navigation Buttons */}
          {((project.type === "gallery" || project.type === "complete") && project.images && project.images.length > 1) && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 z-10 backdrop-blur-sm hover:scale-110"
              >
                <ChevronLeft size={32} className="text-white" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 z-10 backdrop-blur-sm hover:scale-110"
              >
                <ChevronRight size={32} className="text-white" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Image
              src={
                project.type === "single"
                  ? project.thumbnail
                  : project.images?.[selectedImageIndex] || project.thumbnail
              }
              alt={`${project.title} - ${selectedImageIndex + 1}`}
              fill
              className="object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Thumbnail Strip */}
          {((project.type === "gallery" || project.type === "complete") && project.images && project.images.length > 1) && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4">
              <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2 justify-center">
                {project.images.map((img, idx) => (
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
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            Usa las flechas ← → o los botones para navegar
          </div>
        </div>
      )}
    </>
  )
}
