export default function Home() {
  const skills = [
    'Angular',
    'ASP.NET',
    'TypeScript',
    'C#',
    'REST APIs',
    'SQL Server',
  ];

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_25%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 backdrop-blur">
                Available for full-time roles and freelance projects
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                I build modern web applications that are clean, scalable, and ready for real business needs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                I’m Yasmin Khalid, a Full Stack Developer specializing in Angular and ASP.NET. I create responsive websites,
                business web apps, and user-focused digital products for companies, startups, and growing brands.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="/freelance/book-a-call"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Hire Me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-emerald-400/20 blur-3xl" />
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[28px] border border-white/10 bg-slate-900 p-8">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-20 w-20 overflow-hidden rounded-2xl border border-white/20 bg-slate-800 shrink-0">
                      <img 
                        src="/Yasmin Khalid.jpg" 
                        alt="Yasmin Khalid" 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Yasmin Khalid</h2>
                      <p className="text-sm text-slate-400">Angular & ASP.NET Developer</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                      <p className="text-sm text-slate-400">Focus</p>
                      <p className="mt-1 font-medium text-white">Web apps, internal systems, responsive business websites</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                      <p className="text-sm text-slate-400">Strength</p>
                      <p className="mt-1 font-medium text-white">Clean frontend experiences with practical backend architecture</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                      <p className="text-sm text-slate-400">Open to</p>
                      <p className="mt-1 font-medium text-white">mid-level roles, freelance builds, long-term collaborations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
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

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">About Me</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A developer who cares about both code quality and real-world value</h2>
            </div>
            <div className="space-y-5 leading-8 text-slate-300">
              <p>
                I’m building my career as a full stack developer with a strong focus on Angular and ASP.NET. I enjoy turning ideas into clean, functional products that solve real problems.
              </p>
              <p>
                My background also reflects communication, leadership, and teaching experience, which helps me collaborate well with teams and understand client needs clearly.
              </p>
              <p>
                I’m especially interested in opportunities where I can contribute, keep growing fast, and build software that people genuinely enjoy using.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
