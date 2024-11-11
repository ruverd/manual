'use client';

import { Transition } from '@/components/layout';

import type { PropsWithChildren } from 'react';

export default function Template({ children }: PropsWithChildren) {
  return <Transition>{children}</Transition>;
}
