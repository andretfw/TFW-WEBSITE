import React from 'react';

const PartnersAndTestimonials: React.FC = () => {
  return (
    // CHANGED: bg-white -> bg-slate-50 (Light Grey contrast)
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Community Voices</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real people, real stories. Hear from the warriors, builders, and collectors who make Tutti Frutti Women what it is today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0052FF] font-bold">D</div>
                <div>
                    <div className="font-bold text-slate-900">Dave</div>
                    <div className="text-xs text-slate-500 uppercase">GameLshift Community</div>
                </div>
             </div>
             <p className="text-slate-600 italic">"I support Tutti Frutti Women because it blends high quality art with a strong commitment to social good. Andreia's vision fosters a community centered around making a positive impact."</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">S</div>
                <div>
                    <div className="font-bold text-slate-900">Susan</div>
                    <div className="text-xs text-slate-500 uppercase">Survivor & Artist</div>
                </div>
             </div>
             <p className="text-slate-600 italic">"They've been so supportive of me through all my many treatments and continue to celebrate with me in my survivorship. I'm filled with gratitude for the continuous love."</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">S</div>
                <div>
                    <div className="font-bold text-slate-900">SABR</div>
                    <div className="text-xs text-slate-500 uppercase">SXPPL Community</div>
                </div>
             </div>
             <p className="text-slate-600 italic">"TFW has supported warriors with every mint. Andreia has shown up every day for 3 years. This project doesn't take, it only gives."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndTestimonials;
