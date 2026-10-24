
const experience = [
  {
    period: 'APR - JUL 2026',
    role: 'ICT Attachment Professional',
    organization: "Zetech University, Mang'u Campus",
    location: 'Kiambu, Kenya',
    description:
      'Provided day-to-day technical support across campus, helping students, faculty, and administrative users resolve hardware, software, connectivity, and general ICT issues.',
    responsibilities: [
      'Supported users with Windows operating systems, software installation, and recovery tasks.',
      'Diagnosed and maintained desktop computers, peripherals, and printers.',
      'Assisted with LAN connectivity, IP configuration, DHCP, routers, and wireless access points.',
      'Troubleshot technical issues and helped restore users to working systems.',
    ],
  },
]

function ExperienceTimeline() {
  return (
    <div className="mt-16">
      {experience.map((item) => (
        <article
          key={`${item.role}-${item.organization}`}
          className="grid gap-8 lg:grid-cols-[0.28fr_minmax(0,1fr)] lg:gap-12"
        >
          <aside className="lg:pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {item.period}
            </p>

            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
              {item.location}
            </p>
          </aside>

          <div className="min-w-0">
            <h3 className="text-3xl font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)] sm:text-4xl">
              {item.role}
              <span className="text-[var(--color-accent)]">.</span>
            </h3>

            <p className="mt-3 text-sm font-semibold text-[var(--color-text-secondary)] sm:text-base">
              {item.organization}
            </p>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base sm:leading-8">
              {item.description}
            </p>

            <div className="mt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Responsibilities
              </p>

              <ul className="mt-5 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {item.responsibilities.map((responsibility, index) => (
                  <li key={responsibility} className="min-w-0">
                    <span className="text-xs font-bold tabular-nums text-[var(--color-accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                      {responsibility}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ExperienceTimeline
