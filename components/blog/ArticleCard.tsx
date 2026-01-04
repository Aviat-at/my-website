import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import type { ArticleMeta } from '@/lib/articles';

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span>{new Date(article.date).toLocaleDateString()}</span>
        <span>•</span>
        <span>{article.readingTime}</span>
      </div>
      <div className="space-y-2">
        <Link href={`/blog/${article.slug}`} className="text-xl font-semibold text-white">
          {article.title}
        </Link>
        <p className="text-sm text-slate-300">{article.summary}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge>{article.category}</Badge>
        {article.tags.map((tag) => (
          <Badge key={tag} className="bg-indigo-500/10 text-indigo-200">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
