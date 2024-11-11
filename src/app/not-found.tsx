import { CircleAlert } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui';

export default function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 px-6 md:px-[138px]">
      <CircleAlert className="mx-auto size-20 text-primary" />
      <h1 className="text-center text-4xl font-semibold leading-7 text-brand">
        Oops, this page does not exist.
      </h1>
      <p className="text-center leading-tight text-brand">
        It looks like this page doesn&apos;t exist or is not currently
        available. Please check the URL for typos or return to our home page.
      </p>
      <Button className="w-fit" asChild>
        <Link href="/" aria-label="Go Home" tabIndex={0}>
          Go Home
        </Link>
      </Button>
    </div>
  );
}
