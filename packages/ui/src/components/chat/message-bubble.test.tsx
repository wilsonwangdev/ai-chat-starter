import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MessageBubble } from './message-bubble.js';

describe('MessageBubble', () => {
  it('renders user message correctly', () => {
    const timestamp = new Date('2023-01-01T12:00:00Z');

    render(<MessageBubble content="Hello, how are you?" role="user" timestamp={timestamp} />);

    expect(screen.getByText('Hello, how are you?')).toBeInTheDocument();
    // Check for time format (could be 12:00 PM or 08:00 PM depending on timezone)
    expect(screen.getByText(/\d{1,2}:\d{2}\s?(AM|PM)?/)).toBeInTheDocument();
  });

  it('renders assistant message correctly', () => {
    const timestamp = new Date('2023-01-01T12:30:00Z');

    render(
      <MessageBubble content="I'm doing well, thank you!" role="assistant" timestamp={timestamp} />
    );

    expect(screen.getByText("I'm doing well, thank you!")).toBeInTheDocument();
    // Check for time format (could be 12:30 PM or 08:30 PM depending on timezone)
    expect(screen.getByText(/\d{1,2}:\d{2}\s?(AM|PM)?/)).toBeInTheDocument();
  });

  it('handles string timestamp', () => {
    render(<MessageBubble content="Test message" role="user" timestamp="2023-01-01T15:45:00Z" />);

    expect(screen.getByText('Test message')).toBeInTheDocument();
    // Check for time format (could be 15:45 or 11:45 PM depending on timezone)
    expect(screen.getByText(/\d{1,2}:\d{2}\s?(AM|PM)?/)).toBeInTheDocument();
  });

  it('renders without timestamp', () => {
    render(<MessageBubble content="No timestamp message" role="assistant" />);

    expect(screen.getByText('No timestamp message')).toBeInTheDocument();
    // Should not have any time text
    expect(screen.queryByText(/\d{2}:\d{2}/)).not.toBeInTheDocument();
  });

  it('applies correct styling for user messages', () => {
    render(<MessageBubble content="User message" role="user" />);

    const messageContainer = screen.getByText('User message').closest('div');
    expect(messageContainer).toHaveClass('bg-blue-500', 'text-white');
  });

  it('applies correct styling for assistant messages', () => {
    render(<MessageBubble content="Assistant message" role="assistant" />);

    const messageContainer = screen.getByText('Assistant message').closest('div');
    expect(messageContainer).toHaveClass('bg-gray-100', 'text-gray-900');
  });

  it('preserves whitespace in content', () => {
    const multilineContent = 'Line 1\nLine 2\n\nLine 4';

    render(<MessageBubble content={multilineContent} role="user" />);

    // Find the p element specifically
    const messageElement = screen.getByText((content, element) => {
      return element?.tagName === 'P' && element?.textContent === multilineContent;
    });
    expect(messageElement).toHaveClass('whitespace-pre-wrap');
  });
});
