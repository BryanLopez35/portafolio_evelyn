import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Project, ProjectType } from "@/data/projects"
import { FileText, Image as ImageIcon, Folder } from "lucide-react"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

const getTypeIcon = (type: ProjectType) => {
  switch (type) {
    case "gallery":
      return <ImageIcon size={20} />
    case "single":
      return <ImageIcon size={20} />
    case "pdf":
      return <FileText size={20} />
    case "complete":
      return <Folder size={20} />
  }
}

const getTypeLabel = (type: ProjectType) => {
  switch (type) {
    case "gallery":
      return "Galería"
    case "single":
      return "Imagen"
    case "pdf":
      return "PDF"
    case "complete":
      return "Proyecto Completo"
  }
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
          {getTypeIcon(project.type)}
          <span>{getTypeLabel(project.type)}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          <ChevronRight className="text-white" size={24} />
        </div>
      </div>
      <div className="p-4 sm:p-6 bg-card">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm">{project.description}</p>
      </div>
    </div>
  )
}
