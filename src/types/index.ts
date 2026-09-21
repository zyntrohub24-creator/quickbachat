export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

export interface TrustPrinciple {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface FeatureCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  status: 'In Development' | 'Planned Feature';
}

export interface CategoryCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge?: string;
}

export interface PlatformCardItem {
  id: string;
  name: string;
  category: string;
  monogram: string;
  statusBadge: string;
  description: string;
}

export interface PartnerCardItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ContactCardItem {
  id: string;
  title: string;
  emails: string[];
  description: string;
  category: string;
}

export type ConceptTabType = 'comparison' | 'basket' | 'insights';



