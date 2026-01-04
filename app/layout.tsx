import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Akash Portfolio',
    template: '%s | Akash Portfolio'
  },
  description: 'Akash portfolio showcasing engineering work, writing, and experience.',
  metadataBase: new URL('https://akash.dev')
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
