// React import not needed with new JSX transform
import { ChatMessages } from './chat-messages';
import { ChatInput } from './chat-input';
import { cn } from '../../lib/utils';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date | string;
}

interface ChatContainerProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  className?: string;
}

export function ChatContainer({
  messages,
  onSendMessage,
  isLoading = false,
  className,
}: ChatContainerProps): React.ReactElement {
  return (
    <div className={cn('flex h-full flex-col', className)}>
      <ChatMessages messages={messages} className="flex-1" />
      <div className="border-t">
        <ChatInput
          onSendMessage={onSendMessage}
          disabled={isLoading}
          placeholder={isLoading ? 'AI is thinking...' : 'Type your message...'}
        />
      </div>
    </div>
  );
}
