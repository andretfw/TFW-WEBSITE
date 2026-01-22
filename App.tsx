import { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import HistorySection from './HistorySection';
import FeaturedSection from './FeaturedSection';
import ImpactSection from './ImpactSection';
import LegacyArchive from './LegacyArchive';
import BaseLaunch from './BaseLaunch';
import PartnersAndTestimonials from './PartnersAndTestimonials';
import Footer from './Footer';

function App() {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navigation />
      <Hero />
      <HistorySection />
      
      {/* FeaturedSection used to be here - MOVED DOWN */}
      
      <ImpactSection />
      <LegacyArchive />
      <BaseLaunch />
      
      {/* --- NEW LOCATION: After Base Launch, Before Community --- */}
      <FeaturedSection />
      {/* -------------------------------------------------------- */}

      <PartnersAndTestimonials />
      <Footer />
    </div>
  );
}

export default App;
