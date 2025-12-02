import { Palette, Smartphone, TrendingUp, Users, Video, Zap, LucideIcon } from "lucide-react"

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  process: {
    step: number
    title: string
    description: string
  }[]
  portfolio: string[]
  pricing?: {
    basic?: string
    premium?: string
    custom?: string
  }
}

export const services: Service[] = [
  {
    id: "diseno-grafico",
    icon: Palette,
    title: "Diseño Gráfico",
    shortDescription:
      "Diseño de identidad visual, logotipos, banners y materiales de marketing que capturan la esencia de tu marca",
    fullDescription:
      "Creamos diseños gráficos únicos y memorables que capturan la esencia de tu marca y comunican tu mensaje de manera efectiva. Desde logotipos hasta materiales de marketing completos, cada diseño está pensado estratégicamente para generar impacto.",
    benefits: [
      "Diseños únicos y personalizados para tu marca",
      "Identidad visual coherente en todos los canales",
      "Materiales listos para impresión y medios digitales",
      "Revisiones ilimitadas hasta tu satisfacción",
      "Archivos en todos los formatos necesarios",
      "Guía de uso de marca incluida",
    ],
    process: [
      {
        step: 1,
        title: "Consulta Inicial",
        description: "Entendemos tu visión, objetivos y necesidades específicas para el proyecto.",
      },
      {
        step: 2,
        title: "Investigación y Concepto",
        description: "Analizamos tu mercado, competencia y desarrollamos conceptos creativos únicos.",
      },
      {
        step: 3,
        title: "Diseño y Propuestas",
        description: "Creamos propuestas de diseño basadas en los conceptos aprobados.",
      },
      {
        step: 4,
        title: "Refinamiento",
        description: "Ajustamos y perfeccionamos el diseño según tus comentarios.",
      },
      {
        step: 5,
        title: "Entrega Final",
        description: "Entregamos todos los archivos finales en formatos optimizados para cada uso.",
      },
    ],
    portfolio: [],
  },
  {
    id: "diseno-redes-sociales",
    icon: Smartphone,
    title: "Diseño de Redes Sociales",
    shortDescription: "Contenido visual optimizado para todas las plataformas con estrategia de engagement y alcance",
    fullDescription:
      "Diseñamos contenido visual estratégico para redes sociales que maximiza el engagement y construye una comunidad fiel. Cada publicación está optimizada para las especificaciones técnicas y mejores prácticas de cada plataforma.",
    benefits: [
      "Contenido optimizado para cada red social",
      "Plantillas personalizadas reutilizables",
      "Calendario de contenidos visual",
      "Stories, posts, reels y carruseles",
      "Diseños que generan engagement",
      "Estrategia de contenido incluida",
    ],
    process: [
      {
        step: 1,
        title: "Análisis de Marca",
        description: "Estudiamos tu marca, audiencia y objetivos en redes sociales.",
      },
      {
        step: 2,
        title: "Estrategia de Contenido",
        description: "Desarrollamos una estrategia visual adaptada a cada plataforma.",
      },
      {
        step: 3,
        title: "Diseño de Plantillas",
        description: "Creamos plantillas versátiles que mantienen consistencia de marca.",
      },
      {
        step: 4,
        title: "Producción de Contenido",
        description: "Diseñamos el contenido visual según el calendario acordado.",
      },
      {
        step: 5,
        title: "Optimización Continua",
        description: "Ajustamos la estrategia visual según métricas de rendimiento.",
      },
    ],
    portfolio: [],
  },
  {
    id: "branding-digital",
    icon: TrendingUp,
    title: "Branding Digital",
    shortDescription: "Desarrollo completo de marca: identidad, posicionamiento y estrategia digital integrada",
    fullDescription:
      "Construimos marcas digitales sólidas y memorables desde cero o revitalizamos marcas existentes. Nuestro enfoque integral abarca desde la identidad visual hasta la estrategia de posicionamiento en todos los canales digitales.",
    benefits: [
      "Identidad de marca completa y coherente",
      "Manual de marca digital detallado",
      "Estrategia de posicionamiento definida",
      "Diseño de todos los activos digitales",
      "Voz y tono de marca establecidos",
      "Aplicaciones en múltiples touchpoints",
    ],
    process: [
      {
        step: 1,
        title: "Descubrimiento de Marca",
        description: "Definimos valores, misión, visión y posicionamiento único.",
      },
      {
        step: 2,
        title: "Estrategia de Marca",
        description: "Desarrollamos la estrategia completa de branding digital.",
      },
      {
        step: 3,
        title: "Identidad Visual",
        description: "Creamos el sistema de identidad visual completo.",
      },
      {
        step: 4,
        title: "Aplicaciones Digitales",
        description: "Diseñamos todos los activos para presencia digital.",
      },
      {
        step: 5,
        title: "Manual de Marca",
        description: "Documentamos todas las directrices en un manual completo.",
      },
    ],
    portfolio: [],
  },
  {
    id: "publicidad-visual",
    icon: Users,
    title: "Publicidad Visual",
    shortDescription: "Campañas publicitarias impactantes para medios digitales y tradicionales con ROI comprobado",
    fullDescription:
      "Diseñamos campañas publicitarias visuales que captan la atención y generan conversiones. Combinamos creatividad con estrategia basada en datos para maximizar el retorno de inversión en todos los canales publicitarios.",
    benefits: [
      "Campañas adaptadas a tu objetivo",
      "Diseños optimizados para conversión",
      "A/B testing de variaciones creativas",
      "Formatos para todos los canales",
      "Estrategia publicitaria incluida",
      "Análisis de rendimiento creativo",
    ],
    process: [
      {
        step: 1,
        title: "Briefing Publicitario",
        description: "Definimos objetivos, KPIs y público objetivo de la campaña.",
      },
      {
        step: 2,
        title: "Concepto Creativo",
        description: "Desarrollamos conceptos creativos alineados con objetivos.",
      },
      {
        step: 3,
        title: "Producción Creativa",
        description: "Diseñamos todos los assets publicitarios necesarios.",
      },
      {
        step: 4,
        title: "Optimización",
        description: "Creamos variaciones para testing y optimización.",
      },
      {
        step: 5,
        title: "Seguimiento",
        description: "Monitoreamos rendimiento y ajustamos creatividades.",
      },
    ],
    portfolio: [],
  },
  {
    id: "produccion-video",
    icon: Video,
    title: "Producción de Video",
    shortDescription: "Videos comerciales, animaciones y contenido multimedia profesional para tu marca",
    fullDescription:
      "Producimos contenido audiovisual de alta calidad que cuenta historias convincentes y genera resultados. Desde videos comerciales hasta animaciones, cada producción está diseñada para captar y mantener la atención de tu audiencia.",
    benefits: [
      "Videos profesionales de alta calidad",
      "Animaciones y motion graphics",
      "Edición y postproducción avanzada",
      "Optimización para cada plataforma",
      "Guiones y storyboards incluidos",
      "Música y efectos de sonido",
    ],
    process: [
      {
        step: 1,
        title: "Concepto y Guión",
        description: "Desarrollamos el concepto creativo y guión del video.",
      },
      {
        step: 2,
        title: "Preproducción",
        description: "Planificamos locaciones, storyboard y todos los recursos.",
      },
      {
        step: 3,
        title: "Producción",
        description: "Filmamos o creamos las animaciones según el plan.",
      },
      {
        step: 4,
        title: "Postproducción",
        description: "Editamos, agregamos efectos, música y refinamos el video.",
      },
      {
        step: 5,
        title: "Entrega Multi-formato",
        description: "Exportamos en todos los formatos necesarios para cada canal.",
      },
    ],
    portfolio: [],
  },
  {
    id: "consultoria-marca",
    icon: Zap,
    title: "Consultoría de Marca",
    shortDescription: "Asesoría estratégica para potenciar tu marca y conectar auténticamente con tu público objetivo",
    fullDescription:
      "Ofrecemos consultoría estratégica personalizada para ayudarte a construir, fortalecer o reposicionar tu marca. Combinamos experiencia en branding con análisis de mercado para desarrollar estrategias efectivas y sostenibles.",
    benefits: [
      "Análisis profundo de tu marca actual",
      "Estrategia de posicionamiento clara",
      "Identificación de oportunidades",
      "Roadmap de implementación",
      "Asesoría continua personalizada",
      "Reportes y seguimiento de progreso",
    ],
    process: [
      {
        step: 1,
        title: "Auditoría de Marca",
        description: "Evaluamos el estado actual de tu marca en el mercado.",
      },
      {
        step: 2,
        title: "Análisis Competitivo",
        description: "Estudiamos tu competencia y oportunidades de diferenciación.",
      },
      {
        step: 3,
        title: "Estrategia Personalizada",
        description: "Desarrollamos una estrategia adaptada a tus objetivos.",
      },
      {
        step: 4,
        title: "Plan de Acción",
        description: "Creamos un roadmap detallado con pasos concretos.",
      },
      {
        step: 5,
        title: "Implementación y Seguimiento",
        description: "Te acompañamos en la ejecución y medimos resultados.",
      },
    ],
    portfolio: [],
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
