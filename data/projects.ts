export type ProjectType = "gallery" | "single" | "pdf" | "complete";

export interface Project {
  category: string;
  title: string;
  description: string;
  type: ProjectType;
  thumbnail: string;
  images?: string[];
  pdfUrl?: string;
}

export const projects: Project[] = [
  {
    category: "impresos",
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
    title: "Sesión Fotográfica - XV Años",
    description:
      "Sesión completa de fotografía de xv años, incluyendo edición profesional.",
    type: "gallery",
    thumbnail: "projects/sesion-1/1.jpg",
    images: ["projects/sesion-1/1.jpg", "projects/sesion-1/2.jpg"],
  },
  {
    category: "fotografia",
    title: "Sesión Fotográfica - XV Años",
    description:
      "Sesión completa de fotografía de xv años, incluyendo edición profesional.",
    type: "gallery",
    thumbnail: "projects/sesion-2/1.jpg",
    images: ["projects/sesion-2/1.jpg"],
  },
  {
    category: "impresos",
    title: "Attana",
    description: "Manual de identidad corporativa para Attana.",
    type: "pdf",
    thumbnail: "projects/attana/1.png",
    pdfUrl: "/projects/attana/Manual de identidad Attana.pdf",
  },
  {
    category: "impresos",
    title: "New Life Hospital",
    description:
      "Manual de identidad corporativa para New Life Hospital. Hospital especializado en servicios bariátricos",
    type: "pdf",
    thumbnail: "projects/new-life-hospital/1.jpeg",
    pdfUrl:
      "/projects/new-life-hospital/Manual de identidad New Life Hospital.pdf",
  },
  {
    category: "impresos",
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
    category: "ilustracion",
    title: "Grupo Concordia",
    description:
      "Diseño e impresión para corporativo para empresa de construcción.",
    type: "gallery",
    thumbnail: "projects/grupo-concordia/1.jpg",
    images: [
      "projects/grupo-concordia/1.jpg",
      "projects/grupo-concordia/2.jpg",
    ],
  },
  {
    category: "ilustracion",
    title: "Otay Campestre",
    description:
      "Diseño e impresión de material promocional para club deportivo.",
    type: "gallery",
    thumbnail: "projects/otay-campestre/2.jpg",
    images: ["projects/otay-campestre/1.jpg", "projects/otay-campestre/2.jpg"],
  },
    {
    category: "ilustracion",
    title: "Geoingenieros",
    description:
      "Diseño e impresión de papelería corporativa para empresa de construcción.",
    type: "single",
    thumbnail: "projects/geoingenieros/1.jpg",
    images: ["projects/geoingenieros/1.jpg"],
  },
    {
    category: "ilustracion",
    title: "The Bakery",
    description:
      "Diseño e impresión material promocional para panadería local.",
    type: "gallery",
    thumbnail: "projects/the-bakery/3.jpg",
    images: [
      "projects/the-bakery/1.jpg",
      "projects/the-bakery/2.jpg",
      "projects/the-bakery/3.jpg",
    ],
  },
  {
    category: "ilustracion",
    title: "Personaje de Pizzeria",
    description:
      "Diseño e impresión de personaje ilustrado para pizzería local.",
    type: "gallery",
    thumbnail: "projects/pizzeria/2.jpg",
    images: ["projects/pizzeria/1.jpg", "projects/pizzeria/2.jpg"],
  },

  {
    category: "ilustracion",
    title: "Maccato",
    description: "Diseño e impresión de material promocional para cafetería.",
    type: "gallery",
    thumbnail: "projects/maccato/1.jpg",
    images: [
      "projects/maccato/1.jpg",
      "projects/maccato/2.jpg",
      "projects/maccato/3.jpg",
    ],
  },
  {
    category: "ilustracion",
    title: "Ace Dentistry",
    description:
      "Diseño gráfico e impresión de material promocional para clínica dental.",
    type: "gallery",
    thumbnail: "projects/ace-dentistry/2.jpg",
    images: ["projects/ace-dentistry/1.jpg", "projects/ace-dentistry/2.jpg"],
  },

];
