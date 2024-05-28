import BannerBg from '@/components/BannerBg';
import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';

const inter = Assistant({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Will Ashe',
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
        <BannerBg />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
