import { Button } from '@design-system/ui';

export default function Test() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Page</h1>
      <p>Testing if components and CSS are working...</p>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Button Test</h2>
        <Button>Test Button</Button>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>CSS Classes Test</h2>
        <div className="bg-red-500 text-white p-4 rounded">
          This should have a red background
        </div>
        <div className="bg-blue-500 text-white p-4 rounded mt-2">
          This should have a blue background
        </div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Design Token Test</h2>
        <div style={{ backgroundColor: 'var(--color-primary-500)', color: 'white', padding: '10px', borderRadius: '4px' }}>
          This uses CSS custom properties directly
        </div>
      </div>
    </div>
  );
}
