import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

const STATS = [
  { value: '7', label: 'Лет на рынке' },
  { value: '500+', label: 'Сданных объектов' },
  { value: '98%', label: 'Клиентов довольны' },
  { value: '3 года', label: 'Гарантия на работы' },
]

function StatItem({ stat }) {
  const { ref, display } = useAnimatedCounter(stat.value)

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-extrabold text-white sm:text-5xl">{display}</p>
      <p className="mt-2 text-sm text-white/80 sm:text-base">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-accent py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
