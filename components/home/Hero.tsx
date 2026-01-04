import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
      <div className="space-y-6">
        <Badge>DevOps • Platform • Observability</Badge>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          Building resilient systems with a focus on clean engineering and calm user experiences.
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          I’m Akash, a product-minded engineer crafting scalable infrastructure, clear delivery paths,
          and thoughtful tooling for teams who move fast.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/projects">Explore projects</Button>
          <Button href="/contact" variant="ghost">
            Let’s collaborate
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-ink-900/70 p-8 shadow-xl">
        <div className="space-y-4 text-sm text-slate-200">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-300">
            Currently
          </p>
          <p className="text-xl font-semibold text-white">Platform Engineer @ Nimbus Cloud</p>
          <p>
            Leading reliability efforts, CI/CD enablement, and observability for multi-cloud customer
            environments.
          </p>
          <div className="grid gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              99.99% uptime delivered across 14 regions
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              Built incident automation that saves 12 hrs/week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
