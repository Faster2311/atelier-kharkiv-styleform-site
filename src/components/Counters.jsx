import { counters } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Counters() {
  const ref = useScrollReveal('.counter-item');

  return (
    <section ref={ref} className="bg-violet-800 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {counters.map((c) => (
          <div key={c.label} className="counter-item text-center">
            <p className="text-2xl sm:text-3xl font-bold font-display">{c.value}</p>
            <p className="text-sm text-silver-300/90 mt-1 leading-snug">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
