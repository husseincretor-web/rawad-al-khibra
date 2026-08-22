import { PhotoSlot } from '@/components/photo-slot'
import { aboutImage, site } from '@/lib/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <PhotoSlot
              src={aboutImage.src}
              alt={aboutImage.alt}
              file={aboutImage.file}
              className="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow text-[10px] font-semibold text-muted-foreground sm:text-xs">
              من نحن
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
              عن رواد الخبره
            </h2>
            <div className="mt-6 h-px w-16 bg-accent" />

            <p className="mt-7 text-pretty text-base leading-loose text-muted-foreground sm:text-lg">
              رواد الخبره لزينه السيارات نشاط تجاري في مدينة {site.city}، يعمل كتاجر جملة في مجال
              اكسسوارات السيارات، ويقدّم منتجات وخدمات متخصصة في زينة وإكسسوارات السيارات.
            </p>
            <p className="mt-5 text-pretty text-base leading-loose text-muted-foreground">
              للاستفسار عن التفاصيل والأصناف المتوفرة يمكنكم التواصل معنا مباشرة عبر الهاتف أو
              واتساب.
            </p>

            <dl className="mt-10 flex flex-col divide-y divide-border border-t border-border">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                <dt className="w-24 shrink-0 text-xs text-muted-foreground">النشاط</dt>
                <dd className="text-sm font-semibold">{site.activity}</dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                <dt className="w-24 shrink-0 text-xs text-muted-foreground">المدينة</dt>
                <dd className="text-sm font-semibold">
                  {site.address.street}، {site.address.city}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                <dt className="w-24 shrink-0 text-xs text-muted-foreground">الهاتف</dt>
                <dd className="text-sm font-semibold">
                  <a href={site.phone.tel} className="hover:text-accent" dir="ltr">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
