import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PROJECTS = [
  {
    title: 'Студия 42 м² на Арбате',
    type: 'Капитальный ремонт',
    duration: '45 дней',
    cost: '380 000 ₽',
    before: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
  },
  {
    title: 'Двушка 65 м² в Бутово',
    type: 'Дизайнерский ремонт',
    duration: '60 дней',
    cost: '850 000 ₽',
    before: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
  },
  {
    title: 'Трёшка 90 м² на Тверской',
    type: 'Капитальный ремонт',
    duration: '75 дней',
    cost: '720 000 ₽',
    before: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80',
  },
]

function ProjectCard({ project, index }) {
  const ref = useScrollAnimation({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className="animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid grid-cols-2 gap-0.5">
        <div className="relative">
          <img src={project.before} alt={`${project.title} — до`} className="h-40 w-full object-cover sm:h-48" loading="lazy" />
          <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
            До
          </span>
        </div>
        <div className="relative">
          <img src={project.after} alt={`${project.title} — после`} className="h-40 w-full object-cover sm:h-48" loading="lazy" />
          <span className="absolute bottom-2 left-2 rounded bg-accent px-2 py-0.5 text-xs font-medium text-white">
            После
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-accent">{project.type}</p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-text-secondary">
          <span>⏱ {project.duration}</span>
          <span>💰 {project.cost}</span>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const titleRef = useScrollAnimation()

  return (
    <section id="portfolio" className="bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Наши работы</h2>
          <p className="mt-4 text-text-secondary">Реальные объекты наших клиентов</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center rounded-lg border-2 border-accent px-8 py-3 text-base font-semibold text-accent transition-all hover:bg-accent hover:text-white hover:-translate-y-0.5"
          >
            Смотреть все проекты
          </button>
        </div>
      </div>
    </section>
  )
}
