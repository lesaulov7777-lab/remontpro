export default function Hero() {
  const highlights = [
    'Работаем с 2018 года',
    '500+ сданных объектов',
    'Гарантия 3 года',
  ]

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Превращаем вашу квартиру
          <br />
          в место мечты
        </h1>
        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl"
          style={{ animationDelay: '0.15s' }}
        >
          Ремонт квартир в Москве под ключ — от дизайн-проекта до финальной уборки.
          Фиксированная цена. Гарантия 3 года.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#calculator"
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 sm:w-auto"
          >
            Рассчитать стоимость
          </a>
          <a
            href="#portfolio"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-text-primary sm:w-auto"
          >
            Смотреть портфолио
          </a>
        </div>

        <div
          className="animate-fade-in-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
          style={{ animationDelay: '0.45s' }}
        >
          {highlights.map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-white/90 sm:text-base">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                ✓
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
