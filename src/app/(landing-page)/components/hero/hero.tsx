import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui';
import { COMPONENT_MAP } from './hero.constants';

export const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={COMPONENT_MAP.background.src}
        alt={COMPONENT_MAP.background.alt}
        className="size-full object-cover"
        placeholder="blur"
        priority
      />
      <Image
        src={COMPONENT_MAP.logo.src}
        alt={COMPONENT_MAP.logo.alt}
        className="absolute left-6 top-4 size-6 sm:left-12 md:left-16 md:top-[30px] md:size-10 lg:left-[138px]"
      />
      <div className="absolute inset-0 mx-6 flex flex-col sm:mx-12 md:mx-16 lg:mx-[138px]">
        <div className="my-auto flex w-full max-w-52 flex-col gap-2 pt-4 sm:max-w-72 md:max-w-96 md:gap-5 md:pt-12">
          <h1 className="text-4xl leading-none tracking-neg-3 text-brand md:text-5xl lg:text-[90px]">
            <span className="block whitespace-nowrap">
              {COMPONENT_MAP.title.lines[0]}
            </span>
            <span className="block whitespace-nowrap">
              {COMPONENT_MAP.title.lines[1]}
            </span>
          </h1>
          <p className="hidden text-balance text-sm leading-6 sm:block md:text-lg md:leading-[30px]">
            {COMPONENT_MAP.description}
          </p>
          <Button className="mt-4 w-fit" asChild>
            <Link
              href={COMPONENT_MAP.button.href}
              aria-label={COMPONENT_MAP.button.text}
              tabIndex={0}
            >
              {COMPONENT_MAP.button.text}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
