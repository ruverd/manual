import { type PropsWithChildren } from 'react';

import { Footer } from '@/components/layout';

import { Hero } from './components';

export default function LandingPageLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Hero />
      {children}
      <Footer />
    </div>
  );
}
