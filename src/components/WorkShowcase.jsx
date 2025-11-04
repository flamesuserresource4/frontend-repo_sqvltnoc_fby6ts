import React from 'react';

const works = [
  {
    title: 'Nebula Commerce',
    tag: 'E‑commerce Redesign',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Quantum Fitness',
    tag: 'Performance Marketing',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Aurora Studio',
    tag: 'Brand Identity + Web',
    img: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=1600&auto=format&fit=crop',
  },
];

const WorkShowcase = () => {
  return (
    <section id="portfolio" className="relative bg-black py-20 text-white">
      {/* Parallax glow strip */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00BFFF]/30 to-transparent opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/70">
            PORTFOLIO
          </div>
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Selected Work
          </h2>
          <p className="mt-3 text-white/60">A galaxy of outcomes — built for speed, beauty, and measurable growth.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <a
              key={w.title}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={w.img}
                alt={w.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 80px rgba(0,191,255,0.35)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs text-white/70">{w.tag}</span>
                <h3 className="text-lg font-semibold">{w.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
