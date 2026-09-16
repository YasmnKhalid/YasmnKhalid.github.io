'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function ScrollbarIndicator() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [badgeTop, setBadgeTop] = useState<number>(80);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hasSections, setHasSections] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatSectionLabel = (id: string, el: HTMLElement): string => {
    // Check data attribute first
    const dataName = el.getAttribute('data-section-name') || el.getAttribute('data-section');
    if (dataName) return dataName;

    // Common standard IDs mapping for nice presentation
    const idMap: Record<string, string> = {
      home: 'Home',
      hero: 'Introduction',
      projects: 'Featured Projects',
      work: 'Projects',
      portfolio: 'Portfolio',
      about: 'About Me',
      services: 'Services',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      testimonials: 'Testimonials',
    };

    if (idMap[id.toLowerCase()]) {
      return idMap[id.toLowerCase()];
    }

    // Try finding heading text inside section
    const heading = el.querySelector('h1, h2, h3');
    if (heading && heading.textContent) {
      const text = heading.textContent.trim();
      if (text.length > 0 && text.length <= 25) {
        return text;
      }
      if (text.length > 25) {
        return text.slice(0, 22) + '...';
      }
    }

    // Fallback: capitalize id
    return id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const updatePositionAndSection = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;

    if (maxScroll <= 50) {
      setHasSections(false);
      return;
    }

    // Calculate vertical position for the badge matching scrollbar thumb
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    const minTop = 75; // Below navbar
    const maxTop = winHeight - 65; // Above bottom edge
    const calculatedTop = minTop + progress * (maxTop - minTop);
    setBadgeTop(calculatedTop);

    // Find all potential sections
    const sectionElements = Array.from(
      document.querySelectorAll<HTMLElement>('section[id], [data-section]')
    );

    if (sectionElements.length === 0) {
      setHasSections(false);
      return;
    }

    setHasSections(true);

    // Determine current active section
    // Look at an offset near 35% of the viewport height
    const probeY = scrollY + winHeight * 0.35;
    let currentLabel = '';

    for (let i = 0; i < sectionElements.length; i++) {
      const el = sectionElements[i];
      const top = el.offsetTop;
      const height = el.offsetHeight;
      const bottom = top + height;

      if (probeY >= top && probeY <= bottom) {
        currentLabel = formatSectionLabel(el.id || `section-${i}`, el);
        break;
      }
    }

    // If at the very top, prioritize first section
    if (scrollY < 100 && sectionElements.length > 0) {
      currentLabel = formatSectionLabel(sectionElements[0].id || 'top', sectionElements[0]);
    } else if (progress > 0.95 && sectionElements.length > 0) {
      // If near very bottom, prioritize last section
      const last = sectionElements[sectionElements.length - 1];
      currentLabel = formatSectionLabel(last.id || 'bottom', last);
    }

    if (currentLabel) {
      setActiveSection(currentLabel);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      updatePositionAndSection();

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1200);
    };

    const handleResize = () => {
      updatePositionAndSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Initial check
    updatePositionAndSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [updatePositionAndSection]);

  if (!hasSections || !activeSection) {
    return null;
  }

  const isVisible = isScrolling || isHovered;

  return (
    <aside
      aria-label="Current section indicator"
      className="fixed right-3 md:right-4 z-50 pointer-events-none select-none transition-all duration-300 ease-out"
      style={{
        top: `${badgeTop}px`,
        transform: `translateY(-50%) ${
          isVisible ? 'translateX(0) scale(1)' : 'translateX(16px) scale(0.95)'
        }`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 text-white shadow-[0_4px_24px_rgba(0,0,0,0.6),0_0_15px_rgba(16,185,129,0.2)] hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-200"
      >
        {/* Glowing emerald indicator dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
        </span>

        {/* Section Name */}
        <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-100 whitespace-nowrap">
          {activeSection}
        </span>

        {/* Little arrow pointing right to the scrollbar */}
        <svg
          className="w-3 h-3 text-emerald-400/80 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </aside>
  );
}
