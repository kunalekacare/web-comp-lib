import React from 'react';
import { LoginCard, Button, Card, CardContent, CardHeader, CardTitle } from './src/index';

// Example usage of the design system components
export function Demo() {
  const handleLogin = async (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="space-y-8">
        {/* LoginCard Example */}
        <LoginCard
          title="Welcome Back"
          subtitle="Sign in to your account to continue"
          onSubmit={handleLogin}
          onForgotPassword={handleForgotPassword}
          isLoading={false}
          errorMessage=""
        />

        {/* Other Components Example */}
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Design System Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="default">Default Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
