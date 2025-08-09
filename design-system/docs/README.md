# Design System

A comprehensive design system providing tokens, components, and documentation for consistent UI development across the organization.

## Package Structure

This design system is split into two main packages:

- **`@design-system/tokens`**: Design tokens and build pipeline using Style Dictionary
- **`@design-system/ui`**: React components built with shadcn/ui and design tokens

## Purpose

This design system serves as the single source of truth for:
- **Design tokens**: Colors, typography, spacing, shadows, and other design values
- **Reusable components**: Accessible, tested UI components with consistent APIs
- **Design patterns**: Guidelines and examples for common UI patterns

## Scope

### Included
- Design tokens (colors, typography, spacing, shadows, radius)
- Core UI components (buttons, inputs, cards, modals, etc.)
- Component documentation and examples
- Accessibility guidelines
- Theming support (light/dark modes, patient/doctor brands)

### Not Included
- Business logic or data fetching
- Page layouts or routing
- Application-specific components

## How to Consume

### Installation
```bash
# Install the UI components (includes tokens automatically)
npm install @design-system/ui

# Or install tokens separately if needed
npm install @design-system/tokens
```

### Basic Usage
```jsx
import { Button, Card } from '@design-system/ui';

function MyComponent() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

### Using Tokens
```css
/* CSS Variables (automatically included with @design-system/ui) */
.my-element {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
}

/* Tailwind Classes (if configured) */
.my-element {
  @apply text-primary-500 p-4;
}
```

### Theme Management
```jsx
import { useTheme } from '@design-system/ui';

function ThemeToggle() {
  const { theme, changeTheme, brand, changeBrand } = useTheme();
  
  return (
    <div>
      <button onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <button onClick={() => changeBrand(brand === 'patient' ? 'doctor' : 'patient')}>
        Toggle Brand
      </button>
    </div>
  );
}
```

## Versioning Policy

We follow [Semantic Versioning](https://semver.org/):
- **Major** (x.0.0): Breaking changes to component APIs
- **Minor** (0.x.0): New features, components, or tokens (backward compatible)
- **Patch** (0.0.x): Bug fixes and documentation updates

### Breaking Changes
Breaking changes require:
1. Major version bump
2. Migration guide in changelog
3. Deprecation warnings in previous minor versions
4. Team communication and coordination

## Publishing

### Prereleases
```bash
npm run build
npm publish --tag beta
```

### Stable Releases
```bash
npm run build
npm publish
```

### Release Process
1. Update version in `package.json`
2. Update changelog
3. Build and test
4. Publish to npm
5. Create GitHub release

## Development

### Local Development
```bash
# Install dependencies
npm install

# Build tokens
npm run build:tokens

# Build UI components
npm run build:ui

# Build everything
npm run build:all
```

### Building
```bash
npm run build:all
```

### Testing
```bash
npm run test
```

## Contributing

See [CONTRIBUTING.md](./contributing.md) for detailed guidelines on:
- Component development workflow
- Token creation and modification
- Documentation standards
- Testing requirements
- Accessibility guidelines

## Architecture

See [ARCHITECTURE.md](./architecture.md) for technical details on:
- Token pipeline and build process
- Component architecture and patterns
- Theming system
- Build and bundling configuration

## Token Pipeline

Design tokens are managed through Style Dictionary in the `@design-system/tokens` package:

1. **Source**: JSON token files in `MyStyleD/tokens/`
2. **Build**: Style Dictionary processes tokens into CSS variables
3. **Output**: `dist/tokens.css` with CSS custom properties
4. **Consumption**: Automatically imported by `@design-system/ui`
