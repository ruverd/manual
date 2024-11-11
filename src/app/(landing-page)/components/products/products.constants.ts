import erecetileDysfunctionImage from '@/assets/erectile-dysfunction.png';
import hairLossImage from '@/assets/hair-loss.png';

export const SECTION_TITLE = 'What we can help with';
export const PRODUCT_LIST = [
  {
    sectionNumber: 1,
    title: 'Hair Loss',
    subtitle: 'Hair loss needn’t be irreversible. We can help!',
    description:
      'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
    image: {
      src: hairLossImage,
      alt: 'Man with hair loss'
    }
  },
  {
    sectionNumber: 2,
    title: 'Erecetile dysfunction',
    subtitle: 'Erections can be a tricky thing. But no need to feel down!',
    description:
      'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
    image: {
      src: erecetileDysfunctionImage,
      alt: 'Man with erection dysfunction'
    }
  }
];
