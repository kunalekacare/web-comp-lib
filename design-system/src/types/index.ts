import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  children?: ReactNode;
}

export interface VariantProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
}

export interface SizeProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface DisabledProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}
