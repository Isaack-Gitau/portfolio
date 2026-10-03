type SectionHeadingProps = {
  number: string
  eyebrow: string
  title: string
  description?: string
}

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 border-t border-[#151515]/15 pt-5 lg:grid-cols-[0.16fr_minmax(0,1fr)] lg:gap-8">
      <div className="flex items-start gap-3">
        <span className="text-xs font-bold tracking-[0.18em] text-[#1683f7]">
          {number}
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/50">
          {eyebrow}
        </span>
      </div>

      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
          {title}
          <span className="text-[#1683f7]">.</span>
        </h2>

        {description && (
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#151515]/70 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SectionHeading
