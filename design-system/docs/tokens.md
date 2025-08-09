# Design Tokens

Design tokens are the foundational values that define our design system's visual language. They ensure consistency across all products and enable systematic design changes.

## Token Categories

### Colors
- **Brand colors**: Primary brand colors and variations
- **Semantic colors**: Success, warning, error, info states
- **Neutral colors**: Grays for text, backgrounds, borders
- **Mode variants**: Light and dark theme variations

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

## Source of Truth

Tokens are defined in JSON format using [Style Dictionary](https://amzn.github.io/style-dictionary/) as the source of truth:

```
/tokens/
├── colors.json
├── typography.json
├── spacing.json
├── shadows.json
├── radius.json
└── index.json
```

### Token Structure
```json
{
  "color": {
    "primary": {
      "50": { "value": "#eff6ff" },
      "500": { "value": "#3b82f6" },
      "900": { "value": "#1e3a8a" }
    }
  }
}
```

## Build Pipeline

### Input
- Style Dictionary JSON files in `/tokens/`
- Configuration in `style-dictionary.config.js`

### Output
1. **CSS Variables**: `/dist/tokens.css`
   - Scoped to `:root` for light theme
   - Scoped to `[data-theme="dark"]` for dark theme
   
2. **Tailwind Config**: `/dist/tailwind-tokens.js`
   - Merged into `tailwind.config.js`
   - Provides theme scales for Tailwind classes

### Build Process
```bash
npm run build:tokens
```

This generates:
- `dist/tokens.css` - CSS custom properties
- `dist/tailwind-tokens.js` - Tailwind theme configuration
- `dist/tokens.json` - Complete token manifest

## Naming Conventions

### Do's
- Use semantic names: `primary`, `success`, `error`
- Include scale numbers: `500`, `600`, `700`
- Group related tokens: `color.primary.500`
- Use consistent casing: kebab-case for CSS, camelCase for JS

### Don'ts
- Avoid specific color names: `blue`, `red`, `green`
- Don't use arbitrary values: `#3b82f6` directly in components
- Avoid inconsistent naming patterns
- Don't skip scale numbers

### Examples
```css
/* ✅ Good */
color: var(--color-primary-500);
padding: var(--spacing-4);
border-radius: var(--radius-md);

/* ❌ Bad */
color: #3b82f6;
padding: 16px;
border-radius: 6px;
```

## Theming

### Light Theme (Default)
Tokens are available as CSS custom properties on `:root`:
```css
:root {
  --color-primary-500: #3b82f6;
  --spacing-4: 1rem;
  --radius-md: 0.375rem;
}
```

### Dark Theme
Dark theme tokens are scoped to `[data-theme="dark"]`:
```css
[data-theme="dark"] {
  --color-primary-500: #60a5fa;
  --color-bg-primary: #1f2937;
  --color-text-primary: #f9fafb;
}
```

### Theme Switching
Toggle themes by changing the `data-theme` attribute:
```javascript
// Switch to dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Switch to light theme
document.documentElement.setAttribute('data-theme', 'light');
```

## Consumption in Components

### CSS Variables
```css
.button {
  background-color: var(--color-primary-500);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
```

### Tailwind Classes
```jsx
<button className="bg-primary-500 px-4 py-3 rounded-md shadow-sm">
  Click me
</button>
```

### JavaScript/TypeScript
```typescript
import { tokens } from '@design-system/tokens';

const buttonStyle = {
  backgroundColor: tokens.color.primary[500],
  padding: `${tokens.spacing[3]} ${tokens.spacing[4]}`,
};
```

## Token Development Workflow

### Adding New Tokens
1. Add token definition to appropriate JSON file
2. Follow naming conventions
3. Include both light and dark variants if applicable
4. Update documentation
5. Test in components

### Modifying Existing Tokens
1. Consider impact on existing components
2. Update all theme variants
3. Test visual regression
4. Update changelog
5. Communicate changes to consumers

### Token Review Checklist
- [ ] Follows naming conventions
- [ ] Has appropriate scale values
- [ ] Includes theme variants
- [ ] Documented with examples
- [ ] Tested in components
- [ ] No hardcoded values in components
