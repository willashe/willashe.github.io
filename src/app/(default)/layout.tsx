import BgBanner from '@/components/BgBanner';
// import ThreeJsBg from '@/components/ThreeJsBg/ThreeJsBg';
import type { Metadata, Viewport } from 'next';
import { Assistant } from 'next/font/google';
import { ReactNode } from 'react';

import '../globals.scss';

const inter = Assistant({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Will Ashe',
  description: 'Will Ashe - Software Engineer - Austin, TX',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThreeJsBg /> */}
        <BgBanner />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
