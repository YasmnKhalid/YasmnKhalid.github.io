'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface OpenSourceProject {
  id: string;
  title: string;
  category: 'packages' | 'tools' | 'contributions';
  categoryLabel: string;
  description: string;
  role: string;
  tags: string[];
  stats: {
    badge?: string;
    downloads?: string;
    stars?: string;
    version?: string;
    prsMerged?: string;
    license: string;
  };
  highlights: string[];
  problemSolved?: string;
  installCommand?: string;
  repoUrl: string;
  docsUrl?: string;
  status: 'Active Maintainer' | 'Featured Contributor' | 'Community Tool' | 'Published Package';
}

const openSourceProjects: OpenSourceProject[] = [
  {
    id: 'dotnet-resilience-redis',
    title: 'dotnet-resilience-redis',
    category: 'packages',
    categoryLabel: 'NuGet / .NET',
    description:
      'High-throughput Redis cache wrapper for .NET 8/9 featuring native circuit breaker policies, automatic Dead Letter Queue fallbacks, and zero-allocation structured telemetry.',
    role: 'Author & Maintainer',
    tags: ['C#', '.NET 8', 'Redis', 'xUnit', 'Polly', 'NuGet'],
    stats: {
      badge: 'NuGet Package',
      downloads: '850+ dl/mo',
      stars: '48 stars',
      version: 'v1.2.4',
      license: 'MIT',
    },
    highlights: [
      'Built-in circuit breaker loop with jittered backoff preventing cache stampedes under high load.',
      'Splunk & Grafana Loki-friendly structured logging interceptors with zero GC overhead.',
      'Comprehensive integration tests using xUnit and Testcontainers Redis with >90% coverage.',
    ],
    problemSolved:
      'Eliminates boilerplate connection handling and stops cascading Redis connection timeouts across enterprise microservices.',
    installCommand: 'dotnet add package DotNet.Resilience.Redis',
    repoUrl: 'https://github.com/yasmin-khalid/dotnet-resilience-redis',
    docsUrl: '#',
    status: 'Active Maintainer',
  },
  {
    id: 'ngx-enterprise-tokens',
    title: 'ngx-enterprise-tokens',
    category: 'packages',
    categoryLabel: 'Angular UI / Web',
    description:
      'Microfrontend-ready design tokens and accessible state management primitives tailored for Angular 17+ and enterprise financial application design systems.',
    role: 'Author & Maintainer',
    tags: ['Angular 18', 'TypeScript', 'RxJS', 'TailwindCSS', 'npm'],
    stats: {
      badge: 'npm Package',
      downloads: '1.2k+ dl/mo',
      stars: '64 stars',
      version: 'v2.0.1',
      license: 'MIT',
    },
    highlights: [
      'Strict WCAG 2.1 AA compliant color contrast ratios and keyboard focus ring tokens.',
      'Zero external runtime dependencies, built natively around Angular Signals and Standalone APIs.',
      'Dynamic CSS custom property injector supporting multi-tenant white-label branding.',
    ],
    problemSolved:
      'Provides a consistent design token architecture across independent microfrontend teams without CSS namespace collisions.',
    installCommand: 'npm install @yasmin/ngx-enterprise-tokens',
    repoUrl: 'https://github.com/yasmin-khalid/ngx-enterprise-tokens',
    docsUrl: '#',
    status: 'Active Maintainer',
  },
  {
    id: 'k8s-gitops-validator',
    title: 'k8s-gitops-validator',
    category: 'tools',
    categoryLabel: 'DevOps & GitOps',
    description:
      'Lightweight pre-commit CLI tool and GitHub Action that validates Kustomize overlays and ArgoCD manifest contracts against live Kubernetes cluster schemas before Git merge.',
    role: 'Creator & Maintainer',
    tags: ['Go', 'Kubernetes', 'Kustomize', 'ArgoCD', 'GitHub Actions'],
    stats: {
      badge: 'DevOps Tool',
      downloads: 'Docker Hub',
      stars: '89 stars',
      version: 'v0.9.0',
      license: 'MIT',
    },
    highlights: [
      'Fails fast on deprecated API versions and missing environment parameters before cluster sync.',
      'Exports SARIF security reports directly integrated into GitHub Code Scanning security tab.',
      'Ultra-lightweight multi-arch Docker container footprint (<25MB) with instant CI startup.',
    ],
    problemSolved:
      'Prevents broken or non-compliant Kubernetes manifests from ever reaching production ArgoCD reconciliation loops.',
    installCommand: 'curl -sSL https://get.gitops-validator.sh | sh',
    repoUrl: 'https://github.com/yasmin-khalid/k8s-gitops-validator',
    docsUrl: '#',
    status: 'Community Tool',
  },
  {
    id: 'dotnet-aspnetcore-cache-contrib',
    title: 'ASP.NET Core Caching & Ecosystem PRs',
    category: 'contributions',
    categoryLabel: 'Upstream Contribution',
    description:
      'Focused upstream pull requests and benchmark test improvements for .NET Core distributed caching abstractions and memory buffer pooling.',
    role: 'Ecosystem Contributor',
    tags: ['C#', 'ASP.NET Core', 'Benchmarks', 'Upstream PR', 'Git'],
    stats: {
      badge: 'Merged Upstream',
      prsMerged: '3 Merged PRs',
      stars: 'Ecosystem',
      license: 'MIT',
    },
    highlights: [
      'Refactored byte buffer pooling in high-concurrency cache serialization path to minimize LOH allocations.',
      'Expanded stress test suites simulating transient network disconnects and connection throttling.',
      'Engaged with community maintainers during open RFC reviews to clarify distributed cache contracts.',
    ],
    problemSolved:
      'Enhanced memory efficiency and connection stability under simulated peak traffic in distributed .NET workloads.',
    repoUrl: 'https://github.com/dotnet/aspnetcore',
    status: 'Featured Contributor',
  },
  {
    id: 'fast-etl-profiler',
    title: 'fast-etl-profiler',
    category: 'tools',
    categoryLabel: 'Data & Python Tooling',
    description:
      'High-speed dataset profiling and anomaly detection utility for automated telemetry pipelines and tabular data validation.',
    role: 'Author & Maintainer',
    tags: ['Python', 'Pandas', 'NumPy', 'AWS Glue', 'Isolation Forest'],
    stats: {
      badge: 'Data Tool',
      downloads: 'PyPI / Script',
      stars: '35 stars',
      version: 'v0.5.2',
      license: 'MIT',
    },
    highlights: [
      'Unsupervised anomaly detection scoring using Isolation Forest for sensor and agro-telemetry feeds.',
      'Automated executive email summary generation via SMTP saving hours of manual data hygiene verification.',
      'Memory-efficient chunked streaming iterator designed for low-spec serverless execution.',
    ],
    problemSolved:
      'Eliminated hours of manual spreadsheet data checks by automatically flagging sensor variances and corrupt inputs.',
    installCommand: 'pip install fast-etl-profiler',
    repoUrl: 'https://github.com/yasmin-khalid/fast-etl-profiler',
    docsUrl: '#',
    status: 'Published Package',
  },
  {
    id: 'react-native-skia-charts',
    title: 'react-native-skia-charts',
    category: 'packages',
    categoryLabel: 'Mobile & Graphics',
    description:
      'Performant 60fps charting components for React Native and Expo powered by Skia canvas rendering and gesture-driven interactive tooltips.',
    role: 'Author & Maintainer',
    tags: ['React Native', 'TypeScript', 'Skia Canvas', 'Expo', 'Mobile'],
    stats: {
      badge: 'npm Package',
      downloads: '500+ dl/mo',
      stars: '52 stars',
      version: 'v1.0.3',
      license: 'MIT',
    },
    highlights: [
      'Hardware-accelerated rendering delivering smooth 60fps animations on both iOS and Android.',
      'Haptic feedback feedback loops on scrubbing and data point inspection with zero UI thread stutter.',
      'Responsive aspect ratio adapters and dark-mode ready palette options.',
    ],
    problemSolved:
      'Replaces heavy SVG charting libraries that freeze the UI thread when rendering large financial or telemetry datasets.',
    installCommand: 'npm install react-native-skia-charts',
    repoUrl: 'https://github.com/yasmin-khalid/react-native-skia-charts',
    docsUrl: '#',
    status: 'Active Maintainer',
  },
];

export default function OpenSourceShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'packages' | 'tools' | 'contributions'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: openSourceProjects.length },
    {
      id: 'packages',
      label: 'Packages & Libraries',
      count: openSourceProjects.filter((p) => p.category === 'packages').length,
    },
    {
      id: 'tools',
      label: 'DevOps & Tooling',
      count: openSourceProjects.filter((p) => p.category === 'tools').length,
    },
    {
      id: 'contributions',
      label: 'Upstream PRs',
      count: openSourceProjects.filter((p) => p.category === 'contributions').length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return openSourceProjects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopy = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full">
      {/* Search and Category Filter Bar */}
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by tech (e.g. .NET, Angular, Redis)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2 pl-10 pr-9 text-xs text-white placeholder-slate-400 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-slate-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">No projects found</h3>
          <p className="mt-1 text-sm text-slate-400">
            No open source projects match &quot;{searchQuery}&quot;. Try a different search term or category.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-4 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-white/15"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                {/* Ambient glow on hover */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Top Bar: Category Pill & Status */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-300 border border-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {project.categoryLabel}
                    </span>

                    <span className="text-[11px] font-medium text-slate-400">
                      {project.role}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-slate-300 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Quick Install Bar if available */}
                  {project.installCommand && (
                    <div className="mb-5 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 font-mono text-xs text-slate-300">
                      <span className="truncate pr-2 text-emerald-400/90 text-[11px]">
                        $ {project.installCommand}
                      </span>
                      <button
                        onClick={() => handleCopy(project.installCommand!, project.id)}
                        title="Copy install command"
                        className="shrink-0 text-slate-400 hover:text-white transition"
                      >
                        {copiedId === project.id ? (
                          <span className="text-[10px] text-emerald-400 font-sans font-semibold">Copied!</span>
                        ) : (
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Problem Solved Callout */}
                  {project.problemSolved && (
                    <div className="mb-5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Problem Solved
                      </p>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <div className="mb-5 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Capabilities
                    </p>
                    {project.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 mt-0.5 shrink-0">&#10003;</span>
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats & Action Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                    <div className="flex items-center gap-3 text-slate-400">
                      {project.stats.stars && (
                        <span className="flex items-center gap-1 font-medium">
                          <svg className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {project.stats.stars}
                        </span>
                      )}
                      {project.stats.downloads && (
                        <span className="text-[11px] text-slate-400">{project.stats.downloads}</span>
                      )}
                      {project.stats.prsMerged && (
                        <span className="text-[11px] text-emerald-400 font-semibold">{project.stats.prsMerged}</span>
                      )}
                    </div>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition duration-200"
                    >
                      <span>Repository</span>
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Open Source Contribution Philosophy Grid */}
      <div className="mt-16 rounded-[28px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Guiding Philosophy
          </span>
          <h2 className="mt-1 text-2xl font-bold text-white">How I Approach Open Source</h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Enterprise software requires predictable stability, high test coverage, and transparent documentation. Every piece of public code adheres to these non-negotiable principles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white">Strict Quality &amp; Automated CI</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              All libraries must maintain &gt;85% test coverage with automated GitHub Actions, SonarQube quality gates, and automated semantic versioning.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white">Zero-Friction Documentation</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Code is only as valuable as its usability. Every repo features practical copy-paste quickstart snippets, edge case guidelines, and real-world architectures.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white">Welcoming &amp; Collaborative</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Transparent issue triage, courteous PR reviews, and mentorship for first-time contributors entering the open source ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
