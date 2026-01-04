import SectionTitle from '@/components/shared/SectionTitle';

const highlights = [
  {
    title: 'Reliability & Incident Response',
    description:
      'Define clear SLOs, on-call playbooks, and proactive observability to keep systems stable.'
  },
  {
    title: 'Automation & Tooling',
    description:
      'Ship internal platforms that reduce toil and unblock engineers with self-serve workflows.'
  },
  {
    title: 'Cloud Architecture',
    description:
      'Design multi-region infrastructure that balances resilience, cost, and user experience.'
  }
];

export default function Highlights() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Focus"
        title="What I deliver"
      >
        From infrastructure strategy to hands-on automation, I help teams ship reliably and improve
        developer velocity.
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
