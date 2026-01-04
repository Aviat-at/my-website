import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Akash Portfolio',
  description: 'Product-minded engineer portfolio with writing and project highlights.'
};

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main className="py-12">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
