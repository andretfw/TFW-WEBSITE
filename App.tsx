
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HistorySection from './components/HistorySection';
import LegacyArchive from './components/LegacyArchive';
import BaseLaunch from './components/BaseLaunch';
import ImpactSection from './components/ImpactSection';
import PartnersAndTestimonials from './components/PartnersAndTestimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <main>
        <Hero />
        <HistorySection />
        <ImpactSection />
        <LegacyArchive />
        <BaseLaunch />
        <PartnersAndTestimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
