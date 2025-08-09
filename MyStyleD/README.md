# @design-system/tokens

Design system tokens and build pipeline using Style Dictionary. This package provides the foundational design tokens that power the entire design system.

## Overview

This package contains:
- **Design tokens**: Colors, typography, spacing, shadows, and other design values
- **Style Dictionary configuration**: Build pipeline for generating platform-specific outputs
- **CSS custom properties**: Generated CSS variables for web consumption
- **Multi-brand support**: Patient and doctor brand variants
- **Multi-theme support**: Light and dark theme variants

## Package Structure

```
MyStyleD/
├── tokens/
│   └── colors.json          # Design token definitions
├── src/
│   ├── parser.js            # Custom JSON parser
│   ├── filter.js            # Token filtering logic
│   ├── transforms/          # Custom transforms
│   └── formatters/          # Custom formatters
├── build.js                 # Main build script
├── config.js                # Style Dictionary configuration
└── dist/
    └── tokens.css           # Generated CSS variables
```

## Installation

```bash
npm install @design-system/tokens
```

## Usage

### CSS Import
```css
/* Import the generated CSS variables */
@import '@design-system/tokens/dist/tokens.css';

/* Use the variables in your CSS */
.my-component {
  background-color: var(--color-background-surface);
  color: var(--color-foreground-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-l);
}
```

### JavaScript Import
```javascript
// Import the CSS file
import '@design-system/tokens/dist/tokens.css';
```

## Token Categories

### Colors
- **Brand colors**: Primary brand colors and variations
- **Semantic colors**: Success, warning, error, info states
- **Neutral colors**: Grays for text, backgrounds, borders
- **Theme variants**: Light and dark theme variations

### Typography
- **Font families**: Primary and secondary typefaces
- **Font sizes**: Scale from xs to 4xl
- **Font weights**: Light, normal, medium, semibold, bold
- **Line heights**: Optimized for readability

### Spacing
- **Scale**: 4px base unit (0.25rem) with consistent multipliers
- **Ranges**: 0 to 64 (0 to 4rem)
- **Usage**: Margins, padding, gaps, component spacing

### Shadows
- **Elevation levels**: 1-5 for different depth contexts
- **Variants**: Default, hover, focus states
- **Composition**: Box shadows with consistent blur and spread

### Radius
- **Border radius**: Consistent corner rounding
- **Scale**: None, sm, md, lg, xl, full
- **Usage**: Buttons, cards, inputs, modals

## Brand Support

This package supports multiple brands:

### Patient Brand
- Purple-based color scheme
- Patient-facing application styling
- Light and dark theme variants

### Doctor Brand
- Blue-based color scheme
- Doctor-facing application styling
- Light and dark theme variants

## Theme Support

### Light Theme (Default)
Tokens are available as CSS custom properties on `:root`:
```css
:root {
  --color-primary-500: #6b5ce0;
  --spacing-4: 1rem;
  --radius-md: 0.5rem;
}
```

### Dark Theme
Dark theme tokens are scoped to `[data-theme="dark"]`:
```css
[data-theme="dark"] {
  --color-primary-500: #d6d1f6;
  --color-bg-primary: #1a1a1a;
  --color-text-primary: #ffffff;
}
```

## Build Process

### Development
```bash
# Build tokens
npm run build

# Watch for changes
npm run build -- --watch
```

### Output Files
- `dist/tokens.css` - CSS custom properties
- `build/css/_variables.css` - Intermediate CSS file
- `build/ios-*/` - iOS-specific outputs
- `build/android/` - Android-specific outputs
- `build/compose/` - Jetpack Compose outputs

## Platform Outputs

### Web (CSS)
- CSS custom properties for runtime theme switching
- Compatible with any CSS framework
- Supports Tailwind CSS integration

### iOS
- Color sets for light/dark themes
- Swift typography extensions
- Brand-specific themed color generation

### Android
- XML color resources
- Font dimension resources
- Jetpack Compose support with Material 3 color schemes

## Customization

### Adding New Tokens
1. Add token definition to `tokens/colors.json`
2. Follow naming conventions
3. Include both light and dark variants if applicable
4. Run build process
5. Test in components

### Modifying Existing Tokens
1. Update token definition in `tokens/colors.json`
2. Consider impact on existing components
3. Update all theme variants
4. Run build process
5. Test visual regression

## Integration with Design System

This package is automatically consumed by `@design-system/ui`:

```javascript
// In @design-system/ui/src/index.ts
import '@design-system/tokens/dist/tokens.css';
```

## Development

### Local Development
```bash
# Install dependencies
npm install

# Build tokens
npm run build

# Test build
npm test
```

### Adding New Platforms
1. Update `config.js` with new platform configuration
2. Add custom transforms/formatters if needed
3. Test platform-specific outputs
4. Update documentation

## Contributing

See the main design system documentation for contribution guidelines:
- [Design System Contributing Guide](../design-system/docs/contributing.md)
- [Token Development Guidelines](../design-system/docs/tokens.md)

## License

MIT

