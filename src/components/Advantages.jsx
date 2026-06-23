import { advantages } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutImg from '../assets/images/about-1.webp';

export default function Advantages() {
  const ref = useScrollReveal('.adv-item');

  return (
    <section ref={ref} className="bg-charcoal-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-silver-300 mb-8">{advantages.title}</h2>
          <div className="space-y-6">
            {advantages.items.map((a) => (
              <div key={a.title} className="adv-item border-l-2 border-violet-500 pl-5">
                <h3 className="font-bold text-lg text-silver-300 mb-1">{a.title}</h3>
                <p className="text-ink/70 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={aboutImg}
          alt="Манекен з тканиною і інструментами кравця в ательє"
          className="adv-item w-full h-[420px] object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
}
