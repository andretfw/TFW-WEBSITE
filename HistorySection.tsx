
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const HistorySection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">Three Years of Impact</h2>
            <p className="text-lg text-neutral-600">
              From our first brushstroke on Ethereum to building a multi-chain community, our mission has always been clear: using art to heal and empower.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100 flex items-center gap-4">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                        <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="community" />
                    ))}
                </div>
                <span className="font-bold text-neutral-700">15k+ Community Members</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div key={idx} className="group relative p-8 bg-neutral-50 rounded-[2.5rem] border border-transparent hover:border-pink-200 transition-all hover:shadow-xl hover:shadow-pink-50">
              <div className="text-5xl font-serif italic text-pink-100 group-hover:text-pink-200 transition-colors mb-4">
                {item.year}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Featured In</span>
                <div className="flex flex-wrap gap-2">
                  {item.featuredIn.map((pub, i) => (
                    <span key={i} className="text-xs bg-white px-2 py-1 rounded-md text-neutral-700 border border-neutral-100">
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
