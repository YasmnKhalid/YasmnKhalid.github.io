import CareerTimeline from '../../../components/CareerTimeline';
import Link from 'next/link';

export const metadata = {
  title: 'Full-Time Experience & Career Timeline | Yasmin Khalid',
  description: 'Career journey and enterprise experience of Yasmin Khalid as a Full Stack Engineer.',
};

export default function FullTimeWorkPage() {
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
          <span className="text-emerald-300 font-medium">Full-Time Work</span>
        </div>

        {/* Timeline Component */}
        <CareerTimeline />

        {/* Highlights & Enterprise Competencies Grid below timeline */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">High-Stakes Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Experience with mission-critical financial applications, microfrontends, and distributed message processing with Redis and DLQ architectures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quality & Automated Testing</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Consistently enforcing &gt;80% unit test code coverage using xUnit, SonarQube quality gates, and automated Playwright E2E browser suites.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">DevOps & Cloud GitOps</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Writing Kubernetes manifests with Kustomize, setting up multi-stage GitHub Actions, and managing continuous deployment through ArgoCD.
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-slate-900 to-emerald-950/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white">Looking for an engineer who delivers?</h4>
            <p className="text-sm text-slate-400 mt-1">
              Available for full-time senior engineering opportunities, contract consulting, and specialized projects.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href="mailto:khalidyasmin821@gmail.com"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20 text-sm"
            >
              Get in Touch
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