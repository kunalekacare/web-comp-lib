# Components

This document outlines all components in the design system, their status, APIs, and usage guidelines.

## Component Status

- **Draft**: Component is in development, API may change
- **Ready**: Component is stable and ready for production use
- **Deprecated**: Component is being phased out, avoid new usage
- **Experimental**: Component is available for testing but may have breaking changes

## Component List

### Layout Components
| Component | Status | Description |
|-----------|--------|-------------|
| `Box` | Ready | Basic layout container with padding and margin props |
| `Container` | Ready | Responsive container with max-width constraints |
| `Grid` | Ready | CSS Grid layout component |
| `Stack` | Ready | Vertical or horizontal stack with consistent spacing |

### Form Components
| Component | Status | Description |
|-----------|--------|-------------|
| `Button` | Ready | Primary, secondary, and tertiary button variants |
| `Input` | Ready | Text input with validation states |
| `Select` | Ready | Dropdown select component |
| `Checkbox` | Ready | Checkbox with label and description |
| `Radio` | Ready | Radio button group component |
| `Textarea` | Ready | Multi-line text input |
| `Switch` | Ready | Toggle switch component |

### Feedback Components
| Component | Status | Description |
|-----------|--------|-------------|
| `Alert` | Ready | Success, warning, error, and info alerts |
| `Toast` | Ready | Temporary notification messages |
| `Progress` | Ready | Progress bar and spinner components |
| `Skeleton` | Ready | Loading placeholder components |

### Navigation Components
| Component | Status | Description |
|-----------|--------|-------------|
| `Breadcrumb` | Ready | Navigation breadcrumbs |
| `Pagination` | Ready | Page navigation component |
| `Tabs` | Ready | Tab navigation component |

### Overlay Components
| Component | Status | Description |
|-----------|--------|-------------|
| `Modal` | Ready | Modal dialog component |
| `Popover` | Ready | Contextual popover component |
| `Tooltip` | Ready | Hover tooltip component |
| `Drawer` | Ready | Slide-out drawer component |

### Data Display Components
| Component | Status | Description |
|-----------|--------|-------------|
| `Card` | Ready | Content container with header, body, and footer |
| `Table` | Ready | Data table with sorting and pagination |
| `Badge` | Ready | Status and count indicators |
| `Avatar` | Ready | User profile image component |
| `List` | Ready | Ordered and unordered list components |

### Authentication Components
| Component | Status | Description |
|-----------|--------|-------------|
| `LoginCard` | Draft | Complete login form component |
| `SignupCard` | Draft | Registration form component |
| `PasswordResetCard` | Draft | Password reset form component |

## API Contracts

### Common Props
All components extend these base props:
```typescript
interface BaseProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}
```

### Component-Specific APIs

#### Button
```typescript
interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}
```

#### Input
```typescript
interface InputProps extends BaseProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  helperText?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
}
```

#### LoginCard
```typescript
interface LoginCardProps extends BaseProps {
  title?: string;
  subtitle?: string;
  emailLabel?: string;
  passwordLabel?: string;
  submitLabel?: string;
  errorMessage?: string;
  isLoading?: boolean;
  onSubmit: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onContinueWith?: (provider: 'google' | 'github' | 'microsoft') => void;
  children?: {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    socialProviders?: React.ReactNode;
  };
}
```

## Accessibility Guidelines

### Required Accessibility Features
- **Focus management**: All interactive elements must be keyboard accessible
- **ARIA attributes**: Proper roles, labels, and descriptions
- **Color contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Screen reader support**: Semantic HTML and proper labeling
- **Motion preferences**: Respect `prefers-reduced-motion` media query

### Component-Specific Requirements

#### Form Components
- Must have associated labels (visible or aria-label)
- Error states must be announced to screen readers
- Validation messages must be linked via `aria-describedby`

#### Interactive Components
- Must support keyboard navigation
- Focus indicators must be visible
- Hover states must have focus equivalents

#### Modal Components
- Must trap focus within modal
- Must have close button or escape key handling
- Must announce modal to screen readers

### Accessibility Testing Checklist
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Motion respects user preferences
- [ ] ARIA attributes are correct
- [ ] Error states are accessible

## Theming Rules

### Token Usage
- All styling must use design tokens
- No hardcoded colors, spacing, or typography values
- Components must support both light and dark themes

### Theme Integration
```typescript
// ✅ Good - Using tokens
const buttonStyle = {
  backgroundColor: 'var(--color-primary-500)',
  padding: 'var(--spacing-3) var(--spacing-4)',
  borderRadius: 'var(--radius-md)',
};

// ❌ Bad - Hardcoded values
const buttonStyle = {
  backgroundColor: '#3b82f6',
  padding: '12px 16px',
  borderRadius: '6px',
};
```

### Component Variants
Components should support theme-aware variants:
```typescript
interface ComponentProps {
  variant?: 'default' | 'primary' | 'secondary';
  theme?: 'light' | 'dark' | 'auto';
}
```

## Usage Examples

### Basic Button
```jsx
import { Button } from '@design-system/ui';

function MyComponent() {
  return (
    <Button 
      variant="primary" 
      size="md"
      onClick={() => console.log('clicked')}
    >
      Click me
    </Button>
  );
}
```

### Form with Validation
```jsx
import { Input, Button, Alert } from '@design-system/ui';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert variant="error">{error}</Alert>}
      
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={setEmail}
        error={error}
        required
      />
      
      <Button type="submit" variant="primary">
        Sign In
      </Button>
    </form>
  );
}
```

### LoginCard Usage
```jsx
import { LoginCard } from '@design-system/ui';

function LoginPage() {
  const handleSubmit = async (email: string, password: string) => {
    // Handle authentication
  };

  return (
    <LoginCard
      title="Welcome back"
      subtitle="Sign in to your account"
      onSubmit={handleSubmit}
      onForgotPassword={() => navigate('/reset-password')}
      onContinueWith={(provider) => handleSocialLogin(provider)}
    />
  );
}
```

## Component Development Guidelines

### Creating New Components
1. Define the component API and TypeScript interfaces
2. Implement with accessibility in mind
3. Add comprehensive tests
4. Create Storybook stories
5. Update this documentation
6. Add to component status table

### Component Review Checklist
- [ ] Uses design tokens exclusively
- [ ] Implements all required accessibility features
- [ ] Has comprehensive test coverage
- [ ] Includes Storybook documentation
- [ ] Follows naming conventions
- [ ] Has proper TypeScript types
- [ ] Supports theme variants
- [ ] Includes error handling
- [ ] Has loading states where appropriate
