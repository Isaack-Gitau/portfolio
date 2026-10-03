const engineeringDetails = [
  {
    number: '01',
    title: 'Application Architecture',
    description:
      'TrackIt is split into a React and TypeScript frontend and a FastAPI backend. The backend keeps routing, business logic, data access, validation, and persistence responsibilities separated.',
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
      'Access control is enforced by the backend, not just hidden in the interface. Authentication, verification, and role checks determine which operations a user can perform.',
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
      'Relational data models represent the different states and relationships involved in reporting, reviewing, claiming, moderating, and matching items.',
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
      'Community-submitted content needs controlled workflows. TrackIt separates ordinary user actions from privileged moderation operations across items, claims, reports, and comments.',
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
      'The matching system compares lost and found items using multiple signals to surface potentially related items. Matches are informational and do not replace the claim or recovery workflow.',
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
      'The backend is developed with automated tests covering API behavior, services, repositories, profiles, permissions, and matching functionality.',
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
    <div className="mt-14 grid border-l border-t border-[#f4f1eb]/15 md:grid-cols-2">
      {engineeringDetails.map((detail) => (
        <article
          key={detail.number}
          className="border-b border-r border-[#f4f1eb]/15 bg-[#123b66] p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-start justify-between gap-6">
            <span className="text-xs font-bold tracking-[0.18em] text-[#1683f7]">
              {detail.number}
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
              Engineering
            </span>
          </div>

          <h3 className="mt-10 text-2xl font-bold tracking-[-0.04em] text-[#f4f1eb] sm:text-3xl">
            {detail.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            {detail.description}
          </p>

          <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
            {detail.details.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3 text-xs font-semibold text-white/75"
              >
                <span className="mt-0.5 min-w-5 text-[9px] font-bold tracking-[0.12em] text-[#1683f7]">
                  {String(index + 1).padStart(2, '0')}
                </span>

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
