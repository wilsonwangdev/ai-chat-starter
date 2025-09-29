import { describe, it, expect } from 'vitest';
import type { Message, ChatSession, AIProvider, ChatConfig, MessageStatus } from './index.js';

describe('Type definitions', () => {
  it('should define Message interface correctly', () => {
    const message: Message = {
      id: 'test-id',
      content: 'Hello world',
      role: 'user',
      timestamp: new Date(),
      model: 'gpt-4',
    };

    expect(message.id).toBe('test-id');
    expect(message.content).toBe('Hello world');
    expect(message.role).toBe('user');
    expect(message.timestamp).toBeInstanceOf(Date);
    expect(message.model).toBe('gpt-4');
  });

  it('should define ChatSession interface correctly', () => {
    const session: ChatSession = {
      id: 'session-1',
      title: 'Test Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    expect(session.id).toBe('session-1');
    expect(session.title).toBe('Test Chat');
    expect(Array.isArray(session.messages)).toBe(true);
    expect(session.createdAt).toBeInstanceOf(Date);
    expect(session.updatedAt).toBeInstanceOf(Date);
  });

  it('should define AIProvider interface correctly', () => {
    const provider: AIProvider = {
      id: 'openai',
      name: 'OpenAI',
      models: ['gpt-4', 'gpt-3.5-turbo'],
      enabled: true,
    };

    expect(provider.id).toBe('openai');
    expect(provider.name).toBe('OpenAI');
    expect(Array.isArray(provider.models)).toBe(true);
    expect(provider.enabled).toBe(true);
  });

  it('should define ChatConfig interface correctly', () => {
    const config: ChatConfig = {
      model: 'gpt-4',
      provider: 'openai',
      temperature: 0.7,
      maxTokens: 2048,
    };

    expect(config.model).toBe('gpt-4');
    expect(config.provider).toBe('openai');
    expect(config.temperature).toBe(0.7);
    expect(config.maxTokens).toBe(2048);
  });

  it('should define MessageStatus type correctly', () => {
    const statuses: MessageStatus[] = ['sending', 'sent', 'error'];

    expect(statuses).toContain('sending');
    expect(statuses).toContain('sent');
    expect(statuses).toContain('error');
  });

  it('should handle Message with string timestamp', () => {
    const messageWithStringTimestamp: Message = {
      id: 'test-id',
      content: 'Hello world',
      role: 'assistant',
      timestamp: '2023-01-01T00:00:00.000Z',
    };

    expect(typeof messageWithStringTimestamp.timestamp).toBe('string');
  });
});
