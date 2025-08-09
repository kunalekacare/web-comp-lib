# @design-system/ui

A modern design system built with Tailwind CSS v4, shadcn/ui components, and design tokens from MyStyleD.

## Features

- 🎨 **Tailwind CSS v4** - Latest CSS-first configuration
- 🧩 **shadcn/ui Components** - High-quality, accessible React components
- 🎯 **Design Tokens** - Integrated with MyStyleD token pipeline
- 🌙 **Dark Mode Support** - Built-in theme switching
- 📦 **TypeScript** - Full type safety
- 🚀 **Tree-shakable** - Only import what you use

## Installation

```bash
npm install @design-system/ui
```

## Quick Start

### 1. Import Design Tokens

First, import the design tokens CSS in your app's root:

```tsx
// In your app root (e.g., _app.tsx, App.tsx, or main.tsx)
import '@design-system/ui/dist/tokens.css';
```

### 2. Import Components

```tsx
import { LoginCard, Button, Card } from '@design-system/ui';

function App() {
  const handleLogin = async (email: string, password: string) => {
    // Your login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <LoginCard
        title="Welcome Back"
        subtitle="Sign in to your account"
        onSubmit={handleLogin}
        onForgotPassword={() => console.log('Forgot password')}
      />
    </div>
  );
}
```

## Components

### LoginCard

A complete login form component with built-in validation and accessibility features.

```tsx
import { LoginCard } from '@design-system/ui';

<LoginCard
  title="Sign In"
  subtitle="Enter your credentials"
  emailLabel="Email Address"
  passwordLabel="Password"
  submitLabel="Sign In"
  isLoading={false}
  errorMessage=""
  onSubmit={handleLogin}
  onForgotPassword={handleForgotPassword}
  renderSocial={<SocialLoginButtons />}
/>
```

**Props:**
- `title?: string` - Card title (default: "Sign in")
- `subtitle?: string` - Card subtitle
- `emailLabel?: string` - Email field label (default: "Email")
- `passwordLabel?: string` - Password field label (default: "Password")
- `submitLabel?: string` - Submit button text (default: "Continue")
- `isLoading?: boolean` - Show loading state
- `errorMessage?: string` - Display error message
- `onSubmit: (email: string, password: string) => void | Promise<void>` - Form submission handler
- `onForgotPassword?: () => void` - Forgot password handler
- `renderSocial?: React.ReactNode` - Social login buttons
- `className?: string` - Additional CSS classes

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@design-system/ui';

<Button variant="default" size="lg">
  Click me
</Button>
```

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes:** `default`, `sm`, `lg`, `icon`

### Card

A flexible card component for content containers.

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@design-system/ui';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

A styled input component with proper accessibility.

```tsx
import { Input } from '@design-system/ui';

<Input type="email" placeholder="Enter your email" />
```

### Label

An accessible label component.

```tsx
import { Label } from '@design-system/ui';

<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />
```

## Design Tokens

The design system uses tokens from MyStyleD for consistent theming. Tokens are available as CSS custom properties:

```css
/* Colors */
--color-primary-500: #6b5ce0;
--color-background: #ffffff;
--color-foreground: #111b31;

/* Spacing */
--spacing-4: 1rem;
--spacing-8: 2rem;

/* Border Radius */
--radius-md: 0.5rem;
--radius-lg: 0.75rem;

/* Typography */
--font-sans: "Inter", ui-sans-serif, system-ui;
```

## Dark Mode

The design system supports dark mode through CSS custom properties. Toggle dark mode by adding the `dark` class to your root element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

## Tailwind CSS v4 Integration

The design system is built for Tailwind CSS v4. Make sure your `globals.css` includes:

```css
@import "tailwindcss";

/* Import design tokens */
@import "@design-system/ui/dist/tokens.css";

/* Define theme variables */
@theme {
  --color-primary-500: var(--color-primary-500);
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  --radius-md: var(--radius-md);
  --spacing-4: var(--spacing-4);
  --font-sans: var(--font-sans);
}
```

## Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Testing

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT
