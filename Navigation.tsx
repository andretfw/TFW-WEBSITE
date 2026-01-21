import React, { useState, useEffect } from 'react';

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

  const connectWallet = async () => {
    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      alert('MetaMask is not installed. Please install it to use this feature!');
      return;
    }

    try {
      // 1. Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const userAccount = accounts[0];

      // 2. Check Chain ID (109 for Shibarium)
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      const targetChainId = '0x6d'; // 109 in hexadecimal

      if (chainId !== targetChainId) {
        try {
          // Try switching to Shibarium
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetChainId }],
          });
        } catch (switchError: any) {
          // If the network is not added to the wallet, add it
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: targetChainId,
                    chainName: 'Shibarium Mainnet',
                    rpcUrls: ['https://www.shibrpc.com'],
                    nativeCurrency: {
                      name: 'BONE',
                      symbol: 'BONE',
                      decimals: 18,
                    },
                    blockExplorerUrls: ['https://shibariumscan.io'],
                  },
                ],
              });
            } catch (addError) {
              console.error('Error adding Shibarium network:', addError);
            }
          } else {
            console.error('Error switching network:', switchError);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* --- LOGO SECTION (Replaces the text) --- */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="/tfw logo.png" 
              alt="tfw logo" 
              className="h-32 w-auto object-contain" 
            />
        </div>
        
        {/* --- MENU & BUTTON SECTION --- */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-600">
          <a href="#about" className="hover:text-pink-600 transition-colors">Our Story</a>
          <a href="#impact" className="hover:text-pink-600 transition-colors">Impact</a>
          <a href="#archive" className="hover:text-pink-600 transition-colors">Archive</a>
          <a href="#base" className="hover:text-pink-600 transition-colors">Base Launch</a>
          
         <button 
            onClick={connectWallet}
            // CHANGED: Pink to Base Blue (#0052FF)
            className={`px-6 py-2.5 rounded-full transition-all font-bold shadow-lg transform hover:-translate-y-0.5 ${
              account 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-[#0052FF] text-white hover:bg-blue-700 shadow-blue-500/30'
            }`}
          >
            {account ? formatAddress(account) : 'Connect Wallet'}
          </button>
        </div>

        <button className="md:hidden text-neutral-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
