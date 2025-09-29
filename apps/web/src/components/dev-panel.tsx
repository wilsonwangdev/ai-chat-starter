'use client';

import { useState } from 'react';
import { cn } from '@ai-chat/ui';

export function DevPanel(): React.ReactElement | null {
  const [isOpen, setIsOpen] = useState(false);
  const [mswEnabled] = useState(true);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200',
          'hover:bg-blue-700 hover:scale-105 active:scale-95',
          'border-2 border-blue-500 hover:border-blue-400',
          isOpen && 'bg-blue-700 scale-105'
        )}
        title="Development Panel"
        aria-label="Toggle Development Panel"
      >
        <span className="text-lg">🔧</span>
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden w-96 max-w-[calc(100vw-3rem)]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white text-lg">Development Panel</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded"
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-5 space-y-5">
            {/* MSW Status */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                MSW Status
              </span>
              <span
                className={cn(
                  'text-xs font-medium px-3 py-1.5 rounded-full transition-colors',
                  mswEnabled
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                )}
              >
                {mswEnabled ? '🟢 Active' : '🔴 Inactive'}
              </span>
            </div>

            {/* MSW Details */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg px-4 py-3">
              <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Mock Service Details
              </h4>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Mock API responses enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Service Worker: /mockServiceWorker.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Handlers: Chat, Providers, History</span>
                </div>
              </div>
            </div>

            {/* Available Endpoints */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg px-4 py-3">
              <h4 className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2 uppercase tracking-wide">
                Available Mock Endpoints
              </h4>
              <div className="space-y-1.5">
                {[
                  { method: 'POST', endpoint: '/api/chat', color: 'bg-green-500' },
                  { method: 'GET', endpoint: '/api/providers', color: 'bg-blue-500' },
                  { method: 'GET', endpoint: '/api/chat/history', color: 'bg-purple-500' },
                ].map(({ method, endpoint, color }) => (
                  <div key={endpoint} className="flex items-center gap-3">
                    <span className={cn('text-xs font-mono px-2 py-0.5 rounded text-white', color)}>
                      {method}
                    </span>
                    <code className="text-xs font-mono text-gray-600 dark:text-gray-400">
                      {endpoint}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  console.log(
                    'MSW handlers:',
                    (
                      window as unknown as { msw?: { listHandlers?: () => unknown } }
                    ).msw?.listHandlers?.()
                  );
                }}
                className={cn(
                  'flex-1 text-xs bg-gray-100 dark:bg-gray-700 px-4 py-2.5 rounded-lg',
                  'hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors',
                  'font-medium text-gray-700 dark:text-gray-300'
                )}
              >
                📋 Log Handlers
              </button>
              <button
                onClick={() => window.location.reload()}
                className={cn(
                  'flex-1 text-xs bg-blue-100 dark:bg-blue-900/30 px-4 py-2.5 rounded-lg',
                  'hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors',
                  'font-medium text-blue-700 dark:text-blue-400'
                )}
              >
                🔄 Reload App
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-3 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Development mode • MSW v2.11.3
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
