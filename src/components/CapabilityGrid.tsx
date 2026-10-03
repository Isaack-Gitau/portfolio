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
    <div className="mt-14 grid border-l border-t border-[#151515]/10 sm:grid-cols-2">
      {capabilities.map((capability) => (
        <article
          key={capability.number}
          className="border-b border-r border-[#151515]/10 p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-start justify-between gap-6">
            <span className="text-xs font-bold tracking-[0.18em] text-[#1683f7]">
              {capability.number}
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/35">
              Capability
            </span>
          </div>

          <h3 className="mt-12 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
            {capability.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#151515]/70">
            {capability.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#151515]/10 pt-5">
            {capability.technologies.map((technology) => (
              <span
                key={technology}
                className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#151515]/55"
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
