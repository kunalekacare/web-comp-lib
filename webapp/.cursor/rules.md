# Web Application Development Rules

## Target Quality Standards
- **Design system integration**: Use only public APIs of the design system
- **Feature-driven development**: Organize code by business features
- **Accessibility-first**: All UI must be accessible and keyboard-navigable
- **Performance optimized**: Fast loading and smooth interactions
- **Type-safe**: Full TypeScript support throughout

## Design System Integration

### Component Usage
- **Use only public APIs**: Import from `@design-system/ui` main package
- **No deep imports**: Avoid `@design-system/ui/components/Button`
- **Extend, don't override**: Use props and slots, not CSS overrides
- **Token consumption**: Use design tokens for all styling decisions

### Styling Guidelines
- **Token-driven styling**: Use CSS vars or Tailwind with design system theme
- **No hardcoded values**: Avoid direct hex colors, pixel values, or arbitrary classes
- **Theme support**: Ensure components work in both light and dark themes
- **Responsive design**: Mobile-first approach with design system breakpoints

### Examples
```typescript
// ✅ Good - Using design system components
import { Button, Card, Input } from '@design-system/ui';

// ✅ Good - Using design tokens
const styles = {
  backgroundColor: 'var(--color-bg-primary)',
  padding: 'var(--spacing-4)',
};

// ❌ Bad - Hardcoded values
const styles = {
  backgroundColor: '#ffffff',
  padding: '16px',
};
```

## Feature Development

### Architecture Patterns
- **Feature-based organization**: Group related components, hooks, and utilities
- **Separation of concerns**: Keep business logic separate from UI components
- **Custom hooks**: Extract reusable logic into custom hooks
- **Service layer**: Centralize API calls and business logic

### Component Development
- **TypeScript required**: All components must have proper TypeScript interfaces
- **Accessibility built-in**: Include ARIA attributes and keyboard navigation
- **Error handling**: Proper error states and user feedback
- **Loading states**: Clear loading indicators where appropriate

### State Management
- **Local state**: Use React hooks for component-level state
- **Global state**: Use Context for app-wide state
- **Custom hooks**: Extract complex state logic into reusable hooks
- **Performance**: Optimize re-renders with useMemo and useCallback

## Authentication and Security

### Auth Flows
- **Server actions**: Prefer server actions where applicable for auth
- **Validation schemas**: Centralize validation with Zod or similar
- **Error handling**: Comprehensive error handling for auth failures
- **Security**: Never log secrets or sensitive information

### Security Guidelines
- **Input validation**: Validate all user inputs
- **XSS prevention**: Sanitize user content
- **CSRF protection**: Include CSRF tokens in forms
- **HTTPS only**: Require HTTPS for all requests

## Testing Requirements

### Unit Testing
- **Component testing**: Test component behavior and interactions
- **Hook testing**: Test custom hooks and business logic
- **Utility testing**: Test helper functions and utilities
- **Accessibility testing**: Include axe-core tests

### Integration Testing
- **Feature testing**: Test complete feature workflows
- **API integration**: Test data fetching and state management
- **Routing testing**: Test navigation and route protection
- **Design system integration**: Test component integration

### Testing Patterns
```typescript
// Component testing
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Performance Guidelines

### Bundle Optimization
- **Code splitting**: Split by routes and features
- **Lazy loading**: Load components and pages on demand
- **Tree shaking**: Ensure unused code is eliminated
- **Bundle analysis**: Monitor bundle size impact

### Runtime Performance
- **Memoization**: Use React.memo and useMemo appropriately
- **State optimization**: Minimize unnecessary re-renders
- **Image optimization**: Use appropriate image formats and sizes
- **Caching**: Implement proper caching strategies

## Code Quality

### TypeScript
- **Strict mode**: Use strict TypeScript configuration
- **Type safety**: Avoid `any` type, use proper interfaces
- **Generic types**: Use generics for reusable components
- **Type guards**: Use type guards for runtime type checking

### Code Style
- **ESLint compliance**: Follow project ESLint configuration
- **Prettier formatting**: Use consistent code formatting
- **Conventional commits**: Use conventional commit messages
- **Self-documenting code**: Write clear, readable code

### Documentation
- **JSDoc comments**: Document complex logic and APIs
- **README updates**: Update documentation for new features
- **Code comments**: Explain why, not what
- **API documentation**: Document new interfaces and types

## Accessibility Standards

### Required Features
- **Keyboard navigation**: All interactive elements must be keyboard accessible
- **Screen reader support**: Proper ARIA labels and descriptions
- **Color contrast**: Minimum 4.5:1 ratio for normal text
- **Focus management**: Clear focus indicators and logical tab order

### Accessibility Testing
- **Automated testing**: Use axe-core for accessibility violations
- **Manual testing**: Keyboard navigation and screen reader testing
- **User testing**: Real user accessibility testing
- **WCAG compliance**: Follow WCAG 2.1 AA guidelines

## Error Handling

### Error Boundaries
- **Component boundaries**: Catch and handle component errors
- **User feedback**: Provide clear error messages
- **Recovery options**: Offer ways to recover from errors
- **Error tracking**: Log errors for debugging

### API Error Handling
- **Centralized handling**: Use consistent error handling patterns
- **User-friendly messages**: Translate technical errors to user language
- **Retry mechanisms**: Implement retry logic where appropriate
- **Fallback states**: Provide fallback UI for error states

## Internationalization

### i18n Support
- **Translation keys**: Use consistent translation key patterns
- **RTL support**: Support right-to-left languages
- **Number formatting**: Use locale-aware number formatting
- **Date formatting**: Use locale-aware date formatting

### Implementation
```typescript
// Use translation hooks
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

return <h1>{t('login.title')}</h1>;
```

## Monitoring and Analytics

### Error Tracking
- **Error boundaries**: Catch and report component errors
- **Performance monitoring**: Track Core Web Vitals
- **User analytics**: Monitor user interactions and flows
- **Design system usage**: Track component usage patterns

### Analytics Implementation
```typescript
// Track user interactions
export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  analytics.track(event, {
    ...properties,
    timestamp: new Date().toISOString(),
  });
};
```

## Development Workflow

### Branch Management
- **Feature branches**: Use `feature/feature-name` pattern
- **Bug fixes**: Use `fix/issue-description` pattern
- **Documentation**: Use `docs/documentation-update` pattern
- **Clean history**: Maintain clean, linear git history

### Pull Request Process
- **Self-review**: Review code against checklist before submitting
- **Automated checks**: Ensure all tests and linting pass
- **Peer review**: At least one team member reviews
- **Accessibility review**: Accessibility expert reviews when applicable

### Quality Gates
- **Tests pass**: All unit and integration tests must pass
- **Linting clean**: No ESLint or TypeScript errors
- **Accessibility**: No accessibility violations
- **Performance**: Bundle size and performance benchmarks met
