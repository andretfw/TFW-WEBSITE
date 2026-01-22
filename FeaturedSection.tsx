import React from 'react';

// IMPORT YOUR REAL IMAGES
// Note: Filenames must match EXACTLY (including spaces and .JPG vs .jpg)
import bookImg from './book.png';
import timesSquareImg from './TIMES SQUARE.JPG';
import nftNycImg from './NFT NYC.jpg';
import tokyoImg from './TFW TOKYO.jpg';
import webxImg from './WEBX TFW.JPG';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PART 1: THE BOOK --- */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-purple-900/5 border border-purple-100 mb-24 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          
          {/* Decorative Purple Blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/3 -translate-y-1/3"></div>

          {/* Book Image */}
          <div className="relative group w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 aspect-[2/3] transform group-hover:-rotate-2 transition-all duration-500 shadow-2xl">
               <img 
                 src={bookImg} 
                 alt="Tutti Frutti Women Book" 
                 className="w-full h-full object-cover rounded-r-2xl rounded-l-md shadow-lg" 
               />
               {/* Shine effect on spine */}
               <div className="absolute top-0 left-0 w-2 h-full bg-white/20 rounded-l-md"></div>
            </div>
            {/* Shadow effect under book */}
            <div className="absolute bottom-0 w-60 h-4 bg-black/20 blur-xl rounded-full"></div>
          </div>

          {/* Book Details */}
          <div className="w-full md:w-2/3 text-center md:text-left">
             <div className="inline-block px-4 py-2 bg-purple-50 rounded-full text-xs font-bold text-purple-600 uppercase tracking-widest mb-6">
                Published Author
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
               Tutti Frutti Women: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">The Book</span>
             </h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
               A physical testament to our journey. More than just art, this book documents the stories, the survivors, and the resilience of the community we built together.
             </p>
             <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-purple-600 transition-all shadow-lg">
               Get a Copy
             </button>
          </div>
        </div>


        {/* --- PART 2: GLOBAL EVENTS --- */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Seen Around the World</h2>
           <p className="text-slate-500">From Times Square to Tokyo, we take our mission global.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
           {/* Event 1: Times Square */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={timesSquareImg} 
                alt="Times Square Billboard" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-1">New York</p>
                 <h3 className="text-white text-xl font-bold">Times Square</h3>
              </div>
           </div>

           {/* Event 2: NFT NYC */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={nftNycImg} 
                alt="NFT NYC Event" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-1">Conference</p>
                 <h3 className="text-white text-xl font-bold">NFT NYC</h3>
              </div>
           </div>

           {/* Event 3: Tokyo */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={tokyoImg} 
                alt="Tokyo Exhibition" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-red-300 text-xs font-bold uppercase tracking-widest mb-1">Japan</p>
                 <h3 className="text-white text-xl font-bold">TFW Tokyo</h3>
              </div>
           </div>

           {/* Event 4: WebX */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={webxImg} 
                alt="WebX Conference" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-1">Global</p>
                 <h3 className="text-white text-xl font-bold">WebX Asia</h3>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
