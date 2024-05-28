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
      <body
        className={inter.className}
        style={{
          display: 'flex',
          margin: 0,
          alignItems: 'center',
          height: '100dvh',
        }}
      >
        <div
          style={{
            height: 400,
            width: '100%',
            background: 'red',
          }}
        >
          test
        </div>
      </body>
    </html>
  );
}
