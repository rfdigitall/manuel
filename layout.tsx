import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://soccorsostradalemanuel.it'),
  title: {
    default: 'Soccorso Stradale Manuel H24 · Carroattrezzi Varese 24 ore',
    template: '%s · Soccorso Stradale Manuel H24',
  },
  description:
    'Soccorso stradale H24 a Varese e in tutta Europa. Carroattrezzi per auto, supercar e veicoli elettrici. Intervento rapido, professionale e assicurato. Chiama +39 333 520 1001.',
  keywords: [
    'soccorso stradale Varese',
    'carroattrezzi Varese',
    'soccorso stradale H24',
    'trasporto auto Varese',
    'soccorso auto elettriche',
    'carroattrezzi supercar',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    title: 'Soccorso Stradale Manuel H24 · Carroattrezzi Varese',
    description:
      'Intervento rapido 24 ore su 24 a Varese e in tutta Europa. Soccorso professionale per ogni veicolo, dalle utilitarie alle supercar.',
    siteName: 'Soccorso Stradale Manuel H24',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0c0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`dark ${oswald.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
