export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
  timestamp: number;
}

export interface SectionProps {
  id: string;
  className?: string;
}

export interface MetricData {
  subject: string;
  Corporate: number;
  Independent: number;
  fullMark: number;
}
