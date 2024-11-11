import Image from 'next/image';
import Link from 'next/link';

import { COMPONENT_MAP } from './footer.constants';
import { FooterLinkType } from './footer.types';

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-100 px-6 md:px-[138px]">
      <div className="flex flex-col justify-between gap-6 py-14 md:flex-row md:gap-10 md:py-[73px]">
        <div className="flex flex-col gap-10">
          <Link href="/">
            <Image
              src={COMPONENT_MAP.logo.src}
              alt={COMPONENT_MAP.logo.alt}
              className="mx-auto size-12 object-contain md:size-[75px]"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {Object.entries(COMPONENT_MAP.pageLinks).map(([key, value]) => (
            <div
              key={key}
              className="flex w-full flex-col items-center gap-3 md:w-44 md:items-start md:gap-5"
            >
              <h3 className="text-[10px] font-bold uppercase leading-6 tracking-[15%] text-brand">
                {value.title}
              </h3>
              {key !== FooterLinkType.SOCIAL ? (
                <ul className="flex flex-col items-center gap-3 md:items-start md:gap-5">
                  {value.links.map(link => (
                    <li key={link?.href}>
                      <Link
                        href={link.href}
                        className="text-sm leading-7 md:text-base"
                      >
                        {'text' in link ? link.text : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-row items-center gap-5">
                  {value.links.map(link => (
                    <li key={link?.href}>
                      <Link href={link.href}>
                        {'image' in link && (
                          <Image
                            src={link.image.src ?? ''}
                            alt={link.image.alt ?? ''}
                            className="size-4 object-contain md:size-6"
                          />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 border-t border-brand-200 py-6 md:gap-10">
        <span className="text-sm leading-8 text-brand-800 md:text-base">
          {COMPONENT_MAP.copyright}
        </span>
      </div>
    </footer>
  );
};
