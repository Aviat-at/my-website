'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

type ArticleFiltersProps = {
  categories: string[];
  activeCategory?: string;
  query?: string;
};

export default function ArticleFilters({
  categories,
  activeCategory,
  query
}: ArticleFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParams = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    updateParams({ q: event.target.value || undefined });
  };

  const handleCategory = (category?: string) => {
    updateParams({ category });
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={cn(
            'rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 transition',
            !activeCategory && 'bg-white text-ink-950'
          )}
          onClick={() => handleCategory(undefined)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={cn(
              'rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 transition',
              activeCategory === category && 'bg-white text-ink-950'
            )}
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <input
        type="search"
        placeholder="Search articles"
        className="w-full rounded-full border border-white/10 bg-ink-900/80 px-4 py-2 text-sm text-white md:w-64"
        onChange={handleSearch}
        value={query ?? ''}
      />
    </div>
  );
}
