import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CONTACTS = [
  { icon: '📞', text: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
  { icon: '📧', text: 'info@remontpro.ru', href: 'mailto:info@remontpro.ru' },
  { icon: '📍', text: 'Москва, ул. Строителей, 15', href: null },
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: 'capital',
    area: '',
    comment: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const titleRef = useScrollAnimation()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacts" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={titleRef} className="animate-on-scroll">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Оставьте заявку — рассчитаем стоимость бесплатно
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Замерщик приедет в удобное время, составит смету на месте. Это бесплатно и ни к
              чему не обязывает.
            </p>
            <ul className="mt-8 space-y-4">
              {CONTACTS.map((contact) => (
                <li key={contact.text} className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">{contact.icon}</span>
                  {contact.href ? (
                    <a href={contact.href} className="text-text-primary transition-colors hover:text-accent">
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-text-primary">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll visible">
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl bg-bg-secondary p-8 text-center">
                <div>
                  <span className="text-5xl">✅</span>
                  <h3 className="mt-4 text-xl font-semibold">Заявка отправлена!</h3>
                  <p className="mt-2 text-text-secondary">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Имя</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Телефон</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="mb-1.5 block text-sm font-medium">Тип ремонта</label>
                    <select
                      id="type"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="cosmetic">Косметический</option>
                      <option value="capital">Капитальный</option>
                      <option value="designer">Дизайнерский</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="area" className="mb-1.5 block text-sm font-medium">Площадь квартиры (м²)</label>
                    <input
                      id="area"
                      name="area"
                      type="number"
                      min="1"
                      required
                      value={form.area}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="60"
                    />
                  </div>
                  <div>
                    <label htmlFor="comment" className="mb-1.5 block text-sm font-medium">
                      Комментарий <span className="text-text-secondary">(необязательно)</span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={3}
                      value={form.comment}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-accent py-4 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Получить бесплатную смету
                </button>
                <p className="mt-3 text-center text-xs text-text-secondary">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
