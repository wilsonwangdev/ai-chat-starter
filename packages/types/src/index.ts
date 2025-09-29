export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: Date | string;
  model?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AIProvider {
  id: string;
  name: string;
  models: string[];
  enabled: boolean;
}

export interface ChatConfig {
  model: string;
  provider: string;
  temperature?: number;
  maxTokens?: number;
}

export type MessageStatus = 'sending' | 'sent' | 'error';
