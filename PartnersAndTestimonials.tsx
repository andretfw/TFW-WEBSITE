import React from 'react';

const PartnersAndTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* The "15k Community Members" section has been removed here.
           No logos have been added. 
        */}

        {/* --- TESTIMONIALS --- */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 relative border border-slate-100 shadow-xl shadow-purple-900/5 mt-12">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Quote Icon */}
            <svg className="w-12 h-12 text-purple-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.054 15.398 14.664 17.513 14.664C18.423 14.664 19.333 15.119 20.016 15.847V9.753C20.016 7.425 18.059 5.515 15.656 5.515C13.882 5.515 12.336 6.743 11.699 8.245C10.653 6.699 8.788 5.515 6.604 5.515C4.201 5.515 2.244 7.425 2.244 9.753V15.847C2.927 15.119 3.837 14.664 4.747 14.664C6.862 14.664 8.243 16.054 8.243 18L8.243 21L14.017 21Z" />
            </svg>
            
            <h2 className="text-2xl md:text-4xl font-serif text-slate-800 leading-relaxed mb-10">
              "This community isn't just about art; it's about healing. Finding TFW gave me a space to share my story and connect with other survivors in a way I never thought possible."
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                T
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900 text-lg">TFW Community</div>
                <div className="text-purple-600 text-xs font-bold uppercase tracking-widest">Verified Holder</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersAndTestimonials;
