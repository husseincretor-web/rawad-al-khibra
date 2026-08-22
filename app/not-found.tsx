import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة | رواد الخبره لزينه السيارات',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-5xl font-extrabold text-accent">404</p>
      <h1 className="text-2xl font-extrabold sm:text-3xl">الصفحة غير موجودة</h1>
      <Link
        href="/"
        className="rounded-sm bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
      >
        العودة للرئيسية
      </Link>
    </main>
  )
}
