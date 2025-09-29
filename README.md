# 🤖 AI Chat Starter Template

A modern, production-ready AI chat application starter template built with Next.js 15, TypeScript, and comprehensive testing. Perfect for building AI-powered chat interfaces with multiple provider support.

![AI Chat Starter](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Testing](https://img.shields.io/badge/Tests-23%2F23-green?style=for-the-badge&logo=vitest)

## ✨ Features

### 🚀 **Modern Tech Stack**

- **Next.js 15** with App Router
- **TypeScript 5.7** with strict configuration
- **Tailwind CSS** with shadcn/ui components
- **ESM-only** modules throughout
- **Monorepo** structure with Turborepo

### 🧪 **Comprehensive Testing**

- **Vitest** for lightning-fast tests
- **React Testing Library** for component testing
- **MSW** for API mocking
- **23 tests** with 100% pass rate
- **Type-safe testing** throughout

### 🎨 **UI/UX Excellence**

- **Responsive design** for all devices
- **Dark/light mode** support
- **Accessible components** with Radix UI
- **Modern chat interface** with message bubbles
- **Loading states** and error handling

### 🔧 **Developer Experience**

- **Hot reload** development
- **ESLint 9** with flat config
- **Prettier** code formatting
- **Husky** git hooks
- **Lint-staged** for pre-commit checks
- **Turbo** for optimized builds

### 🌐 **AI Provider Ready**

- **Multiple AI providers** (OpenAI, Anthropic, etc.)
- **Configurable models** per provider
- **Mock responses** for development
- **Fallback API routes** for reliability

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **pnpm 8.12+** (recommended) or npm/yarn

### Installation

```bash
# Clone the template
git clone <your-repo-url> my-ai-chat-app
cd my-ai-chat-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your chat app!

### Environment Setup

```bash
# Copy environment template
cp apps/web/.env.example apps/web/.env.local

# Add your AI provider API keys
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
```

## 📁 Project Structure

```
ai-chat-starter/
├── apps/
│   └── web/                 # Next.js chat application
│       ├── src/
│       │   ├── app/         # App Router pages & API routes
│       │   ├── components/  # App-specific components
│       │   └── mocks/       # MSW mock handlers
│       └── public/          # Static assets
├── packages/
│   ├── ui/                  # Shared UI components
│   │   ├── src/components/  # Reusable components
│   │   └── src/lib/         # Utilities
│   ├── types/               # Shared TypeScript types
│   └── config/              # Shared configurations
├── docs/                    # Documentation
└── .kiro/                   # Kiro AI assistant config
```

## 🛠️ Available Scripts

### Development

```bash
pnpm dev              # Start development servers
pnpm build            # Build all packages
pnpm test             # Run all tests
pnpm test:watch       # Run tests in watch mode
pnpm lint             # Lint all packages
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code with Prettier
pnpm type-check       # Type check all packages
pnpm clean            # Clean build artifacts
```

### Package-specific

```bash
# Work with specific packages
pnpm --filter @ai-chat/web dev
pnpm --filter @ai-chat/ui test:watch
pnpm --filter @ai-chat/types build
```

## 🧪 Testing

The template includes comprehensive testing setup:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests for specific package
pnpm --filter @ai-chat/ui test
```

### Test Coverage

- **UI Components**: 14 tests covering all interactive elements
- **Type Definitions**: 6 tests ensuring type safety
- **Application**: 3 tests for main functionality
- **Total**: 23 tests with 100% pass rate

## 🎨 UI Components

### Available Components

- **ChatContainer**: Main chat interface
- **MessageBubble**: Individual message display
- **Button**: Accessible button component
- **Avatar**: User/AI avatar display

### Adding New Components

```bash
# Create new component in UI package
cd packages/ui/src/components
# Add your component with tests
# Export from packages/ui/src/index.ts
```

## 🔌 AI Provider Integration

### Supported Providers

- **OpenAI** (GPT-4, GPT-3.5)
- **Anthropic** (Claude 3)
- **Custom providers** (easily extensible)

### Adding New Providers

1. Update `apps/web/src/mocks/handlers.ts` for development
2. Create API route in `apps/web/src/app/api/`
3. Add provider configuration
4. Update UI selector

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker

```bash
# Build Docker image
docker build -t ai-chat-app .

# Run container
docker run -p 3000:3000 ai-chat-app
```

### Environment Variables

Required for production:

- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `NEXT_PUBLIC_APP_URL`

## 📚 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Testing Guide](./docs/ESM_AND_TESTING.md)
- [Configuration Guide](./docs/CONFIGURATION.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Write tests for new features
- Use conventional commits
- Ensure all tests pass
- Format code with Prettier

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for deployment platform
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [MSW](https://mswjs.io/) for API mocking
- [Vitest](https://vitest.dev/) for fast testing

## 🆘 Support

- 📖 [Documentation](./docs/)
- 🐛 [Issue Tracker](https://github.com/your-username/ai-chat-starter/issues)
- 💬 [Discussions](https://github.com/your-username/ai-chat-starter/discussions)

---

**Happy coding! 🚀**
