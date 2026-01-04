import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-900/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/blog" className="hover:text-white">
            Writing
          </Link>
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="mailto:hello@akash.dev" className="hover:text-white">
            hello@akash.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
