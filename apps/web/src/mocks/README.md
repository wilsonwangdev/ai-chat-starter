# MSW Mock Setup

This directory contains Mock Service Worker (MSW) configuration for frontend development.

## 🎯 Purpose

MSW allows us to:

- Mock API responses without changing application code
- Test different AI provider responses
- Develop frontend features independently of backend
- Simulate network conditions and error states

## 📁 Structure

```
src/mocks/
├── handlers.ts      # API route handlers and mock responses
├── browser.ts       # Browser MSW setup
├── server.ts        # Node.js MSW setup (for testing)
└── README.md        # This file
```

## 🔧 Mock Endpoints

### Chat API

- **POST** `/api/chat`
- Simulates different AI models (GPT-4, GPT-3.5, Claude 3)
- Variable response times based on model
- Context-aware responses for common inputs

### Providers API

- **GET** `/api/providers`
- Returns available AI providers and models
- Used for model selection dropdown

### Chat History API

- **GET** `/api/chat/history`
- Returns mock chat session history
- For future chat history features

## 🎭 AI Model Personalities

Each mock AI model has distinct characteristics:

### GPT-4

- **Style**: Detailed and analytical
- **Response Time**: ~1.5s
- **Personality**: Systematic, comprehensive analysis

### GPT-3.5 Turbo

- **Style**: Quick and concise
- **Response Time**: ~0.8s
- **Personality**: Direct, practical answers

### Claude 3

- **Style**: Thoughtful and nuanced
- **Response Time**: ~1.2s
- **Personality**: Reflective, considers multiple perspectives

## 🚀 Usage

MSW is automatically initialized in development mode:

1. **Service Worker**: Installed at `/mockServiceWorker.js`
2. **Auto-start**: Initializes when app loads in development
3. **Bypass**: Unhandled requests pass through to real network
4. **Dev Panel**: Use the 🔧 button to monitor MSW status

## 🛠️ Customization

### Adding New Endpoints

```typescript
// In handlers.ts
http.get('/api/new-endpoint', () => {
  return HttpResponse.json({ data: 'mock response' });
});
```

### Modifying Responses

```typescript
// Add new AI personality
const mockResponses = {
  'new-model': ['Response style for new model...', 'Another response variant...'],
};
```

### Simulating Errors

```typescript
// Return error responses
http.post('/api/chat', () => {
  return HttpResponse.json({ error: 'Service unavailable' }, { status: 503 });
});
```

## 🔍 Development Tools

- **Console Logging**: MSW logs all intercepted requests
- **Dev Panel**: Shows MSW status and available endpoints
- **Network Tab**: Requests appear as normal HTTP calls
- **Handler Inspection**: Use dev panel to log active handlers

## 📝 Best Practices

1. **Keep responses realistic** - Match real API response formats
2. **Add delays** - Simulate real network conditions
3. **Test error states** - Include failure scenarios
4. **Update with API changes** - Keep mocks in sync with real APIs
5. **Use TypeScript** - Ensure type safety for mock responses
