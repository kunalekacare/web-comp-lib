# Contributing

Thank you for contributing to the design system! This document outlines the development workflow, standards, and processes for contributing.

## Development Workflow

### Getting Started

#### 1. Setup Development Environment
```bash
# Clone the repository
git clone <repository-url>
cd design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

#### 2. Create Feature Branch
```bash
# Create and checkout feature branch
git checkout -b feature/new-component

# Or for bug fixes
git checkout -b fix/component-issue
```

#### 3. Development Process
1. **Plan**: Define component API and requirements
2. **Implement**: Build component with tests and stories
3. **Test**: Run all tests and visual regression tests
4. **Document**: Update documentation and examples
5. **Review**: Self-review against checklist
6. **Submit**: Create pull request

### Branch Naming Convention
- `feature/component-name` - New components or features
- `fix/issue-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/component-name` - Code refactoring
- `chore/task-description` - Maintenance tasks

## Component Development

### Creating New Components

#### 1. Component Structure
```
components/
├── ComponentName/
│   ├── ComponentName.tsx
│   ├── ComponentName.test.tsx
│   ├── ComponentName.stories.tsx
│   ├── ComponentName.module.css
│   └── index.ts
```

#### 2. Component Template
```typescript
import React from 'react';
import { BaseProps } from '../types';

export interface ComponentNameProps extends BaseProps {
  // Define component-specific props
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`component-name component-name--${variant} component-name--${size} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};
```

#### 3. Component Requirements
- [ ] Uses design tokens exclusively
- [ ] Implements accessibility features
- [ ] Includes comprehensive tests
- [ ] Has Storybook documentation
- [ ] Follows naming conventions
- [ ] Supports theme variants
- [ ] Includes error handling
- [ ] Has loading states where appropriate

### Component API Design

#### Principles
1. **Consistency**: Follow established patterns
2. **Flexibility**: Support common use cases
3. **Accessibility**: Built-in accessibility features
4. **Composability**: Work well with other components
5. **Performance**: Optimized for common scenarios

#### API Guidelines
```typescript
// ✅ Good - Clear, flexible API
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

// ❌ Bad - Too rigid, unclear API
interface ButtonProps {
  style: 'blue' | 'red' | 'green';
  width: number;
  height: number;
  text: string;
  action: () => void;
}
```

## Testing Requirements

### Unit Tests
Every component must have comprehensive unit tests:

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName>Test content</ComponentName>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick}>Click me</ComponentName>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes', () => {
    render(<ComponentName variant="secondary">Test</ComponentName>);
    expect(screen.getByText('Test')).toHaveClass('component-name--secondary');
  });
});
```

### Visual Regression Tests
Use Chromatic or similar tool for visual regression testing:

```typescript
// ComponentName.stories.tsx
export default {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const Default = {
  args: {
    children: 'Default button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary button',
  },
};
```

### Accessibility Tests
```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should not have accessibility violations', async () => {
  const { container } = render(<ComponentName>Test</ComponentName>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Accessibility Standards

### Required Accessibility Features

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Focus indicators must be visible
- Tab order must be logical
- Escape key should close modals/dropdowns

#### Screen Reader Support
- Proper ARIA labels and descriptions
- Semantic HTML elements
- Live regions for dynamic content
- Announcements for state changes

#### Color and Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Color alone cannot convey information
- High contrast mode support

### Accessibility Testing Checklist
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Motion respects user preferences
- [ ] ARIA attributes are correct
- [ ] Error states are accessible

## Code Standards

### TypeScript
- Use TypeScript for all components
- Define proper interfaces for props
- Use strict mode configuration
- Avoid `any` type

### Styling
- Use CSS modules or styled-components
- Follow BEM naming convention
- Use design tokens exclusively
- Support both light and dark themes

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write self-documenting code
- Add JSDoc comments for complex logic

### Performance
- Use React.memo for expensive components
- Avoid unnecessary re-renders
- Optimize bundle size
- Lazy load when appropriate

## Documentation Standards

### Component Documentation
Every component must include:
- Purpose and usage
- API reference
- Examples and variants
- Accessibility notes
- Migration guides (if applicable)

### Storybook Stories
```typescript
export default {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'A reusable button component with multiple variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
  },
};
```

## Pull Request Process

### PR Checklist
- [ ] Component uses design tokens exclusively
- [ ] All tests pass
- [ ] Visual regression tests pass
- [ ] Accessibility tests pass
- [ ] Documentation is updated
- [ ] Storybook stories are added
- [ ] Code follows style guidelines
- [ ] No breaking changes (or properly documented)

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Unit tests added/updated
- [ ] Visual regression tests pass
- [ ] Accessibility tests pass
- [ ] Manual testing completed

## Screenshots
Add screenshots for visual changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

### Review Process
1. **Self-review**: Author reviews against checklist
2. **Automated checks**: CI/CD pipeline runs tests
3. **Peer review**: At least one team member reviews
4. **Accessibility review**: Accessibility expert reviews
5. **Final approval**: Maintainer approves and merges

## Token Development

### Adding New Tokens
1. Add token definition to appropriate JSON file
2. Follow naming conventions
3. Include both light and dark variants
4. Update documentation
5. Test in components

### Token Guidelines
- Use semantic names (primary, success, error)
- Include scale numbers (50, 100, 500, 900)
- Group related tokens logically
- Document usage examples

## Release Process

### Pre-release Checklist
- [ ] All tests pass
- [ ] Documentation is complete
- [ ] Changelog is updated
- [ ] Version is bumped
- [ ] Build artifacts are generated

### Release Steps
1. Update version in `package.json`
2. Update changelog
3. Build and test
4. Publish to npm
5. Create GitHub release
6. Communicate changes

## Getting Help

### Resources
- [Design System Documentation](./README.md)
- [Component Guidelines](./components.md)
- [Token Documentation](./tokens.md)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Questions
- Create an issue for questions
- Use team chat for quick questions
- Schedule office hours for complex discussions

### Feedback
We welcome feedback on:
- Component APIs and design
- Documentation clarity
- Development workflow
- Testing strategies
- Accessibility improvements
