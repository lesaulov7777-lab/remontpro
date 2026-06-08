import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ADVANTAGES = [
  {
    icon: '📋',
    title: 'Фиксированная смета',
    text: 'Цена не изменится после начала работ. Всё прописано в договоре.',
  },
  {
    icon: '⏰',
    title: 'Точные сроки',
    text: 'Сдаём объект вовремя. За каждый день просрочки — скидка 1%.',
  },
  {
    icon: '🛡️',
    title: 'Гарантия 3 года',
    text: 'Бесплатно исправим любые недочёты в течение 3 лет после сдачи.',
  },
  {
    icon: '🧹',
    title: 'Сдаём с уборкой',
    text: 'После ремонта проводим генеральную уборку. Заезжайте и живите.',
  },
]

function AdvantageCard({ item, index }) {
  const ref = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-[5px] hover:shadow-xl"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-4xl" role="img" aria-hidden="true">
        {item.icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-text-primary">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p>
    </div>
  )
}

export default function Advantages() {
  const titleRef = useScrollAnimation()

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="animate-on-scroll text-center text-3xl font-bold sm:text-4xl">
          Почему выбирают нас
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item, index) => (
            <AdvantageCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
