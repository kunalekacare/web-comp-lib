import { Button } from '@design-system/ui';
import { useEffect } from 'react';

export default function ButtonTest() {
  // Debug logging for page load
  useEffect(() => {
    console.log('📄 ButtonTest page loaded');
    
    // Check for button elements and their styles
    setTimeout(() => {
      const buttons = document.querySelectorAll('button');
      console.log('🔍 Found buttons:', buttons.length);
      
      buttons.forEach((button, index) => {
        const computedStyle = getComputedStyle(button);
        console.log(`Button ${index + 1}:`);
        console.log('  - Classes:', button.className);
        console.log('  - Padding left:', computedStyle.paddingLeft);
        console.log('  - Padding right:', computedStyle.paddingRight);
        console.log('  - Background color:', computedStyle.backgroundColor);
        console.log('  - Height:', computedStyle.height);
        console.log('  - Cursor:', computedStyle.cursor);
      });
    }, 200);
  }, []);

  const handleButtonClick = (buttonType: string) => {
    console.log(`🖱️ Button clicked: ${buttonType}`);
    alert(`${buttonType} button clicked!`);
  };

  const handleButtonHover = (buttonType: string) => {
    console.log(`🖱️ Button hover: ${buttonType}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Button Component Test</h1>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Basic Button</h2>
        <Button 
          onClick={() => handleButtonClick('Basic')}
          onMouseEnter={() => handleButtonHover('Basic')}
        >
          Click Me
        </Button>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button 
            variant="default"
            onClick={() => handleButtonClick('Default')}
            onMouseEnter={() => handleButtonHover('Default')}
          >
            Default
          </Button>
          <Button 
            variant="destructive"
            onClick={() => handleButtonClick('Destructive')}
            onMouseEnter={() => handleButtonHover('Destructive')}
          >
            Destructive
          </Button>
          <Button 
            variant="outline"
            onClick={() => handleButtonClick('Outline')}
            onMouseEnter={() => handleButtonHover('Outline')}
          >
            Outline
          </Button>
          <Button 
            variant="secondary"
            onClick={() => handleButtonClick('Secondary')}
            onMouseEnter={() => handleButtonHover('Secondary')}
          >
            Secondary
          </Button>
          <Button 
            variant="ghost"
            onClick={() => handleButtonClick('Ghost')}
            onMouseEnter={() => handleButtonHover('Ghost')}
          >
            Ghost
          </Button>
          <Button 
            variant="link"
            onClick={() => handleButtonClick('Link')}
            onMouseEnter={() => handleButtonHover('Link')}
          >
            Link
          </Button>
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Button Sizes</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button 
            size="sm"
            onClick={() => handleButtonClick('Small')}
            onMouseEnter={() => handleButtonHover('Small')}
          >
            Small
          </Button>
          <Button 
            size="default"
            onClick={() => handleButtonClick('Default Size')}
            onMouseEnter={() => handleButtonHover('Default Size')}
          >
            Default
          </Button>
          <Button 
            size="lg"
            onClick={() => handleButtonClick('Large')}
            onMouseEnter={() => handleButtonHover('Large')}
          >
            Large
          </Button>
          <Button 
            size="icon"
            onClick={() => handleButtonClick('Icon')}
            onMouseEnter={() => handleButtonHover('Icon')}
          >
            🔍
          </Button>
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Interactive Test</h2>
        <p>Hover over and click these buttons:</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button onClick={() => handleButtonClick('Interactive Default')}>Click Me</Button>
          <Button variant="outline" onClick={() => handleButtonClick('Interactive Outline')}>Outline</Button>
          <Button variant="destructive" onClick={() => handleButtonClick('Interactive Destructive')}>Destructive</Button>
          <Button variant="secondary" onClick={() => handleButtonClick('Interactive Secondary')}>Secondary</Button>
          <Button variant="ghost" onClick={() => handleButtonClick('Interactive Ghost')}>Ghost</Button>
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Button States</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button onClick={() => handleButtonClick('Normal')}>Normal</Button>
          <Button disabled onClick={() => handleButtonClick('Disabled')}>Disabled</Button>
          <Button className="opacity-50" onClick={() => handleButtonClick('Loading')}>Loading...</Button>
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Size Comparison</h2>
        <p>Testing different sizes with the same text:</p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="sm" onClick={() => handleButtonClick('Small Text')}>Button Text</Button>
          <Button size="default" onClick={() => handleButtonClick('Default Text')}>Button Text</Button>
          <Button size="lg" onClick={() => handleButtonClick('Large Text')}>Button Text</Button>
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Debug Information</h2>
        <button 
          onClick={() => {
            console.log('🔍 Manual debug check...');
            const buttons = document.querySelectorAll('button');
            buttons.forEach((btn, i) => {
              const style = getComputedStyle(btn);
              console.log(`Button ${i}:`, {
                className: btn.className,
                paddingLeft: style.paddingLeft,
                paddingRight: style.paddingRight,
                backgroundColor: style.backgroundColor,
                cursor: style.cursor
              });
            });
          }}
          style={{ padding: '10px', background: '#f0f0f0', border: '1px solid #ccc' }}
        >
          Check All Button Styles
        </button>
      </div>
    </div>
  );
}
