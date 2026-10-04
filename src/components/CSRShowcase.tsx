'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface CSRInitiative {
  id: string;
  title: string;
  category: 'mentorship' | 'accessibility' | 'sustainability' | 'workshops';
  categoryLabel: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  impactMetrics: { label: string; value: string }[];
  highlights: string[];
  tags: string[];
  status: 'Ongoing Initiative' | 'Completed' | 'Annual Event' | 'Continuous Support';
  badge: string;
}

const csrInitiatives: CSRInitiative[] = [
  {
    id: 'stem-coding-mentorship',
    title: 'Youth Coding Clinics & Academic Mentorship',
    category: 'mentorship',
    categoryLabel: 'Tech Mentorship',
    organization: 'Kolej Profesional MARA & UniKL MIIT Student Chapter',
    role: 'Lead Peer Mentor & Technical Coach',
    period: '2023 — Present',
    summary:
      'Guiding first-generation CS students through algorithmic problem solving, clean code architecture in Java & C#, and successfully navigating the transition from college to software engineering internships.',
    impactMetrics: [
      { label: 'Students Mentored', value: '80+' },
      { label: 'Coding Clinics', value: '14 Sessions' },
      { label: 'Cost to Students', value: '100% Free' },
    ],
    highlights: [
      'Organized weekly small-group peer coding reviews focusing on data structures, OOP fundamentals, and debugging habits.',
      'Authored free technical interview prep guides and conducted mock whiteboarding critiques.',
      'Mentored 12 female engineering students who went on to secure enterprise internships.',
    ],
    tags: ['Java', 'C++', 'Algorithms', 'Mentorship', 'Career Guidance'],
    status: 'Ongoing Initiative',
    badge: 'Education & Mentorship',
  },
  {
    id: 'pro-bono-accessibility-audits',
    title: 'Web Accessibility (WCAG 2.1) Audits for Non-Profits',
    category: 'accessibility',
    categoryLabel: 'Digital Inclusion',
    organization: 'Local Community Welfare & Elderly Care NGOs',
    role: 'Volunteer Accessibility Consultant',
    period: '2024 — Present',
    summary:
      'Providing pro-bono accessibility evaluations and direct code remediation for charitable organizations to guarantee full usability for screen-reader users, elderly citizens, and individuals with visual impairments.',
    impactMetrics: [
      { label: 'NGO Portals Audited', value: '3 Portals' },
      { label: 'Compliance Level', value: 'WCAG 2.1 AA' },
      { label: 'Pro-Bono Value', value: 'Zero Cost' },
    ],
    highlights: [
      'Identified and fixed keyboard focus traps, missing ARIA landmark attributes, and confusing navigation tab orders.',
      'Rebuilt donation forms and contact flows to achieve required 4.5:1 color contrast ratios.',
      'Trained volunteer non-profit administrators on accessible content creation and descriptive alt-text practices.',
    ],
    tags: ['WCAG 2.1', 'ARIA', 'Axe-Core', 'Screen Readers', 'Web Inclusion'],
    status: 'Continuous Support',
    badge: 'Pro-Bono Tech',
  },
  {
    id: 'green-computing-agro-telemetry',
    title: 'Sustainable Agriculture Telemetry & Resource Efficiency',
    category: 'sustainability',
    categoryLabel: 'Sustainable Tech',
    organization: 'Johor Plantation Ecosystem (Internship CSR Focus)',
    role: 'Data Engineering Contributor',
    period: '2025',
    summary:
      'Developing automated anomaly detection and visual reporting systems to reduce fertilizer over-dispatch, optimize water management schedules, and replace paper-heavy manual logs with efficient digital workflows.',
    impactMetrics: [
      { label: 'Manual Effort Saved', value: '~6 hrs/wk' },
      { label: 'Reporting Format', value: '100% Paperless' },
      { label: 'Data Efficiency', value: 'Optimized ETL' },
    ],
    highlights: [
      'Built automated anomaly detection pipelines in Python (Isolation Forest) flagging moisture and nutrient imbalances early.',
      'Replaced stacks of physical binder reports with executive tablet dashboards built in React Native and D3.js.',
      'Optimized backend aggregation jobs to reduce server compute cycles and cloud energy consumption.',
    ],
    tags: ['Python', 'AWS Glue', 'Pandas', 'Green Computing', 'Agriculture'],
    status: 'Completed',
    badge: 'Environmental Tech',
  },
  {
    id: 'open-source-git-workshops',
    title: 'Demystifying Git, GitHub & Open Source for Beginners',
    category: 'workshops',
    categoryLabel: 'Community Workshops',
    organization: 'Tech Community Meetups & Student Tech Clubs',
    role: 'Workshop Speaker & Facilitator',
    period: '2024 — 2025',
    summary:
      'Conducting interactive, hands-on masterclasses teaching version control etiquette, Git branching best practices, merge conflict resolution, and opening initial pull requests in open source.',
    impactMetrics: [
      { label: 'Workshop Attendees', value: '45+ Youths' },
      { label: 'Satisfaction Rating', value: '4.9 / 5.0' },
      { label: 'Access Type', value: 'Open Slides' },
    ],
    highlights: [
      'Created an isolated sandbox repository where beginners practiced safely resolving merge conflicts in real-time.',
      'Demystified open-source etiquette, issue tagging, and contributing guidelines for first-time developers.',
      'Provided open-access cheat sheets and terminal shortcut references for all attendees.',
    ],
    tags: ['Git', 'GitHub', 'Open Source', 'Community Speaking', 'Workshops'],
    status: 'Annual Event',
    badge: 'Community Outreach',
  },
  {
    id: 'open-learning-dev-cheatsheets',
    title: 'Full-Stack Architecture Guides & Open Study Materials',
    category: 'mentorship',
    categoryLabel: 'Open Knowledge',
    organization: 'Public Developer Knowledge Base',
    role: 'Author & Curator',
    period: '2024 — Present',
    summary:
      'Authoring and sharing high-density visual architectural summaries, clean code checklists, and .NET Core REST API patterns freely accessible to aspiring developers worldwide.',
    impactMetrics: [
      { label: 'Community Reads', value: '600+' },
      { label: 'License', value: 'Creative Commons' },
      { label: 'Formats', value: 'Markdown & PDF' },
    ],
    highlights: [
      'Designed visual side-by-side architectural flowcharts comparing Angular Signals with RxJS reactive state.',
      'Documented real-world enterprise security checklists covering CORS, JWT refresh tokens, and rate limiting.',
      'Open to student requests and community translation contributions.',
    ],
    tags: ['Angular', 'ASP.NET Core', 'Clean Architecture', 'Creative Commons'],
    status: 'Continuous Support',
    badge: 'Open Knowledge',
  },
];

export default function CSRShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mentorship' | 'accessibility' | 'sustainability' | 'workshops'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Initiatives', count: csrInitiatives.length },
    {
      id: 'mentorship',
      label: 'Tech Mentorship',
      count: csrInitiatives.filter((p) => p.category === 'mentorship').length,
    },
    {
      id: 'accessibility',
      label: 'Digital Accessibility',
      count: csrInitiatives.filter((p) => p.category === 'accessibility').length,
    },
    {
      id: 'sustainability',
      label: 'Sustainable Tech',
      count: csrInitiatives.filter((p) => p.category === 'sustainability').length,
    },
    {
      id: 'workshops',
      label: 'Workshops & Talks',
      count: csrInitiatives.filter((p) => p.category === 'workshops').length,
    },
  ];

  const filteredInitiatives = useMemo(() => {
    return csrInitiatives.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.organization.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Category Pills & Search Bar */}
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
            placeholder="Search initiatives (e.g. Mentorship, WCAG, Git)..."
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

      {/* Initiatives Grid */}
      {filteredInitiatives.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-slate-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">No initiatives found</h3>
          <p className="mt-1 text-sm text-slate-400">
            No CSR initiatives match &quot;{searchQuery}&quot;. Try a different search term or category.
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
        <div className="grid gap-6 md:grid-cols-2">
          {filteredInitiatives.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Subtle Ambient Glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-emerald-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Header Badge & Timeline */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-300 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item.categoryLabel}
                  </span>

                  <span className="text-xs font-medium text-slate-400">
                    {item.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-emerald-400/90">
                  {item.organization} &bull; <span className="text-slate-400">{item.role}</span>
                </p>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.summary}
                </p>

                {/* Impact Metric Strip */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/5 bg-slate-950/60 p-3 text-center">
                  {item.impactMetrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-base font-bold text-emerald-300">{metric.value}</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="mt-5 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Key Outcomes &amp; Contributions
                  </p>
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 mt-0.5 shrink-0">&#10003;</span>
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Status Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CSR Impact Pillars Section */}
      <div className="mt-16 rounded-[28px] border border-white/10 bg-slate-900/60 p-8 md:p-10 backdrop-blur-xl">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Core Commitments
          </span>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold text-white">
            Pillars of Social Impact &amp; Technology
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            I believe technology should actively lower barriers rather than heighten them. Here is how I channel my engineering experience into societal impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Mentorship &amp; Education Equity</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Opening doors for students from non-traditional and underprivileged backgrounds through 1-on-1 code reviews, resume guidance, and practical technical coaching.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Digital Accessibility For All</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Advocating for WCAG 2.1 compliance so that the elderly, visually impaired, and neurodivergent individuals can navigate critical digital services with dignity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Resource Efficiency &amp; Eco-Tech</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Building lightweight, low-footprint software architectures that cut down server waste, lower electricity consumption, and automate sustainability tracking.
            </p>
          </div>
        </div>

        {/* Pro-Bono Invitation Box */}
        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-emerald-400">&#9829;</span>
              Are you a non-profit or student group seeking technical support?
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              I allocate designated hours each quarter for pro-bono web accessibility audits, code reviews, and guest workshops for recognized community organizations.
            </p>
          </div>
          <a
            href="mailto:khalidyasmin821@gmail.com?subject=Pro-Bono%20CSR%20Inquiry%20from%20Portfolio"
            className="shrink-0 px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 text-xs font-bold hover:bg-emerald-300 transition shadow-md shadow-emerald-500/10"
          >
            Submit Pro-Bono Request
          </a>
        </div>
      </div>
    </div>
  );
}
