import BgBanner from '@/components/BgBanner';
import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';
import { ReactNode } from 'react';

import '../../globals.css';

const inter = Assistant({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '*TEST* Will Ashe',
  description: 'Will Ashe - Software Engineer - Austin, TX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BgBanner />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
