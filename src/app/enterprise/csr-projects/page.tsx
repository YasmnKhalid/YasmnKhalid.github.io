import Link from 'next/link';
import CSRShowcase from '../../../components/CSRShowcase';

export const metadata = {
  title: 'CSR Projects & Community Initiatives | Yasmin Khalid',
  description:
    'Explore social impact, youth coding mentorship, pro-bono web accessibility audits, and sustainable tech initiatives led by Yasmin Khalid.',
};

export default function CSRProjectsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden pb-24">
      {/* Background radial gradients consistent with theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.6),rgba(2,6,23,1))] pointer-events-none -z-10" />

      <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10 lg:px-12">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-500">Enterprise Experience</span>
          <span>/</span>
          <span className="text-emerald-300 font-medium">CSR Projects</span>
        </div>

        {/* Hero Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Social Impact &amp; Community Giving
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            CSR &amp; Community Initiatives
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Software engineering reaches its fullest potential when it uplifts people.
            From mentoring first-generation computing students to conducting pro-bono web accessibility audits
            and building eco-friendly data pipelines, here is how I give back.
          </p>
        </div>

        {/* Impact Metric Strip */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">120+</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
              Youths &amp; Students Mentored
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-white">4+</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
              Community Initiatives
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">150+</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
              Pro-Bono &amp; Volunteer Hours
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-white">100%</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
              Free &amp; Community Focused
            </div>
          </div>
        </div>

        {/* Interactive Showcase Component */}
        <CSRShowcase />

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-slate-900 to-emerald-950/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl font-bold text-white">
              Organizing an educational event or community program?
            </h4>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              I am open to guest talks, technical workshops, panel discussions, and pro-bono accessibility consults for non-profit causes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="mailto:khalidyasmin821@gmail.com?subject=CSR%20Collaboration%20Inquiry"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20 text-sm"
            >
              Propose an Initiative
            </a>
            <a
              href="/Yasmin Khalid.pdf"
              download="Yasmin_Khalid_Resume.pdf"
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
