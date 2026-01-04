import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import Badge from '@/components/ui/Badge';
import { getAllArticles, getArticleBySlug } from '@/lib/articles';

const mdxComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 text-2xl font-semibold text-white" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 text-xl font-semibold text-white" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="ml-4 list-disc space-y-2 text-slate-300" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="ml-4 list-decimal space-y-2 text-slate-300" {...props} />
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-indigo-300 underline" {...props} />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-white/10 px-1 py-0.5 text-indigo-100" {...props} />
  )
};

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Article not found' };
  }

  return {
    title: article.meta.title,
    description: article.meta.summary
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span>{new Date(article.meta.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{article.meta.readingTime}</span>
        </div>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          {article.meta.title}
        </h1>
        <p className="text-base text-slate-300">{article.meta.summary}</p>
        <div className="flex flex-wrap gap-2">
          <Badge>{article.meta.category}</Badge>
          {article.meta.tags.map((tag) => (
            <Badge key={tag} className="bg-indigo-500/10 text-indigo-200">
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      <div className="prose max-w-none">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
    </article>
  );
}
