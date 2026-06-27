export default function YasminPortfolioLanding() {
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

  const services = [
    'Custom web application development',
    'Responsive company websites',
    'Frontend development with Angular',
    'Backend APIs with ASP.NET',
    'Bug fixing and feature enhancement',
    'UI cleanup and performance improvements',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_25%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <nav className="mb-16 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold tracking-wide text-emerald-300">Yasmin Khalid</p>
              <p className="text-sm text-slate-400">Full Stack Developer</p>
            </div>
            <div className="hidden gap-8 text-sm text-slate-300 md:flex">
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </nav>

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
                  href="#contact"
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-400 text-2xl font-bold text-slate-950">
                      YK
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Yasmin Khalid  REVOKEEEEEE</h2>
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

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">What I can help clients and teams build</h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-400">
              Whether you need a reliable developer for a company role or a freelance partner for a project, I focus on building solutions that are practical, polished, and easy to grow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="font-medium text-white">{service}</p>
              </div>
            ))}
          </div>
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

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 lg:px-12">
        <div className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Let’s Connect</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ready to build something great together?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                I’m open to job opportunities, freelance work, and collaborations. Let’s talk about your project, your team, or your next product idea.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:khalidyasmin821@gmail.com" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/ysmnkhalid/" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
