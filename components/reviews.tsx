import { Star } from 'lucide-react'
import { site } from '@/lib/site'

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-16 border-y border-border bg-muted">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24 lg:px-8">
        <p className="eyebrow text-[10px] font-semibold text-muted-foreground sm:text-xs">
          آراء العملاء
        </p>

        <div
          className="mt-8 flex items-center justify-center gap-1"
          aria-label={`التقييم ${site.rating.value} من 5`}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={20} aria-hidden="true" className="fill-accent text-accent" />
          ))}
        </div>

        <p className="mt-5 text-5xl font-bold leading-none sm:text-6xl">{site.rating.value}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          من 5 · {site.rating.count === 1 ? 'مراجعة واحدة' : `${site.rating.count} مراجعات`}
        </p>

        <figure className="mt-12">
          <blockquote className="text-balance text-xl leading-loose sm:text-2xl sm:leading-loose">
            {`“${site.review.text}”`}
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            <span className="text-sm font-semibold">{site.review.author}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
