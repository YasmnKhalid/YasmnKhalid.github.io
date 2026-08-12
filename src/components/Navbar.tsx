'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      {/* Background Gradient matching the homepage style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,0.8),rgba(2,6,23,0.8))]" />
      </div>

      <nav className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-12 flex items-center justify-between relative z-50 text-white">
        <div>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-slate-900/50 border border-white/10 flex items-center justify-center p-1 group-hover:border-emerald-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Image 
                src="/icons/yasmin-pixel.png" 
                alt="Yasmin Khalid Logo" 
                width={36} 
                height={36} 
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-semibold tracking-wide text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300 leading-tight">Yasmin Khalid</p>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Full Stack Developer</p>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-slate-300 items-center">
          <Link href="/" className="transition hover:text-white">Home</Link>

          {/* Enterprise Experience Dropdown */}
          <div className="relative group py-2">
            <button
              className="transition hover:text-white flex items-center gap-1"
            >
              Enterprise Experience
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
              <Link href="/enterprise/full-time-work" className="block px-4 py-2 hover:bg-white/5 transition">Full-time work</Link>
              <Link href="/enterprise/open-source-work" className="block px-4 py-2 hover:bg-white/5 transition">Open Source</Link>
              <Link href="/enterprise/csr-projects" className="block px-4 py-2 hover:bg-white/5 transition">CSR Projects</Link>
            </div>
          </div>

          {/* Freelance Dropdown */}
          <div className="relative group py-2">
            <button
              className="transition hover:text-white flex items-center gap-1"
            >
              Freelance
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-40 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
              <Link href="/freelance/services" className="block px-4 py-2 hover:bg-white/5 transition">Services</Link>
              <Link href="/freelance/testimonials" className="block px-4 py-2 hover:bg-white/5 transition">Testimonials</Link>
              <Link href="/freelance/book-a-call" className="block px-4 py-2 hover:bg-white/5 transition">Book a call</Link>
            </div>
          </div>

          <a
            href="/Yasmin Khalid.pdf"
            download="Yasmin_Khalid_Resume.pdf"
            className="ml-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-200 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 text-xs uppercase tracking-wider"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
