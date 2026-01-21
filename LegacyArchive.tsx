
import React from 'react';

const LegacyArchive: React.FC = () => {
  return (
    <section id="archive" className="py-32 bg-neutral-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-600/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-bold tracking-widest text-pink-400 mb-6 uppercase">
              The Genesis Collection
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Tutti Frutti Women: <span className="text-neutral-400 italic">The Archive</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed mb-8">
              It started with my godmother wearing a turban in the heat. "I'm bald," she said with a laugh. "I have this stupid breast cancer, but I will beat it."
            </p>
            <p className="text-lg text-neutral-500 leading-relaxed mb-10 font-medium">
              We are archiving our legacy pieces from Ethereum and Shibarium to make way for a refined era on Base. These originals remain the foundation of our journey.
            </p>
            <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white">Ethereum Genesis (2023)</h4>
                        <p className="text-neutral-500">5,000 original supply, reminding the world of strength and healing.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white">Shibarium Migration (2024)</h4>
                        <p className="text-neutral-500">5,000 pieces bridged to keep the mission alive in new ecosystems.</p>
                    </div>
                </div>
            </div>
            <a 
              href="https://x.com/andre_tfw/status/1897046200257007621" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pink-500 font-bold flex items-center gap-2 group text-lg"
            >
              Read the Full Founder's Journey on X
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="relative">
             <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4 pt-12">
                    <img 
                      src="https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/35.png" 
                      className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/10 aspect-square object-cover" 
                      alt="Tutti Frutti Woman Legacy NFT 35" 
                    />
                    <img 
                      src="https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/54.png" 
                      className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/10 aspect-[3/4] object-cover" 
                      alt="Tutti Frutti Woman Legacy NFT 54" 
                    />
                </div>
                <div className="space-y-4">
                    <img 
                      src="https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/58.png" 
                      className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/10 aspect-square object-cover" 
                      alt="Tutti Frutti Woman Legacy NFT 58" 
                    />
                    <img 
                      src="https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/16.png" 
                      className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-white/10 aspect-[3/4] object-cover" 
                      alt="Tutti Frutti Woman Legacy NFT 16" 
                    />
                </div>
             </div>
             <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/10 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyArchive;
