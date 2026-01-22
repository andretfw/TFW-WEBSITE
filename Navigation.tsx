import React, { useState, useEffect } from 'react';
import logo from './tfw logo.png'; 

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- NEW: Scroll Function for Base Launch ---
  const scrollToBase = (e: React.MouseEvent) => {
    e.preventDefault(); // Stop default jump
    const element = document.getElementById('claim'); // Looks for the Base section
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const connectWallet = async () => {
    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      alert('MetaMask is not installed. Please install it to use this feature!');
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const userAccount = accounts[0];

      // SHIBARIUM LOGIC
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      const targetChainId = '0x6d'; 

      if (chainId !== targetChainId) {
        try {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetChainId }],
          });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: targetChainId,
                    chainName: 'Shibarium Mainnet',
                    rpcUrls: ['https://www.shibrpc.com'],
                    nativeCurrency: { name: 'BONE', symbol: 'BONE', decimals: 18 },
                    blockExplorerUrls: ['https://shibariumscan.io'],
                  },
                ],
              });
            } catch (addError) {
              console.error('Error adding Shibarium network:', addError);
            }
          }
        }
      }
      setAccount(userAccount);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white/50 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={logo} 
              alt="TFW Logo" 
              className="h-28 w-auto object-contain" 
            />
        </div>
        
        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#about" className="hover:text-[#0052FF] transition-colors">Our Story</a>
          <a href="#impact" className="hover:text-[#0052FF] transition-colors">Impact</a>
          
          {/* ✅ UPDATED: Added onClick to scroll smoothly */}
          <a href="#claim" onClick={scrollToBase} className="hover:text-[#0052FF] transition-colors cursor-pointer">
            Base Launch
          </a>
          
          {/* CONNECT BUTTON */}
          <button 
            onClick={connectWallet}
            className={`px-6 py-2.5 rounded-full transition-all font-bold shadow-lg transform hover:-translate-y-0.5 ${
              account 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-[#0052FF] text-white hover:bg-blue-700 shadow-blue-500/30'
            }`}
          >
            {account ? formatAddress(account) : 'Connect Wallet'}
          </button>
        </div>

        <button className="md:hidden text-slate-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
