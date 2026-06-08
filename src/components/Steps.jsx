import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STEPS = [
  { icon: '📞', title: 'Заявка', text: 'Вы оставляете заявку на сайте или звоните нам' },
  { icon: '📐', title: 'Замер', text: 'Бесплатный выезд мастера для замера и оценки' },
  { icon: '📝', title: 'Смета', text: 'Составляем подробную смету с фиксированной ценой' },
  { icon: '📑', title: 'Договор', text: 'Подписываем договор, вносите аванс 30%' },
  { icon: '🔨', title: 'Ремонт', text: 'Выполняем работы, вы следите через фотоотчёты' },
  { icon: '✅', title: 'Сдача', text: 'Принимаете работу, подписываем акт, даём гарантию' },
]

function StepItem({ step, index, total }) {
  const ref = useScrollAnimation({ threshold: 0.2 })

  return (
    <div ref={ref} className="animate-on-scroll relative flex flex-1 flex-col items-center" style={{ transitionDelay: `${index * 120}ms` }}>
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl shadow-lg shadow-accent/30">
        {step.icon}
      </div>
      <h3 className="mt-4 text-center text-base font-semibold">{step.title}</h3>
      <p className="mt-2 text-center text-sm leading-relaxed text-text-secondary">{step.text}</p>

      {index < total - 1 && (
        <>
          <div className="absolute left-[calc(50%+28px)] top-7 hidden h-0.5 w-[calc(100%-56px)] bg-accent/30 lg:block" />
          <div className="absolute left-7 top-[calc(100%+8px)] h-8 w-0.5 bg-accent/30 lg:hidden" />
        </>
      )}
    </div>
  )
}

export default function Steps() {
  const titleRef = useScrollAnimation()

  return (
    <section id="steps" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Как мы работаем</h2>
          <p className="mt-4 text-text-secondary">6 простых шагов от звонка до заселения</p>
        </div>

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:gap-4">
          {STEPS.map((step, index) => (
            <StepItem key={step.title} step={step} index={index} total={STEPS.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
