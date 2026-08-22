import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { site } from '@/lib/site'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'رواد الخبره لزينه السيارات | زينة وإكسسوارات السيارات في ينبع',
  description:
    'رواد الخبره لزينه السيارات في ينبع، تاجر جملة اكسسوارات سيارات. تعرف على خدماتنا وموقعنا وتواصل معنا عبر الهاتف أو واتساب.',
  keywords: [
    'زينة السيارات في ينبع',
    'إكسسوارات السيارات في ينبع',
    'زينة سيارات ينبع',
    'إكسسوارات سيارات ينبع',
    'تاجر جملة اكسسوارات سيارات',
    'رواد الخبره لزينه السيارات',
    'رواد الخبره ينبع',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: '/',
    siteName: site.name,
    title: 'رواد الخبره لزينه السيارات | زينة وإكسسوارات السيارات في ينبع',
    description:
      'تاجر جملة اكسسوارات سيارات في ينبع. تعرف على خدماتنا وموقعنا وتواصل معنا عبر الهاتف أو واتساب.',
  },
  twitter: {
    card: 'summary',
    title: 'رواد الخبره لزينه السيارات | زينة وإكسسوارات السيارات في ينبع',
    description: 'تاجر جملة اكسسوارات سيارات في ينبع. تواصل معنا عبر الهاتف أو واتساب.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c1c1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
