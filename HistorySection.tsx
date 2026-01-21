import React from 'react';
import { ACHIEVEMENTS } from './constants';

const HistorySection: React.FC = () => {
  return (
    // CHANGED: bg-white -> bg-slate-50 (Slight contrast against the white Hero)
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            {/* CHANGED: text-neutral-900 -> text-slate-900 */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Three Years of Impact</h2>
            {/* CHANGED: text-neutral-600 -> text-slate-600 */}
            <p className="text-lg text-slate-600">
              From our first brushstroke on Ethereum to building a multi-chain community, our mission has always been clear: using art to heal and empower.
            </p>
          </div>
          <div className="hidden md:block">
            {/* CHANGED: border-neutral-100 -> border-blue-100 */}
            <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm flex items-center gap-4">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                        <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="community" />
                    ))}
                </div>
                {/* CHANGED: text-neutral-700 -> text-[#0052FF] */}
                <span className="font-bold text-[#0052FF]">15k+ Community Members</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            // CHANGED: Pink hover effects -> Blue hover effects (#0052FF)
            <div key={idx} className="group relative p-8 bg-white rounded-[2.5rem] border border-transparent hover:border-[#0052FF]/30 transition-all hover:shadow-xl hover:shadow-blue-500/10">
              {/* CHANGED: Pink year text -> Blue year text */}
              <div className="text-5xl font-serif italic text-blue-100 group-hover:text-[#0052FF] transition-colors mb-4">
                {item.year}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-2">Featured In</span>
                <div className="flex flex-wrap gap-2">
                  {item.featuredIn.map((pub, i) => (
                    <span key={i} className="text-xs bg-slate-50 px-2 py-1 rounded-md text-slate-600 border border-slate-100">
                      {pub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
