#!/bin/bash

# Clean script for AI Chat Starter Template
# Removes build artifacts and temporary files

echo "🧹 Cleaning AI Chat Starter Template..."

# Remove build outputs
echo "Removing build outputs..."
rm -rf .next .turbo dist build out .output

# Remove dependency caches
echo "Removing dependency caches..."
rm -rf node_modules/.cache node_modules/.vite .pnpm-store

# Remove TypeScript build info
echo "Removing TypeScript build info..."
find . -name "*.tsbuildinfo" -delete 2>/dev/null || true

# Remove test artifacts
echo "Removing test artifacts..."
rm -rf coverage .nyc_output test-results playwright-report

# Remove logs
echo "Removing logs..."
rm -rf logs
find . -name "*.log" -delete 2>/dev/null || true

# Remove temporary files
echo "Removing temporary files..."
rm -rf .tmp .temp
find . -name "*.tmp" -delete 2>/dev/null || true
find . -name "*.temp" -delete 2>/dev/null || true

# Remove OS generated files
echo "Removing OS generated files..."
find . -name ".DS_Store" -delete 2>/dev/null || true
find . -name "Thumbs.db" -delete 2>/dev/null || true

echo "✅ Cleanup complete!"
echo ""
echo "To reinstall dependencies, run: pnpm install"
echo "To rebuild the project, run: pnpm build"