import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_20%,rgba(0,191,255,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center sm:pt-36">
        {/* Logo + name */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
          <div className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: '#ADFF2F' }} />
          <span className="text-sm tracking-widest text-white/80">GAYATRI DIGITAL</span>
        </div>

        <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-6xl">
          Expanding Your Digital Universe
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          We craft galaxy‑grade brand experiences across search, social, web, and analytics —
          engineered for growth, designed for wonder.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black shadow-[0_0_20px_rgba(0,191,255,0.5)]"
            style={{ backgroundColor: '#00BFFF' }}
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            Start a Project
          </a>
        </div>

        {/* Floating stars */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center gap-2 sm:flex">
          <div className="h-1 w-1 rounded-full" style={{ backgroundColor: '#ADFF2F' }} />
          <div className="h-1 w-1 rounded-full" style={{ backgroundColor: '#00BFFF' }} />
          <div className="h-1 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
