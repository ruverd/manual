import Image from 'next/image';
import Link from 'next/link';
import { type PropsWithChildren } from 'react';

import manualLogo from '@/assets/manual-logo.svg';

export default function QuizLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-brand-100">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center bg-brand-100 py-2 shadow-lg">
        <Link href="/">
          <Image src={manualLogo} alt={'Manual'} className="size-12" />
        </Link>
      </header>
      <main className="mt-16 flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
