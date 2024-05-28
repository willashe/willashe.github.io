import BgBanner from '@/components/BgBanner';
import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';

const inter = Assistant({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '*TEST* Will Ashe',
  description: 'Will Ashe - Software Engineer - Austin, TX',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BgBanner />
      </body>
    </html>
  );
}
