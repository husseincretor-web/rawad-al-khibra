import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

type PhotoSlotProps = {
  src: string | null
  alt: string
  file: string
  /** الأبعاد كـ aspect-ratio من Tailwind، مثال: aspect-[4/5] */
  className?: string
  sizes: string
  priority?: boolean
}

/**
 * خانة صورة واحدة.
 * إذا توفرت صورة حقيقية في public/images تُعرض بـ next/image،
 * وإن لم تتوفر تُعرض مساحة أنيقة مكتوب عليها «أضف صور المحل» بدون أي صورة وهمية.
 */
export function PhotoSlot({ src, alt, file, className, sizes, priority }: PhotoSlotProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-ink ${className ?? ''}`}>
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`slot-hatch relative flex flex-col items-center justify-center gap-2 overflow-hidden px-4 text-center ${className ?? ''}`}
      role="img"
      aria-label={`مساحة مخصصة لصورة: ${alt}`}
    >
      <ImageIcon className="size-5 text-accent" aria-hidden="true" strokeWidth={1.5} />
      <span className="text-xs font-medium text-ink-foreground">أضف صور المحل</span>
      <span className="text-[10px] tracking-wide text-ink-muted" dir="ltr">
        /images/{file}
      </span>
    </div>
  )
}
