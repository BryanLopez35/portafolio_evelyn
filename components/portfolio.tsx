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
    <section id="portafolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Mi <span className="text-primary">Portafolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos destacados que demuestran mi expertise y creatividad
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "fotografia", "impresos", "ilustracion"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-primary/10"
              }`}
            >
              {category === "all"
                ? "Todos"
                : category === "fotografia"
                  ? "Fotografía"
                  : category === "impresos"
                    ? "Impresos"
                    : "Ilustración"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
