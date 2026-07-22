const fs = require('fs');
const path = require('path');

const pages = [
  'resume',
  'enterprise',
  'enterprise/full-time-work',
  'enterprise/technologies',
  'enterprise/case-studies',
  'freelance',
  'freelance/pricing',
  'freelance/testimonials',
  'products',
  'products/whatsapp-reminder-saas',
  'products/future-saas',
  'products/open-source',
  'portfolio/personal-projects',
  'portfolio/freelance-projects',
  'portfolio/open-source-contributions',
  'blog'
];

pages.forEach(page => {
  const pagePath = path.join(__dirname, 'src', 'app', page, 'page.tsx');
  const title = page.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  const content = `export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-white">${title}</h1>
        <p className="mt-4 text-slate-400">Content for ${title} coming soon.</p>
      </div>
    </main>
  );
}`;

  // Ensure dir exists
  const dir = path.dirname(pagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(pagePath, content);
});
console.log('Pages generated!');
