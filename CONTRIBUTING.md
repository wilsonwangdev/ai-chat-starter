# Contributing to AI Chat Starter

Thank you for your interest in contributing to the AI Chat Starter template! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8.12+ (recommended)
- Git

### Setup Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/your-username/ai-chat-starter.git
cd ai-chat-starter

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test
```

## 📋 Development Guidelines

### Code Style

- **TypeScript**: Use strict mode, proper typing
- **ESLint**: Follow the configured rules
- **Prettier**: Code formatting is enforced
- **Conventional Commits**: Use conventional commit messages

### Testing Requirements

- Write tests for new features
- Maintain existing test coverage
- Use Vitest and React Testing Library
- Mock external dependencies appropriately

### Component Development

- Use shadcn/ui patterns
- Ensure accessibility (ARIA labels, keyboard navigation)
- Support both light and dark themes
- Write comprehensive tests

## 🔄 Contribution Workflow

### 1. Create an Issue

Before starting work, create an issue describing:

- The problem or feature request
- Proposed solution
- Any breaking changes

### 2. Fork and Branch

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Or bug fix branch
git checkout -b fix/bug-description
```

### 3. Development

- Follow the coding standards
- Write/update tests
- Update documentation if needed
- Ensure all tests pass

### 4. Commit Changes

Use conventional commit format:

```bash
git commit -m "feat: add new chat feature"
git commit -m "fix: resolve message rendering issue"
git commit -m "docs: update API documentation"
```

### 5. Submit Pull Request

- Fill out the PR template
- Link related issues
- Ensure CI passes
- Request review

## 🧪 Testing

### Running Tests

```bash
# All tests
pnpm test

# Specific package
pnpm --filter @ai-chat/ui test

# Watch mode
pnpm test:watch

# With coverage
pnpm test --coverage
```

### Test Categories

- **Unit Tests**: Individual functions/components
- **Integration Tests**: Component interactions
- **Type Tests**: TypeScript type checking

## 📦 Package Structure

### Adding New Packages

1. Create package directory in `packages/`
2. Add `package.json` with proper naming
3. Configure TypeScript, ESLint, testing
4. Update workspace dependencies
5. Add to Turbo pipeline

### Modifying Existing Packages

- **UI Components**: Add to `packages/ui/`
- **Types**: Add to `packages/types/`
- **Configuration**: Update `packages/config/`
- **App Features**: Add to `apps/web/`

## 🎯 Areas for Contribution

### High Priority

- New AI provider integrations
- Accessibility improvements
- Performance optimizations
- Mobile responsiveness
- Documentation improvements

### Medium Priority

- Additional UI components
- Testing utilities
- Development tools
- Example implementations

### Low Priority

- Code refactoring
- Style improvements
- Minor bug fixes

## 📝 Documentation

### Required Documentation

- README updates for new features
- API documentation for new components
- Migration guides for breaking changes
- Examples and usage patterns

### Documentation Standards

- Clear, concise explanations
- Code examples with TypeScript
- Screenshots for UI changes
- Links to relevant resources

## 🐛 Bug Reports

### Bug Report Template

```markdown
**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce the behavior.

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**

- OS: [e.g. macOS, Windows, Linux]
- Node.js version: [e.g. 18.17.0]
- Package manager: [e.g. pnpm 8.12.1]
- Browser: [e.g. Chrome 120]
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Any other context or screenshots about the feature request.
```

## 🔍 Code Review Process

### Review Criteria

- Code quality and style
- Test coverage
- Documentation completeness
- Performance impact
- Breaking changes
- Security considerations

### Review Timeline

- Initial review: Within 2-3 days
- Follow-up reviews: Within 1-2 days
- Merge: After approval and CI passes

## 🏷️ Release Process

### Versioning

- Follow Semantic Versioning (SemVer)
- Major: Breaking changes
- Minor: New features (backward compatible)
- Patch: Bug fixes

### Release Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] Version bumped
- [ ] Tagged release
- [ ] Release notes published

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: Bug reports, feature requests
- **GitHub Discussions**: General questions, ideas
- **Discord/Slack**: Real-time chat (if available)

### Maintainer Response Time

- Issues: 2-3 business days
- Pull Requests: 2-3 business days
- Security Issues: Within 24 hours

## 🙏 Recognition

Contributors will be recognized in:

- README contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to AI Chat Starter! 🚀
