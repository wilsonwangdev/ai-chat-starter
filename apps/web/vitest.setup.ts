import '@testing-library/jest-dom';

// Setup MSW for testing
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './src/mocks/server.js';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
