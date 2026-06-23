import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { hero, business } from '../data/content';
import heroImg from '../assets/images/hero-1.webp';

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.hero-eyebrow', { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo('.hero-h1', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
        .fromTo('.hero-sub', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.35')
        .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.35')
        .fromTo('.hero-photo', { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 0.9 }, '-=0.6');
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="relative overflow-hidden bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="hero-eyebrow text-sm font-semibold uppercase tracking-wide text-violet-300 mb-4">
            Ательє на Сумській, {business.city}
          </p>
          <h1 className="hero-h1 text-4xl sm:text-5xl font-bold leading-[1.1] text-silver-300 mb-5">
            {hero.h1}
          </h1>
          <p className="hero-sub text-lg text-ink/75 leading-relaxed mb-8 max-w-md">
            {hero.subtitle}
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold h-12 px-7 transition-colors"
            >
              {hero.cta}
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center rounded-full border border-silver-500/60 text-silver-300 font-semibold h-12 px-7 hover:bg-violet-800/30 transition-colors"
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="hero-photo relative">
          <img
            src={heroImg}
            alt="Кравець за роботою у швейній майстерні ательє StyleForm"
            className="w-full h-[320px] sm:h-[420px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute -bottom-5 -left-5 bg-charcoal-light border border-violet-800/60 rounded-xl shadow-lg px-5 py-4 hidden sm:block">
            <p className="text-2xl font-bold text-silver-300 font-display">24 години</p>
            <p className="text-sm text-ink/60">на більшість ремонтів</p>
          </div>
        </div>
      </div>
    </section>
  );
}
