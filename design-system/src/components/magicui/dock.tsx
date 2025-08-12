import React from 'react';
import { cn } from '../../lib/utils';

type DockContextValue = {
  mouseX: number | null;
};

const DockContext = React.createContext<DockContextValue>({ mouseX: null });

export type DockProps = {
  className?: string;
  children: React.ReactNode;
  direction?: 'start' | 'middle' | 'end';
};

export function Dock({ className, children, direction = 'middle' }: DockProps) {
  const [mouseX, setMouseX] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouseX(e.clientX);
  };

  const onMouseLeave = () => setMouseX(null);

  return (
    <DockContext.Provider value={{ mouseX }}>
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cn(
          'mx-auto flex w-full max-w-3xl items-end gap-3 rounded-2xl border border-border/60 bg-card/80 p-3 backdrop-blur',
          direction === 'middle' && 'justify-center',
          direction === 'start' && 'justify-start',
          direction === 'end' && 'justify-end',
          className,
        )}
      >
        {children}
      </div>
    </DockContext.Provider>
  );
}

export type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  minScale?: number;
  maxScale?: number;
};

export function DockIcon({ className, children, minScale = 1, maxScale = 2 }: DockIconProps) {
  const { mouseX } = React.useContext(DockContext);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState<number>(minScale);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    function update() {
      if (mouseX == null) {
        setScale(minScale);
        return;
      }
      const current = ref.current;
      if (!current) {
        setScale(minScale);
        return;
      }
      const rect = current.getBoundingClientRect();
      const iconCenter = rect.left + rect.width / 2;
      const distance = Math.abs(mouseX - iconCenter);
      const influenceRadius = 160;
      const t = Math.max(0, 1 - distance / influenceRadius);
      const nextScale = minScale + t * (maxScale - minScale);
      setScale(nextScale);
    }

    update();
  }, [mouseX, minScale, maxScale]);

  return (
    <div
      ref={ref}
      className={cn(
        'flex h-14 w-14 items-center justify-center rounded-xl bg-background shadow-sm transition-transform',
        className,
      )}
      style={{ transform: `scale(${scale})` }}
    >
      {children}
    </div>
  );
}

export default Dock;