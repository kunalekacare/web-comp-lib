import React from 'react';
import { cn } from '../../lib/utils';

export type BlurInProps = {
  text?: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delayMs?: number;
  children?: React.ReactNode;
};

let blurInStylesInjected = false;

function ensureStylesInjected() {
  if (typeof document === 'undefined' || blurInStylesInjected) return;
  const style = document.createElement('style');
  style.setAttribute('data-design-system', 'blur-in');
  style.textContent = `
    @keyframes ds-blur-in {
      from { filter: blur(12px); opacity: 0; transform: translateY(8px); }
      to { filter: blur(0); opacity: 1; transform: none; }
    }
    .ds-blur-in { animation: ds-blur-in 700ms ease both; }
  `;
  document.head.appendChild(style);
  blurInStylesInjected = true;
}

export function BlurIn({ text, as = 'span', className, delayMs = 0, children }: BlurInProps) {
  React.useEffect(() => {
    ensureStylesInjected();
  }, []);

  const Component = as as any;
  return (
    <Component
      className={cn('ds-blur-in', className)}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {text ?? children}
    </Component>
  );
}

export default BlurIn;