import type { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'Projects'
};

const projects = [
  {
    name: 'Pulse Ops',
    description:
      'A multi-tenant incident orchestration platform integrating Slack, PagerDuty, and Jira.',
    stack: ['Next.js', 'Postgres', 'Temporal']
  },
  {
    name: 'InfraBlueprints',
    description:
      'Reusable Terraform module library for multi-cloud baseline infrastructure.',
    stack: ['Terraform', 'AWS', 'GCP']
  },
  {
    name: 'SignalFlow',
    description:
      'Streaming observability pipeline for high-cardinality metrics and traces.',
    stack: ['Go', 'Kafka', 'OpenTelemetry']
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Projects" title="Systems that scale with the team">
        Selected work that highlights automation, reliability, and developer enablement.
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
