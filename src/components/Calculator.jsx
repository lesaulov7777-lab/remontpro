import { useState, useMemo } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { formatPrice } from '../utils/formatPrice'

const REPAIR_TYPES = [
  { id: 'cosmetic', label: 'Косметический', price: 5000 },
  { id: 'capital', label: 'Капитальный', price: 8000 },
  { id: 'designer', label: 'Дизайнерский', price: 15000 },
]

const EXTRA_OPTIONS = [
  { id: 'design', label: 'Дизайн-проект', price: 50000 },
  { id: 'windows', label: 'Замена окон', price: 30000 },
  { id: 'ceilings', label: 'Натяжные потолки', price: 40000 },
]

export default function Calculator() {
  const [area, setArea] = useState(60)
  const [repairType, setRepairType] = useState('capital')
  const [extras, setExtras] = useState({ design: false, windows: false, ceilings: false })

  const titleRef = useScrollAnimation()

  const total = useMemo(() => {
    const type = REPAIR_TYPES.find((t) => t.id === repairType)
    const base = area * (type?.price ?? 0)
    const extrasSum = EXTRA_OPTIONS.reduce(
      (sum, opt) => sum + (extras[opt.id] ? opt.price : 0),
      0
    )
    return base + extrasSum
  }, [area, repairType, extras])

  const toggleExtra = (id) => {
    setExtras((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="calculator" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Рассчитайте стоимость ремонта</h2>
          <p className="mt-4 text-text-secondary">Узнайте примерную стоимость за 30 секунд</p>
        </div>

        <div className="animate-on-scroll visible mt-12 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="area" className="text-sm font-medium text-text-primary">
                Площадь квартиры
              </label>
              <span className="text-lg font-bold text-accent">{area} м²</span>
            </div>
            <input
              id="area"
              type="range"
              min={20}
              max={200}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full"
            />
            <div className="mt-1 flex justify-between text-xs text-text-secondary">
              <span>20 м²</span>
              <span>200 м²</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-text-primary">Тип ремонта</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {REPAIR_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setRepairType(type.id)}
                  className={`rounded-xl border-2 px-4 py-3 text-left text-sm transition-all hover:-translate-y-0.5 ${
                    repairType === type.id
                      ? 'border-accent bg-accent/5 font-semibold text-accent'
                      : 'border-gray-200 hover:border-accent/50'
                  }`}
                >
                  <span className="block font-medium">{type.label}</span>
                  <span className="mt-1 block text-xs text-text-secondary">
                    {formatPrice(type.price)} ₽/м²
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-text-primary">Дополнительные опции</p>
            <div className="mt-3 space-y-3">
              {EXTRA_OPTIONS.map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-all hover:border-accent/50 hover:bg-accent/5"
                >
                  <input
                    type="checkbox"
                    checked={extras[opt.id]}
                    onChange={() => toggleExtra(opt.id)}
                    className="h-5 w-5 rounded accent-accent"
                  />
                  <span className="flex-1 text-sm">{opt.label}</span>
                  <span className="text-sm font-medium text-text-secondary">
                    +{formatPrice(opt.price)} ₽
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-bg-secondary p-6 text-center">
            <p className="text-sm text-text-secondary">Примерная стоимость</p>
            <p className="mt-2 text-4xl font-extrabold text-accent sm:text-5xl">
              {formatPrice(total)} ₽
            </p>
            <p className="mt-3 text-sm text-text-secondary">
              Точную стоимость рассчитаем после бесплатного замера
            </p>
            <a
              href="#contacts"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Получить точную смету
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
