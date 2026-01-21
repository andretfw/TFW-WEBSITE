
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  xUrl: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
  featuredIn: string[];
}

export interface WarriorSupport {
  name: string;
  amount: string;
  condition: string;
}