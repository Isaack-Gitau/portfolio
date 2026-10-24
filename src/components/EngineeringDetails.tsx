
const engineeringDetails = [
  {
    number: '01',
    title: 'Application Architecture',
    description:
      'TrackIt separates its React and TypeScript frontend from a FastAPI backend. Routing, business logic, data access, validation, and persistence have distinct responsibilities.',
    details: [
      'React + TypeScript frontend',
      'FastAPI REST backend',
      'Router, service, repository, and model layers',
      'Reusable API and UI modules',
    ],
  },
  {
    number: '02',
    title: 'Authentication & Roles',
    description:
      'Access control is enforced by the backend rather than relying on hidden interface elements. Authentication, verification, and role checks govern protected operations.',
    details: [
      'JWT authentication',
      'Verified-user access',
      'User, moderator, and admin roles',
      'Backend-enforced permissions',
    ],
  },
  {
    number: '03',
    title: 'Data & Lifecycle',
    description:
      'Relational models represent the states and relationships involved in reporting, reviewing, claiming, moderating, and matching lost and found items.',
    details: [
      'PostgreSQL database',
      'SQLAlchemy ORM',
      'Alembic migrations',
      'Explicit item and claim states',
    ],
  },
  {
    number: '04',
    title: 'Moderation & Trust',
    description:
      'Community-submitted content requires controlled workflows. TrackIt separates ordinary user actions from privileged moderation across items, claims, reports, and comments.',
    details: [
      'Item moderation',
      'Claim moderation',
      'Report moderation',
      'Comment moderation',
    ],
  },
  {
    number: '05',
    title: 'Matching System',
    description:
      'The matching system evaluates multiple signals to surface potentially related lost and found items. A match is informational and does not replace the claim or recovery workflow.',
    details: [
      'Category similarity',
      'Title and description signals',
      'Location and time signals',
      'Possible and strong match levels',
    ],
  },
  {
    number: '06',
    title: 'Testing & Reliability',
    description:
      'Automated backend tests help verify API behavior, service and repository logic, profiles, permissions, and matching functionality.',
    details: [
      'Pytest test suite',
      'API-level testing',
      'Service and repository tests',
      'Permission boundary validation',
    ],
  },
]

function EngineeringDetails() {
  return (
    <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
      {engineeringDetails.map((detail) => (
        <article key={detail.number} className="min-w-0">
          <div>
            <span className="text-xs font-bold tabular-nums tracking-[0.16em] text-[var(--color-accent)]">
              {detail.number}
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-bold leading-tight tracking-[-0.045em] text-[var(--color-text)] sm:text-3xl">
            {detail.title}
            <span className="text-[var(--color-accent)]">.</span>
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:leading-8">
            {detail.description}
          </p>

          <ul className="mt-7 space-y-3">
            {detail.details.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default EngineeringDetails
