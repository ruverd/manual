import { redirect } from 'next/navigation';

import { LOREM_IPSUM_TEXT, SLUGS } from './lorem-ipsum.constants';
import type { LoremIpsumProps } from './lorem-ipsum.types';

export const LoremIpsum = ({ slug }: LoremIpsumProps) => {
  const slugFound = SLUGS.find(item => item.slug === slug);

  if (!slugFound) {
    redirect('/not-found');
  }

  return (
    <div className="mx-auto my-10 flex w-full flex-col gap-6 px-6 md:gap-10 md:px-[138px]">
      <h1 className="text-center text-2xl text-brand md:text-4xl">
        {slugFound.title}
      </h1>
      <p className="text-balance leading-relaxed text-brand">
        {LOREM_IPSUM_TEXT}
      </p>
    </div>
  );
};
