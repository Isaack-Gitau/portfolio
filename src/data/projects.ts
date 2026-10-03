export type Project = {
  number: string
  title: string
  category: string
  description: string
  problem: string
  solution: string
  architecture: string
  technologies: string[]
  features: string[]
  role: string
  links: {
    label: string
    href: string
  }[]
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'TrackIt',
    category: 'Lost & Found Platform',
    description:
      'A full-stack lost-and-found platform designed to help people publish, discover, verify, and recover lost or found items through a structured digital workflow.',
    problem:
      'Lost-and-found processes can become difficult to manage when item reports, claims, verification, moderation, and communication are handled without a central system.',
    solution:
      'TrackIt brings item discovery, claims, reports, comments, notifications, moderation, profiles, and matching into one application with role-aware access and structured workflows.',
    architecture:
      'A React and TypeScript frontend communicates with a FastAPI backend through REST APIs. The backend uses service and repository layers around PostgreSQL, with SQLAlchemy models and Alembic migrations.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
    ],
    features: [
      'Lost and found item management',
      'Verified claims and item recovery workflow',
      'Role-based moderation',
      'Reports and comments',
      'Notifications and profiles',
      'Lost ↔ found matching',
    ],
    role: 'Lead full-stack developer',
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/isaackgofficial-byte/trackit-frontend',
      },
      {
        label: 'Backend',
        href: 'https://github.com/isaackgofficial-byte/trackit-backend',
      },
    ],
  },
]
