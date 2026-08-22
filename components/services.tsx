import { MessageCircle, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[10px] font-semibold text-accent sm:text-xs">الخدمات</p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
              خدمات ومنتجات زينة وإكسسوارات السيارات
            </h2>
          </div>

          <div className="lg:col-span-7 lg:border-r lg:border-ink-border lg:pr-16">
            <p className="text-pretty text-base leading-loose text-ink-muted sm:text-lg">
              للاستفسار عن الخدمات والمنتجات المتوفرة، تواصل معنا مباشرة.
            </p>

            <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <a
                href={site.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle size={18} aria-hidden="true" />
                استفسر عبر واتساب
              </a>
              <a
                href={site.phone.tel}
                className="inline-flex items-center justify-center gap-2 border border-ink-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-ink-foreground"
              >
                <Phone size={18} aria-hidden="true" />
                <span dir="ltr">{site.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
