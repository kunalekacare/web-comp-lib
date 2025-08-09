import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button } from '@design-system/ui';

export default function CardTest() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Card Component Test</h1>
      
      {/* Debug Section */}
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>CSS Variables Status:</h3>
        <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
          <p>✅ --card: #ffffff (white background) - Should work now</p>
          <p>✅ --card-foreground: #0a0a0a (dark text) - Should work now</p>
          <p>✅ --border: #e5e5e5 (light gray border) - Should work now</p>
          <p>✅ --radius: 0.5rem (border radius) - Should work now</p>
          <p>✅ --primary: #6b5ce0 (purple for buttons) - Should work now</p>
        </div>
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          <strong>Both Cards and Buttons should now work correctly!</strong>
        </p>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Basic Card</h2>
        <Card style={{ maxWidth: '400px', marginBottom: '20px' }}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area. The card should have proper styling with background, border, and shadow.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Card with Form Elements</h2>
        <Card style={{ maxWidth: '400px', marginBottom: '20px' }}>
          <CardHeader>
            <CardTitle>Login Form</CardTitle>
            <CardDescription>Enter your credentials below</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input 
                type="email" 
                placeholder="Email" 
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid var(--border)', 
                  borderRadius: '4px',
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)'
                }} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid var(--border)', 
                  borderRadius: '4px',
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)'
                }} 
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button style={{ width: '100%' }}>Sign In</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Multiple Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
              <CardDescription>Description for feature 1</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for feature 1</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
              <CardDescription>Description for feature 2</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for feature 2</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
              <CardDescription>Description for feature 3</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for feature 3</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Card Styling Verification</h2>
        <p>Check the following styling elements:</p>
        <ul>
          <li>✅ Background color (should be white/light)</li>
          <li>✅ Border (should be visible)</li>
          <li>✅ Border radius (should be rounded)</li>
          <li>✅ Shadow (should have subtle shadow)</li>
          <li>✅ Text color (should be dark/readable)</li>
        </ul>
      </div>
    </div>
  );
}
