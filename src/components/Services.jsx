import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICES = [
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    title: 'Косметический ремонт',
    price: 'от 5 000 ₽/м²',
    features: [
      'Поклейка обоев',
      'Покраска стен и потолков',
      'Замена напольного покрытия',
      'Установка дверей и плинтусов',
    ],
    popular: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    title: 'Капитальный ремонт',
    price: 'от 8 000 ₽/м²',
    features: [
      'Перепланировка',
      'Замена электрики и сантехники',
      'Выравнивание стен и потолков',
      'Укладка плитки и ламината',
    ],
    popular: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
    title: 'Дизайнерский ремонт',
    price: 'от 15 000 ₽/м²',
    features: [
      'Индивидуальный дизайн-проект',
      'Авторский подбор материалов',
      'Сложные декоративные решения',
      'Умный дом и освещение',
    ],
    popular: false,
  },
]

function ServiceCard({ service, index }) {
  const ref = useScrollAnimation({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`animate-on-scroll relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        service.popular ? 'ring-2 ring-accent' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {service.popular && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          Популярное
        </span>
      )}
      <img
        src={service.image}
        alt={service.title}
        className="h-48 w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-lg font-bold text-accent">{service.price}</p>
        <ul className="mt-4 flex-1 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-0.5 text-accent">—</span>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#calculator"
          className="mt-6 inline-flex items-center justify-center rounded-lg border-2 border-accent px-4 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-white"
        >
          Подробнее
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const titleRef = useScrollAnimation()

  return (
    <section id="services" className="bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Наши услуги</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Выполняем все виды ремонтных работ — от косметического до премиум-класса
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
