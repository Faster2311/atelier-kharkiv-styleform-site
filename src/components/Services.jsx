import { services } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import service1 from '../assets/images/service-1.webp';
import service2 from '../assets/images/service-2.webp';
import service3 from '../assets/images/service-3.webp';

const images = [service1, service2, service3];

export default function Services() {
  const ref = useScrollReveal('.service-card');

  return (
    <section id="services" ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
      <h2 className="text-3xl font-bold text-silver-300 mb-10">{services.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.items.map((s, i) => (
          <div key={s.name} className="service-card rounded-2xl border border-violet-800/50 bg-charcoal-light overflow-hidden flex flex-col">
            {i < images.length && (
              <img
                src={images[i]}
                alt={s.name}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-silver-300 mb-2">{s.name}</h3>
              <p className="text-ink/70 leading-relaxed mb-4 flex-1">{s.description}</p>
              <p className="font-bold text-violet-300">{s.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
