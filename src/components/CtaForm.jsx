import { useState } from 'react';
import { business } from '../data/content';
import ctaImg from '../assets/images/cta-1.webp';

const RATE_LIMIT_KEY = 'sf_lead_submits';
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function sanitize(value) {
  return value.replace(/[<>]/g, '').trim().slice(0, 200);
}

function isRateLimited() {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const timestamps = raw ? JSON.parse(raw).filter((t) => Date.now() - t < RATE_LIMIT_WINDOW_MS) : [];
    return timestamps.length >= RATE_LIMIT_MAX;
  } catch {
    return false;
  }
}

function recordSubmit() {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const timestamps = raw ? JSON.parse(raw).filter((t) => Date.now() - t < RATE_LIMIT_WINDOW_MS) : [];
    timestamps.push(Date.now());
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(timestamps));
  } catch {
    /* ignore storage errors */
  }
}

export default function CtaForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const honeypot = form.elements.namedItem('company_site')?.value;
    if (honeypot) {
      setStatus('success');
      return;
    }

    if (isRateLimited()) {
      setError('Забагато спроб. Спробуйте через кілька хвилин або напишіть нам у Telegram.');
      return;
    }

    const name = sanitize(form.elements.namedItem('name').value);
    const phone = sanitize(form.elements.namedItem('phone').value);

    if (!name || phone.replace(/\D/g, '').length < 10) {
      setError('Перевірте, будь ласка, ім’я і номер телефону.');
      return;
    }

    setError('');
    recordSubmit();
    setStatus('success');
    form.reset();
  }

  return (
    <section id="cta" className="bg-violet-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={ctaImg}
            alt="Майстер ательє за роботою з клієнтом"
            className="w-full h-72 object-cover rounded-2xl mb-6 hidden md:block"
            loading="lazy"
          />
          <h2 className="text-3xl font-bold mb-4">Запишіться на консультацію</h2>
          <p className="text-silver-300/85 leading-relaxed">
            Залиште номер — зателефонуємо протягом дня і запишемо на зручний час.
            Підкажемо фасон, тканину і реальні терміни ще до примірки.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-charcoal-light rounded-2xl p-6 sm:p-8 text-ink border border-violet-700/50">
          {status === 'success' ? (
            <div className="text-center py-8">
              <p className="text-2xl mb-2 text-silver-300">Дякуємо!</p>
              <p className="text-ink/70">Ми зв’яжемось з вами найближчим часом.</p>
            </div>
          ) : (
            <>
              <label className="block mb-4">
                <span className="block text-sm font-semibold mb-1.5 text-silver-300">Ім’я</span>
                <input
                  name="name"
                  type="text"
                  required
                  maxLength={80}
                  autoComplete="name"
                  className="w-full h-12 px-4 rounded-lg border border-violet-700/50 bg-charcoal text-base text-ink focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Ваше ім'я"
                />
              </label>
              <label className="block mb-4">
                <span className="block text-sm font-semibold mb-1.5 text-silver-300">Телефон</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  autoComplete="tel"
                  className="w-full h-12 px-4 rounded-lg border border-violet-700/50 bg-charcoal text-base text-ink focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="+380 ХХ ХХХ ХХ ХХ"
                />
              </label>

              <input
                type="text"
                name="company_site"
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 h-0 w-0 -z-10"
                aria-hidden="true"
              />

              {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
              >
                Записатись на консультацію
              </button>
              <p className="text-xs text-ink/50 mt-3 text-center">
                Або пишіть напряму:{' '}
                <a href={business.telegram} className="underline">Telegram</a>{' / '}
                <a href={business.viber} className="underline">Viber</a>
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
