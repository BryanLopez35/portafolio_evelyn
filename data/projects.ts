export type ProjectType = "gallery" | "single" | "pdf" | "complete"

export interface Project {
  category: string
  title: string
  description: string
  type: ProjectType
  thumbnail: string
  images?: string[]
  pdfUrl?: string
}

export const projects: Project[] = [
  {
    category: "ilustracion",
    title: "Brilliant - Dental Laboratory",
    description:
      "Diseño de identidad corporativa y material promocional para laboratorio dental.",
    type: "complete",
    thumbnail: "projects/brilliant-dental-laboratory/1.jpeg",
    images: [
      "projects/brilliant-dental-laboratory/1.jpeg",
        "projects/brilliant-dental-laboratory/2.jpeg",
    ],
  },
  {
    category: "fotografia",
    title: "Sesión Fotográfica - Producto",
    description: "Sesión completa de fotografía de producto para e-commerce",
    type: "gallery",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    category: "ilustracion",
    title: "Attana",
    description: "Manual de identidad corporativa para Attana.",
    type: "pdf",
    thumbnail: "/placeholder.svg",
    pdfUrl: "/projects/attana/Manual de identidad Attana.pdf",
  },
  {
    category: "ilustracion",
    title: "New Life Hospital",
    description: "Manual de identidad corporativa para New Life Hospital. Hospital especializado en servicios bariátricos",
    type: "pdf",
    thumbnail: "projects/new-life-hospital/1.jpeg",
    pdfUrl: "/projects/new-life-hospital/Manual de identidad New Life Hospital.pdf",
  },
  {
    category: "ilustracion",
    title: "Nakeji Dental",
    description: "Serie de ilustraciones para campaña publicitaria",
    type: "gallery",
    thumbnail: "/projects/nakeji-dental/1.jpeg",
    images: [
      "projects/nakeji-dental/1.jpeg",
      "projects/nakeji-dental/2.jpeg",
      "projects/nakeji-dental/3.jpeg",
      "projects/nakeji-dental/4.jpeg",
      "projects/nakeji-dental/5.jpeg",
      "projects/nakeji-dental/6.jpeg",
      "projects/nakeji-dental/7.jpeg",
    ],
  },
  {
    category: "impresos",
    title: "Manual de Identidad Corporativa",
    description: "Documento completo de lineamientos de marca",
    type: "pdf",
    thumbnail: "/placeholder.svg",
    pdfUrl: "/manual-identidad.pdf",
  },
];
