import React from 'react';
import { Search, Megaphone, Share2, Palette, Code2, BarChart3 } from 'lucide-react';

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/70">
      {eyebrow}
    </div>
    <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-white/60">{subtitle}</p>
    )}
  </div>
);

const serviceItems = [
  { icon: Search, label: 'SEO', desc: 'Technical, on‑page & content strategies to rank and convert.' },
  { icon: Megaphone, label: 'Digital Ads', desc: 'High‑ROI performance campaigns across Google & Meta.' },
  { icon: Share2, label: 'Social Media', desc: 'Growth systems for community, creators, brands.' },
  { icon: Palette, label: 'Branding', desc: 'Identity, systems & design language with neon polish.' },
  { icon: Code2, label: 'Web Development', desc: 'Fast, accessible, conversion‑driven websites.' },
  { icon: BarChart3, label: 'Analytics', desc: 'Event tracking, dashboards, and insights that scale.' },
];

const Solutions = () => {
  return (
    <section id="about" className="relative scroll-mt-20 bg-black py-20 text-white">
      {/* Starfield background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,0.5),transparent),radial-gradient(1px_1px_at_80%_60%,rgba(173,255,47,0.6),transparent),radial-gradient(1px_1px_at_50%_80%,rgba(0,191,255,0.6),transparent)]; [background-size:3px_3px,4px_4px,5px_5px] [background-attachment:fixed]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* About */}
        <SectionTitle
          eyebrow="ABOUT GAYATRI"
          title="A 360° approach to digital growth"
          subtitle="All‑in‑one capabilities across strategy, creative, media, and engineering — orchestrated as one high‑velocity team."
        />

        {/* Services */}
        <div id="services" className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 p-6 shadow-[0_0_20px_rgba(0,191,255,0)] transition hover:shadow-[0_0_40px_rgba(0,191,255,0.35)]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl transition group-hover:opacity-30" style={{ background: 'radial-gradient(circle, #00BFFF 0%, transparent 60%)' }} />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-white">
                <Icon className="h-6 w-6" style={{ color: '#ADFF2F' }} />
              </div>
              <h3 className="text-lg font-semibold">{label}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white" style={{ textShadow: '0 0 12px rgba(173,255,47,0.35)' }}>
                Learn more
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
