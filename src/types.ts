export interface EscortProfile {
  id: string;
  name: string;
  age: number;
  height: string; // e.g. "5'5\""
  measurements: string; // e.g. "34-26-36"
  ethnicity: string;
  languages: string[];
  image: string;
  rating: number;
  tags: string[];
  about: string;
  category: string;
  bodyType: string;
  location: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Sparkles' | 'Star';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
