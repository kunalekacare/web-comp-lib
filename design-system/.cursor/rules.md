# Design System Development Rules

## Target Quality Standards
- **Library-quality components**: Production-ready, well-tested, documented
- **Strict API stability**: Maintain backward compatibility, use semantic versioning
- **Accessibility-first**: WCAG AA compliance, keyboard navigation, screen reader support
- **Performance optimized**: Minimal bundle impact, efficient rendering

## Styling Guidelines
- **Use Tailwind with token-driven CSS vars only**: All styling must use design tokens
- **No arbitrary values**: Avoid hardcoded colors, spacing, or typography unless reviewed
- **Token consumption**: Use `var(--token-name)` or Tailwind classes mapped to tokens
- **Theme support**: All components must work in both light and dark themes

## Component Development
- **TypeScript required**: All components must have proper TypeScript interfaces
- **Base props pattern**: Extend common BaseProps interface for consistency
- **Variant system**: Support multiple visual variants (primary, secondary, etc.)
- **Composition over inheritance**: Use slots and children for flexibility
- **Error handling**: Include proper error states and validation
- **Loading states**: Add loading indicators where appropriate

## Accessibility Requirements
- **Focus management**: All interactive elements must be keyboard accessible
- **ARIA attributes**: Proper roles, labels, and descriptions
- **Color contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Screen reader support**: Semantic HTML and proper labeling
- **Motion preferences**: Respect `prefers-reduced-motion` media query

## Testing Standards
- **Unit tests required**: Test component logic, props, and interactions
- **Visual regression**: Use Storybook stories for visual testing
- **Accessibility testing**: Include axe-core tests for WCAG compliance
- **Story files**: Create comprehensive Storybook documentation

## Token Usage
- **Never hardcode values**: Use tokens for all colors, spacing, typography
- **Semantic naming**: Use `primary`, `success`, `error` not `blue`, `red`
- **Scale consistency**: Use established scales (50, 100, 500, 900)
- **Theme variants**: Include both light and dark theme tokens

## Code Quality
- **ESLint compliance**: Follow project ESLint configuration
- **Prettier formatting**: Use consistent code formatting
- **JSDoc comments**: Document complex logic and APIs
- **Error boundaries**: Handle component errors gracefully

## Documentation
- **API documentation**: Clear prop interfaces and examples
- **Usage examples**: Show common use cases and patterns
- **Accessibility notes**: Document accessibility features and requirements
- **Migration guides**: Provide upgrade paths for breaking changes

## Performance
- **Bundle size**: Minimize component bundle impact
- **Tree shaking**: Ensure components can be tree-shaken
- **Memoization**: Use React.memo for expensive components
- **Lazy loading**: Support code splitting where appropriate

## Security
- **Input validation**: Validate all component props
- **XSS prevention**: Sanitize user input and content
- **Dependency security**: Keep dependencies updated and secure
- **Type safety**: Use TypeScript to prevent runtime errors
