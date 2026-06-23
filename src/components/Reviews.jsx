import { reviews } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reviews() {
  const ref = useScrollReveal('.review-card');

  return (
    <section ref={ref} className="bg-charcoal-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-silver-300 mb-10">Відгуки клієнтів</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="review-card bg-charcoal rounded-2xl p-6 border border-violet-800/50">
              <p className="text-ink/75 leading-relaxed mb-4">«{r.text}»</p>
              <p className="font-bold text-silver-300">{r.name}</p>
              <p className="text-sm text-ink/50">{r.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
