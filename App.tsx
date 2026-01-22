import { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import HistorySection from './HistorySection';
import FeaturedSection from './FeaturedSection'; // <--- IMPORT IT HERE
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
      
      {/* <--- DISPLAY IT HERE (Between History and Impact) */}
      <FeaturedSection />
      
      <ImpactSection />
      <LegacyArchive />
      <BaseLaunch />
      <PartnersAndTestimonials />
      <Footer />
    </div>
  );
}

export default App;
