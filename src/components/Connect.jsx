import React from 'react';
import { Mail, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Connect = () => {
  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      {/* Galaxy backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(60%_50%_at_30%_30%,rgba(0,191,255,0.15),transparent),radial-gradient(50%_40%_at_70%_70%,rgba(173,255,47,0.18),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/70">
            CONTACT
          </div>
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Start Your Digital Journey
          </h2>
          <p className="mt-3 text-white/60">Tell us about your mission and we’ll plot the course.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Form */}
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-[#00BFFF]" placeholder="Alice" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input type="email" className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-[#00BFFF]" placeholder="alice@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-white/70">Project type</label>
              <select className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-[#00BFFF]">
                <option>Branding</option>
                <option>Website</option>
                <option>Growth & Ads</option>
                <option>Analytics</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea rows={5} className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#00BFFF]" placeholder="What are you building?" />
            </div>
            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(173,255,47,0.35)] transition"
              style={{ backgroundColor: '#ADFF2F' }}
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <p className="mt-3 text-xs text-white/50">By sending, you agree to our terms. We’ll get back within 1–2 business days.</p>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 p-6">
              <h3 className="text-lg font-semibold">Why partner with Gayatri?</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>• Senior talent across strategy, design, media, and engineering</li>
                <li>• Transparent reporting and analytics from day one</li>
                <li>• Fast iterations, bold creative, measurable outcomes</li>
              </ul>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4" /> hello@gayatri.agency
              </div>
            </div>

            {/* Footer */}
            <footer className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6">
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(1px_1px_at_10%_20%,rgba(255,255,255,0.6),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(0,191,255,0.6),transparent),radial-gradient(1px_1px_at_40%_80%,rgba(173,255,47,0.6),transparent)]" />
              <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#00BFFF', boxShadow: '0 0 12px #00BFFF' }} />
                  <span className="text-sm text-white/70">© {new Date().getFullYear()} Gayatri — Crafted among the stars</span>
                </div>
                <div className="flex items-center gap-4">
                  <a href="#" className="rounded-full p-2 text-white/70 transition hover:text-white" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full p-2 text-white/70 transition hover:text-white" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full p-2 text-white/70 transition hover:text-white" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
