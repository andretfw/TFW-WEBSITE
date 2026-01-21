
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="font-extrabold text-2xl tracking-tight">TUTTI FRUTTI</span>
            </div>
            <p className="max-w-sm text-neutral-400 leading-relaxed mb-8">
              Empowering women and supporting cancer warriors through art and blockchain technology. The evolution continues on Base.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'Discord', 'Instagram', 'OpenSea'].map(platform => (
                 <a key={platform} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-colors text-xs font-bold">
                    {platform[0]}
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-neutral-400 font-medium">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">The Archive</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Base Drop</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Philanthropy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-neutral-400 font-medium">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Verify Collection</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Brand Assets</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2024 Tutti Frutti Women. All rights reserved.</p>
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
