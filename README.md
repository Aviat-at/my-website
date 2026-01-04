# Akash Portfolio

Production-grade Next.js (App Router) portfolio with MDX-powered blogging, URL-based filters, and reusable UI components.

## Features

- App Router routes for home, about, experience, education, projects, skills, blog, and contact
- MDX blog sourced from `content/articles/*.mdx` with frontmatter parsing
- URL-based category + search filters (shareable query strings)
- Reading time metadata and auto-generated sitemap
- Tailwind CSS styling with reusable layout and UI components

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Blog Content

Add new posts under `content/articles/*.mdx`. Each post should include frontmatter:

```mdx
---
title: "Post title"
date: "2024-01-01"
summary: "Short summary for listing pages."
category: "Platform"
tags:
  - Tag One
  - Tag Two
---

Your MDX content goes here.
```

## Project Structure

```
app/
  layout.tsx
  globals.css
  (site)/
    layout.tsx
    page.tsx
    about/page.tsx
    experience/page.tsx
    education/page.tsx
    projects/page.tsx
    skills/page.tsx
    contact/page.tsx
    blog/
      page.tsx
      [slug]/page.tsx
  api/contact/route.ts
  sitemap.ts
components/
  layout/{Navbar,Footer,Container}.tsx
  home/{Hero,Highlights}.tsx
  blog/{ArticleCard,ArticleFilters}.tsx
  ui/{Badge,Button}.tsx
  shared/SectionTitle.tsx
content/articles/*.mdx
lib/{site,utils,articles}.ts
```
