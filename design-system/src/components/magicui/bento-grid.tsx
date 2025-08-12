import React from 'react';
import { cn } from '../../lib/utils';
import { Card } from '../ui/card';

export type BentoGridProps = {
  className?: string;
  children: React.ReactNode;
};

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-3 gap-4 lg:gap-6 auto-rows-[10rem] lg:auto-rows-[12rem] relative',
        className,
      )}
    >
      {children}
    </div>
  );
}

export type BentoCardProps = {
  Icon?: React.ComponentType<{ className?: string } & Record<string, unknown>>;
  name: string;
  description?: string;
  className?: string;
  background?: React.ReactNode;
  children?: React.ReactNode;
};

export function BentoCard({ Icon, name, description, className, background, children }: BentoCardProps) {
  return (
    <Card
      className={cn(
        'relative col-span-3 overflow-hidden rounded-xl border border-border/60 bg-card hover:shadow-lg transition-shadow',
        'p-4 lg:p-6 flex flex-col justify-between',
        className,
      )}
    >
      {background}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          {Icon ? <Icon className="h-5 w-5 opacity-80" /> : null}
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        {description ? (
          <p className="text-sm text-muted-foreground max-w-prose">{description}</p>
        ) : null}
      </div>
      {children ? <div className="relative z-10 mt-4">{children}</div> : null}
    </Card>
  );
}

export default BentoGrid;