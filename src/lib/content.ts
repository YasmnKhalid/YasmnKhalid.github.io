import fs from 'fs';
import path from 'path';

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  role: string;
  timeline: string;
  featured: boolean;
  order: number;
  challenge: string;
  solution: string;
  achievements: string[];
  codeSnippet?: string;
}

export interface Milestone {
  id: string;
  role: string;
  company: string;
  organization?: string;
  location: string;
  year: string;
  timelineLabel: string;
  verticalLabel: string;
  type: string;
  badge: string;
  summary: string;
  highlights: string[];
  skills: string[];
  metrics?: { label: string; value: string };
  order?: number;
}

const CASE_STUDIES_DIR = path.join(process.cwd(), 'src', 'content', 'case-studies');
const MILESTONES_DIR = path.join(process.cwd(), 'src', 'content', 'milestones');

export function getCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CASE_STUDIES_DIR).filter((file) => file.endsWith('.json'));

  const studies: CaseStudy[] = files.map((file) => {
    const slug = file.replace(/\.json$/, '');
    const filePath = path.join(CASE_STUDIES_DIR, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return {
      slug,
      title: content.title || slug,
      description: content.description || '',
      image: content.image || '/ComingSoon.png',
      stack: Array.isArray(content.stack) ? content.stack : [],
      role: content.role || '',
      timeline: content.timeline || '',
      featured: content.featured ?? true,
      order: content.order ?? 99,
      challenge: content.challenge || '',
      solution: content.solution || '',
      achievements: Array.isArray(content.achievements) ? content.achievements : [],
      codeSnippet: content.codeSnippet || '',
    };
  });

  return studies.sort((a, b) => a.order - b.order);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getCaseStudies().filter((study) => study.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const studies = getCaseStudies();
  return studies.find((study) => study.slug === slug) || null;
}

export function getMilestones(): Milestone[] {
  if (!fs.existsSync(MILESTONES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(MILESTONES_DIR).filter((file) => file.endsWith('.json'));

  const milestones: Milestone[] = files.map((file) => {
    const id = file.replace(/\.json$/, '');
    const filePath = path.join(MILESTONES_DIR, file);
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const metrics =
      raw.metricLabel && raw.metricValue
        ? { label: raw.metricLabel, value: raw.metricValue }
        : undefined;

    return {
      id,
      role: raw.role || id,
      company: raw.company || '',
      organization: raw.organization || '',
      location: raw.location || '',
      year: raw.year || '',
      timelineLabel: raw.timelineLabel || raw.year || '',
      verticalLabel: raw.verticalLabel || '',
      type: raw.type || 'Experience',
      badge: raw.badge || '',
      summary: raw.summary || '',
      highlights: Array.isArray(raw.highlights) ? raw.highlights : [],
      skills: Array.isArray(raw.skills) ? raw.skills : [],
      metrics,
      order: raw.order ?? 99,
    };
  });

  return milestones.sort((a, b) => a.order - b.order);
}

export interface ResumeSettings {
  headline: string;
  summary: string;
  resumeFile: string;
  lastUpdated: string;
}

const RESUME_FILE = path.join(process.cwd(), 'src', 'content', 'resume', 'index.json');

export function getResumeSettings(): ResumeSettings {
  const fallback: ResumeSettings = {
    headline: 'Yasmin Khalid — Full Stack Software Engineer',
    summary:
      'Full Stack Developer specializing in Angular and ASP.NET Core, building high-reliability enterprise systems, microfrontends, and business-focused web products.',
    resumeFile: '/Yasmin Khalid.pdf',
    lastUpdated: 'October 2026',
  };

  if (!fs.existsSync(RESUME_FILE)) {
    return fallback;
  }

  try {
    const raw = JSON.parse(fs.readFileSync(RESUME_FILE, 'utf-8'));
    return {
      headline: raw.headline || fallback.headline,
      summary: raw.summary || fallback.summary,
      resumeFile: raw.resumeFile || fallback.resumeFile,
      lastUpdated: raw.lastUpdated || fallback.lastUpdated,
    };
  } catch (e) {
    return fallback;
  }
}
