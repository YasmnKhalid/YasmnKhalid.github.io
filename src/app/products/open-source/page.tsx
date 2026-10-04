import Link from 'next/link';
import OpenSourceShowcase from '../../../components/OpenSourceShowcase';

export const metadata = {
  title: 'Open Source Products & Libraries | Yasmin Khalid',
  description:
    'Free, open-source software libraries, packages, and developer tools engineered by Yasmin Khalid.',
};

export default function OpenSourceProductsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.6),rgba(2,6,23,1))] pointer-events-none -z-10" />

      <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10 lg:px-12">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-emerald-400 transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-emerald-300 font-medium">Open Source Products</span>
        </div>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Free &amp; Open Products
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Open Source Products &amp; Libraries
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Developer tools, UI tokens, and distributed computing libraries distributed free under the MIT license for engineers and startups.
          </p>
        </div>

        <OpenSourceShowcase />
      </section>
    </main>
  );
}