import React from 'react';

// 👇 LOCAL IMAGES
import img1034 from './1034.png';
import img1056 from './1056.png';
import img1078 from './1078.png';

const LegacyArchive: React.FC = () => {
  return (
    // CHANGED: bg-white for the clean book style
    <section id="archive" className="py-32 bg-white overflow-hidden relative">
      
      {/* Light Background Gradients (Subtle) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-50 to-transparent opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT SIDE: TEXT (Dark Colors now) --- */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-xs font-bold tracking-widest text-[#0052FF] mb-6 uppercase">
              The Genesis Collection
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-slate-900">
              Tutti Frutti Women: <span className="text-[#0052FF] italic">The Archive</span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              It started with my godmother wearing a turban in the heat. "I'm bald," she said with a laugh. "I have this stupid breast cancer, but I will beat it."
            </p>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
              We are archiving our legacy pieces from Ethereum and Shibarium to make way for a refined era on Base. These originals remain the foundation of our journey.
            </p>

            <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#0052FF]"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900">Ethereum Genesis (2023)</h4>
                        <p className="text-slate-500">5,000 original supply, reminding the world of strength and healing.</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900">Shibarium Migration (2024)</h4>
                        <p className="text-slate-500">5,000 pieces bridged to keep the mission alive in new ecosystems.</p>
                    </div>
                </div>
            </div>

            <a 
              href="https://x.com/andre_tfw/status/2011839897061986318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0052FF] font-bold flex items-center gap-2 group text-lg hover:text-blue-700 transition-colors"
            >
              Read the Full Founder's Journey on X
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* --- RIGHT SIDE: IMAGES (Clean Borders) --- */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4 pt-12">
                    {/* 1. Original (Hosted) */}
                    <img 
                      src="https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/35.png" 
                      className="rounded-3xl shadow-xl shadow-blue-900/5 hover:scale-105 transition-transform duration-500 border border-slate-100 aspect-square object-cover" 
                      alt="Tutti Frutti Woman Legacy NFT 35" 
                    />
                    {/* 2. New Local Image */}
                    <img 
                      src={img1034} 
                      className="rounded-3xl shadow-xl shadow-blue-900/5 hover:scale-105 transition-transform duration-500 border border-slate-100 aspect-[3/4] object-cover" 
                      alt="Legacy NFT 1034" 
                    />
                </div>
                <div className="space-y-4">
                    {/* 3. New Local Image */}
                    <img 
                      src={img1056} 
                      className="rounded-3xl shadow-xl shadow-blue-900/5 hover:scale-105 transition-transform duration-500 border border-slate-100 aspect-square object-cover" 
                      alt="Legacy NFT 1056" 
                    />
                    {/* 4. New Local Image */}
                    <img 
                      src={img1078} 
                      className="rounded-3xl shadow-xl shadow-blue-900/5 hover:scale-105 transition-transform duration-500 border border-slate-100 aspect-[3/4] object-cover" 
                      alt="Legacy NFT 1078" 
                    />
                </div>
             </div>
             
             {/* Subtle Back Glow (Light Blue) */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyArchive;
