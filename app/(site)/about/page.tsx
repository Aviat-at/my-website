import type { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="About" title="Curious engineer, calm systems">
        I partner with product and engineering teams to ship reliable infrastructure, create
        meaningful developer experiences, and keep operations predictable.
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Operating Principles</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Observability first: understand systems before scaling them.</li>
            <li>Automate the boring, document the scary.</li>
            <li>Build bridges between engineering and business outcomes.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Tooling Stack</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Kubernetes, Terraform, and GitHub Actions.</li>
            <li>Datadog, Grafana, and OpenTelemetry pipelines.</li>
            <li>Node.js, Go, and Python for internal platforms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
