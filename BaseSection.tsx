import React from 'react';

interface BaseSectionProps {
  walletAddress: string | null;
  totalClaimable: number;
  status: string;
  isLoading: boolean;
  onConnect: (action: 'claim' | 'mint') => void;
}

const baseEvolutionImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/14.png"; 
const backgroundVibeImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/16.png";

const BaseSection: React.FC<BaseSectionProps> = ({ walletAddress, totalClaimable, status, isLoading, onConnect }) => {

  // --- UNIVERSAL SAFETY HANDLER ---
  const handleUniversalConnect = async (action: 'claim' | 'mint') => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const dappUrl = "tuttifruttiwomen.art"; 

    // 1. Mobile Deep Link: Forces standard browsers to open MetaMask
    if (isMobile && !window.ethereum) {
      window.location.href = `https://metamask.app.link/dapp/${dappUrl}`;
      return;
    }

    // 2. Desktop Guard: Ensure a wallet is present
    if (!window.ethereum) {
      alert("Please install a wallet like MetaMask to proceed.");
      return;
    }

    try {
      // 3. Network Guard: Force Switch to Base (Chain ID 8453)
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const baseChainIdHex = '0x2105'; // Hex for 8453

      if (chainId !== baseChainIdHex) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: baseChainIdHex }],
          });
        } catch (switchError: any) {
          // Add Base network if it's missing from their wallet
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: baseChainIdHex,
                chainName: 'Base Mainnet',
                nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
                rpcUrls: ['https://mainnet.base.org'],
                blockExplorerUrls: ['https://basescan.org']
              }],
            });
          }
        }
      }

      // 4. Proceed to your actual Mint/Claim logic
      onConnect(action);

    } catch (error) {
      console.error("Connection cancelled by user");
    }
  };

  return (
    <section id="claim" className="py-24 bg-white flex justify-center px-4 scroll-mt-20">
      <div className="max-w-7xl w-full bg-[#0052FF] rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl shadow-blue-600/40">
        
        {/* Background Image - Restored */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
            <img src={backgroundVibeImage} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-lg px-3 py-1 mb-8 backdrop-blur-sm">
                    <span className="bg-white text-[#0052FF] text-xs font-bold px-1.5 rounded">B</span>
                    <span className="text-white text-xs font-bold tracking-widest uppercase">Regenerated on Base</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 drop-shadow-md text-left">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200">
                        Tutti Frutti
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200">
                        Women
                    </span>
                    <span className="text-white"> on</span> 
                    <br />
                    <span className="text-white">Base</span>
                </h2>

                <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg font-medium text-left">
                    We aren't starting over; we're evolving. 40% of every mint proceeds goes directly into the Dream Fund at Tutti Cancer Warriors NGO.
                </p>

                {/* Status Message Display - Necessary so users see the Scanning info */}
                {status && (
                  <div className="mb-8 p-4 bg-blue-900/40 border border-white/20 rounded-2xl text-sm font-mono text-blue-100 animate-pulse">
                    {status}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-blue-900/40 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-blue-900/50 transition-colors">
                        <div className="text-4xl font-bold text-white mb-1">{totalClaimable > 0 ? totalClaimable : '1,387'}</div>
                        <div className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-4">OG Holders (1:1)</div>
                        <button 
                          onClick={() => handleUniversalConnect('claim')} 
                          disabled={isLoading}
                          className="w-full py-3 bg-white text-[#0052FF] rounded-xl font-bold transition-all transform active:scale-95 disabled:opacity-50"
                        >
                          {isLoading ? 'Scanning...' : 'Claim on Base'}
                        </button>
                    </div>

                    <div className="bg-blue-900/40 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-blue-900/50 transition-colors">
                        <div className="text-4xl font-bold text-white mb-1">613</div>
                        <div className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-4">Public Mint</div>
                        <button 
                          onClick={() => handleUniversalConnect('mint')} 
                          className="w-full py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0052FF] rounded-xl font-bold transition-all transform active:scale-95"
                        >
                          Mint on Base
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center">
                <div className="relative w-full max-w-sm">
                    {/* Art Image - Restored */}
                    <div className="relative z-10 bg-slate-950 rounded-[3rem] border-4 border-white/20 overflow-hidden transform rotate-2">
                        <img src={baseEvolutionImage} className="w-full h-full object-cover" alt="Art" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BaseSection;
