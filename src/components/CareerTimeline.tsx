'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Milestone {
  id: string;
  year: string;
  timelineLabel: string;
  verticalLabel: string;
  role: string;
  company: string;
  organization: string;
  location: string;
  type: string;
  badge: string;
  summary: string;
  highlights: string[];
  skills: string[];
  metrics?: { label: string; value: string };
}

const milestones: Milestone[] = [
  {
    id: 'foundation',
    year: '2020 — 2022',
    timelineLabel: 'The Foundation',
    verticalLabel: 'Diploma in CS',
    role: 'Diploma in Computer Science',
    company: 'MARA Professional College',
    organization: 'Kolej Profesional MARA',
    location: 'Malaysia',
    type: 'Academic Milestone',
    badge: 'Core Computing',
    summary:
      'Built a rigorous foundation in algorithms, relational database architecture, object-oriented programming, and computer systems.',
    highlights: [
      'Developed strong fundamentals in Java, C++, data structures, and database design principles.',
      'Gained early hands-on experience building structured software applications and modular algorithms.',
      'Graduated with distinction, paving the way for advanced software engineering specialization.',
    ],
    skills: ['Java', 'C++', 'SQL', 'Data Structures', 'OOP', 'Software Fundamentals'],
    metrics: { label: 'Graduation Merit', value: 'First Class' },
  },
  {
    id: 'degree',
    year: '2022 — 2025',
    timelineLabel: 'Software Eng',
    verticalLabel: 'B.IT (Hons.)',
    role: 'Bachelor of IT (Hons.) in Software Engineering',
    company: 'Universiti Kuala Lumpur',
    organization: 'UniKL MIIT',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Higher Education',
    badge: 'Software Engineering',
    summary:
      'Specialized in enterprise software architecture, full-stack application development, modern API design, and agile methodologies.',
    highlights: [
      'Engineered full-stack applications leveraging Angular on the frontend and ASP.NET Core on the backend.',
      'Mastered software testing frameworks, version control workflows (Git/GitLab), and clean code paradigms.',
      'Led university software teams, sharpening technical leadership and collaborative problem-solving.',
    ],
    skills: ['Angular', 'TypeScript', 'C#', '.NET Core', 'SQL Server', 'REST APIs', 'Git'],
    metrics: { label: 'Degree Honor', value: 'First Class' },
  },
  {
    id: 'millennium',
    year: 'Mar 2025 — Jul 2025',
    timelineLabel: '2025 Intern',
    verticalLabel: 'Mobile & BI',
    role: 'Mobile Developer Intern',
    company: 'Millennium Radius Sdn Bhd',
    organization: 'Client: Johor Palm Plantation',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Corporate Internship',
    badge: 'Executive BI Platform',
    summary:
      'Engineered a high-performance Business Intelligence tablet dashboard for board-level executives, incorporating live analytics and automated ETL pipelines.',
    highlights: [
      'Built responsive, high-performance UI components using React Native, Expo, and D3.js for interactive analytics.',
      'Collaborated with data engineers on ETL pipelines (AWS Glue, Python) for automated data ingestion and quality validation.',
      'Performed anomaly detection and data profiling using Pandas, NumPy, and machine learning (Isolation Forest).',
      'Automated data quality reporting via SMTP, saving ~6 hours weekly and streamlining executive access.',
    ],
    skills: ['React Native', 'Expo', 'D3.js', 'Python', 'AWS Glue', 'Pandas', 'NumPy', 'REST APIs'],
    metrics: { label: 'Time Saved', value: '~6 hrs/week' },
  },
  {
    id: 'inscale',
    year: 'Sep 2025 — Apr 2026',
    timelineLabel: '2025–2026 Enterprise',
    verticalLabel: 'SEB / Banking',
    role: 'Full Stack Engineer',
    company: 'Inscale Asia Sdn Bhd / SEB ADC',
    organization: 'Scandinavian Banking Client (SEB)',
    location: 'Kuala Lumpur & Stockholm, Sweden',
    type: 'Full-Time Enterprise',
    badge: 'Pension & Insurance Systems',
    summary:
      'Spearheaded enterprise banking solutions for Scandinavian customers, specializing in microfrontend architectures, resilient distributed systems, and GitOps deployments.',
    highlights: [
      'Architected a reusable analytics solution for a microfrontend platform across 5+ apps, reducing integration effort by ~40% with Dead Letter Queue-based processing.',
      'Developed a custom Redis NuGet package with resilience and circuit breaker patterns to eliminate redundant Splunk logging and optimize infrastructure costs.',
      'Assisted in integrating a modern insurance administration engine with digital customer portals to visualize pensions for Swedish consumers.',
      'Engineered GitOps CI/CD pipelines with GitHub Actions, Kubernetes, and Kustomize via ArgoCD.',
      'Drove >80% automated test coverage utilizing xUnit for .NET services and Playwright for E2E workflows.',
    ],
    skills: ['C#', 'ASP.NET Core', 'Angular', 'Microfrontends', 'Redis', 'Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'xUnit'],
    metrics: { label: 'Integration Effort', value: '-40% Saved' },
  },
  {
    id: 'present',
    year: 'Present & Beyond',
    timelineLabel: 'Today & Beyond',
    verticalLabel: 'Continuous Growth',
    role: 'Full Stack Engineer & Consultant',
    company: 'Open to Opportunities',
    organization: 'Global & Enterprise Projects',
    location: 'Open to Remote / Hybrid',
    type: 'Current Focus',
    badge: 'Ready for Impact',
    summary:
      'Combining enterprise-grade backend rigor in .NET with modern frontend mastery in Angular & React to build reliable, high-value digital products.',
    highlights: [
      'Actively exploring senior and impactful software engineering opportunities.',
      'Deep focus on cloud-native architectures, performance optimization, and scalable web platforms.',
      'Continuous contributor to modern developer tools, open-source utilities, and freelance client success.',
    ],
    skills: ['System Design', 'Enterprise Architecture', 'Cloud Native', 'API Security', 'Clean Code'],
    metrics: { label: 'Availability', value: 'Immediate' },
  },
];

export default function CareerTimeline() {
  const [activeIndex, setActiveIndex] = useState(3); // Default to latest full-time role (Inscale/SEB)

  const activeMilestone = milestones[activeIndex];

  return (
    <div className="w-full">
      {/* Container Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Career Progression
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Our Journey
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          From academic foundations to developing mission-critical systems for Scandinavian banking
          institutions and enterprise analytics.
        </p>
      </div>

      {/* Main Timeline Card Container */}
      <div className="relative rounded-[32px] border border-white/10 bg-slate-900/60 backdrop-blur-xl p-4 sm:p-6 lg:p-10 shadow-2xl overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Desktop Interactive Layout (Modeled exactly on reference) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 min-h-[580px] relative z-10">
          
          {/* Left Vertical Navigation Column */}
          <div className="col-span-3 border-r border-white/10 pr-6 flex flex-col justify-between py-4 select-none">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-6">
                Milestones & Timeline
              </p>
              <nav className="flex flex-col gap-5">
                {milestones.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`group flex items-center justify-between w-full text-left transition-all duration-300 py-1.5 px-3 rounded-xl ${
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Horizontal notch mark matching reference */}
                        <div
                          className={`h-0.5 transition-all duration-300 ${
                            isActive
                              ? 'w-6 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                              : 'w-3 bg-slate-600 group-hover:w-4 group-hover:bg-slate-400'
                          }`}
                        />
                        <span className="text-sm tracking-wide">{item.timelineLabel}</span>
                      </div>
                      <span
                        className={`text-xs font-mono transition-colors ${
                          isActive ? 'text-emerald-400' : 'text-slate-500'
                        }`}
                      >
                        {item.year.split('—')[0].trim()}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Resume Quick Link */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <a
                href="/Yasmin Khalid.pdf"
                download="Yasmin_Khalid_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Download verified resume (PDF)</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Main Canvas: Column dividers with vertical labels & Active Overlay Card */}
          <div className="col-span-9 relative flex items-stretch">
            {/* The Vertical Grid Columns with Rotated Labels */}
            <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
              {milestones.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className="relative border-r border-white/10 last:border-r-0 pointer-events-auto cursor-pointer group flex flex-col items-center justify-start pt-3 hover:bg-white/[0.02] transition-colors"
                    title={`View ${item.role}`}
                  >
                    {/* Vertical guideline with glowing effect on active */}
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-400 to-transparent shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                    )}

                    {/* Rotated Vertical Header */}
                    <div
                      className={`text-xs font-medium uppercase tracking-widest transition-all duration-300 [writing-mode:vertical-rl] rotate-180 py-4 select-none ${
                        isActive
                          ? 'text-emerald-300 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] scale-105'
                          : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {item.verticalLabel}
                    </div>

                    {/* Milestone Year at bottom */}
                    <div
                      className={`mt-auto mb-4 text-[10px] font-mono [writing-mode:vertical-rl] rotate-180 select-none ${
                        isActive ? 'text-emerald-400' : 'text-slate-600'
                      }`}
                    >
                      {item.year.split('—')[0].trim()}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Active Content Card (Positioned & Focused over the timeline) */}
            <div className="relative z-20 w-full max-w-2xl my-auto ml-10 p-8 rounded-2xl bg-slate-900/95 border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_25px_rgba(16,185,129,0.15)] backdrop-blur-2xl transition-all duration-300 ease-out animate-fadeIn">
              
              {/* Badge row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                    {activeMilestone.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-xs font-medium">
                    {activeMilestone.type}
                  </span>
                </div>
                
                <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
                  {activeMilestone.year}
                </span>
              </div>

              {/* Title & Organization */}
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {activeMilestone.role}
              </h2>
              <div className="flex items-center gap-2 text-sm text-slate-300 mt-1 mb-4 font-medium">
                <span className="text-white font-semibold">{activeMilestone.company}</span>
                {activeMilestone.organization !== activeMilestone.company && (
                  <>
                    <span className="text-slate-600">&bull;</span>
                    <span className="text-slate-400">{activeMilestone.organization}</span>
                  </>
                )}
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-400">{activeMilestone.location}</span>
              </div>

              {/* Summary */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeMilestone.summary}
              </p>

              {/* Key Contributions */}
              <div className="space-y-2.5 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Achievements & Responsibilities
                </p>
                {activeMilestone.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags & Metric footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5 max-w-md">
                  {activeMilestone.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-800/80 border border-white/5 text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {activeMilestone.metrics && (
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">
                      {activeMilestone.metrics.label}
                    </div>
                    <div className="text-sm font-bold text-emerald-400">
                      {activeMilestone.metrics.value}
                    </div>
                  </div>
                )}
              </div>

              {/* Stepper controls */}
              <div className="mt-6 flex justify-between items-center pt-3 border-t border-white/5">
                <button
                  onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeIndex === 0}
                  className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition"
                >
                  &larr; Previous Stage
                </button>
                <div className="flex items-center gap-1.5">
                  {milestones.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeIndex ? 'w-6 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to stage ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveIndex((prev) => Math.min(milestones.length - 1, prev + 1))}
                  disabled={activeIndex === milestones.length - 1}
                  className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition"
                >
                  Next Stage &rarr;
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile / Tablet Friendly Layout (< lg) */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Horizontal scrollable tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {milestones.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {item.timelineLabel}
                </button>
              );
            })}
          </div>

          {/* Active Card on Mobile */}
          <div className="rounded-2xl bg-slate-900/90 border border-emerald-500/30 p-6 shadow-xl">
            <div className="flex justify-between items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                {activeMilestone.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeMilestone.year}
              </span>
            </div>

            <h2 className="text-xl font-bold text-white mb-1">
              {activeMilestone.role}
            </h2>
            <p className="text-sm text-slate-400 mb-4">
              {activeMilestone.company} &bull; {activeMilestone.location}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {activeMilestone.summary}
            </p>

            <div className="space-y-2 mb-5">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Deliverables
              </p>
              {activeMilestone.highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {activeMilestone.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
