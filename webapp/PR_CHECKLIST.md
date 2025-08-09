# Web Application PR Checklist

## Pre-Submission Checklist

### Code Quality
- [ ] Uses only public APIs of the design system
- [ ] No deep imports from design system
- [ ] Follows TypeScript patterns and has proper interfaces
- [ ] ESLint passes with no errors or warnings
- [ ] Prettier formatting applied
- [ ] No console.log or debug code left in
- [ ] No hardcoded styling values

### Design System Integration
- [ ] Uses design system components instead of custom implementations
- [ ] Extends components with props and slots, not CSS overrides
- [ ] Uses design tokens for all styling (CSS vars or Tailwind theme)
- [ ] Components work in both light and dark themes
- [ ] No arbitrary Tailwind classes unless reviewed
- [ ] Follows established design system patterns

### Accessibility
- [ ] All UI states covered (loading, error, disabled)
- [ ] All interactive elements are keyboard accessible
- [ ] Proper ARIA attributes and labels included
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators are visible and logical
- [ ] Screen reader support tested
- [ ] Accessibility tests pass (axe-core)

### Testing
- [ ] Unit tests added/updated for new functionality
- [ ] Integration tests for feature workflows
- [ ] All tests pass
- [ ] Basic e2e smoke test added (if applicable)
- [ ] Component tested in both light and dark themes
- [ ] Cross-browser testing completed

### Feature Development
- [ ] Feature follows established architecture patterns
- [ ] Business logic separated from UI components
- [ ] Custom hooks used for reusable logic
- [ ] Error handling implemented
- [ ] Loading states included
- [ ] i18n-ready copy used

### Performance
- [ ] Bundle size impact assessed
- [ ] Code splitting implemented where appropriate
- [ ] Lazy loading used for heavy components
- [ ] No unnecessary re-renders
- [ ] Performance benchmarks met

### Security
- [ ] Input validation implemented
- [ ] No sensitive information logged
- [ ] CSRF protection included (if applicable)
- [ ] XSS prevention measures in place
- [ ] Authentication flows secure

## Review Checklist

### Self-Review
- [ ] Code reviewed against checklist
- [ ] All automated checks pass
- [ ] Manual testing completed
- [ ] Documentation updated
- [ ] No sensitive information exposed
- [ ] Design system integration verified

### Peer Review
- [ ] At least one team member reviewed
- [ ] Accessibility expert reviewed (if applicable)
- [ ] Design system maintainer reviewed integration
- [ ] All feedback addressed
- [ ] Feature requirements met

## Feature-Specific Checklist

### Authentication Features
- [ ] Server actions used where applicable
- [ ] Validation schemas centralized
- [ ] Error handling comprehensive
- [ ] Security measures implemented
- [ ] Analytics events added
- [ ] Accessibility requirements met

### Form Components
- [ ] Uses design system form components
- [ ] Validation implemented
- [ ] Error states handled
- [ ] Loading states included
- [ ] Accessibility labels and descriptions
- [ ] Keyboard navigation works

### Data Display
- [ ] Uses design system data components
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Empty states included
- [ ] Responsive design implemented
- [ ] Accessibility features included

## Analytics and Monitoring

### Analytics Events
- [ ] Page views tracked
- [ ] User interactions tracked
- [ ] Error events tracked
- [ ] Performance metrics tracked
- [ ] Design system usage tracked (if applicable)

### Error Tracking
- [ ] Error boundaries implemented
- [ ] Error events logged
- [ ] User-friendly error messages
- [ ] Recovery options provided

## Documentation

### Code Documentation
- [ ] JSDoc comments for complex logic
- [ ] README updated for new features
- [ ] API documentation updated
- [ ] Component usage examples provided

### User Documentation
- [ ] Feature documentation updated
- [ ] User guides updated (if applicable)
- [ ] Migration guides provided (if breaking changes)
- [ ] Release notes prepared

## Deployment Checklist

### Pre-Deployment
- [ ] All tests pass in CI/CD
- [ ] Build succeeds without warnings
- [ ] Bundle size within limits
- [ ] Performance benchmarks met
- [ ] Security scan passed

### Post-Deployment
- [ ] Feature tested in staging
- [ ] Monitoring alerts configured
- [ ] Rollback plan prepared
- [ ] Team notified of deployment
- [ ] Documentation updated

## Design System Version Management

### Version Updates
- [ ] Design system version checked for updates
- [ ] Breaking changes reviewed
- [ ] Migration plan created (if needed)
- [ ] Tests updated for new versions
- [ ] Documentation updated

### Version Pinning
- [ ] Version pinned for stability (if needed)
- [ ] Team notified of version changes
- [ ] Rollback plan prepared
- [ ] Monitoring for issues

## Quality Gates

### Automated Checks
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] Accessibility tests pass
- [ ] TypeScript compilation succeeds
- [ ] ESLint passes
- [ ] Bundle size within limits

### Manual Checks
- [ ] Feature functionality verified
- [ ] Design system integration verified
- [ ] Accessibility manually tested
- [ ] Cross-browser compatibility verified
- [ ] Performance manually tested
- [ ] Security review completed
