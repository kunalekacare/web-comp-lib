import { Button } from '@design-system/ui';

export default function SimpleTest() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Simple Component Test</h1>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Button Sizes</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔍</Button>
        </div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Interactive Test</h2>
        <p>Hover over these buttons to see the hover states:</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <Button onClick={() => alert('Default button clicked!')}>Click Me</Button>
          <Button variant="outline" onClick={() => alert('Outline button clicked!')}>Outline Click</Button>
          <Button variant="destructive" onClick={() => alert('Destructive button clicked!')}>Destructive</Button>
        </div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Disabled States</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <Button disabled>Disabled Default</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </div>
    </div>
  );
}
