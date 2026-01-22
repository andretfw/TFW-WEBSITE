import React from 'react';
import { WARRIORS, CAUSES } from './constants';
// 👇 Importing your photo directly here
import founderImage from './IMG_7239.jpg'; 

const ImpactSection: React.FC = () => {
  return (
    <>
      {/* =========================================
          PART 1: IMPACT STATS (White Background)
         ========================================= */}
      <section id="impact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              {/* LEFT COLUMN: TEXT */}
              <div>
                  <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-xs font-bold text-[#0052FF] uppercase tracking-widest mb-6">
                      Real Transparency
                  </div>
                  <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8 italic">Three Years of Collective Healing</h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                      The Tutti Frutti Women community has made an undeniable impact on the lives of cancer warriors financially, but also considering the cancer awareness campaigns we had together for 3 years.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                          <div className="text-3xl font-bold text-[#0052FF] mb-1">8k $BONE</div>
                          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">NGO Fund Donation</div>
                          <p className="text-[10px] text-slate-400 mt-2 font-medium">Historical contribution to Tutti Cancer Warriors NGO fund.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                          <div className="text-3xl font-bold text-[#0052FF] mb-1">0.516 ETH</div>
                          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Legacy Contribution</div>
                          <p className="text-[10px] text-slate-400 mt-2 font-medium">Donated from previous mints to fund warrior dreams.</p>
                      </div>
                  </div>

                  <div className="bg-blue-50/50 p-8 rounded-3xl border border-dashed border-blue-200 mb-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Championing Creators</h4>
                      <p className="text-slate-600 leading-relaxed mb-4">
                          We believe in a circular economy of kindness. We supported fellow NFT artists by <b>buying their art</b> and <b>giving it back to our community</b>, ensuring our ecosystem grows through shared support.
                      </p>
                      <p className="text-[#0052FF] font-bold italic">"Art that heals lives and funds dreams."</p>
                  </div>
              </div>

              {/* RIGHT COLUMN: WARRIOR LIST */}
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-slate-100">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                      <span className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#0052FF]">❤</span>
                      Warrior Support Fund
                  </h3>
                  <div className="space-y-6">
                      {WARRIORS.map((warrior, i) => (
                          <div key={i} className="flex justify-between items-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                              <div>
                                  <div className="font-bold text-slate-900">{warrior.name}</div>
                                  <div className="text-xs text-slate-500 uppercase tracking-wider">{warrior.condition}</div>
                              </div>
                              <div className="text-right">
                                  <div className="font-black text-[#0052FF]">{warrior.amount}</div>
                                  <div className="text-[10px] text-slate-400 font-bold uppercase">Direct Aid</div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CAUSES.map((cause, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{cause.note}</div>
                      <div className="text-xl font-bold text-slate-900 mb-4">{cause.name}</div>
                      <div className="text-2xl font-black text-[#0052FF]">{cause.amount}</div>
                  </div>
              ))}
          </div>

        </div>
      </section>

      {/* =========================================
          PART 2: FOUNDER QUOTE (UPDATED)
         ========================================= */}
      {/* Added mb-24 for spacing between next section */}
      <section className="relative py-24 px-6 overflow-hidden mb-24">
        {/* UPDATED BACKGROUND: Vibrant Purple-to-Pink Gradient matching logo */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500"></div>
        
        {/* Added subtle pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay pointer-events-none"></div>

        {/* Layout Swapped: Text Left, Image Right on desktop */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          
          {/* --- LEFT SIDE: QUOTE TEXT (Smaller size) --- */}
          <div className="text-center md:text-left flex-1">
            <blockquote className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-md">
              “I’d rather fail at something that matters than succeed at something that doesn’t.”
            </blockquote>
            
            <div className="inline-block">
                <div className="text-lg md:text-xl text-purple-100 font-medium flex items-center justify-center md:justify-start gap-3">
                    <span className="h-px w-8 bg-purple-200/50"></span>
                    <span>Andreia — Founder, Tutti Frutti Women</span>
                </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE (Smaller size) --- */}
          <div className="shrink-0 relative group">
              {/* Glowing outer frame - adjusted colors for new background */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-white/40 to-pink-300/40 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
              
              {/* Image container - MADE SMALLER (w-[280px] h-[380px]) */}
              <div className="relative rounded-[2.5rem] border-4 border-white/20 p-1 shadow-xl shadow-purple-900/30 bg-white/10 backdrop-blur-sm">
                 <img
                   src={founderImage}
                   alt="Andreia - Founder of Tutti Frutti Women"
                   // UPDATED SIZES HERE:
                   className="rounded-[2.2rem] w-64 h-80 md:w-[280px] md:h-[380px] object-cover"
                 />
              </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ImpactSection;
