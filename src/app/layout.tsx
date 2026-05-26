import type { Metadata, Viewport } from 'next'
import { Lora, Montserrat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import LoadingScreen from '@/components/ui/LoadingScreen'
import ScrollToTop from '@/components/ui/ScrollToTop'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: {
    default: 'GIH | Maldives',
    template: '%s | GIH',
  },
  description:
    'GIH redefines luxury hospitality across the Maldives — world-class hotel management, resort operations and premium tourism experiences.',
  keywords: ['GIH', 'luxury hospitality', 'Maldives resorts', 'hotel management'],

  // ✅ FIXED favicon setup with basePath
  icons: {
    icon: `${basePath}/favicon.png`,
  },

  openGraph: {
    title: 'GIH Maldives',
    description:
      'Luxury hospitality and resort development across the Maldives.',
    siteName: 'GIH Maldives',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07111F',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
