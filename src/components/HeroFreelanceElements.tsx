'use client';

import { useFreelanceMode } from '../hooks/useFreelanceMode';
import { appSettings } from '../config/appSettings';

export function HeroAvailabilityBadge() {
  const showFreelance = useFreelanceMode();

  return (
    <div className="mb-6 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 backdrop-blur">
      {showFreelance
        ? 'Available for full-time roles and freelance projects'
        : 'Available for full-time & enterprise roles'}
    </div>
  );
}

export function HeroHireButton() {
  const showFreelance = useFreelanceMode();

  return (
    <a
      href={showFreelance ? '/freelance/book-a-call' : `mailto:${appSettings.contact.email}`}
      className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
    >
      {showFreelance ? 'Hire Me' : 'Contact Me'}
    </a>
  );
}

export function HeroOpenTo() {
  const showFreelance = useFreelanceMode();

  return (
    <p className="mt-1 font-medium text-white">
      {showFreelance
        ? 'mid-level roles, freelance builds, long-term collaborations'
        : 'mid-level roles, enterprise systems, long-term collaborations'}
    </p>
  );
}
