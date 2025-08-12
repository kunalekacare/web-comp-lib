import React from 'react';
import { cn } from '../../lib/utils';

export type ShineBorderProps = {
  className?: string;
  color?: string[];
  children: React.ReactNode;
  rounded?: string;
};

let stylesInjected = false;
function ensureStylesInjected() {
  if (typeof document === 'undefined' || stylesInjected) return;
  const style = document.createElement('style');
  style.setAttribute('data-design-system', 'shine-border');
  style.textContent = `
    .ds-shine-border {
      position: relative;
      isolation: isolate;
    }
    .ds-shine-border::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: inherit;
      background: var(--ds-shine-gradient, linear-gradient(90deg, #A07CFE, #FE8A71, #FFD700));
      background-size: 200% 100%;
      animation: ds-shine-move 3s linear infinite;
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      padding: 1px;
    }
    @keyframes ds-shine-move {
      to { background-position: -200% 0; }
    }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}

export function ShineBorder({ className, color, children, rounded = '1rem' }: ShineBorderProps) {
  React.useEffect(() => { ensureStylesInjected(); }, []);
  return (
    <div
      className={cn('ds-shine-border inline-block', className)}
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore custom CSS var
        '--ds-shine-gradient': color ? `linear-gradient(90deg, ${color.join(',')})` : undefined,
        borderRadius: rounded,
      }}
    >
      <div style={{ borderRadius: rounded }}>
        {children}
      </div>
    </div>
  );
}

export default ShineBorder;