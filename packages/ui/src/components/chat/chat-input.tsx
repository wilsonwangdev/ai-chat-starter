import * as React from 'react';
import { Button } from '../button';
import { Textarea } from '../textarea';
import { cn } from '../../lib/utils';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export function ChatInput({
  onSendMessage,
  disabled = false,
  placeholder = 'Type your message...',
  className,
}: ChatInputProps): React.ReactElement {
  const [message, setMessage] = React.useState('');
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={cn('bg-background border-t', className)}>
      <form onSubmit={handleSubmit} className="flex gap-3 p-4 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              'min-h-[52px] max-h-[120px] resize-none pr-12',
              'border-2 border-gray-200 dark:border-gray-700',
              'focus:border-blue-500 dark:focus:border-blue-400',
              'rounded-2xl transition-all duration-200',
              'placeholder:text-gray-500 dark:placeholder:text-gray-400',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
            rows={1}
          />

          {/* Character count or typing indicator */}
          {message.length > 0 && (
            <div className="absolute bottom-2 right-14 text-xs text-gray-400">{message.length}</div>
          )}
        </div>

        <Button
          type="submit"
          disabled={disabled || !message.trim()}
          size="icon"
          className={cn(
            'h-[52px] w-[52px] shrink-0 rounded-2xl transition-all duration-200',
            'bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600',
            'shadow-lg hover:shadow-xl disabled:shadow-none',
            'hover:scale-105 active:scale-95 disabled:scale-100',
            message.trim() && !disabled && 'animate-pulse'
          )}
        >
          <Send
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              message.trim() && !disabled && 'scale-110'
            )}
          />
        </Button>
      </form>

      {/* Helpful hint */}
      <div className="px-4 pb-3 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Press{' '}
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border">
            Enter
          </kbd>{' '}
          to send,
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border ml-1">
            Shift + Enter
          </kbd>{' '}
          for new line
        </p>
      </div>
    </div>
  );
}
