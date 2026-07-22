export default function Services() {
  const services = [
    'Custom web application development',
    'Responsive company websites',
    'Frontend development with Angular',
    'Backend APIs with ASP.NET',
    'Bug fixing and feature enhancement',
    'UI cleanup and performance improvements',
  ];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
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
    </main>
  );
}
