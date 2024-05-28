import TestBannerBg from '@/components/TestBannerBg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '*TEST* Will Ashe',
  description: 'Will Ashe - Software Engineer - Austin, TX',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <TestBannerBg debug />
      </body>
    </html>
  );
}
