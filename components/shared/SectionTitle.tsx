import { ReactNode } from 'react';

export default function SectionTitle({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      {children ? (
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          {children}
        </p>
      ) : null}
    </div>
  );
}
