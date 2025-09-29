import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Setup MSW server for Node.js environment (testing, SSR)
export const server = setupServer(...handlers);
