import * as React from 'react';
import { ScrollArea } from '../scroll-area';
import { MessageBubble } from './message-bubble';
import { cn } from '../../lib/utils';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date | string;
}

interface ChatMessagesProps {
  messages: Message[];
  className?: string;
}

export function ChatMessages({ messages, className }: ChatMessagesProps): React.ReactElement {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = React.useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <ScrollArea className={cn('flex-1', className)}>
      <div className="min-h-full">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center text-muted-foreground max-w-md">
              <div className="mb-4 text-4xl">💬</div>
              <p className="text-lg font-medium mb-2">Start a conversation</p>
              <p className="text-sm leading-relaxed">
                Send a message to begin chatting with the AI assistant. Ask questions, get help, or
                just have a friendly conversation!
              </p>
            </div>
          </div>
        ) : (
          <div className="py-4">
            <div className="space-y-1">
              {messages.map((message, index) => {
                const isLastMessage = index === messages.length - 1;
                const isFirstMessage = index === 0;

                return (
                  <MessageBubble
                    key={message.id}
                    content={message.content}
                    role={message.role}
                    timestamp={message.timestamp}
                    className={cn(
                      // Add extra spacing for first and last messages
                      isFirstMessage && 'mt-2',
                      isLastMessage && 'mb-4'
                    )}
                  />
                );
              })}
            </div>
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
