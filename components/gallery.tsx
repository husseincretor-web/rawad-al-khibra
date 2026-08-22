import { PhotoSlot } from '@/components/photo-slot'
import { gallery } from '@/lib/site'

/** أحجام غير متساوية لمعرض تحريري بدل الشبكة التقليدية */
const layout = [
  'col-span-2 row-span-2 aspect-square sm:aspect-auto',
  'aspect-square',
  'aspect-square',
  'aspect-square',
  'col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-square',
  'col-span-2 aspect-[2/1]',
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="eyebrow text-[10px] font-semibold text-muted-foreground sm:text-xs">
              المعرض
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
              إكسسوارات السيارات
            </h2>
          </div>

          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            صور المحل والمنتجات تُعرض هنا. المساحات التالية مخصصة للصور الحقيقية.
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-border" />

        <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
          {gallery.map((item, i) => (
            <li key={item.file} className={layout[i % layout.length]}>
              <PhotoSlot
                src={item.src}
                alt={item.alt}
                file={item.file}
                className="size-full"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
