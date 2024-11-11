import type { StaticImageData } from 'next/image';
import { type VariantProps } from 'tailwind-variants';

import type { productSectionStyles } from './product-section.styles';

type Image = {
  src: StaticImageData;
  alt: string;
};

export enum ImagePositionEnum {
  LEFT = 'left',
  RIGHT = 'right'
}

type ProductSectionVariants = VariantProps<typeof productSectionStyles>;

export interface ProductSectionProps extends ProductSectionVariants {
  sectionNumber: number;
  title: string;
  subtitle: string;
  description: string;
  productImage: Image;
}
