import Image from 'next/image'
import { MessageCircle, Navigation, Phone } from 'lucide-react'
import { heroImage, site } from '@/lib/site'

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 bg-ink text-ink-foreground">
      {/* الخلفية: صورة حقيقية عند توفرها، وإلا مساحة معدنية داكنة بدون صور عشوائية */}
      <div className="absolute inset-0" aria-hidden={heroImage.src ? undefined : 'true'}>
        {heroImage.src ? (
          <Image
            src={heroImage.src || '/placeholder.svg'}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="slot-hatch size-full" />
        )}
        <div className="absolute inset-0 bg-ink/72" />
      </div>

      <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-20 sm:min-h-[70svh] lg:px-8 lg:pb-20">
        <p className="eyebrow mb-6 text-[10px] font-semibold text-accent sm:text-xs">
          ينبع · المملكة العربية السعودية
        </p>

        <div className="border-r-2 border-accent pr-5 sm:pr-7">
          <h1 className="max-w-3xl text-balance text-[2rem] font-bold leading-[1.15] sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-base text-ink-muted sm:text-xl">
            تاجر جملة اكسسوارات سيارات في ينبع
          </p>
        </div>

        <p className="mt-7 max-w-xl text-pretty text-sm leading-relaxed text-ink-muted sm:text-base">
          نوفر منتجات وخدمات متخصصة في مجال زينة وإكسسوارات السيارات، مع التركيز على الجودة والخدمة
          الاحترافية.
        </p>

        <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <a
            href={site.phone.tel}
            className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone size={18} aria-hidden="true" />
            اتصل الآن
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
