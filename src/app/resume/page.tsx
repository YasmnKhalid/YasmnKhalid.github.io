import Link from 'next/link';
import { getResumeSettings } from '@/lib/content';

export const metadata = {
  title: 'Resume & Curriculum Vitae | Yasmin Khalid',
  description: 'Download and view the verified resume and enterprise software engineering experience of Yasmin Khalid.',
};

export default function ResumePage() {
  const resume = getResumeSettings();

  return (
    <main className="min-h-screen bg-slate-950 text-white relative pb-20">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.8),rgba(2,6,23,1))] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 md:px-10 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-emerald-300 font-medium">Resume & Curriculum Vitae</span>
        </div>

        {/* Hero Card */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl mb-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Verified Candidate &bull; Updated {resume.lastUpdated}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Yasmin Khalid
              </h1>
              <p className="mt-2 text-lg text-emerald-300 font-medium">
                {resume.headline}
              </p>
              <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed text-sm md:text-base">
                {resume.summary}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <a
                href={resume.resumeFile}
                download="Yasmin_Khalid_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-400 text-slate-950 font-bold hover:bg-emerald-300 hover:-translate-y-0.5 transition shadow-lg shadow-emerald-500/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </a>
              <a
                href={resume.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 font-semibold hover:bg-white/10 hover:text-white transition"
              >
                <span>Open in Tab</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs uppercase tracking-wider text-slate-400">Core Expertise</span>
              <p className="mt-1 font-semibold text-white">Angular & ASP.NET</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs uppercase tracking-wider text-slate-400">Education</span>
              <p className="mt-1 font-semibold text-white">B.IT (Hons.) First Class</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs uppercase tracking-wider text-slate-400">Industry</span>
              <p className="mt-1 font-semibold text-white">Banking, Microfrontends</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs uppercase tracking-wider text-slate-400">Availability</span>
              <p className="mt-1 font-semibold text-emerald-400">Immediate / Open</p>
            </div>
          </div>
        </div>

        {/* Embedded PDF Viewer Card */}
        <div className="rounded-[32px] border border-white/10 bg-slate-900/70 backdrop-blur-xl p-4 md:p-6 shadow-2xl">
          <div className="flex items-center justify-between px-2 mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              Document Preview
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              Rendered via Keystatic CMS
            </span>
          </div>

          <div className="w-full h-[800px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
            <iframe
              src={`${resume.resumeFile}#toolbar=1&navpanes=0`}
              title="Yasmin Khalid Resume"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </div>
    </main>
  );
}