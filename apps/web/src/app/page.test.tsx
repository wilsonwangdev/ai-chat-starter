import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page.js';

// Mock the MSW provider to avoid setup complexity in tests
vi.mock('../components/msw-provider.js', () => ({
  MSWProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock the UI components
vi.mock('@ai-chat/ui', () => ({
  ChatContainer: ({
    messages,
    onSendMessage,
  }: {
    messages: unknown[];
    onSendMessage: (message: string) => void;
  }) => (
    <div data-testid="chat-container">
      <div data-testid="message-count">{messages.length}</div>
      <button onClick={() => onSendMessage('test')}>Send Test</button>
    </div>
  ),
}));

describe('Home Page', () => {
  it('renders the chat interface', () => {
    render(<Home />);

    expect(screen.getByText('AI Chat Assistant')).toBeInTheDocument();
    expect(screen.getByText('Powered by MSW Mock Service Worker')).toBeInTheDocument();
    expect(screen.getByTestId('chat-container')).toBeInTheDocument();
  });

  it('shows model selector', () => {
    render(<Home />);

    expect(screen.getByText('Model:')).toBeInTheDocument();
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('gpt-4');
  });

  it('displays development footer', () => {
    render(<Home />);

    expect(screen.getByText(/Development Mode - Using MSW for API mocking/)).toBeInTheDocument();
  });
});
