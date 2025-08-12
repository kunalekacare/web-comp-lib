import React from 'react';
import { cn } from '../../lib/utils';

export type AnimatedGridProps = {
  className?: string;
  maxOpacity?: number;
  fade?: boolean;
};

let gridStylesInjected = false;
function ensureStylesInjected() {
  if (typeof document === 'undefined' || gridStylesInjected) return;
  const style = document.createElement('style');
  style.setAttribute('data-design-system', 'animated-grid');
  style.textContent = `
    .ds-animated-grid {
      position: relative;
      background-image:
        radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.18), transparent 40%),
        radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px);
      background-size: 100% 100%, 22px 22px;
      animation: ds-grid-shimmer 6s ease-in-out infinite;
      transition: opacity 400ms ease;
    }
    @keyframes ds-grid-shimmer {
      0%, 100% { background-position: 50% 50%, 0 0; }
      50% { background-position: 48% 52%, 11px 11px; }
    }
    .ds-animated-grid[data-fade="true"] { opacity: 0.6; }
    .ds-animated-grid:hover { opacity: 1; }
  `;
  document.head.appendChild(style);
  gridStylesInjected = true;
}

export function AnimatedGrid({ className, maxOpacity = 0.6, fade = false }: AnimatedGridProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => { ensureStylesInjected(); }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--x', `${x}%`);
    el.style.setProperty('--y', `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      data-fade={fade}
      className={cn('ds-animated-grid', className)}
      style={{ opacity: maxOpacity }}
    />
  );
}

export default AnimatedGrid;