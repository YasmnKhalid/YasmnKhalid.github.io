export default function About() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
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
