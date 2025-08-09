import { Button } from '@design-system/ui';

export default function ButtonTest() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Button Component Test</h1>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Basic Button</h2>
        <Button>Click Me</Button>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Interactive Test</h2>
        <p>Hover over and click these buttons:</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button onClick={() => alert('Default button clicked!')}>Click Me</Button>
          <Button variant="outline" onClick={() => alert('Outline button clicked!')}>Outline</Button>
          <Button variant="destructive" onClick={() => alert('Destructive button clicked!')}>Destructive</Button>
        </div>
      </div>
    </div>
  );
}
