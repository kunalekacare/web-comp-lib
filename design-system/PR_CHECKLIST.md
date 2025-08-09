# Design System PR Checklist

## Pre-Submission Checklist

### Code Quality
- [ ] Uses design tokens exclusively (no hardcoded colors, spacing, or typography)
- [ ] No hex values or raw pixel values in components
- [ ] Follows TypeScript patterns and has proper interfaces
- [ ] ESLint passes with no errors or warnings
- [ ] Prettier formatting applied
- [ ] No console.log or debug code left in

### Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Proper ARIA attributes and labels included
- [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text)
- [ ] Focus indicators are visible and logical
- [ ] Screen reader support tested
- [ ] Accessibility tests pass (axe-core)

### Testing
- [ ] Unit tests added/updated for new functionality
- [ ] All tests pass
- [ ] Visual regression tests added (if applicable)
- [ ] Storybook stories created/updated
- [ ] Component tested in both light and dark themes

### Documentation
- [ ] Component API documented
- [ ] Usage examples provided
- [ ] Accessibility notes included
- [ ] Migration guide added (if breaking changes)
- [ ] Changelog entry prepared

### Design System Standards
- [ ] Component follows established patterns
- [ ] Uses BaseProps interface
- [ ] Supports theme variants
- [ ] Includes error handling
- [ ] Has loading states where appropriate
- [ ] No breaking changes without major version bump

### Performance
- [ ] Bundle size impact assessed
- [ ] Tree shaking works correctly
- [ ] No unnecessary re-renders
- [ ] Lazy loading implemented where appropriate

## Review Checklist

### Self-Review
- [ ] Code reviewed against checklist
- [ ] All automated checks pass
- [ ] Manual testing completed
- [ ] Documentation updated
- [ ] No sensitive information exposed

### Peer Review
- [ ] At least one team member reviewed
- [ ] Accessibility expert reviewed (if applicable)
- [ ] Design system maintainer approved
- [ ] All feedback addressed

## Release Checklist

### Pre-Release
- [ ] Version bumped in package.json
- [ ] Changelog updated with all changes
- [ ] Breaking changes documented
- [ ] Migration guide provided (if needed)
- [ ] All tests pass in CI/CD

### Release
- [ ] Build artifacts generated
- [ ] Package published to npm
- [ ] GitHub release created
- [ ] Team notified of changes
- [ ] Documentation updated

## Breaking Changes Checklist

### Planning
- [ ] Breaking change identified and documented
- [ ] Impact on consumers assessed
- [ ] Migration strategy planned
- [ ] Timeline for deprecation set

### Implementation
- [ ] Deprecation warnings added
- [ ] Migration guide created
- [ ] Examples updated
- [ ] Team communication sent

### Release
- [ ] Major version bump
- [ ] Breaking changes highlighted in changelog
- [ ] Migration guide published
- [ ] Support for previous version maintained
