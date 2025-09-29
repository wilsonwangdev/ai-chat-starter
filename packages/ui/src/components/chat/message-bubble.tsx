// React import not needed with new JSX transform
import { Avatar, AvatarFallback } from '../avatar';
import { cn } from '../../lib/utils';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
  content: string;
  role: 'user' | 'assistant';
  timestamp?: Date | string;
  className?: string;
}

export function MessageBubble({
  content,
  role,
  timestamp,
  className,
}: MessageBubbleProps): React.ReactElement {
  const isUser = role === 'user';

  // Convert timestamp to Date object if it's a string
  const timestampDate = timestamp
    ? timestamp instanceof Date
      ? timestamp
      : new Date(timestamp)
    : null;

  return (
    <div className={cn('flex gap-3 py-3 px-4', isUser && 'flex-row-reverse', className)}>
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarFallback
          className={cn(
            'transition-colors',
            isUser
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          )}
        >
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={cn('flex flex-col gap-2 min-w-0 flex-1', isUser && 'items-end')}>
        <div
          className={cn(
            'relative max-w-[85%] min-w-[120px] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm',
            'transition-all duration-200 hover:shadow-md',
            isUser
              ? 'bg-blue-500 text-white rounded-br-md'
              : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-bl-md',
            // Better text alignment
            isUser ? 'text-right' : 'text-left'
          )}
        >
          <p
            className={cn(
              'whitespace-pre-wrap break-words',
              // Ensure proper text alignment within the bubble
              isUser ? 'text-right' : 'text-left'
            )}
          >
            {content}
          </p>

          {/* Message tail/pointer */}
          <div
            className={cn(
              'absolute top-4 w-0 h-0',
              isUser
                ? 'right-[-6px] border-l-[6px] border-l-blue-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent'
                : 'left-[-6px] border-r-[6px] border-r-gray-100 dark:border-r-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent'
            )}
          />
        </div>

        {timestampDate && (
          <span
            className={cn(
              'text-xs text-muted-foreground px-1',
              isUser ? 'text-right' : 'text-left'
            )}
          >
            {timestampDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
    </div>
  );
}
