'use client';

import { useEffect, useState } from 'react';

export function MSWProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const initMSW = async () => {
      // Check for full browser environment
      const isBrowser =
        typeof window !== 'undefined' &&
        typeof document !== 'undefined' &&
        typeof window.navigator !== 'undefined' &&
        'serviceWorker' in window.navigator &&
        document.readyState !== 'loading';

      if (isBrowser && process.env.NODE_ENV === 'development') {
        try {
          // Wait a bit to ensure DOM is fully ready
          await new Promise<void>((resolve) => setTimeout(resolve, 100));

          // Dynamic import to avoid SSR issues
          const { setupWorker } = await import('msw/browser');
          const { handlers } = await import('../mocks/handlers');

          const worker = setupWorker(...handlers);

          await worker.start({
            onUnhandledRequest: 'bypass', // Changed back to bypass to reduce noise
            serviceWorker: {
              url: '/mockServiceWorker.js',
            },
            quiet: false, // Enable logging to see what's happening
          });

          console.log('🔧 MSW: Mock Service Worker started successfully');

          console.log('🔧 MSW: Registered handlers:', worker.listHandlers().length);
        } catch (error) {
          console.warn('⚠️ MSW failed to start, falling back to Next.js API routes:', error);
        }
      } else if (process.env.NODE_ENV === 'development') {
        console.log('🔧 MSW: Not in browser environment, using Next.js API routes');
      }
      setMswReady(true);
    };

    // Wait for DOM to be ready if it's not already
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMSW);
    } else {
      initMSW();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', initMSW);
    };
  }, []);

  // Show loading state while MSW initializes (only in development)
  if (!mswReady && process.env.NODE_ENV === 'development') {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-sm text-muted-foreground">Initializing mock services...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
