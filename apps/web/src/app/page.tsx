'use client';

import { useState, useEffect } from 'react';
import { ChatContainer } from '@ai-chat/ui';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date | string;
  model?: string;
}

interface AIProvider {
  id: string;
  name: string;
  enabled: boolean;
  models: string[];
}

export default function Home(): React.ReactElement {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState('gpt-4');
  const [, setProviders] = useState<AIProvider[]>([]);

  // Load available AI providers
  useEffect(() => {
    const loadProviders = async () => {
      try {
        const response = await fetch('/api/providers');
        const data = await response.json();
        setProviders(data.providers);
      } catch (error) {
        console.error('Failed to load providers:', error);
      }
    };
    loadProviders();
  }, []);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          model: currentModel,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      // Convert timestamp string back to Date object
      const messageWithDate = {
        ...data.message,
        timestamp: new Date(data.message.timestamp),
      };
      setMessages((prev) => [...prev, messageWithDate]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen flex flex-col">
      <header className="border-b p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">AI Chat Assistant</h1>
            <p className="text-sm text-muted-foreground">Powered by MSW Mock Service Worker</p>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Model:</label>
            <select
              value={currentModel}
              onChange={(e) => setCurrentModel(e.target.value)}
              className="px-3 py-1 border rounded-md text-sm bg-background"
            >
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              <option value="claude-3">Claude 3</option>
            </select>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <ChatContainer
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>

      {/* Development info */}
      <footer className="border-t p-2 bg-muted/50">
        <p className="text-xs text-muted-foreground text-center">
          🔧 Development Mode - Using MSW for API mocking | Messages: {messages.length} | Current
          Model: {currentModel}
        </p>
      </footer>
    </main>
  );
}
