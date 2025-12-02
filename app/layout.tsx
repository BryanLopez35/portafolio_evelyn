import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-mono'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bordersnap.com'),
  title: {
    default: "BorderSnap | Agencia de Publicidad Profesional",
    template: "%s | BorderSnap"
  },
  description:
    "Agencia de publicidad especializada en diseño gráfico, branding y campañas digitales. Transformamos tu marca en una experiencia visual memorable con creatividad y estrategia.",
  keywords: [
    'agencia de publicidad',
    'diseño gráfico',
    'branding',
    'marketing digital',
    'redes sociales',
    'producción de video',
    'publicidad visual',
    'consultoría de marca',
    'diseño digital',
    'campaña publicitaria',
    'agencia publicidad Tijuana',
    'diseño gráfico México',
    'branding Latinoamérica',
    'marketing digital Mexico',
    'agencia creativa Tijuana',
    'publicidad Baja California'
  ],
  authors: [{ name: 'BorderSnap' }],
  creator: 'BorderSnap',
  publisher: 'BorderSnap',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: ['es_ES', 'es_CO', 'es_AR', 'es_CL'],
    url: 'https://bordersnap.com',
    siteName: 'BorderSnap',
    title: 'BorderSnap | Agencia de Publicidad en Tijuana, México y Latinoamérica',
    description: 'Agencia de publicidad especializada en diseño gráfico, branding y campañas digitales. Servicios en Tijuana, México y toda Latinoamérica.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BorderSnap - Agencia de Publicidad',
      },
    ],
    countryName: 'Mexico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BorderSnap | Agencia de Publicidad en Tijuana y Latinoamérica',
    description: 'Agencia de publicidad especializada en diseño gráfico, branding y campañas digitales. Servicios en México y Latinoamérica.',
    images: ['/og-image.png'],
    creator: '@bordersnap',
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    shortcut: "/favicon.ico"
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://bordersnap.com',
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con código real de Google Search Console
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code'
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BorderSnap" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
