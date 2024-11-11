import { tv } from 'tailwind-variants';
import { ImagePositionEnum } from './product-section.types';

export const productSectionStyles = tv({
  slots: {
    imageStyles: 'h-[280px] w-[230px] mx-auto md:h-[445px] md:w-[370px]',
    containerStyles:
      'flex items-center relative w-full text-center md:text-left text-brand',
    numberStyles:
      'absolute -z-10 text-[350px] md:text-[450px] leading-none tracking-neg-3 text-brand-50'
  },
  variants: {
    imagePosition: {
      [ImagePositionEnum.LEFT]: {
        imageStyles: 'order-2 md:order-1',
        containerStyles: 'order-1 md:order-2',
        numberStyles: '-left-24 md:-left-52'
      },
      [ImagePositionEnum.RIGHT]: {
        imageStyles: 'order-2',
        containerStyles: 'order-1',
        numberStyles: '-left-24 md:left-24'
      }
    }
  },
  defaultVariants: {
    imagePosition: ImagePositionEnum.LEFT
  }
});
