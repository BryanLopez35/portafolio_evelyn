"use client"

import { useState } from "react"
import { projects, Project } from "@/data/projects"
import ProjectCard from "./project-card"
import ProjectModal from "./project-modal"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="portafolio" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Mi <span className="text-primary">Portafolio</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Proyectos destacados que demuestran mi expertise y creatividad
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {["all", "fotografia", "identidad", "ilustracion"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-primary/10"
              }`}
            >
              {category === "all"
                ? "Todos"
                : category === "fotografia"
                  ? "Fotografía"
                  : category === "identidad"
                    ? "Identidad"
                    : "Ilustración"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>

        {/* Modal/Lightbox */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  )
}
