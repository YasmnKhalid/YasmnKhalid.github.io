'use client';

import { useEffect, useState } from 'react';

export default function ScrollSideNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
  ];

  return (
    <div className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-6 select-none">
      {/* Top vertical line */}
      <div className="w-px h-16 bg-gradient-to-b from-transparent to-slate-700" />
      
      {/* Navigation dots & labels */}
      <div className="flex flex-col gap-6 items-center">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative flex items-center justify-center p-1"
              aria-label={`Scroll to ${item.label}`}
            >
              {/* Dot */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-400 scale-125 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                    : 'bg-slate-600 hover:bg-slate-400 group-hover:scale-110'
                }`}
              />
              
              {/* Label that shows on hover or is highlighted when active */}
              <span
                className={`absolute left-7 px-2.5 py-1 rounded bg-slate-900/90 border border-white/10 text-[10px] uppercase tracking-widest text-slate-300 font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:left-9 transition-all duration-300 shadow-lg ${
                  isActive ? 'text-emerald-300 border-emerald-500/20' : ''
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom vertical line */}
      <div className="w-px h-16 bg-gradient-to-t from-transparent to-slate-700" />
    </div>
  );
}
