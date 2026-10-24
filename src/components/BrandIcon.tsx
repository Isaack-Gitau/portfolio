type BrandIconProps = {
  icon: { path: string }
  size?: number
  className?: string
}

function BrandIcon({ icon, size = 18, className = '' }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  )
}

export default BrandIcon
