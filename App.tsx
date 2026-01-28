import { useState } from 'react';
import { ethers } from 'ethers';

// --- FIXED IMPORTS: Removed the non-existent '/components/' folder ---
import Navigation from './Navigation';
import Hero from './Hero';
import HistorySection from './HistorySection';
import ImpactSection from './ImpactSection';
import LegacyArchive from './LegacyArchive';
import BaseSection from './BaseSection';
import FeaturedSection from './FeaturedSection';
import PartnersAndTestimonials from './PartnersAndTestimonials';
import Footer from './Footer';

const CONTRACTS = {
  ETH: { address: '0x7fB6Bb8e89e2A0C84Ab78Cd103d85ade167f2d52', rpc: 'https://eth.llamarpc.com' },
  SHIB: { address: '0xCd0d5af86FCeAe95feedB2e53E6182acbD063c3f', rpc: 'https://www.shibrpc.com' },
  BASE: { 
    address: '0x0000000000000000000000000000000000000000', 
    chainId: '0x2105' 
  }
};

const ERC721_ABI = ["function balanceOf(address owner) view returns (uint256)"];
const BASE_ABI = [
  "function claim(uint256 amount) public", 
  "function mint() public payable"
];

function App() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalClaimable, setTotalClaimable] = useState<number>(0);

  const checkHoldings = async (address: string) => {
    try {
      const ethProvider = new ethers.JsonRpcProvider(CONTRACTS.ETH.rpc);
      const shibProvider = new ethers.JsonRpcProvider(CONTRACTS.SHIB.rpc);
      const ethContract = new ethers.Contract(CONTRACTS.ETH.address, ERC721_ABI, ethProvider);
      const shibContract = new ethers.Contract(CONTRACTS.SHIB.address, ERC721_ABI, shibProvider);

      const [ethBal, shibBal] = await Promise.all([
        ethContract.balanceOf(address).catch(() => 0n),
        shibContract.balanceOf(address).catch(() => 0n)
      ]);

      const total = Number(ethBal) + Number(shibBal);
      setTotalClaimable(total);
      return total;
    } catch (err) {
      console.error("Read error:", err);
      return 0;
    }
  };

  const executeBaseAction = async (action: 'claim' | 'mint', amount: number) => {
    setIsLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACTS.BASE.address, BASE_ABI, signer);

      if (action === 'claim') {
        setStatus(`Claiming ${amount} NFTs on Base...`);
        const tx = await contract.claim(amount);
        await tx.wait();
      } else {
        setStatus("Minting on Base...");
        const tx = await contract.mint({ value: ethers.parseEther("0.001") });
        await tx.wait();
      }
      setStatus("Success! Welcome to Base.");
    } catch (err: any) {
      setStatus(err.reason || "Transaction failed.");
    }
    setIsLoading(false);
  };

  const connectWallet = async (action: 'claim' | 'mint') => {
    if (!window.ethereum) return;
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const address = accounts[0];
      setWalletAddress(address);
      const amount = await checkHoldings(address);
      if (action === 'claim' && amount === 0) {
        setStatus("No NFTs found.");
        return;
      }
      await executeBaseAction(action, amount);
    } catch (error) {
      setStatus("Connection failed.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero onConnect={connectWallet} />
      <HistorySection />
      <ImpactSection />
      <LegacyArchive />
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

// THIS LINE WAS MISSING AND CAUSED THE FIRST ERROR
export default App;
