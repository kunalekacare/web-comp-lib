import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// Import design system CSS first to establish theme variables and Tailwind configuration
import '@design-system/ui/dist/globals.css'
import './index.css'

// Debug logging for CSS and component loading
console.log('🚀 Starting webapp initialization...');

// Check if CSS variables are loaded
const checkCSSVariables = () => {
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  
  console.log('🔍 Checking CSS variables...');
  
  // Check design system variables
  const primaryColor = computedStyle.getPropertyValue('--color-primary-500');
  const spacing8 = computedStyle.getPropertyValue('--spacing-xl');
  const debugLoaded = computedStyle.getPropertyValue('--debug-css-loaded');
  
  console.log('📊 CSS Variables Status:');
  console.log('  - Primary color:', primaryColor || 'NOT FOUND');
  console.log('  - Spacing 8:', spacing8 || 'NOT FOUND');
  console.log('  - Debug loaded:', debugLoaded || 'NOT FOUND');
  
  // Check Tailwind classes
  const testElement = document.createElement('div');
  testElement.className = 'px-8 bg-primary';
  document.body.appendChild(testElement);
  
  const testComputedStyle = getComputedStyle(testElement);
  const paddingLeft = testComputedStyle.paddingLeft;
  const backgroundColor = testComputedStyle.backgroundColor;
  
  console.log('🎨 Tailwind Classes Test:');
  console.log('  - px-8 padding:', paddingLeft);
  console.log('  - bg-primary color:', backgroundColor);
  
  document.body.removeChild(testElement);
  
  return {
    primaryColor: primaryColor || 'NOT FOUND',
    spacing8: spacing8 || 'NOT FOUND',
    debugLoaded: debugLoaded || 'NOT FOUND',
    paddingLeft,
    backgroundColor
  };
};

// Run CSS check after a short delay to ensure styles are loaded
setTimeout(() => {
  const cssStatus = checkCSSVariables();
  console.log('✅ CSS Status Check Complete:', cssStatus);
}, 100);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
