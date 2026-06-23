import { steps } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HowItWorks() {
  const ref = useScrollReveal('.step-item');

  return (
    <section id="how" ref={ref} className="bg-violet-800 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-3xl font-bold mb-10">Як ми працюємо</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="step-item">
              <span className="text-4xl font-bold text-violet-300 font-display">{s.step}</span>
              <h3 className="font-bold text-lg mt-3 mb-2">{s.title}</h3>
              <p className="text-silver-300/85 leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
