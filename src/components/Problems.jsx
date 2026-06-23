import { problems } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Problems() {
  const ref = useScrollReveal('.problem-item');

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
      <h2 className="text-3xl font-bold text-silver-300 mb-10 max-w-lg">{problems.title}</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {problems.items.map((p, i) => (
          <div
            key={p.title}
            className={`problem-item rounded-2xl p-6 border border-violet-800/50 ${i % 2 === 0 ? 'bg-charcoal-light' : 'bg-charcoal'}`}
          >
            <h3 className="font-bold text-lg text-silver-300 mb-2">{p.title}</h3>
            <p className="text-ink/70 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
