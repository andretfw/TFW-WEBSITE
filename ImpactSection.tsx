import React from 'react';
import { WARRIORS, CAUSES } from './constants';
// 👇 Importing your photo directly
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
                  <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8 italic leading-tight">Three Years of Collective Healing</h2>
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
          PART 2: FOUNDER QUOTE (Cute & Elegant Card)
          ========================================= */}
      <section className="py-20 px-6 bg-white">
        {/* max-w-4xl makes the card look compact and elegant rather than full-screen */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-purple-100 border border-purple-50">
            
            {/* Elegant Gradient Background contained within the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500"></div>

            {/* Content with Z-index to sit above the gradient */}
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
              
              {/* --- LEFT SIDE: QUOTE TEXT --- */}
              <div className="text-center md:text-left flex-1">
                {/* Visual Quote Mark for Elegance */}
                <div className="text-6xl font-serif text-white/20 leading-none h-8 select-none">“</div>
                
                <blockquote className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-6 drop-shadow-sm">
                  I’d rather fail at something that matters than succeed at something that doesn’t.
                </blockquote>
                
                <div className="inline-flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-purple-200/50"></div>
                  <div className="text-xs md:text-sm text-purple-100 font-bold uppercase tracking-[0.2em]">
                    Andreia, Founder
                  </div>
                </div>
              </div>

              {/* --- RIGHT SIDE: SMALLER IMAGE --- */}
              <div className="shrink-0">
                <div className="relative">
                  {/* Subtle Glow behind the image */}
                  <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl"></div>
                  
                  {/* Polaroid-style tilt for a cute, personal feel */}
                  <div className="relative rounded-3xl border-4 border-white/20 p-1.5 shadow-xl rotate-3 hover:rotate-0 transition-all duration-500 bg-white/10 backdrop-blur-md">
                    <img
                      src={founderImage}
                      alt="Andreia"
                      // Controlled size for elegance (w-28 to w-36)
                      className="rounded-2xl w-28 h-28 md:w-36 md:h-36 object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactSection;
