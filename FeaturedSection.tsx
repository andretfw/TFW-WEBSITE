import React from 'react';

// IMPORTING YOUR EXACT FILES (Case Sensitive!)
import bookImg from './book.png';
import timesSquareImg from './TIMES SQUARE.JPG'; 
import nftNycImg from './NFT NYC.jpg';           
import webxImg from './WEBX TFW.JPG';            
import nfcLisbonImg from './NFC LISBON.jpeg';    // New addition!

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
                 alt="One Mission: Thrive Book Cover" 
                 className="w-full h-full object-cover rounded-r-2xl rounded-l-md shadow-lg" 
               />
               <div className="absolute top-0 left-0 w-2 h-full bg-white/20 rounded-l-md"></div>
            </div>
            <div className="absolute bottom-0 w-60 h-4 bg-black/20 blur-xl rounded-full"></div>
          </div>

          {/* Book Details */}
          <div className="w-full md:w-2/3 text-center md:text-left">
             <div className="inline-block px-4 py-2 bg-purple-50 rounded-full text-xs font-bold text-purple-600 uppercase tracking-widest mb-6">
                Published Author
             </div>
             
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
               One Mission: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Thrive</span>
             </h2>
             
             <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
               Created with <strong>80+ cancer survivors</strong>, this book is designed to share their empowering messages to the world. It blends their stories of resilience with the beautiful art from our genesis collection.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <a 
                 href="https://www.amazon.com/One-Mission-Tutti-Frutti-Women/dp/B0CFCYW6NH"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-purple-600 transition-all shadow-lg flex items-center justify-center"
               >
                 Get a Copy
               </a>
               
               <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:border-purple-200 hover:text-purple-600 transition-all">
                 Read Preview
               </button>
             </div>
          </div>
        </div>


        {/* --- PART 2: GLOBAL EVENTS (4 Columns) --- */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Seen Around the World</h2>
           <p className="text-slate-500">From Times Square to Lisbon, we take our mission everywhere.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
           {/* Event 1: Times Square */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img src={timesSquareImg} alt="Times Square Billboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-1">New York</p>
                 <h3 className="text-white text-xl font-bold">Times Square</h3>
              </div>
           </div>

           {/* Event 2: NFT NYC */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img src={nftNycImg} alt="NFT NYC Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-1">Conference</p>
                 <h3 className="text-white text-xl font-bold">NFT NYC</h3>
              </div>
           </div>

           {/* Event 3: WebX Asia */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img src={webxImg} alt="WebX Conference" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-1">Global</p>
                 <h3 className="text-white text-xl font-bold">WebX Asia</h3>
              </div>
           </div>

           {/* Event 4: NFC Lisbon */}
           <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img src={nfcLisbonImg} alt="NFC Lisbon Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Portugal</p>
                 <h3 className="text-white text-xl font-bold">NFC Lisbon</h3>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
