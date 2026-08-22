import { MessageCircle, Navigation, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 lg:px-8">
        <p className="eyebrow text-[10px] font-semibold text-accent sm:text-xs">تواصل</p>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
          تواصل مع رواد الخبره
        </h2>

        <a
          href={site.phone.tel}
          dir="ltr"
          className="mt-8 inline-block text-3xl font-bold tracking-tight transition-colors hover:text-accent sm:text-5xl"
        >
          {site.phone.display}
        </a>

        <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <a
            href={site.phone.tel}
            className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone size={18} aria-hidden="true" />
            اتصال
          </a>
          <a
            href={site.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ink-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-ink-foreground"
          >
            <MessageCircle size={18} aria-hidden="true" />
            واتساب
          </a>
          <a
            href={site.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ink-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-ink-foreground"
          >
            <Navigation size={18} aria-hidden="true" />
            الاتجاهات
          </a>
        </div>
      </div>
    </section>
  )
}
