// Re-export handlers for dynamic import in MSW provider
export { handlers } from './handlers';

// Note: We no longer pre-initialize the worker here to avoid SSR issues
// The worker is created dynamically in the MSW provider component
