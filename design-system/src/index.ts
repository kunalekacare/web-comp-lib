// Export shadcn UI components
export { Button, buttonVariants } from './components/ui/button';
export { Input } from './components/ui/input';
export { Label } from './components/ui/label';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card';

// Export custom components
export { LoginCard } from './components/login-card';
export { BlurIn } from './components/magicui/blur-in';
export { AnimatedGrid } from './components/magicui/animated-grid';
export { BentoGrid, BentoCard } from './components/magicui/bento-grid';
export { Dock, DockIcon } from './components/magicui/dock';
export { AnimatedShinyText } from './components/magicui/animated-shiny-text';

// Export types
export type { ButtonProps } from './components/ui/button';

// Export utilities
export { cn } from './lib/utils';

// Export theme utilities
export { useTheme } from './hooks/useTheme';
export { setTheme, getCurrentTheme } from './utils/theme';
