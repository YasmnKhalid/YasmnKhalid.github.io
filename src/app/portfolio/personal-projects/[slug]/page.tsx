
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CaseStudy {
  title: string;
  description: string;
  stack: string[];
  role: string;
  timeline: string;
  challenge: string;
  solution: string;
  achievements: string[];
  codeSnippet: string;
}

const caseStudiesData: Record<string, CaseStudy> = {
  'voucher-redemption-system': {
    title: 'Voucher Redemption System',
    description: 'A full-stack platform for managing voucher campaigns, redemption flows, and user tracking with a clean admin experience.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    role: 'Lead Full Stack Developer',
    timeline: '3 Months (Q2 2025)',
    challenge: 'Voucher campaigns often suffer from duplication fraud (double-redemption) and server latency when thousands of concurrent users attempt redemptions at campaign launch. The client needed a secure, low-latency validation system that guarantees single-redemption rules.',
    solution: 'Designed and built a distributed redemption engine. Used MongoDB transactions to guarantee atomicity and avoid double-claims. Implemented an in-memory caching layer with automatic expiration to validate voucher eligibility under 15ms. Designed a React dashboard for real-time validation logging and campaign metrics.',
    achievements: [
      'Eliminated voucher duplication fraud completely (0 duplicate redemptions in production).',
      'Improved average API response time for validation requests from 120ms to 12ms.',
      'Successfully handled peaks of 850 concurrent requests/second during flash promotions.',
    ],
    codeSnippet: `// Atomically claim a voucher to prevent race conditions / double redemptions
async function redeemVoucher(db, voucherCode, userId) {
  const session = db.startSession();
  try {
    session.startTransaction();
    
    // Find voucher with status "Available"
    const voucher = await db.collection('vouchers').findOne(
      { code: voucherCode, status: 'Available' },
      { session }
    );
    
    if (!voucher) {
      throw new Error('Voucher is invalid or already redeemed');
    }
    
    // Atomically update status and attach redemption info
    await db.collection('vouchers').updateOne(
      { _id: voucher._id },
      { $set: { status: 'Redeemed', redeemedBy: userId, redeemedAt: new Date() } },
      { session }
    );
    
    await session.commitTransaction();
    return { success: true, message: 'Voucher redeemed successfully!' };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
}`
  },
  'business-web-app-dashboard': {
    title: 'Business Web App Dashboard',
    description: 'A responsive dashboard for business operations, reporting, and workflow management designed for clarity and speed.',
    stack: ['Angular', 'ASP.NET', 'SQL Server'],
    role: 'Full Stack Engineer',
    timeline: '4 Months (Q4 2025)',
    challenge: 'The operations team used three separate legacy systems to track tickets, customer communications, and supply chains. The separation caused data inconsistencies, delays, and performance bottlenecks, with analytical reports taking up to 10 seconds to load.',
    solution: 'Created a unified single-page application dashboard in Angular, backed by a high-throughput ASP.NET Core Web API. Unified legacy databases into SQL Server with optimal indexing and partitioned tables. Integrated RxJS streams to feed real-time notifications to coordinators.',
    achievements: [
      'Reduced average dashboard report loading time from 10 seconds to 800 milliseconds.',
      'Centralized work ticket workflows, saving operational staff roughly 12 hours of manual tracking per week.',
      'Achieved a 95% user satisfaction rate on the intuitive drag-and-drop workflow kanban boards.',
    ],
    codeSnippet: `// ASP.NET Core optimized query retrieving aggregated operational metrics
[HttpGet("metrics/summary")]
public async Task<IActionResult> GetMetricsSummary([FromQuery] DateTime startDate)
{
    // Retrieve aggregated numbers using optimized CTEs and query indices
    var summary = await _dbContext.Tickets
        .Where(t => t.CreatedAt >= startDate)
        .GroupBy(t => t.Status)
        .Select(g => new StatusMetricDto 
        {
            Status = g.Key.ToString(),
            Count = g.Count(),
            AverageResolutionTimeMinutes = g.Average(t => t.ResolutionTimeMinutes ?? 0)
        })
        .ToListAsync();

    return Ok(summary);
}`
  },
  'interactive-data-visualization': {
    title: 'Interactive Data Visualization',
    description: 'A modern charting experience with dynamic filtering, tooltip interactions, and smooth UI behavior across devices.',
    stack: ['React Native', 'Skia', 'SVG'],
    role: 'Mobile & UI Developer',
    timeline: '2 Months (Q1 2026)',
    challenge: 'Rendering large time-series financial datasets (10,000+ data points) on native mobile screens caused severe UI frame drops (under 20 FPS). Standard charting libraries caused lag when panning, zooming, or triggering tooltips.',
    solution: 'Implemented hardware-accelerated rendering using Shopify Skia for React Native. Rendered complex line charts, areas, and gridlines on the GPU. Built custom SVG interaction layers using React Native Gesture Handler and Reanimated to track finger movements without locking the main thread.',
    achievements: [
      'Maintained a smooth 60 FPS rendering rate on budget Android and iOS devices during rapid panning/zooming.',
      'Reduced initial memory footprints for rendering time-series grids by 70%.',
      'Created custom responsive tooltips that trace coordinates smoothly on touch.',
    ],
    codeSnippet: `// Panning gesture handler using React Native Reanimated for chart tracking
const panGesture = Gesture.Pan()
  .onStart((event) => {
    touchX.value = event.x;
    active.value = true;
  })
  .onChange((event) => {
    // Keep interactive tooltip position updated synchronously on the UI thread
    touchX.value = Math.max(0, Math.min(event.x, chartWidth));
  })
  .onEnd(() => {
    active.value = false;
  });`
  }
};

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = caseStudiesData[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white relative pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 pt-16 md:px-10 lg:px-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/portfolio" className="hover:text-emerald-300 transition">Portfolio</Link>
          <span>/</span>
          <span className="text-slate-200">{data.title}</span>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 leading-relaxed max-w-3xl">
            {data.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {data.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4.5 py-1.5 text-sm font-semibold text-emerald-300 tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata Cards */}
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Role</span>
            <p className="mt-1 text-lg font-medium text-white">{data.role}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Timeline</span>
            <p className="mt-1 text-lg font-medium text-white">{data.timeline}</p>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="space-y-12">
          {/* Challenge Section */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="leading-8 text-slate-300 text-lg">
              {data.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
            <p className="leading-8 text-slate-300 text-lg">
              {data.solution}
            </p>
          </div>

          {/* Achievements / Impact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Impact & Achievements</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {data.achievements.map((item, index) => (
                <div key={index} className="rounded-2xl border border-emerald-500/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col justify-between">
                  <span className="text-emerald-300 text-2xl font-bold">0{index + 1}</span>
                  <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Highlight */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-4">Technical Snippet</h2>
            <p className="text-sm text-slate-400 mb-4">
              Here is a look at a key implementation detail from this project:
            </p>
            <pre className="p-4 rounded-xl bg-slate-950 text-slate-300 overflow-x-auto text-sm leading-relaxed border border-white/5 font-mono">
              <code>{data.codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-400 text-slate-950 font-bold hover:-translate-y-0.5 transition shadow-lg shadow-emerald-500/15"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
