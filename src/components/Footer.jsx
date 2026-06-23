import { business } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-violet-900 text-silver-300/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
        <p>&copy; {new Date().getFullYear()} {business.fullName}</p>
        <p>{business.address} · {business.phoneDisplay}</p>
      </div>
    </footer>
  );
}
