import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const REVIEWS = [
  {
    name: 'Анна Петрова',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    text: 'Делали капитальный ремонт в двушке. Ребята уложились в срок и бюджет. Особенно порадовало, что цена не выросла ни на рубль. Квартира выглядит как картинка из Pinterest!',
  },
  {
    name: 'Дмитрий Козлов',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: 'Обращался для ремонта в новостройке. Сделали всё под ключ — от стяжки до мебели. Очень профессиональная команда. Рекомендую!',
  },
  {
    name: 'Елена Маркова',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    text: 'Косметический ремонт в кухне и ванной. Быстро, чисто, аккуратно. Мастера вежливые, убрали за собой. Через год обращусь снова за ремонтом спальни.',
  },
]

function Stars({ count }) {
  return (
    <span className="text-accent" aria-label={`Рейтинг ${count} из 5`}>
      {'★'.repeat(count)}
    </span>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const titleRef = useScrollAnimation()

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1))

  const review = REVIEWS[current]

  return (
    <section id="reviews" className="bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="animate-on-scroll text-center text-3xl font-bold sm:text-4xl">
          Что говорят наши клиенты
        </h2>

        <div className="animate-on-scroll visible mt-12">
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 sm:p-10">
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <Stars count={review.rating} />
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
              «{review.text}»
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-text-primary transition-all hover:border-accent hover:text-accent"
              aria-label="Предыдущий отзыв"
            >
              ←
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300 hover:bg-accent/50'
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-text-primary transition-all hover:border-accent hover:text-accent"
              aria-label="Следующий отзыв"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
