const capabilities = [
  {
    number: '01',
    title: 'Product Engineering',
    description:
      'Building responsive web applications from interface design through application logic, APIs, data, testing, and deployment-ready structure.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend & APIs',
    description:
      'Designing structured REST APIs with authentication, authorization, validation, business rules, error handling, and maintainable service boundaries.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'JWT'],
  },
  {
    number: '03',
    title: 'Data & Systems',
    description:
      'Working with relational data models, migrations, database access layers, and the relationships that keep applications consistent and reliable.',
    technologies: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'SQL'],
  },
  {
    number: '04',
    title: 'IT & Infrastructure',
    description:
      'Supporting users and systems through hardware troubleshooting, Windows deployment, networking, connectivity diagnostics, and day-to-day technical support.',
    technologies: ['Linux', 'TCP/IP', 'DHCP', 'LAN'],
  },
]

function CapabilityGrid() {
  return (
    <div className="mt-16 grid gap-x-16 gap-y-16 sm:grid-cols-2 sm:gap-y-20 lg:mt-20 lg:gap-x-20">
      {capabilities.map((capability) => (
        <article key={capability.number} className="min-w-0">
          <div>
            <span className="text-xs font-bold tracking-[0.18em] text-[var(--color-accent)]">
              {capability.number}
            </span>
          </div>

          <h3 className="mt-7 max-w-md text-3xl font-bold leading-[1.02] tracking-[-0.045em] text-[var(--color-text)] sm:text-4xl">
            {capability.title}
            <span className="text-[var(--color-accent)]">.</span>
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base sm:leading-8">
            {capability.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {capability.technologies.map((technology) => (
              <span
                key={technology}
                className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default CapabilityGrid