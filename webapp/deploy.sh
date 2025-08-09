#!/bin/bash

echo "🚀 Deploying Web Component Library..."

# Build design system
echo "📦 Building design system..."
cd ../design-system
npm run build

# Build tokens
echo "🎨 Building design tokens..."
cd ../MyStyleD
npm run build

# Build webapp
echo "🌐 Building webapp..."
cd ../webapp
npm run build

echo "✅ Build complete! The app is ready for deployment."
echo "📁 Built files are in: dist/"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Push to main branch"
echo "2. GitHub Actions will automatically deploy"
echo ""
echo "To deploy manually:"
echo "Upload the contents of dist/ to your hosting provider"
