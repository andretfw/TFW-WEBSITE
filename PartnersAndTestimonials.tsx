
import React from 'react';
import { TESTIMONIALS } from '../constants';

const PartnersAndTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
            <div className="absolute top-0 -left-20 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 italic mb-4 text-center">Community Voices</h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">Real people, real stories. Hear from the warriors, builders, and collectors who make Tutti Frutti Women what it is today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {TESTIMONIALS.map((t, idx) => (
                    <div 
                      key={t.id} 
                      className={`p-10 rounded-[2.5rem] border border-neutral-100 flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-xl shadow-sm
                        ${idx % 3 === 0 ? 'bg-orange-50/30' : idx % 3 === 1 ? 'bg-purple-50/30' : 'bg-blue-50/30'}`}
                    >
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-neutral-300">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.419.91-3.996 3.635-3.996 5.848h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <a href={t.xUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                            <p className="text-neutral-700 italic leading-relaxed mb-8 text-lg font-medium tracking-tight">"{t.content}"</p>
                        </div>
                        <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                            <img 
                              src={t.avatar} 
                              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" 
                              alt={t.name} 
                            />
                            <div>
                                <h4 className="font-bold text-neutral-900 leading-none mb-1">{t.name}</h4>
                                <p className="text-[10px] text-neutral-500 font-black uppercase tracking-widest">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-20 text-center">
                <a 
                  href="https://tutticancerwarriors.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                    <p className="text-neutral-400 font-bold tracking-widest uppercase text-xs mb-6 italic group-hover:text-pink-600 transition-colors">
                        Support the warriors at tutti cancer warriors
                    </p>
                    <div className="flex justify-center gap-4 group-hover:scale-110 transition-transform">
                        <img src="https://picsum.photos/seed/ribbon/40/40" className="opacity-40" alt="Awareness" />
                        <img src="https://picsum.photos/seed/heart/40/40" className="opacity-40" alt="Community" />
                    </div>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndTestimonials;
