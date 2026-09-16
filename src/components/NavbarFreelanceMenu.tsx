'use client';

import Link from 'next/link';
import { useFreelanceMode } from '../hooks/useFreelanceMode';

export default function NavbarFreelanceMenu() {
  const showFreelance = useFreelanceMode();

  if (!showFreelance) {
    return null;
  }

  return (
    <div className="relative group py-2">
      <button
        className="transition hover:text-white flex items-center gap-1"
      >
        Freelance
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute top-full left-0 mt-1 w-40 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
        <Link
          href="/freelance/services"
          className="block px-4 py-2 hover:bg-white/5 transition"
        >
          Services
        </Link>
        <Link
          href="/freelance/testimonials"
          className="block px-4 py-2 hover:bg-white/5 transition"
        >
          Testimonials
        </Link>
        <Link
          href="/freelance/book-a-call"
          className="block px-4 py-2 hover:bg-white/5 transition"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}
