
import React from 'react';

const Hero: React.FC = () => {
  const shareUrl = "https://tuttifruttiwomen.art";
  const shareText = "Tutti Frutti Women: One Mission Thrive. Regenerating 10k into 2k on @base to support cancer warriors. Art that heals.";

  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-pink-100 rounded-full text-pink-600 text-[10px] font-black mb-8 shadow-sm tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          Now Minting 2,000 on Base
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif font-bold text-neutral-900 leading-tight mb-8">
          Tutti Frutti <span className="text-pink-600 underline decoration-orange-300 decoration-4 underline-offset-8">Women</span>.
        </h1>
        
        <p className="max-w-4xl mx-auto text-xl md:text-3xl text-neutral-600 mb-12 leading-relaxed font-medium">
          One Mission: Thrive. Archiving legacy pieces on Ethereum and Shibarium to fund <b>Global Dream Support Grants</b> through a refined collection on Base.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button className="w-full sm:w-auto px-12 py-6 bg-neutral-900 text-white text-xl font-bold rounded-3xl shadow-2xl hover:bg-neutral-800 hover:-translate-y-1 transition-all">
            Mint now
          </button>
          <button className="w-full sm:w-auto px-12 py-6 bg-white text-neutral-900 border border-neutral-200 text-xl font-bold rounded-3xl hover:bg-neutral-50 transition-all">
            Founder's Article
          </button>
        </div>

        {/* Social Sharing */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <span className="text-[10px] font-black tracking-[0.4em] text-neutral-400 uppercase">Spread the awareness</span>
          <div className="flex items-center gap-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-neutral-300 ${social.color} transition-all duration-300 transform hover:scale-150`}
                title={`Share on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-neutral-100 shadow-sm">
                <div className="text-4xl font-bold text-neutral-900 mb-1">1,387</div>
                <div className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">For OG Holders (1:1)</div>
            </div>
            <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-neutral-100 shadow-sm">
                <div className="text-4xl font-bold text-neutral-900 mb-1">613</div>
                <div className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Public (Anyone Mint)</div>
            </div>
            <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-neutral-100 shadow-sm">
                <div className="text-4xl font-bold text-neutral-900 mb-1">40%</div>
                <div className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">To Dream Fund</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
