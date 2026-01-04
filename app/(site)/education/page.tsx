import type { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'Education'
};

const education = [
  {
    school: 'University of Technology',
    degree: 'B.S. Computer Science',
    period: '2015 — 2019',
    focus: 'Distributed systems, cloud computing, and security.'
  },
  {
    school: 'Cloud Native Academy',
    degree: 'Certified Kubernetes Administrator',
    period: '2020',
    focus: 'Kubernetes operations, networking, and observability.'
  }
];

export default function EducationPage() {
  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Education" title="Learning that compounds">
        I prioritize foundational computer science with continuous learning on modern cloud tooling.
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.school} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-indigo-300">
                {item.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{item.school}</p>
            <p className="mt-4 text-sm text-slate-300">{item.focus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
