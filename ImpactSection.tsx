
import React from 'react';
import { WARRIORS, CAUSES } from './constants';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
                <div className="inline-block px-4 py-2 bg-pink-100 rounded-full text-xs font-bold text-pink-600 uppercase tracking-widest mb-6">
                    Real Transparency
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-8 italic">Three Years of Collective Healing</h2>
                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                    The Tutti Frutti Women community has made an undeniable impact on the lives of cancer warriors financially, but also considering the cancer awareness campaigns we had together for 3 years.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                        <div className="text-3xl font-bold text-pink-600 mb-1">8k $BONE</div>
                        <div className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">NGO Fund Donation</div>
                        <p className="text-[10px] text-neutral-400 mt-2 font-medium">Historical contribution to Tutti Cancer Warriors NGO fund.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                        <div className="text-3xl font-bold text-orange-500 mb-1">0.516 ETH</div>
                        <div className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Legacy Contribution</div>
                        <p className="text-[10px] text-neutral-400 mt-2 font-medium">Donated from previous mints to fund warrior dreams.</p>
                    </div>
                </div>

                <div className="bg-white/50 p-8 rounded-3xl border border-dashed border-neutral-300 mb-8">
                    <h4 className="text-lg font-bold text-neutral-900 mb-4">Championing Creators</h4>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We believe in a circular economy of kindness. We supported fellow NFT artists by <b>buying their art</b> and <b>giving it back to our community</b>, ensuring our ecosystem grows through shared support.
                    </p>
                    <p className="text-pink-600 font-bold italic">"Art that heals lives and funds dreams."</p>
                </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-neutral-100">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">❤</span>
                    Warrior Support Fund
                </h3>
                <div className="space-y-6">
                    {WARRIORS.map((warrior, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                            <div>
                                <div className="font-bold text-neutral-900">{warrior.name}</div>
                                <div className="text-xs text-neutral-500 uppercase tracking-wider">{warrior.condition}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-black text-pink-600">{warrior.amount}</div>
                                <div className="text-[10px] text-neutral-400 font-bold uppercase">Direct Aid</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAUSES.map((cause, i) => (
                <div key={i} className="bg-white/60 p-8 rounded-3xl border border-neutral-100">
                    <div className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">{cause.note}</div>
                    <div className="text-xl font-bold text-neutral-900 mb-4">{cause.name}</div>
                    <div className="text-2xl font-black text-neutral-700">{cause.amount}</div>
                </div>
            ))}
        </div>

        <div className="mt-24 text-center">
            <div className="bg-neutral-900 rounded-[2.5rem] p-12 text-white max-w-4xl mx-auto overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/10 to-transparent pointer-events-none"></div>
                <h4 className="text-3xl font-serif font-bold mb-4 italic">"I’d rather fail at something that matters than succeed at something that doesn't."</h4>
                <p className="text-neutral-400 font-medium">Andreia — Founder, Tutti Frutti Women</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
