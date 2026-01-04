import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'ghost';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  type = 'button'
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-white text-ink-950 hover:bg-slate-100',
    ghost: 'border border-white/20 text-white hover:bg-white/10'
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
