import Image from 'next/image';

import { productSectionStyles } from './product-section.styles';
import {
  ImagePositionEnum,
  type ProductSectionProps
} from './product-section.types';
import { formatSectionNumber } from './product-section.utils';

export const ProductSection = ({
  sectionNumber,
  title,
  subtitle,
  description,
  productImage,
  imagePosition = ImagePositionEnum.LEFT
}: ProductSectionProps) => {
  const formattedSectionNumber = formatSectionNumber(sectionNumber);

  const { containerStyles, imageStyles, numberStyles } = productSectionStyles({
    imagePosition
  });

  return (
    <div className="mx-auto grid w-full max-w-[800px] grid-cols-1 gap-24 px-2 md:grid-cols-2 md:gap-32">
      <Image
        src={productImage.src}
        alt={productImage.alt}
        className={imageStyles()}
        placeholder="blur"
        priority
      />

      <div className={containerStyles()}>
        <span className={numberStyles()}>{formattedSectionNumber}</span>
        <div className="my-auto w-full space-y-2.5">
          <h3 className="text-[10px] font-bold uppercase leading-normal tracking-widest text-brand-800">
            {title}
          </h3>
          <span className="text-balance text-2xl leading-8 tracking-neg-3 md:text-[28px] md:leading-10">
            {subtitle}
          </span>
          <p className="text-balance pt-2.5 text-base leading-relaxed md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
