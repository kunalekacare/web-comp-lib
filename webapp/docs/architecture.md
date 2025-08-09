# Web Application Architecture

This document outlines the technical architecture of the web application, including patterns, integrations, and system design decisions.

## System Overview

The web application is built as a modern, scalable React application that consumes the design system for consistent UI components and design tokens.

### Key Characteristics
- **Component-driven**: Built with reusable, composable components
- **Design system integration**: Consistent UI through design system consumption
- **Type-safe**: Full TypeScript support throughout the application
- **Accessible**: Built with accessibility as a first-class concern
- **Performance optimized**: Fast loading and smooth interactions
- **Scalable**: Architecture supports growth and feature expansion

## Architecture Layers

```
┌─────────────────────────────────────┐
│           User Interface             │
│  ┌─────────────────────────────┐    │
│  │        Pages/Routes         │    │
│  │  ┌─────────┐ ┌─────────┐   │    │
│  │  │ Login   │ │Dashboard│   │    │
│  │  └─────────┘ └─────────┘   │    │
│  └─────────────────────────────┘    │
├─────────────────────────────────────┤
│         Feature Layer               │
│  ┌─────────────────────────────┐    │
│  │       Feature Modules       │    │
│  │  ┌─────────┐ ┌─────────┐   │    │
│  │  │  Auth   │ │Settings │   │    │
│  │  └─────────┘ └─────────┘   │    │
│  └─────────────────────────────┘    │
├─────────────────────────────────────┤
│         Business Logic              │
│  ┌─────────────────────────────┐    │
│  │      Services/Hooks         │    │
│  │  ┌─────────┐ ┌─────────┐   │    │
│  │  │ API     │ │ State   │   │    │
│  │  └─────────┘ └─────────┘   │    │
│  └─────────────────────────────┘    │
├─────────────────────────────────────┤
│         Design System               │
│  ┌─────────────────────────────┐    │
│  │    @design-system/ui        │    │
│  │  ┌─────────┐ ┌─────────┐   │    │
│  │  │Tokens   │ │Components│   │    │
│  │  └─────────┘ └─────────┘   │    │
│  └─────────────────────────────┘    │
├─────────────────────────────────────┤
│         Infrastructure              │
│  ┌─────────────────────────────┐    │
│  │    Build/Runtime Tools      │    │
│  │  ┌─────────┐ ┌─────────┐   │    │
│  │  │  Vite   │ │ React   │   │    │
│  │  └─────────┘ └─────────┘   │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

## Technology Stack

### Core Technologies
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with design system tokens
- **Routing**: React Router for client-side routing
- **State Management**: React Context + custom hooks
- **Testing**: Jest + React Testing Library + Playwright

### Design System Integration
- **Package**: @design-system/ui
- **Tokens**: CSS custom properties and Tailwind theme
- **Components**: Reusable UI components
- **Theming**: Light/dark theme support

### Development Tools
- **TypeScript**: Static type checking
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality gates

## Project Structure

```
src/
├── components/              # App-specific components
│   ├── layout/             # Layout components
│   ├── common/             # Shared app components
│   └── ui/                 # UI wrapper components
├── features/               # Feature-based organization
│   ├── auth/              # Authentication feature
│   │   ├── components/    # Auth-specific components
│   │   ├── hooks/         # Auth-related hooks
│   │   ├── services/      # Auth API services
│   │   ├── types/         # Auth type definitions
│   │   └── utils/         # Auth utilities
│   ├── dashboard/         # Dashboard feature
│   └── settings/          # Settings feature
├── hooks/                  # Global custom hooks
├── lib/                    # Utility libraries
│   ├── api/               # API client and utilities
│   ├── auth/              # Authentication utilities
│   ├── storage/           # Local storage utilities
│   └── validation/        # Validation schemas
├── pages/                  # Page components
├── types/                  # Global type definitions
├── utils/                  # Helper functions
└── styles/                 # Global styles
```

## Design System Integration

### Component Consumption Pattern
```typescript
// ✅ Good - Using design system components
import { Button, Card, Input } from '@design-system/ui';

export const LoginForm = () => {
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
};

// ❌ Bad - Creating custom components
export const CustomButton = ({ children, ...props }) => {
  return (
    <button 
      className="bg-blue-500 text-white px-4 py-2 rounded"
      {...props}
    >
      {children}
    </button>
  );
};
```

### Token Usage Pattern
```typescript
// ✅ Good - Using design tokens
const styles = {
  backgroundColor: 'var(--color-bg-primary)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
};

// Using Tailwind with design system theme
<div className="bg-bg-primary p-6 rounded-lg">
  Content
</div>

// ❌ Bad - Hardcoded values
const styles = {
  backgroundColor: '#ffffff',
  padding: '24px',
  borderRadius: '8px',
};
```

### Theme Integration
```typescript
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

## State Management

### Local State
```typescript
// Component-level state
const [formData, setFormData] = useState({
  email: '',
  password: '',
});

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
```

### Global State
```typescript
// Context for global state
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  language: string;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: null,
    theme: 'light',
    language: 'en',
  });

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};
```

### Custom Hooks
```typescript
// Custom hooks for state management
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await authService.login(email, password);
      setUser(user);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { user, isLoading, login };
};
```

## API Integration

### API Client
```typescript
// Centralized API client
class ApiClient {
  private baseURL: string;
  private token: string | null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('auth_token');
  }

  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient(import.meta.env.VITE_API_URL);
```

### Service Layer
```typescript
// Feature-specific services
export class AuthService {
  async login(email: string, password: string): Promise<User> {
    return apiClient.request<User>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async logout(): Promise<void> {
    return apiClient.request<void>('/auth/logout', {
      method: 'POST',
    });
  }
}

export const authService = new AuthService();
```

## Routing and Navigation

### Route Configuration
```typescript
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/dashboard',
        element: <ProtectedRoute><DashboardPage /></ProtectedRoute>,
      },
      {
        path: '/settings',
        element: <ProtectedRoute><SettingsPage /></ProtectedRoute>,
      },
    ],
  },
]);
```

### Protected Routes
```typescript
interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
```

## Error Handling

### Error Boundaries
```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

### API Error Handling
```typescript
// Centralized error handling
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unexpected error occurred';
};

// Usage in components
const handleLogin = async (email: string, password: string) => {
  try {
    await authService.login(email, password);
    navigate('/dashboard');
  } catch (error) {
    setError(handleApiError(error));
  }
};
```

## Performance Optimization

### Code Splitting
```typescript
// Lazy load pages
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

// Lazy load components
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));
```

### Memoization
```typescript
// Memoize expensive components
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});

// Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

### Bundle Optimization
```typescript
// Tree shaking friendly imports
import { Button } from '@design-system/ui';
// Instead of
import { Button } from '@design-system/ui';
```

## Testing Strategy

### Unit Testing
```typescript
// Component testing
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders login form', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
    
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
```

### Integration Testing
```typescript
// Feature testing
describe('Authentication Flow', () => {
  it('completes login process', async () => {
    render(<App />);
    
    // Navigate to login
    fireEvent.click(screen.getByText(/sign in/i));
    
    // Fill form
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    
    // Submit
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    
    // Verify redirect
    await waitFor(() => {
      expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    });
  });
});
```

## Security Considerations

### Input Validation
```typescript
// Client-side validation
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginData = z.infer<typeof loginSchema>;

const validateLoginData = (data: unknown): LoginData => {
  return loginSchema.parse(data);
};
```

### XSS Prevention
```typescript
// Sanitize user input
import DOMPurify from 'dompurify';

const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};
```

### CSRF Protection
```typescript
// Include CSRF tokens in requests
const getCsrfToken = (): string => {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
};

// Add to API requests
const headers = {
  'X-CSRF-Token': getCsrfToken(),
};
```

## Deployment and Build

### Build Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          designSystem: ['@design-system/ui'],
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
```

### Environment Configuration
```typescript
// Environment variables
interface Environment {
  VITE_API_URL: string;
  VITE_APP_NAME: string;
  VITE_ANALYTICS_ID: string;
}

export const env: Environment = {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_ANALYTICS_ID: import.meta.env.VITE_ANALYTICS_ID,
};
```

## Monitoring and Analytics

### Error Tracking
```typescript
// Error tracking service
export const trackError = (error: Error, context?: Record<string, unknown>) => {
  console.error('Error tracked:', error, context);
  // Send to error tracking service
};

// Performance monitoring
export const trackPerformance = (metric: string, value: number) => {
  console.log(`Performance metric: ${metric} = ${value}`);
  // Send to analytics service
};
```

### User Analytics
```typescript
// Analytics service
export const analytics = {
  trackPageView: (page: string) => {
    console.log('Page view:', page);
  },
  trackEvent: (event: string, properties?: Record<string, unknown>) => {
    console.log('Event:', event, properties);
  },
};
```

## Future Considerations

### Planned Improvements
- **Server Components**: React Server Components integration
- **Micro-frontends**: Support for micro-frontend architecture
- **PWA**: Progressive Web App features
- **Offline Support**: Offline-first capabilities

### Scalability
- **Code Splitting**: More granular code splitting
- **Caching**: Advanced caching strategies
- **Performance**: Further performance optimizations
- **Internationalization**: Multi-language support

### Architecture Evolution
- **State Management**: Consider more robust state management
- **API Layer**: GraphQL integration
- **Real-time**: WebSocket integration
- **Mobile**: React Native integration
