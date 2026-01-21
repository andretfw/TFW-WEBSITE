import React from 'react';
// IMPORT THE LOGO
import logo from './tfw logo.png';

const Footer: React.FC = () => {
  return (
    // CHANGED: bg-neutral-900 -> bg-[#0052FF] (Base Blue)
    <footer className="bg-[#0052FF] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* --- COLUMN 1: BRAND --- */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* CHANGED: Replaced Pink Circle with Your Logo */}
              <img 
                src={logo} 
                alt="TFW Logo" 
                className="h-16 w-auto object-contain brightness-0 invert" 
                // 'brightness-0 invert' makes the logo purely white
              />
            </div>
            {/* CHANGED: text-neutral-400 -> text-blue-100 */}
            <p className="max-w-sm text-blue-100 leading-relaxed mb-8">
              Empowering women and supporting cancer warriors through art and blockchain technology. The evolution continues on Base.
            </p>
            
            {/* CHANGED: Social Links (Only X) */}
            <div className="flex gap-4">
               <a 
                 href="https://x.com/tfw_nft" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#0052FF] transition-all text-white"
               >
                 {/* X Logo Icon */}
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                 </svg>
               </a>
            </div>
          </div>
          
          {/* --- COLUMN 2: QUICK LINKS --- */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-blue-100 font-medium">
              {/* CHANGED: hover:text-pink-500 -> hover:text-white */}
              <li><a href="#about" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#archive" className="hover:text-white transition-colors">The Archive</a></li>
              <li><a href="#base" className="hover:text-white transition-colors">Base Drop</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Philanthropy</a></li>
            </ul>
          </div>

          {/* --- COLUMN 3: RESOURCES --- */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-blue-100 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Verify Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Assets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>© {new Date().getFullYear()} Tutti Frutti Women. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
