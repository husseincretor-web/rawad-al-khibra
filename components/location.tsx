import { Navigation } from 'lucide-react'
import { site } from '@/lib/site'

export function Location() {
  return (
    <section id="location" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[10px] font-semibold text-muted-foreground sm:text-xs">
              الموقع
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
              موقعنا
            </h2>
          </div>

          <div className="lg:col-span-7">
            <address className="not-italic">
              <p className="text-pretty text-xl font-semibold leading-relaxed sm:text-2xl">
                {site.address.street}
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                {site.address.city} {site.address.postalCode} · {site.address.country}
              </p>
              <p className="mt-3 text-sm text-muted-foreground" dir="ltr">
                {site.coordinates.latitude}, {site.coordinates.longitude}
              </p>
            </address>

            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 border-b-2 border-accent pb-2 text-sm font-bold transition-colors hover:text-accent"
            >
              <Navigation size={18} aria-hidden="true" className="text-accent" />
              فتح الاتجاهات على خرائط Google
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
