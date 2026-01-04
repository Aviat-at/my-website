import type { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Contact" title="Let’s build something dependable">
        Share your goals and timelines and I’ll reply within two business days.
      </SectionTitle>
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <form
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
          method="post"
          action="/api/contact"
        >
          <div className="grid gap-4">
            <label className="text-sm text-slate-300">
              Name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900/80 px-3 py-2 text-white"
              />
            </label>
            <label className="text-sm text-slate-300">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900/80 px-3 py-2 text-white"
              />
            </label>
            <label className="text-sm text-slate-300">
              Message
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900/80 px-3 py-2 text-white"
              />
            </label>
            <Button type="submit" className="w-fit">
              Send message
            </Button>
          </div>
        </form>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <p>
            Prefer email? Reach out directly at{' '}
            <a className="text-indigo-300" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
          <p>
            I can help with platform strategy, reliability audits, and automation roadmaps. Share
            a short brief and expected timeline to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
