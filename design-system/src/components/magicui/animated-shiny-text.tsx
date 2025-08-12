import React from 'react';
import { cn } from '../../lib/utils';

export type AnimatedShinyTextProps = {
  className?: string;
  children: React.ReactNode;
};

let shinyStylesInjected = false;
function ensureStylesInjected() {
  if (typeof document === 'undefined' || shinyStylesInjected) return;
  const style = document.createElement('style');
  style.setAttribute('data-design-system', 'animated-shiny-text');
  style.textContent = `
    .ds-shiny-text {
      background: linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 75%, rgba(255,255,255,0) 100%);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: ds-shine 2.5s ease-in-out infinite;
    }
    @keyframes ds-shine {
      0% { background-position: -100% 0; }
      100% { background-position: 200% 0; }
    }
  `;
  document.head.appendChild(style);
  shinyStylesInjected = true;
}

export function AnimatedShinyText({ className, children }: AnimatedShinyTextProps) {
  React.useEffect(() => { ensureStylesInjected(); }, []);
  return <span className={cn('ds-shiny-text', className)}>{children}</span>;
}

export default AnimatedShinyText;