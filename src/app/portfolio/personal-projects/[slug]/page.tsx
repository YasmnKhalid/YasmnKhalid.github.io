import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudies, getCaseStudyBySlug } from '@/lib/content';

export function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((item) => ({
    slug: item.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = getCaseStudyBySlug(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white relative pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 pt-16 md:px-10 lg:px-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/portfolio" className="hover:text-emerald-300 transition">Portfolio</Link>
          <span>/</span>
          <span className="text-slate-200">{data.title}</span>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 leading-relaxed max-w-3xl">
            {data.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {data.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4.5 py-1.5 text-sm font-semibold text-emerald-300 tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata Cards */}
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Role</span>
            <p className="mt-1 text-lg font-medium text-white">{data.role}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Timeline</span>
            <p className="mt-1 text-lg font-medium text-white">{data.timeline}</p>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="space-y-12">
          {/* Challenge Section */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="leading-8 text-slate-300 text-lg whitespace-pre-line">
              {data.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
            <p className="leading-8 text-slate-300 text-lg whitespace-pre-line">
              {data.solution}
            </p>
          </div>

          {/* Achievements / Impact */}
          {data.achievements && data.achievements.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Impact & Achievements</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {data.achievements.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-emerald-500/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col justify-between">
                    <span className="text-emerald-300 text-2xl font-bold">0{index + 1}</span>
                    <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Highlight */}
          {data.codeSnippet && (
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 overflow-hidden">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Snippet</h2>
              <p className="text-sm text-slate-400 mb-4">
                Here is a look at a key implementation detail from this project:
              </p>
              <pre className="p-4 rounded-xl bg-slate-950 text-slate-300 overflow-x-auto text-sm leading-relaxed border border-white/5 font-mono">
                <code>{data.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-400 text-slate-950 font-bold hover:-translate-y-0.5 transition shadow-lg shadow-emerald-500/15"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
