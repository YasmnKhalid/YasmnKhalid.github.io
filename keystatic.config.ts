import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    resume: singleton({
      label: 'Resume & Documents',
      path: 'src/content/resume/index',
      format: { data: 'json' },
      schema: {
        headline: fields.text({
          label: 'Resume Headline / Title',
          defaultValue: 'Yasmin Khalid — Full Stack Software Engineer',
        }),
        summary: fields.text({
          label: 'Executive Summary',
          multiline: true,
          defaultValue:
            'Full Stack Developer specializing in Angular and ASP.NET Core, building high-reliability enterprise systems, microfrontends, and business-focused web products.',
        }),
        resumeFile: fields.file({
          label: 'Resume Document (PDF)',
          description: 'Upload your latest resume PDF here',
          directory: 'public/uploads',
          publicPath: '/uploads/',
        }),
        lastUpdated: fields.text({
          label: 'Last Updated Date',
          defaultValue: 'October 2026',
        }),
      },
    }),
  },
  collections: {
    caseStudies: collection({
      label: 'Featured Products & Case Studies',
      slugField: 'title',
      path: 'src/content/case-studies/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Project Title' } }),
        description: fields.text({ label: 'Short Description', multiline: true }),
        image: fields.text({
          label: 'Thumbnail / Image URL (e.g. /Vaucher.png or /ComingSoon.png)',
          defaultValue: '/ComingSoon.png',
        }),
        stack: fields.array(fields.text({ label: 'Technology' }), {
          label: 'Tech Stack (e.g. Angular, ASP.NET, MongoDB)',
          itemLabel: (props) => props.value || 'Tech',
        }),
        role: fields.text({ label: 'Your Role (e.g. Lead Full Stack Developer)' }),
        timeline: fields.text({ label: 'Timeline (e.g. 3 Months (Q2 2025))' }),
        featured: fields.checkbox({ label: 'Show on Homepage Featured Section', defaultValue: true }),
        order: fields.integer({ label: 'Display Order', defaultValue: 1 }),
        challenge: fields.text({ label: 'The Challenge', multiline: true }),
        solution: fields.text({ label: 'The Solution', multiline: true }),
        achievements: fields.array(fields.text({ label: 'Achievement' }), {
          label: 'Key Achievements & Impact',
          itemLabel: (props) => props.value || 'Achievement',
        }),
        codeSnippet: fields.text({ label: 'Key Implementation Code Snippet', multiline: true }),
      },
    }),
    milestones: collection({
      label: 'Career Milestones & Experience',
      slugField: 'role',
      path: 'src/content/milestones/*',
      format: { data: 'json' },
      schema: {
        role: fields.slug({ name: { label: 'Role or Degree Title' } }),
        company: fields.text({ label: 'Company or Institution' }),
        organization: fields.text({ label: 'Organization / Client (Optional)' }),
        location: fields.text({ label: 'Location (e.g. Kuala Lumpur, Malaysia)' }),
        year: fields.text({ label: 'Year or Period (e.g. Sep 2025 — Apr 2026)' }),
        timelineLabel: fields.text({ label: 'Timeline Short Label (e.g. 2025–2026 Enterprise)' }),
        verticalLabel: fields.text({ label: 'Vertical Badge (e.g. SEB / Banking)' }),
        type: fields.text({ label: 'Milestone Type (e.g. Full-Time Enterprise, Higher Education)' }),
        badge: fields.text({ label: 'Badge (e.g. Pension & Insurance Systems)' }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        highlights: fields.array(fields.text({ label: 'Highlight' }), {
          label: 'Key Highlights',
          itemLabel: (props) => props.value || 'Highlight',
        }),
        skills: fields.array(fields.text({ label: 'Skill' }), {
          label: 'Skills Used',
          itemLabel: (props) => props.value || 'Skill',
        }),
        metricLabel: fields.text({ label: 'Metric Label (Optional, e.g. Time Saved)' }),
        metricValue: fields.text({ label: 'Metric Value (Optional, e.g. ~6 hrs/week)' }),
        order: fields.integer({ label: 'Display Order (1 = earliest, 5 = latest)', defaultValue: 1 }),
      },
    }),
  },
});
