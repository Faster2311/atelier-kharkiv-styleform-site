import { business } from '../data/content';

export default function Contacts() {
  return (
    <section id="contacts" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-bold text-silver-300 mb-6">Контакти</h2>
        <ul className="space-y-4 text-ink/80">
          <li>
            <span className="block text-sm text-ink/50">Адреса ательє</span>
            <span className="font-semibold">{business.address}</span>
          </li>
          <li>
            <span className="block text-sm text-ink/50">Телефон</span>
            <a href={`tel:${business.phone}`} className="font-semibold text-silver-300">{business.phoneDisplay}</a>
          </li>
          <li>
            <span className="block text-sm text-ink/50">Месенджери</span>
            <div className="flex gap-3 mt-1">
              <a href={business.telegram} className="font-semibold text-silver-300 underline">Telegram</a>
              <a href={business.viber} className="font-semibold text-silver-300 underline">Viber</a>
            </div>
          </li>
          <li>
            <span className="block text-sm text-ink/50">Соцмережі</span>
            <a href={business.instagram} className="font-semibold text-silver-300 underline">Instagram</a>
          </li>
        </ul>
      </div>

      <iframe
        title="Карта — адреса ательє StyleForm"
        src={business.mapEmbed}
        className="w-full h-72 md:h-full rounded-2xl border border-violet-800/50"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
