import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';

export const metadata: Metadata = {
  title: 'Home'
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Highlights />
    </div>
  );
}
