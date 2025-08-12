import React from 'react';
import { cn } from '../../lib/utils';

export type MarqueeProps = {
  className?: string;
  children: React.ReactNode;
  pauseOnHover?: boolean;
};

let marqueeStylesInjected = false;
function ensureStylesInjected() {
  if (typeof document === 'undefined' || marqueeStylesInjected) return;
  const style = document.createElement('style');
  style.setAttribute('data-design-system', 'marquee');
  style.textContent = `
    .ds-marquee {
      display: flex;
      overflow: hidden;
      position: relative;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
    .ds-marquee-track {
      display: flex;
      gap: 2rem;
      min-width: 100%;
      animation: ds-marquee var(--duration, 25s) linear infinite;
    }
    .ds-marquee[data-paused="true"] .ds-marquee-track {
      animation-play-state: paused;
    }
    @keyframes ds-marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    @media (prefers-reduced-motion: reduce) {
      .ds-marquee-track { animation: none; }
    }
  `;
  document.head.appendChild(style);
  marqueeStylesInjected = true;
}

export function Marquee({ className, children, pauseOnHover = false }: MarqueeProps) {
  React.useEffect(() => { ensureStylesInjected(); }, []);

  const content = React.Children.toArray(children);
  const doubled = [...content, ...content];

  const [paused, setPaused] = React.useState(false);

  return (
    <div
      className={cn('ds-marquee', className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      data-paused={paused}
    >
      <div className="ds-marquee-track">
        {doubled.map((child, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;