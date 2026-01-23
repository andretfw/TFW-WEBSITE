import React from 'react';

// --- PROPS INTERFACE ---
interface BaseSectionProps {
  walletAddress: string | null;
  totalClaimable: number;
  status: string;
  isLoading: boolean;
  onConnect: (action: 'claim' | 'mint') => void;
}

// --- IMAGE LINKS ---
const baseEvolutionImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/14.png"; 
const backgroundVibeImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/16.png";

const BaseSection: React.FC<BaseSectionProps> = ({ walletAddress, totalClaimable, status, isLoading, onConnect }) => {
  return (
    <section id="claim" className="py-24 bg-white flex justify-center px-4 scroll-mt-20">
      {/* Background is Base Blue (#0052FF) */}
      <div className="max-w-7xl w-full bg-[#0052FF] rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl shadow-blue-600/40">
        
        {/* --- BACKGROUND TEXTURE --- */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
            <img src={backgroundVibeImage} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        
        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* --- LEFT SIDE: TEXT & BUTTONS --- */}
            <div>
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-lg px-3 py-1 mb-8 backdrop-blur-sm">
                    <span className="bg-white text-[#0052FF] text-xs font-bold px-1.5 rounded">B</span>
                    <span className="text-white text-xs font-bold tracking-widest uppercase">Regenerated on Base</span>
                </div>

                {/* UPDATED ARRANGEMENT: 
                    Line 1: Tutti Frutti (Gradient)
                    Line 2: Women (Gradient) on (White)
                    Line 3: Base (White)
                */}
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 drop-shadow-md">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200">
                        Tutti Frutti
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200">
                        Women
                    </span>
                    <span className="text-white"> on</span>
                    <br />
                    <span className="text-white">Base</span>
                </h2>

                <p className="text-blue-100 text-lg leading-relaxed mb-12 max-w-lg font-medium">
                    We aren't starting over; we're evolving. 40% of every mint proceeds goes directly into the Dream Fund at Tutti Cancer Warriors NGO.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* CLAIM CARD */}
                    <div className="bg-blue-900/40 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-blue-900/50 transition-colors relative">
                        <div className="text-4xl font-bold text-white mb-1">
                            {totalClaimable > 0 ? totalClaimable : '1,387'}
                        </div>
                        <div className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-4">
                            {walletAddress ? 'Your Eligible Claims' : 'OG Holders (1:1)'}
                        </div>
                        <p className="text-blue-100/70 text-xs mb-6 h-10">
                            {status || "Reserved for our legacy community from ETH & Shibarium."}
                        </p>
                        
                        <button 
                            onClick={() => onConnect('claim')}
                            disabled={isLoading}
                            className={`w-full py-3 text-[#0052FF] rounded-xl font-bold transition-all transform active:scale-95 shadow-lg
                                ${isLoading ? 'bg-slate-200 cursor-wait' : 'bg-white hover:bg-blue-50'}
                            `}
                        >
                            {isLoading ? 'Scanning...' : 'Claim on Base'}
                        </button>
                    </div>

                    {/* MINT CARD */}
                    <div className="bg-blue-900/40 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-blue-900/50 transition-colors">
                        <div className="text-4xl font-bold text-white mb-1">613</div>
                        <div className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-4">Public Mint</div>
                        <p className="text-blue-100/70 text-xs mb-6 h-10">Open to anyone. Join our mission and fund global grants.</p>
                        
                        <button 
                            onClick={() => onConnect('mint')}
                            className="w-full py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0052FF] rounded-xl font-bold transition-all transform active:scale-95"
                        >
                            Mint on Base
                        </button>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: ART CARD --- */}
            <div className="relative flex justify-center py-12">
                <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-blue-800 rounded-[3rem] shadow-2xl border-2 border-white/10 transform -rotate-12 translate-x-[-15%] translate-y-[-5%] overflow-hidden">
                        <img 
                          src={backgroundVibeImage} 
                          className="w-full h-full object-cover opacity-50 grayscale mix-blend-multiply" 
                          alt="Background" 
                        />
                    </div>

                    <div className="relative z-10 bg-slate-950 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border-4 border-white/20 overflow-hidden transform rotate-2">
                        <div className="aspect-square relative group">
                            <img 
                                src={baseEvolutionImage} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                alt="Art" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-12">
                                <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] mb-2 drop-shadow-lg">Base Evolution</span>
                                <h4 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight italic drop-shadow-2xl">
                                    Art that heals <br/> lives.
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -inset-10 bg-white/20 blur-[80px] -z-10 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BaseSection;
