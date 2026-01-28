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

  const handleUniversalConnect = async (action: 'claim' | 'mint') => {
    // 1. CHECK FOR ANY WALLET (MetaMask, Coinbase, etc.)
    if (typeof window.ethereum !== 'undefined') {
      try {
        // 2. FORCE SWITCH TO BASE (Chain ID 8453 / 0x2105)
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== '0x2105') {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x2105' }],
            });
          } catch (switchError: any) {
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0x2105',
                  chainName: 'Base Mainnet',
                  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                  rpcUrls: ['https://mainnet.base.org'],
                  blockExplorerUrls: ['https://basescan.org']
                }],
              });
            }
          }
        }

        // 3. EXECUTE ACTION
        onConnect(action);
      } catch (error) {
        console.error("User rejected or switch failed");
      }
    } else {
      // 4. MOBILE FALLBACK: 
      // Instead of forcing MetaMask, we tell them to use their wallet's browser.
      alert("Please open this website inside your Wallet App's (Coinbase, MetaMask, etc.) internal browser to Mint.");
    }
  };

  return (
    <section id="claim" className="py-24 bg-white flex justify-center px-4 scroll-mt-20">
      <div className="max-w-7xl w-full bg-[#0052FF] rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
            <img src={backgroundVibeImage} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
                    Tutti Frutti Women <br /> on Base
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                    <div className="bg-blue-900/40 p-6 rounded-3xl border border-white/20">
                        <div className="text-4xl font-bold text-white mb-1">{totalClaimable > 0 ? totalClaimable : '1,387'}</div>
                        <div className="text-blue-200 text-xs font-bold uppercase mb-4 tracking-widest">OG Holders (1:1)</div>
                        <button onClick={() => handleUniversalConnect('claim')} className="w-full py-3 bg-white text-[#0052FF] rounded-xl font-bold active:scale-95 transition-all">Claim on Base</button>
                    </div>

                    <div className="bg-blue-900/40 p-6 rounded-3xl border border-white/20">
                        <div className="text-4xl font-bold text-white mb-1">613</div>
                        <div className="text-blue-200 text-xs font-bold uppercase mb-4 tracking-widest">Public Mint</div>
                        <button onClick={() => handleUniversalConnect('mint')} className="w-full py-3 border-2 border-white text-white rounded-xl font-bold active:scale-95 transition-all">Mint on Base</button>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center">
                <div className="relative w-full max-w-sm">
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
