import type { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'Experience'
};

const roles = [
  {
    company: 'Nimbus Cloud',
    title: 'Senior Platform Engineer',
    period: '2022 — Present',
    highlights: [
      'Led multi-region failover program across 14 cloud zones.',
      'Implemented service catalog and golden paths for shipping microservices.',
      'Partnered with security to harden CI/CD supply chain.'
    ]
  },
  {
    company: 'Orbit Analytics',
    title: 'DevOps Engineer',
    period: '2019 — 2022',
    highlights: [
      'Built internal incident response automation reducing MTTR by 32%.',
      'Migrated legacy workloads to Kubernetes with zero downtime.',
      'Defined cost dashboards that saved $240k annually.'
    ]
  }
];

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Experience" title="Leadership through reliability">
        I focus on making infrastructure calm and predictable, enabling product teams to ship with
        confidence.
      </SectionTitle>
      <div className="space-y-6">
        {roles.map((role) => (
          <div key={role.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                <p className="text-sm text-slate-300">{role.company}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-indigo-300">
                {role.period}
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {role.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
