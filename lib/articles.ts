import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type ArticleMeta = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  category: string;
  tags: string[];
  readingTime: string;
  excerpt: string;
};

export type ArticleData = {
  meta: ArticleMeta;
  content: string;
};

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

function getExcerpt(content: string) {
  const plain = content.replace(/\s+/g, ' ').trim();
  return plain.length > 160 ? `${plain.slice(0, 157)}...` : plain;
}

function parseFrontmatter(fileContent: string, slug: string): ArticleMeta {
  const { data, content } = matter(fileContent);
  const title = typeof data.title === 'string' ? data.title : 'Untitled article';
  const date = typeof data.date === 'string' ? data.date : new Date().toISOString();
  const summary = typeof data.summary === 'string' ? data.summary : getExcerpt(content);
  const category = typeof data.category === 'string' ? data.category : 'General';
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
  const readingStats = readingTime(content);

  return {
    title,
    slug,
    date,
    summary,
    category,
    tags,
    readingTime: readingStats.text,
    excerpt: getExcerpt(content)
  };
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const files = fs.readdirSync(articlesDirectory).filter((file) => file.endsWith('.mdx'));

  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(articlesDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return parseFrontmatter(fileContent, slug);
  });

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): ArticleData | null {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const meta = parseFrontmatter(fileContent, slug);
  const { content } = matter(fileContent);
  return { meta, content };
}

export function getAllCategories() {
  const categories = new Set(getAllArticles().map((article) => article.category));
  return Array.from(categories).sort();
}

export function getAllTags() {
  const tags = new Set(getAllArticles().flatMap((article) => article.tags));
  return Array.from(tags).sort();
}
