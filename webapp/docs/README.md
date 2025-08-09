# Web Application

A modern web application built with React, consuming the design system for consistent UI components and design tokens.

## Purpose

This web application serves as the primary user interface, demonstrating:
- **Design system integration**: How to consume and extend the design system
- **Feature development**: Implementation of business features using design system components
- **Best practices**: Examples of proper component usage and patterns
- **Accessibility**: Real-world accessibility implementation

## Architecture

### Technology Stack
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with design system tokens
- **State Management**: React Context + hooks
- **Routing**: React Router
- **Build Tool**: Vite
- **Testing**: Jest + React Testing Library
- **Design System**: @design-system/ui

### Project Structure
```
src/
├── components/          # App-specific components
├── features/           # Feature-based organization
│   ├── auth/          # Authentication feature
│   ├── dashboard/     # Dashboard feature
│   └── settings/      # Settings feature
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

### Design System Integration
The application consumes the design system package:
```bash
npm install @design-system/ui
```

## Development Guidelines

### Component Usage
- **Use design system components**: Prefer design system components over custom implementations
- **Extend, don't override**: Use props and slots to customize components
- **No deep imports**: Only use public APIs from the design system
- **Token consumption**: Use design tokens for all styling

### Feature Development
- **Feature-based organization**: Group related components, hooks, and utilities
- **Separation of concerns**: Keep business logic separate from UI components
- **Type safety**: Use TypeScript for all new code
- **Testing**: Write tests for business logic and user interactions

### Styling Approach
- **Token-driven**: Use design tokens for all styling decisions
- **Tailwind classes**: Leverage Tailwind with design system theme
- **CSS modules**: Use for component-specific styles when needed
- **Responsive design**: Mobile-first approach with design system breakpoints

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Design system package installed

### Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

### Environment Configuration
Create `.env.local` for local development:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Web Application
```

## Feature Development Workflow

### 1. Feature Planning
- Define feature requirements
- Identify design system components needed
- Plan component hierarchy and data flow
- Consider accessibility requirements

### 2. Implementation
- Create feature directory structure
- Implement business logic
- Build UI components using design system
- Add comprehensive tests

### 3. Integration
- Integrate with existing features
- Ensure consistent styling and behavior
- Test accessibility and user experience
- Update documentation

### 4. Review
- Code review against guidelines
- Accessibility review
- Design system integration review
- Performance testing

## Design System Integration

### Component Consumption
```jsx
import { Button, Card, Input } from '@design-system/ui';

function LoginForm() {
  return (
    <Card>
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      <Button variant="primary">
        Sign In
      </Button>
    </Card>
  );
}
```

### Token Usage
```css
/* Using CSS custom properties */
.login-page {
  background-color: var(--color-bg-primary);
  padding: var(--spacing-6);
}

/* Using Tailwind classes */
.login-page {
  @apply bg-bg-primary p-6;
}
```

### Theme Integration
```jsx
import { ThemeProvider } from '@design-system/ui';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
```

## Testing Strategy

### Unit Testing
- **Component testing**: Test component behavior and interactions
- **Hook testing**: Test custom hooks and business logic
- **Utility testing**: Test helper functions and utilities

### Integration Testing
- **Feature testing**: Test complete feature workflows
- **API integration**: Test data fetching and state management
- **Routing testing**: Test navigation and route protection

### Accessibility Testing
- **Automated testing**: Use axe-core for accessibility violations
- **Manual testing**: Keyboard navigation and screen reader testing
- **User testing**: Real user accessibility testing

## Performance Considerations

### Bundle Optimization
- **Code splitting**: Split by routes and features
- **Lazy loading**: Load components and pages on demand
- **Tree shaking**: Ensure unused code is eliminated

### Runtime Performance
- **Memoization**: Use React.memo and useMemo appropriately
- **State optimization**: Minimize unnecessary re-renders
- **Image optimization**: Use appropriate image formats and sizes

## Deployment

### Build Process
```bash
# Build for production
npm run build

# Preview build
npm run preview

# Analyze bundle
npm run analyze
```

### Environment Configuration
- **Development**: Local development with hot reload
- **Staging**: Production-like environment for testing
- **Production**: Optimized build for live deployment

## Monitoring and Analytics

### Error Tracking
- **Error boundaries**: Catch and report component errors
- **Performance monitoring**: Track Core Web Vitals
- **User analytics**: Monitor user interactions and flows

### Health Checks
- **Build health**: Monitor build success and bundle size
- **Test coverage**: Maintain high test coverage
- **Accessibility**: Regular accessibility audits

## Contributing

### Development Process
1. **Feature branch**: Create feature branch from main
2. **Implementation**: Follow development guidelines
3. **Testing**: Add comprehensive tests
4. **Review**: Submit pull request for review
5. **Integration**: Merge after approval

### Code Standards
- **TypeScript**: Use strict TypeScript configuration
- **ESLint**: Follow project ESLint rules
- **Prettier**: Use consistent code formatting
- **Conventional commits**: Use conventional commit messages

### Documentation
- **Code comments**: Document complex logic
- **README updates**: Update documentation for new features
- **API documentation**: Document new APIs and interfaces

## Resources

### Documentation
- [Design System Documentation](../design-system/docs/)
- [Feature Development Guide](./feature-workflow.md)
- [Authentication Specification](./auth/login-spec.md)
- [Architecture Overview](./architecture.md)

### Tools
- [Design System Package](https://npmjs.com/package/@design-system/ui)
- [Storybook](http://localhost:6006) - Component documentation
- [Chromatic](https://chromatic.com) - Visual regression testing

### Support
- **Issues**: Create GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for questions
- **Team Chat**: Use team chat for quick questions and coordination
