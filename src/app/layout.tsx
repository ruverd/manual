import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Manual',
  description: "Men's Healthcare - Made easy"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
