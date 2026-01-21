
import React from 'react';

const BaseLaunch: React.FC = () => {
  // Real project image assets from the user's repository
  const baseEvolutionImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/14.png"; 
  const backgroundVibeImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/16.png";

  return (
    <section id="base" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-[4rem] p-8 md:p-24 text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/40">
                            <span className="text-white font-black text-3xl">B</span>
                        </div>
                        <span className="text-blue-400 font-black tracking-[0.3em] text-sm uppercase">Regenerated on Base</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight text-white">
                        Tutti Frutti <br/>
                        <span className="text-blue-500">Women on Base</span>
                    </h2>
                    <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium">
                        We aren't starting over; we're evolving. 40% of every mint proceeds goes directly into the Dream Fund at Tutti Cancer Warriors NGO. 
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-black text-white mb-2">1,387</div>
                                <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">OG Holders (1:1)</div>
                                <p className="text-neutral-500 text-sm mb-6">Reserved for our legacy community from ETH & Shibarium.</p>
                            </div>
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-black transition-all shadow-lg shadow-blue-600/20">
                                Claim on Base
                            </button>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-black text-white mb-2">613</div>
                                <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Public Mint</div>
                                <p className="text-neutral-500 text-sm mb-6">Open to anyone. Join our mission and fund global grants.</p>
                            </div>
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-black transition-all shadow-lg shadow-blue-600/20">
                                Mint on Base
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="relative flex justify-center py-12">
                    <div className="relative w-full max-w-sm">
                        {/* Background Card - Staggered rear card */}
                        <div className="absolute inset-0 bg-neutral-800 rounded-[3rem] shadow-2xl border-2 border-white/10 transform -rotate-12 translate-x-[-15%] translate-y-[-5%] overflow-hidden">
                            <img 
                              src={backgroundVibeImage} 
                              className="w-full h-full object-cover opacity-30 grayscale" 
                              alt="Tutti Frutti Woman Evolution Background" 
                            />
                        </div>

                        {/* Foreground Card - Using the specific character art provided */}
                        <div className="relative z-10 bg-neutral-900 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border-4 border-blue-900/40 overflow-hidden transform rotate-2">
                            <div className="aspect-square relative group">
                                <img 
                                  src={baseEvolutionImage} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                  alt="Tutti Frutti Woman on Base - Art that heals lives" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-12">
                                    <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] mb-2 drop-shadow-lg">Base Evolution</span>
                                    <h4 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight italic drop-shadow-2xl">
                                        Art that heals <br/> lives.
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -inset-10 bg-blue-500/10 blur-[80px] -z-10 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BaseLaunch;
