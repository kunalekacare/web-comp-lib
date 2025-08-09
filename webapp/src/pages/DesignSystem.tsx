import { useState } from 'react';
import { 
  Button, 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  Input,
  Label,
  LoginCard
} from '@design-system/ui';

export default function DesignSystem() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Design System</h1>
              <p className="text-muted-foreground">A comprehensive component library built with shadcn/ui and design tokens</p>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>
                Our design system combines the power of shadcn/ui components with a flexible token-based architecture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <h3 className="font-semibold mb-2">Design Tokens</h3>
                  <p className="text-sm text-muted-foreground">
                    Centralized design tokens for colors, spacing, typography, and more
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🧩</div>
                  <h3 className="font-semibold mb-2">shadcn/ui Components</h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality, accessible React components built on Radix UI primitives
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="font-semibold mb-2">Tailwind CSS v4</h3>
                  <p className="text-sm text-muted-foreground">
                    Latest CSS-first approach with design token integration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Button Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Button Component</CardTitle>
              <CardDescription>
                Versatile button component with multiple variants and sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Variants</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Sizes</h4>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🔍</Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">States</h4>
                <div className="flex flex-wrap gap-2">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-50">Loading...</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Card Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>
                Flexible card component for content containers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Card</CardTitle>
                    <CardDescription>
                      A simple card with header, content, and footer
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is the card content area where you can put any content.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>
                      Cards can contain interactive elements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Submit</Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Form Components Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
              <CardDescription>
                Input and label components for building forms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" placeholder="Enter your message" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Choose a username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" placeholder="https://example.com" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* LoginCard Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>LoginCard Component</CardTitle>
              <CardDescription>
                Complete login form component with built-in validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto">
                <LoginCard
                  title="Design System Demo"
                  subtitle="Sign in to explore our components"
                  onSubmit={async (email, password) => {
                    console.log('Login attempt:', { email, password });
                    alert('Login functionality would be implemented here');
                  }}
                  onForgotPassword={() => {
                    alert('Forgot password functionality would be implemented here');
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Design Tokens Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Design Tokens</CardTitle>
              <CardDescription>
                CSS custom properties generated from our token system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Color Tokens</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-primary"></div>
                      <span className="text-sm">--color-primary-500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-secondary"></div>
                      <span className="text-sm">--color-secondary-500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-background border"></div>
                      <span className="text-sm">--color-background</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-foreground"></div>
                      <span className="text-sm">--color-foreground</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Spacing Tokens</h4>
                  <div className="space-y-2 text-sm">
                    <div>--spacing-1: 0.25rem</div>
                    <div>--spacing-2: 0.5rem</div>
                    <div>--spacing-4: 1rem</div>
                    <div>--spacing-8: 2rem</div>
                    <div>--spacing-16: 4rem</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architecture Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>System Architecture</CardTitle>
              <CardDescription>
                How our design system is structured and built
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">1. Design Tokens</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    JSON-based token definitions processed by Style Dictionary
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Colors and themes</li>
                    <li>• Typography scales</li>
                    <li>• Spacing system</li>
                    <li>• Border radius</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">2. Component Library</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    React components built with shadcn/ui and Radix UI
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Accessible by default</li>
                    <li>• TypeScript support</li>
                    <li>• Customizable variants</li>
                    <li>• Tree-shakable</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">3. Integration</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Seamless integration with Tailwind CSS v4
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• CSS custom properties</li>
                    <li>• Dark mode support</li>
                    <li>• Responsive design</li>
                    <li>• Performance optimized</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground">
          <p>Built with ❤️ using shadcn/ui, Radix UI, and Tailwind CSS</p>
          <p className="text-sm mt-2">
            Design tokens powered by Style Dictionary
          </p>
        </footer>
      </div>
    </div>
  );
}
