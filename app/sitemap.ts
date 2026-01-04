import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticRoutes = [
    '',
    '/about',
    '/experience',
    '/education',
    '/projects',
    '/skills',
    '/blog',
    '/contact'
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const articleEntries = getAllArticles().map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date)
  }));

  return [...staticEntries, ...articleEntries];
}
