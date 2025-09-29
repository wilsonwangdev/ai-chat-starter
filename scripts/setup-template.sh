#!/bin/bash

# AI Chat Starter Template Setup Script
# This script helps you customize the template for your project

set -e

echo "🤖 AI Chat Starter Template Setup"
echo "=================================="
echo ""

# Get project details
read -p "Enter your project name (e.g., my-ai-chat): " PROJECT_NAME
read -p "Enter your project description: " PROJECT_DESCRIPTION
read -p "Enter your name: " AUTHOR_NAME
read -p "Enter your email: " AUTHOR_EMAIL
read -p "Enter your GitHub username: " GITHUB_USERNAME

# Validate inputs
if [ -z "$PROJECT_NAME" ]; then
    echo "❌ Project name is required"
    exit 1
fi

echo ""
echo "🧹 Cleaning up template files..."

# Remove template-specific files
rm -f TEMPLATE_CHECKLIST.md TEMPLATE_OVERVIEW.md
rm -f scripts/setup-template.sh

# Clean build artifacts
rm -rf .next .turbo node_modules/.cache
find . -name "*.tsbuildinfo" -delete 2>/dev/null || true

echo ""
echo "📝 Updating project configuration..."

# Update root package.json
sed -i.bak "s/\"name\": \"ai-chat-starter\"/\"name\": \"$PROJECT_NAME\"/" package.json
sed -i.bak "s/\"description\": \".*\"/\"description\": \"$PROJECT_DESCRIPTION\"/" package.json
sed -i.bak "s/\"author\": \".*\"/\"author\": \"$AUTHOR_NAME <$AUTHOR_EMAIL>\"/" package.json

# Update README.md
sed -i.bak "s/# 🤖 AI Chat Starter Template/# 🤖 $PROJECT_NAME/" README.md
sed -i.bak "s/A modern, production-ready AI chat application starter template/$PROJECT_DESCRIPTION/" README.md

# Update web app package.json
sed -i.bak "s/\"name\": \"@ai-chat\/web\"/\"name\": \"@$PROJECT_NAME\/web\"/" apps/web/package.json

# Update package names in dependencies
find . -name "package.json" -not -path "./node_modules/*" -exec sed -i.bak "s/@ai-chat\//@$PROJECT_NAME\//g" {} \;

# Update import statements
find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs sed -i.bak "s/@ai-chat\//@$PROJECT_NAME\//g"

# Update config files
find . -name "*.json" -o -name "*.mjs" -o -name "*.cjs" | grep -v node_modules | xargs sed -i.bak "s/@ai-chat\//@$PROJECT_NAME\//g"

# Update Kiro steering files
if [ -d ".kiro/steering" ]; then
    sed -i.bak "s/AI Chat Starter/$PROJECT_NAME/g" .kiro/steering/product.md
    sed -i.bak "s/ai-chat-starter/$PROJECT_NAME/g" .kiro/steering/structure.md
fi

# Clean up backup files
find . -name "*.bak" -delete

echo "✅ Project configuration updated!"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

echo ""
echo "🧪 Running tests to verify setup..."
pnpm test

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Add your AI provider API keys to apps/web/.env.local"
echo "2. Start development: pnpm dev"
echo "3. Visit http://localhost:3000"
echo "4. Remove this setup script: rm scripts/setup-template.sh"
echo ""
echo "Happy coding! 🚀"