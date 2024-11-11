import hairLoss from '@/assets/hair-loss.png';

import { ImagePositionEnum } from './product-section.types';

export const MOCK_PRODUCT_SECTION_PROPS = {
  sectionNumber: 1,
  title: 'Test Title',
  subtitle: 'Test Subtitle',
  description: 'Test Description',
  productImage: {
    src: hairLoss,
    alt: 'Test Image Alt'
  },
  imagePosition: ImagePositionEnum.LEFT
};
