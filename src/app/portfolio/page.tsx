export default function Portfolio() {
  const projects = [
    {
      title: 'Voucher Redemption System',
      description:
        'A full-stack platform for managing voucher campaigns, redemption flows, and user tracking with a clean admin experience.',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      title: 'Business Web App Dashboard',
      description:
        'A responsive dashboard for business operations, reporting, and workflow management designed for clarity and speed.',
      stack: ['Angular', 'ASP.NET', 'SQL'],
    },
    {
      title: 'Interactive Data Visualization',
      description:
        'A modern charting experience with dynamic filtering, tooltip interactions, and smooth UI behavior across devices.',
      stack: ['React Native', 'Skia', 'SVG'],
    },
  ];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Work that shows both technical skill and product thinking</h2>
          </div>
          <p className="max-w-xl text-slate-400">
            These projects are designed to highlight problem-solving, clean implementation, and the ability to build useful digital solutions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.07]"
            >
              <div className="mb-6 rounded-[22px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
                <div className="h-44 rounded-[18px] border border-dashed border-white/10 bg-slate-950/60" />
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-emerald-300">Case Study</span>
                <span className="text-slate-500 transition group-hover:text-slate-300">Coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
