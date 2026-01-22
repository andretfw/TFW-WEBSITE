import React, { useState } from 'react';
import { ethers } from 'ethers';

// --- IMAGE CONFIGURATION ---
const baseEvolutionImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/14.png"; 
const backgroundVibeImage = "https://raw.githubusercontent.com/andretfw/TFW-IMAGES/main/16.png";

// --- CONTRACT CONFIGURATION ---
const CONTRACTS = {
  ETH: {
    address: '0x7fB6Bb8e89e2A0C84Ab78Cd103d85ade167f2d52',
    rpc: 'https://eth.llamarpc.com', 
  },
  SHIB: {
    address: '0xCd0d5af86FCeAe95feedB2e53E6182acbD063c3f',
    rpc: 'https://www.shibrpc.com', 
  }
};

const ERC721_ABI = [
  "function balanceOf(address owner) view returns (uint256)"
];

const BaseSection: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalClaimable, setTotalClaimable] = useState<number>(0);

  const connectWallet = async (action: 'claim' | 'mint') => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const address = accounts[0];
        setWalletAddress(address);
        
        if (action === 'claim') {
            checkHoldings(address);
        } else {
            alert("Ready to mint on Base!");
        }
      } catch (error) {
        console.error(error);
        setStatus('Connection failed.');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const checkHoldings = async (address: string) => {
    setIsLoading(true);
    setStatus('Scanning Ethereum and Shibarium...');
    setTotalClaimable(0);

    try {
        const ethProvider = new ethers.JsonRpcProvider(CONTRACTS.ETH.rpc);
        const shibProvider = new ethers.JsonRpcProvider(CONTRACTS.SHIB.rpc);

        const ethContract = new ethers.Contract(CONTRACTS.ETH.address, ERC721_ABI, ethProvider);
        const shibContract = new ethers.Contract(CONTRACTS.SHIB.address, ERC721_ABI, shibProvider);

        const [ethBalance, shibBalance] = await Promise.all([
            ethContract.balanceOf(address).catch(() => BigInt(0)),
            shibContract.balanceOf(address).catch(() => BigInt(0))
        ]);

        const total = Number(ethBalance) + Number(shibBalance);
        setTotalClaimable(total);
        setIsLoading(false);

        if (total > 0) {
            setStatus(`Success! Found ${Number(ethBalance)} on ETH and ${Number(shibBalance)} on Shibarium.`);
        } else {
            setStatus(`No TFW NFTs found on this wallet.`);
        }

    } catch (error) {
        console.error("Error checking holdings:", error);
        setStatus('Error reading blockchain. Please try again.');
        setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white flex justify-center px-4">
      <div className="max-w-7xl w-full bg-slate-950 rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl">
        
        {/* --- BACKGROUND VIBE IMAGE --- */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-soft-light pointer-events-none">
            <img src={backgroundVibeImage} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Additional Blue Glow for contrast */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* LEFT SIDE: TEXT & BUTTONS */}
            <div>
                <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 rounded-lg px-3 py-1 mb-8 backdrop-blur-sm">
                    <span className="bg-blue-600 text-white text-xs font-bold px-1.5 rounded">B</span>
                    <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">Regenerated on Base</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 drop-shadow-lg">
                    Tutti Frutti <br />
                    <span className="text-[#0052FF]">Women on Base</span>
                </h2>

                <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-lg">
                    We aren't starting over; we're evolving. 40% of every mint proceeds goes directly into the Dream Fund at Tutti Cancer Warriors NGO.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* CLAIM CARD */}
                    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl hover:border-blue-500/50 transition-colors relative">
                        <div className="text-4xl font-bold text-white mb-1">
                            {totalClaimable > 0 ? totalClaimable : '1,387'}
                        </div>
                        <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                            {walletAddress ? 'Your Eligible Claims' : 'OG Holders (1:1)'}
                        </div>
                        <p className="text-slate-400 text-xs mb-6 h-10">
                            {status || "Reserved for our legacy community from ETH & Shibarium."}
                        </p>
                        
                        <button 
                            onClick={() => connectWallet('claim')}
                            disabled={isLoading}
                            className={`w-full py-3 text-white rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-blue-900/20
                                ${isLoading ? 'bg-slate-700 cursor-wait' : 'bg-[#0052FF] hover:bg-blue-600'}
                            `}
                        >
                            {isLoading ? 'Scanning...' : 'Claim on Base'}
                        </button>
                    </div>

                    {/* MINT CARD */}
                    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl hover:border-blue-500/50 transition-colors">
                        <div className="text-4xl font-bold text-white mb-1">613</div>
                        <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">Public Mint</div>
                        <p className="text-slate-400 text-xs mb-6 h-10">Open to anyone. Join our mission and fund global grants.</p>
                        
                        <button 
                            onClick={() => connectWallet('mint')}
                            className="w-full py-3 bg-transparent border border-[#0052FF] text-[#0052FF] hover:bg-[#0052FF] hover:text-white rounded-xl font-bold transition-all transform active:scale-95"
                        >
                            Mint on Base
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: ART CARD */}
            <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-80 md:w-96 aspect-square rotate-3 hover:rotate-0 transition-all duration-700">
                    
                    {/* IMAGE BASE (Updated to your Link) */}
                    <img 
                      src={baseEvolutionImage} 
                      alt="TFW Base Edition" 
                      className="rounded-[2.5rem] shadow-2xl border-4 border-slate-800/50 object-cover w-full h-full brightness-50" 
                    />
                    
                    {/* TEXT OVERLAY */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                        <div className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2">Base Evolution</div>
                        <h3 className="font-serif text-5xl md:text-6xl text-white drop-shadow-xl italic leading-tight">
                            Art that <br/> heals <br/> lives.
                        </h3>
                    </div>
                </div>
                
                {/* Decorative Back Card */}
                <div className="absolute top-4 right-4 w-80 md:w-96 aspect-square bg-slate-800 rounded-[2.5rem] -z-10 -rotate-6 opacity-60"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BaseSection;
