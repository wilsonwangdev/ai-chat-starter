import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MSWProvider } from '../components/msw-provider';
import { DevPanel } from '../components/dev-panel';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Chat App',
  description: 'Modern chat application with AI agents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWProvider>
          {children}
          <DevPanel />
        </MSWProvider>
      </body>
    </html>
  );
}
