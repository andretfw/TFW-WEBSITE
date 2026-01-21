import { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import HistorySection from './HistorySection';
import ImpactSection from './ImpactSection';
import LegacyArchive from './LegacyArchive';
import BaseLaunch from './BaseLaunch';
import PartnersAndTestimonials from './PartnersAndTestimonials';
import Footer from './Footer';

function App() {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FDF8F7]">
      <Navigation currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
      <Hero />
      <HistorySection />
      <ImpactSection />
      <LegacyArchive />
      <BaseLaunch />
      <PartnersAndTestimonials />
      <Footer />
    </div>
  );
}

export default App;
