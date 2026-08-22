import { MessageCircle, Navigation, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function MobileBar() {
  return (
    <nav
      aria-label="روابط سريعة للجوال"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur sm:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a
            href={site.phone.tel}
            className="flex flex-col items-center gap-1 py-3 text-xs font-bold"
          >
            <Phone size={18} aria-hidden="true" className="text-accent" />
            اتصال
          </a>
        </li>
        <li>
          <a
            href={site.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs font-bold"
          >
            <MessageCircle size={18} aria-hidden="true" className="text-accent" />
            واتساب
          </a>
        </li>
        <li>
          <a
            href={site.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 text-xs font-bold"
          >
            <Navigation size={18} aria-hidden="true" className="text-accent" />
            الاتجاهات
          </a>
        </li>
      </ul>
    </nav>
  )
}
