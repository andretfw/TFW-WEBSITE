import React from 'react';

// IMPORT YOUR PARTNER LOGOS (Exact Filenames)
import ethWomenLogo from './Tutti Frutti Women - ETHWOMEN 2024 COMMUNITY PARTNER GRAPHIC.png';
import futuristLogo from './Tutti Frutti Women- Futurist 2024 COMMUNITY PARTNER GRAPHIC.png';
import webxLogo from './WEBX TFW.JPG';
import nftNycLogo from './NFTNYC2024.PNG';

const PartnersAndTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: PROUD PARTNERS (Replaces the fake 15k stat) --- */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-4 block">
            Trusted By Global Communities
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-12">
            Proud <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Community Partners</span>
          </h2>

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity">
            
            {/* Partner 1: ETHWomen */}
            <div className="w-40 md:w-52 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <img src={ethWomenLogo} alt="ETHWomen Partner" className="w-full h-auto object-contain" />
            </div>

            {/* Partner 2: Futurist */}
            <div className="w-40 md:w-52 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <img src={futuristLogo} alt="Futurist Conference" className="w-full h-auto object-contain" />
            </div>

            {/* Partner 3: WebX */}
            <div className="w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <img src={webxLogo} alt="WebX Asia" className="w-full h-auto object-contain rounded-xl" />
            </div>

            {/* Partner 4: NFT NYC */}
            <div className="w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <img src={nftNycLogo} alt="NFT NYC" className="w-full h-auto object-contain" />
            </div>

          </div>
        </div>

        {/* --- SECTION 2: TESTIMONIALS (Real Voices) --- */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <svg className="w-12 h-12 text-purple-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.054 15.398 14.664 17.513 14.664C18.423 14.664 19.333 15.119 20.016 15.847V9.753C20.016 7.425 18.059 5.515 15.656 5.515C13.882 5.515 12.336 6.743 11.699 8.245C10.653 6.699 8.788 5.515 6.604 5.515C4.201 5.515 2.244 7.425 2.244 9.753V15.847C2.927 15.119 3.837 14.664 4.747 14.664C6.862 14.664 8.243 16.054 8.243 18L8.243 21L14.017 21Z" />
            </svg>
            
            <p className="text-2xl md:text-3xl font-serif text-slate-700 leading-relaxed mb-8">
              "This community isn't just about art; it's about healing. Finding TFW gave me a space to share my story and connect with other survivors in a way I never thought possible."
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900">Sarah M.</div>
                <div className="text-purple-600 text-sm font-bold uppercase tracking-wider">Community Member</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersAndTestimonials;
