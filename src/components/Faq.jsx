import { useState } from 'react';
import { faq } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Faq() {
  const ref = useScrollReveal('.faq-item');
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" ref={ref} className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-20">
      <h2 className="text-3xl font-bold text-silver-300 mb-10">Часті запитання</h2>
      <div className="space-y-3">
        {faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question} className="faq-item border border-violet-800/50 rounded-xl bg-charcoal-light overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-silver-300 min-h-[44px]"
              >
                <span>{item.question}</span>
                <span className={`shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-ink/70 leading-relaxed">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
