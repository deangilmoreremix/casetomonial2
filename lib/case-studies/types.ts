export interface CaseStudySection {
  title: string;
  content: string;
  type: 'overview' | 'challenge' | 'solution' | 'results' | 'conclusion';
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  sections: CaseStudySection[];
  createdAt: Date;
  updatedAt: Date;
}

export type CaseStudyTemplate = 
  | 'business-impact'
  | 'technical-solution'
  | 'research-findings'
  | 'customer-success'
  | 'product-launch'
  | 'market-analysis';

export interface GenerateCaseStudyOptions {
  template?: CaseStudyTemplate;
  industry?: string;
  targetLength?: number;
  includeMetrics?: boolean;
}