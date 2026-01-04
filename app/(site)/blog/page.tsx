import type { Metadata } from 'next';
import ArticleCard from '@/components/blog/ArticleCard';
import ArticleFilters from '@/components/blog/ArticleFilters';
import SectionTitle from '@/components/shared/SectionTitle';
import { getAllArticles, getAllCategories } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing about platform engineering, reliability, and automation.'
};

type BlogPageProps = {
  searchParams?: {
    category?: string;
    q?: string;
  };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const articles = getAllArticles();
  const categories = getAllCategories();
  const activeCategory = searchParams?.category;
  const query = searchParams?.q;

  const filtered = articles.filter((article) => {
    const matchesCategory = activeCategory
      ? article.category.toLowerCase() === activeCategory.toLowerCase()
      : true;
    const matchesQuery = query
      ? `${article.title} ${article.summary} ${article.tags.join(' ')}`
          .toLowerCase()
          .includes(query.toLowerCase())
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Blog" title="Insights & playbooks">
        Dive into infrastructure strategy, practical automation tips, and lessons learned from real
        production environments.
      </SectionTitle>
      <ArticleFilters categories={categories} activeCategory={activeCategory} query={query} />
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-slate-300">
          No articles match your filters. Try clearing the search or choosing another category.
        </p>
      ) : null}
    </div>
  );
}
