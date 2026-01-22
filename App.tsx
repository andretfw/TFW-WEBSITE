import { useState } from 'react';
import { ethers } from 'ethers';
import Navigation from './Navigation';
import Hero from './Hero';
import HistorySection from './HistorySection';
import FeaturedSection from './FeaturedSection';
import ImpactSection from './ImpactSection';
import LegacyArchive from './LegacyArchive';
import BaseSection from './BaseSection';
import PartnersAndTestimonials from './PartnersAndTestimonials';
import Footer from './Footer';

// --- CONFIGURATION ---
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

function App() {
  // Global State for Wallet
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalClaimable, setTotalClaimable] = useState<number>(0);

  // --- 1. CONNECT WALLET LOGIC ---
  const connectWallet = async (action: 'claim' | 'mint') => {
    // A. Connect to MetaMask
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const address = accounts[0];
        setWalletAddress(address);
        
        // B. If Action is Claim -> Check Holdings immediately
        if (action === 'claim') {
            checkHoldings(address);
        } else {
            // For minting logic later
            alert("Ready to mint on Base!");
        }

        // C. Scroll to the Base Section so they can see the result
        const element = document.getElementById('claim');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

      } catch (error) {
        console.error(error);
        setStatus('Connection failed.');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  // --- 2. CHECK HOLDINGS LOGIC ---
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
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navigation />
      
      {/* Pass the Smart Connect Function to Hero */}
      <Hero onConnect={connectWallet} />
      
      <HistorySection />
      <ImpactSection />
      <LegacyArchive />

      {/* Pass the Data and Connect Function to Base Section */}
      <BaseSection 
         walletAddress={walletAddress}
         totalClaimable={totalClaimable}
         status={status}
         isLoading={isLoading}
         onConnect={connectWallet}
      />
      
      <FeaturedSection />
      <PartnersAndTestimonials />
      <Footer />
    </div>
  );
}

export default App;
