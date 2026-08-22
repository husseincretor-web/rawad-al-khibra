export function SectionHeading({
  title,
  subtitle,
  id,
}: {
  title: string
  subtitle?: string
  id?: string
}) {
  return (
    <div className="mb-8">
      <h2 id={id} className="text-2xl font-extrabold sm:text-3xl">
        {title}
      </h2>
      <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-sm bg-accent" />
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
