import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Voucher Redemption System',
      slug: 'voucher-redemption-system',
      description:
        'A full-stack platform for managing voucher campaigns, redemption flows, and user tracking with a clean admin experience.',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: '/Vaucher.png',
    },
    {
      title: 'Business Web App Dashboard',
      slug: 'business-web-app-dashboard',
      description:
        'A responsive dashboard for business operations, reporting, and workflow management designed for clarity and speed.',
      stack: ['Angular', 'ASP.NET', 'SQL'],
      image: '/ComingSoon.png',
    },
    {
      title: 'Interactive Data Visualization',
      slug: 'interactive-data-visualization',
      description:
        'A modern charting experience with dynamic filtering, tooltip interactions, and smooth UI behavior across devices.',
      stack: ['React Native', 'Skia', 'SVG'],
      image: '/ComingSoon.png',
    },
  ];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl text-white">
            Work that shows both technical skill and product thinking
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            These projects are designed to highlight problem-solving, clean implementation, and the ability to build useful digital solutions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
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
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-end text-sm">
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
      </section>
    </main>
  );
}
