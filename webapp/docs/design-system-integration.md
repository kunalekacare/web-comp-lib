# Design System Integration Guide

## Overview
This document describes how the web application integrates with the centralized design system via Style Dictionary and the component library.

## Package Structure

The design system is organized into two main packages:

- **`@design-system/tokens`**: Design tokens and build pipeline (Style Dictionary)
- **`@design-system/ui`**: React components built with shadcn/ui

## Token Flow
1. **Source**: `MyStyleD/tokens/colors.json` (Style Dictionary source)
2. **Build**: `npm run build:tokens` (generates CSS variables)
3. **Output**: `@design-system/tokens/dist/tokens.css`
4. **Consumption**: Automatically imported by `@design-system/ui`

## Installation

### Install Design System
```bash
# Install the UI components (includes tokens automatically)
npm install @design-system/ui

# Or install tokens separately if needed
npm install @design-system/tokens
```

### Add to package.json
```json
{
  "dependencies": {
    "@design-system/ui": "^0.1.0"
  }
}
```

## Usage

### Import Components
```jsx
import { Button, Card, Input } from '@design-system/ui';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Theme Management
```jsx
import { useTheme } from '@design-system/ui';

function App() {
  const { theme, changeTheme, brand, changeBrand } = useTheme();
  
  return (
    <div>
      <button onClick={() => changeTheme('dark')}>
        Switch to Dark Mode
      </button>
      <button onClick={() => changeBrand('doctor')}>
        Switch to Doctor Brand
      </button>
    </div>
  );
}
```

### Using Tokens Directly
```css
/* CSS Variables are automatically available */
.my-custom-component {
  background-color: var(--color-background-surface);
  color: var(--color-foreground-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-l);
}
```

## Theme Implementation

### CSS Custom Properties
The design system provides CSS custom properties for:
- **Colors**: Primary, secondary, semantic colors
- **Typography**: Font sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation and depth
- **Border Radius**: Corner rounding

### Theme Switching
Themes are switched by changing the `data-theme` attribute:
```javascript
// Switch to dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Switch to light theme
document.documentElement.setAttribute('data-theme', 'light');
```

### Brand Switching
Brands are switched by changing the `data-brand` attribute:
```javascript
// Switch to doctor brand
document.documentElement.setAttribute('data-brand', 'doctor');

// Switch to patient brand
document.documentElement.setAttribute('data-brand', 'patient');
```

## Build Process Integration

### Development
```bash
# Build tokens before starting dev server
npm run build:tokens
npm run dev
```

### Production
```bash
# Build everything
npm run build:all
npm run build
```

### Automated Build
Add to your build scripts:
```json
{
  "scripts": {
    "predev": "npm run build:tokens",
    "prebuild": "npm run build:tokens",
    "build:tokens": "npm run build -w @design-system/tokens"
  }
}
```

## Tailwind Integration (Optional)

If using Tailwind CSS, you can extend the theme with design tokens:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          500: 'var(--color-primary-500)',
          900: 'var(--color-primary-900)',
        },
        // ... other colors
      },
      spacing: {
        '4': 'var(--spacing-4)',
        '8': 'var(--spacing-8)',
        // ... other spacing
      },
    },
  },
};
```

## Component Development

### Creating Custom Components
```jsx
import { BaseProps } from '@design-system/ui';

interface CustomComponentProps extends BaseProps {
  // Your custom props
}

export function CustomComponent({ className, ...props }: CustomComponentProps) {
  return (
    <div 
      className={`custom-component ${className || ''}`}
      {...props}
    >
      {/* Your component content */}
    </div>
  );
}
```

### Using Design Tokens
```css
/* custom-component.css */
.custom-component {
  background-color: var(--color-background-surface);
  color: var(--color-foreground-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-sm);
}
```

## Migration from Previous Versions

### From @design-system/ui
```bash
# Remove old package
npm uninstall @design-system/ui

# Install new package
npm install @design-system/ui
```

### Update Imports
```jsx
// Before
import { Button } from '@design-system/ui';

// After
import { Button } from '@design-system/ui';
```

## Troubleshooting

### Tokens Not Loading
1. Ensure `@design-system/ui` is installed
2. Check that CSS is imported in your app entry point
3. Verify the build process completed successfully

### Theme Not Switching
1. Check that `data-theme` attribute is being set
2. Verify CSS custom properties are available
3. Ensure no CSS specificity conflicts

### Components Not Styled
1. Check that design tokens are loaded
2. Verify component CSS classes are applied
3. Ensure no conflicting styles

## Best Practices

1. **Use Design Tokens**: Always use CSS custom properties instead of hardcoded values
2. **Component Composition**: Use the provided components as building blocks
3. **Theme Awareness**: Design components to work in both light and dark themes
4. **Accessibility**: Follow accessibility guidelines provided by the design system
5. **Consistency**: Use the established patterns and APIs

## Resources

- [Design System Documentation](../design-system/docs/)
- [Component API Reference](../design-system/docs/components.md)
- [Token Documentation](../design-system/docs/tokens.md)
- [Accessibility Guidelines](../design-system/docs/contributing.md)
