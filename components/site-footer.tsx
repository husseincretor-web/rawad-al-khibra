import { MessageCircle, Navigation, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pb-24 pt-14 sm:pb-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-8 w-0.5 bg-accent" />
              <p className="text-base font-bold">{site.name}</p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{site.activity}</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
              {site.address.full}
            </address>
            <a
              href={site.phone.tel}
              dir="ltr"
              className="mt-3 inline-block text-sm font-bold hover:text-accent"
            >
              {site.phone.display}
            </a>
          </div>

          <nav aria-label="روابط سريعة">
            <p className="eyebrow text-[10px] font-semibold text-muted-foreground">روابط سريعة</p>
            <ul className="mt-5 flex flex-col gap-3.5 text-sm">
              <li>
                <a
                  href={site.phone.tel}
                  className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone size={16} aria-hidden="true" />
                  اتصل
                </a>
              </li>
              <li>
                <a
                  href={site.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-accent"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  واتساب
                </a>
              </li>
              <li>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Navigation size={16} aria-hidden="true" />
                  الاتجاهات
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 {site.name} - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  )
}
