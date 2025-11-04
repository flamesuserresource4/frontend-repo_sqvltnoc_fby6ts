import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import WorkShowcase from './components/WorkShowcase';
import Connect from './components/Connect';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black antialiased">
      {/* Hero with Spline cover */}
      <Hero />

      {/* About + Services */}
      <Solutions />

      {/* Portfolio */}
      <WorkShowcase />

      {/* Contact + Footer */}
      <Connect />
    </div>
  );
};

export default App;
