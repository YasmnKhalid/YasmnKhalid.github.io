export default function BookACall() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 lg:px-12">
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
    </main>
  );
}
