import Link from 'next/link';
import { getCaseStudies } from '@/lib/content';

export default function Page() {
  const projects = getCaseStudies();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Case Studies & Work</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl text-white">
          Personal & Featured Projects
        </h1>
        <p className="mt-4 text-slate-400 leading-relaxed text-lg">
          In-depth architectural breakdowns, technical challenges, and live results from products and applications I’ve built.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.07]"
          >
            <div>
              <div className="mb-6 overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
                <div className="relative h-44 w-full overflow-hidden rounded-[18px] border border-white/10 bg-slate-950/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end text-sm border-t border-white/5 pt-4">
              <Link
                href={`/portfolio/personal-projects/${project.slug}`}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold tracking-wide hover:bg-emerald-500 hover:text-slate-950 transition duration-200"
              >
                Read Case Study &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}