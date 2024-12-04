export interface CaseStudyType {
  title: string;
  description: string;
  icon: React.ReactNode;
  preview: string;
  type: string;
  industry?: string;
}

export type Theme = 
  | 'business'
  | 'technical'
  | 'medical'
  | 'academic'
  | 'research'
  | 'consulting';

export interface GenerateCaseStudyParams {
  plain_text: string;
  theme?: Theme;
  sections?: number;
}

export interface TaskStatus {
  task_id: string;
  task_status: 'FAILURE' | 'PENDING' | 'RECEIVED' | 'RETRY' | 'REVOKED' | 'STARTED' | 'SUCCESS';
  task_result?: any;
  task_info: {
    progress: number;
  };
}