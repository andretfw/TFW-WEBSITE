import React from 'react';

const Hero: React.FC = () => {
  
  // --- SCROLL LOGIC ---
  const scrollToClaim = () => {
    const element = document.getElementById('claim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: 'https://x.com/tfw_nft',
      color: 'hover:text-[#0052FF]'
    }
  ];

  return (
    // Updated padding-top to pt-32 to ensure Badge is visible below Navigation
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden bg-white">
      
      {/* BACKGROUND BLOBS: Purple (Logo) + Blue (Base) */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#0052FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge: Increased visibility */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 backdrop-blur-md border border-blue-200 rounded-full text-[#0052FF] text-[10px] font-black mb-8 shadow-sm tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052FF]"></span>
          </span>
          Now Minting 2,000 on Base
        </div>
        
        {/* HEADLINE */}
        <h1 className="text-6xl md:text-9xl font-serif font-bold text-slate-900 leading-tight mb-8">
          {/* PURPLE GRADIENT for Brand Name */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
            Tutti Frutti
          </span>
          <br />
          {/* BLUE for Network */}
          <span className="text-[#0052FF] underline decoration-blue-200 decoration-4 underline-offset-8">
            Women
          </span>
          .
        </h1>
        
        <p className="max-w-4xl mx-auto text-xl md:text-3xl text-slate-600 mb-12 leading-relaxed font-medium">
          Archiving legacy pieces on Ethereum and Shibarium to fund <b>Global Dream Support Grants</b> through a refined collection on Base.
        </p>

        {/* BUTTONS: Updated with Claim Legacy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          
          {/* Mint Button */}
          <button className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-bold rounded-3xl shadow-2xl shadow-purple-500/30 hover:shadow-pink-500/30 hover:-translate-y-1 transition-all">
            Mint now
          </button>
          
          {/* Claim Button (Replaces Founder Article) */}
          <button 
            onClick={scrollToClaim}
            className="w-full sm:w-auto px-12 py-6 bg-white text-slate-900 border border-slate-200 text-xl font-bold rounded-3xl hover:border-[#0052FF] hover:text-[#0052FF] hover:shadow-lg transition-all flex items-center justify-center cursor-pointer"
          >
            Claim Legacy
          </button>
        </div>

        {/* Social Profiles */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Follow our journey</span>
          <div className="flex items-center gap-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-300 ${social.color} transition-all duration-300 transform hover:scale-150`}
                title={`Visit ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-blue-900/5">
                <div className="text-4xl font-bold text-slate-900 mb-1">1,387</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">For OG Holders (1:1)</div>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-blue-900/5">
                <div className="text-4xl font-bold text-slate-900 mb-1">613</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Public (Anyone Mint)</div>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-blue-900/5">
                <div className="text-4xl font-bold text-slate-900 mb-1">40%</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">To Dream Fund</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
