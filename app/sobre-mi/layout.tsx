import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Mí - Evelyn Haro",
  description: "Diseñadora gráfica de Tijuana especializada en identidad visual, contenido digital y branding estratégico.",
}

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
