import BgBanner from '@/components/BgBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '*TEST* Will Ashe',
  description: 'Will Ashe - Software Engineer - Austin, TX',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <BgBanner debug />
      </body>
    </html>
  );
}
