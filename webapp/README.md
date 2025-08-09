# Web Component Library - Demo Website

A modern web application showcasing our comprehensive design system built with shadcn/ui, design tokens, and Tailwind CSS v4.

## Features

- 🏠 **Home Page**: Landing page with overview and quick start guide
- 🎨 **Design System Page**: Comprehensive component showcase
- 🌙 **Dark Mode**: Built-in theme switching
- 📱 **Responsive**: Mobile-first design
- ⚡ **Fast**: Built with Vite for optimal performance

## Pages

### Home Page (`/`)
- Hero section with call-to-action
- Feature overview
- Quick start guide
- Installation instructions

### Design System (`/design-system`)
- Component showcase
- Interactive examples
- Design token documentation
- System architecture overview

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with design tokens
- **Components**: shadcn/ui + Radix UI
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Design System**: @design-system/ui
- **Tokens**: @design-system/tokens

## Development

### Prerequisites
- Node.js 18+
- npm 8+

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment
The app runs on `http://localhost:3000` by default.

## Deployment

### GitHub Pages
The app is automatically deployed to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds the project
3. Deploys to `https://your-username.github.io/web-comp-lib`

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the `dist` folder to your hosting provider
```

## Project Structure

```
src/
├── pages/           # Page components
│   ├── Home.tsx     # Landing page
│   └── DesignSystem.tsx  # Design system showcase
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Design System Integration

The webapp demonstrates how to integrate our design system:

```tsx
import { Button, Card } from '@design-system/ui';

function MyComponent() {
  return (
    <Card>
      <Button>Hello from Design System</Button>
    </Card>
  );
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

MIT
