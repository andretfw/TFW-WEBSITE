
import React from 'react';
import { Testimonial, ImpactStat, Partner, Achievement, WarriorSupport } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Dave",
    role: "CamelsNFT & $TURTLE Community",
    content: "I support Tutti Frutti Women because it blends high quality art with a strong commitment to social good. Andreia's vision fosters a community centered around making a positive impact. An exemplary project in the NFT space.",
    avatar: "https://picsum.photos/seed/cryptodave/100/100",
    xUrl: "https://x.com/Cryptodaave"
  },
  {
    id: '2',
    name: "Susan",
    role: "SusanJean.art | Survivor",
    content: "They've been so supportive of me through all my many treatments and continue to celebrate with me in my survivorship. I'm filled with gratitude for the continuous love.",
    avatar: "https://picsum.photos/seed/susanjean/100/100",
    xUrl: "https://x.com/susanjeanart"
  },
  {
    id: '3',
    name: "SABR",
    role: "0XPPL Community",
    content: "TFW has supported warriors with every mint, helping not only warriors but also those affected by natural disasters. Andreia has shown up every day for 3 years. This project doesn't take, it only gives.",
    avatar: "https://picsum.photos/seed/sabr/100/100",
    xUrl: "https://x.com/Sabrx0"
  },
  {
    id: '4',
    name: "Daniel Munson",
    role: "Founder of Shiba Soap",
    content: "I have close ties with multiple family members, this cause definitely resonates well. TFW is a beautiful way to be a champion for these amazing warriors.",
    avatar: "https://picsum.photos/seed/danielmunson/100/100",
    xUrl: "https://x.com/DanielMunson2"
  },
  {
    id: '5',
    name: "Angela",
    role: "TON Foundation",
    content: "The Tutti Frutti Women community holds a special place in my heart. Andreia's mission is deeply personal for so many of us. A beacon of strength and compassion.",
    avatar: "https://picsum.photos/seed/moontrips/100/100",
    xUrl: "https://x.com/moontripss"
  },
  {
    id: '6',
    name: "Malek",
    role: "Personal Development Coach",
    content: "Supporting TFW is deeply important because it empowers and educates cancer warriors, offering them hope and solidarity. I believe I am making a lasting difference here.",
    avatar: "https://picsum.photos/seed/malek/100/100",
    xUrl: "https://x.com/LevellerEdge"
  }
];

export const WARRIORS: WarriorSupport[] = [
  { name: "David", amount: "0.12 ETH + $625", condition: "Myeloma Warrior" },
  { name: "Susan", amount: "366 Tezos", condition: "Breast Cancer Survivor" },
  { name: "Marie", amount: "$330", condition: "Incredible Warrior" },
  { name: "Dona", amount: "0.105 ETH", condition: "Breast Cancer Survivor" },
  { name: "Rigel", amount: "$150", condition: "Colon Cancer Warrior" },
  { name: "Orion", amount: "$200", condition: "Osteosarcoma (Child Warrior)" }
];

export const CAUSES = [
  { name: "Mercy Chefs", amount: "$680", note: "NC Flood Victims" },
  { name: "World Central Kitchen", amount: "$300", note: "Spain Flood Victims" },
  { name: "LADS", amount: "300 $BONE", note: "Tree Planting" },
  { name: "MacyFest", amount: "500 $BONE", note: "Concert for Kids" }
];

export const IMPACT_STATS: ImpactStat[] = [
  { label: "OG Holders", value: "1,387", description: "Legacy 1:1 claims reserved for our original fam." },
  { label: "Public Mint", value: "613", description: "Open for anyone to join the mission." },
  { label: "Dream Fund", value: "40%", description: "Committed to Tutti Cancer Warriors NGO." },
  { label: "History", value: "3 Years", description: "Of financial and awareness impact for warriors." }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2023",
    title: "The Genesis",
    description: "Minted on Ethereum during the SVB collapse. Published 'One Mission: Thrive' with 80+ survivors.",
    featuredIn: ["Times Square", "One Mission: Thrive Book"]
  },
  {
    year: "2024",
    title: "Global Multi-Chain",
    description: "Expanded to Shibarium. Displayed on Times Square NYC. Established key global presence.",
    featuredIn: ["NFC Summit Lisbon", "NFT NYC", "WebX Tokyo", "Times Square NYC", "Blockchain Futurist"]
  },
  {
    year: "2025",
    title: "The Recognition",
    description: "Continued community partnership with Blockchain Futurist and major art exhibitions.",
    featuredIn: ["Blockchain Futurist", "NFT NYC", "BitBasel Miami"]
  },
  {
    year: "2026",
    title: "Base Regeneration",
    description: "Transitioning to a 2,000 supply collection on Base to fund Global Dream Support Grants.",
    featuredIn: ["Base Showcase", "NGO TCW Official"]
  }
];

export const PARTNERS: Partner[] = [
  { name: "Blockchain Futurist", logo: "https://picsum.photos/seed/futurist/200/80" },
  { name: "It's Toronto", logo: "https://picsum.photos/seed/toronto/200/80" },
  { name: "Its Woman", logo: "https://picsum.photos/seed/woman/200/80" },
  { name: "The Shib", logo: "https://picsum.photos/seed/shib/200/80" }
];
