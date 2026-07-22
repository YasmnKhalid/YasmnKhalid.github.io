'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12 flex items-center justify-between relative z-50 text-white">
      <div>
        <Link href="/">
          <p className="text-lg font-semibold tracking-wide text-emerald-300">Yasmin Khalid</p>
          <p className="text-sm text-slate-400">Full Stack Developer</p>
        </Link>
      </div>
      <div className="hidden md:flex gap-6 text-sm text-slate-300 items-center">
        <Link href="/" className="transition hover:text-white">Home</Link>
        <a href="/#about" className="transition hover:text-white">About</a>
        <Link href="/resume" className="transition hover:text-white">Resume / Career</Link>
        
        {/* Enterprise Experience Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('enterprise')}
            className="transition hover:text-white flex items-center gap-1"
          >
            Enterprise Experience
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {openDropdown === 'enterprise' && (
            <div className="absolute top-full mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-2">
              <Link href="/enterprise/full-time-work" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Full-time work</Link>
              <Link href="/enterprise/technologies" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Technologies</Link>
              <Link href="/enterprise/case-studies" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Case studies (sanitized)</Link>
            </div>
          )}
        </div>

        {/* Freelance Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('freelance')}
            className="transition hover:text-white flex items-center gap-1"
          >
            Freelance
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {openDropdown === 'freelance' && (
            <div className="absolute top-full mt-2 w-40 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-2">
              <Link href="/freelance/services" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Services</Link>
              <Link href="/freelance/pricing" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Pricing</Link>
              <Link href="/freelance/testimonials" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Testimonials</Link>
              <Link href="/freelance/book-a-call" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Book a call</Link>
            </div>
          )}
        </div>

        {/* Products Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('products')}
            className="transition hover:text-white flex items-center gap-1"
          >
            Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {openDropdown === 'products' && (
            <div className="absolute top-full mt-2 w-56 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-2">
              <Link href="/products/whatsapp-reminder-saas" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>WhatsApp Reminder SaaS</Link>
              <Link href="/products/future-saas" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Future SaaS</Link>
              <Link href="/products/open-source" className="block px-4 py-2 hover:bg-white/5 transition" onClick={() => setOpenDropdown(null)}>Open source</Link>
            </div>
          )}
        </div>

        <a href="/#projects" className="transition hover:text-white">Portfolio</a>
      </div>
    </nav>
  );
}
