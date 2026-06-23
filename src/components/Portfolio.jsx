import { portfolio } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

const imageModules = import.meta.glob('../assets/images/portfolio-*.webp', { eager: true, import: 'default' });

function imageFor(name) {
  const entry = Object.entries(imageModules).find(([path]) => path.includes(`${name}.webp`));
  return entry ? entry[1] : undefined;
}

export default function Portfolio() {
  const ref = useScrollReveal('.portfolio-item');

  return (
    <section id="portfolio" ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
      <h2 className="text-3xl font-bold text-silver-300 mb-10">Наші роботи</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolio.map((p) => (
          <figure key={p.image} className="portfolio-item rounded-2xl overflow-hidden bg-charcoal-light border border-violet-800/50">
            <img
              src={imageFor(p.image)}
              alt={p.caption}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <figcaption className="p-4 text-sm text-ink/70 leading-snug">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
