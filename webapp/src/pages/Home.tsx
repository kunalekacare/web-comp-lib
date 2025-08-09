import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@design-system/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Web Component Library</h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="/design-system">Design System</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/card-test">Card Test</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/button-test">Button Test</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/simple-test">Simple Test</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Web Component Library
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive design system built with shadcn/ui, design tokens, and Tailwind CSS v4. 
            Create beautiful, accessible, and consistent user interfaces.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/design-system">Explore Components</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/your-org/web-comp-lib" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Design System?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Design Tokens
                </CardTitle>
                <CardDescription>
                  Centralized design system with flexible token architecture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-brand support</li>
                  <li>• Light & dark themes</li>
                  <li>• Platform-specific outputs</li>
                  <li>• CSS custom properties</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🧩</span>
                  shadcn/ui Components
                </CardTitle>
                <CardDescription>
                  High-quality React components built on Radix UI primitives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Accessible by default</li>
                  <li>• TypeScript support</li>
                  <li>• Customizable variants</li>
                  <li>• Tree-shakable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Modern Stack
                </CardTitle>
                <CardDescription>
                  Built with the latest technologies for optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Tailwind CSS v4</li>
                  <li>• React 19</li>
                  <li>• Vite build tool</li>
                  <li>• Style Dictionary</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>
                  Get started with our design system in just a few steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">1. Install the package</h4>
                    <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                      <code>npm install @design-system/ui</code>
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">2. Import design tokens</h4>
                    <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                      <code>{`import '@design-system/ui/dist/tokens.css';`}</code>
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">3. Use components</h4>
                    <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                      <code>{`import { Button, Card } from '@design-system/ui';

function App() {
  return (
    <Card>
      <Button>Hello World</Button>
    </Card>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Explore our comprehensive component library and design tokens
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/design-system">View Design System</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Built with ❤️ using shadcn/ui, Radix UI, and Tailwind CSS</p>
          <p className="text-sm mt-2">
            Design tokens powered by Style Dictionary
          </p>
        </div>
      </footer>
    </div>
  );
}
