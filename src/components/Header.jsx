import { useState } from 'react';
import { business } from '../data/content';

const links = [
  { href: '#services', label: 'Послуги' },
  { href: '#portfolio', label: 'Роботи' },
  { href: '#how', label: 'Як працюємо' },
  { href: '#faq', label: 'Питання' },
  { href: '#contacts', label: 'Контакти' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur border-b border-violet-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-2xl text-silver-300 tracking-wide">
          {business.name}
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-silver-300 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 h-11 transition-colors"
        >
          Записатись
        </a>

        <button
          aria-label="Відкрити меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 -mr-1"
        >
          <span className={`block h-0.5 w-6 bg-silver-300 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-silver-300 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-silver-300 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-violet-800/60 bg-charcoal px-4 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-ink/85 border-b border-violet-800/40 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-violet-600 text-white font-semibold h-12"
          >
            Записатись на консультацію
          </a>
        </nav>
      )}
    </header>
  );
}
