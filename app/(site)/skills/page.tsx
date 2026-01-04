import type { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'Skills'
};

const skillGroups = [
  {
    title: 'Cloud & Infrastructure',
    skills: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'Helm', 'ArgoCD']
  },
  {
    title: 'Observability',
    skills: ['Datadog', 'Grafana', 'Prometheus', 'OpenTelemetry', 'Sentry']
  },
  {
    title: 'Automation & Tooling',
    skills: ['GitHub Actions', 'Backstage', 'PagerDuty', 'Service Catalogs']
  }
];

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Skills" title="Capabilities across the stack">
        From cloud architecture to developer tooling, I specialize in reliable engineering systems.
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
