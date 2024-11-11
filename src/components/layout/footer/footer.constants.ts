import facebook from '@/assets/facebook.svg';
import google from '@/assets/google.svg';
import logo from '@/assets/manual-logo.svg';
import twitter from '@/assets/twitter.svg';

import { FooterLinkType } from './footer.types';

export const COMPONENT_MAP = {
  pageLinks: {
    [FooterLinkType.PRODUCT]: {
      title: 'Product',
      links: [
        {
          text: 'Popular',
          href: '/internal/popular'
        },
        {
          text: 'Trending',
          href: '/internal/trending'
        },
        {
          text: 'Guided',
          href: '/internal/guided'
        },
        {
          text: 'Products',
          href: '/internal/products'
        }
      ]
    },
    [FooterLinkType.COMPANY]: {
      title: 'Company',
      links: [
        {
          text: 'Press',
          href: '/internal/press'
        },
        {
          text: 'Mission',
          href: '/internal/mission'
        },
        {
          text: 'Strategy',
          href: '/internal/strategy'
        },
        {
          text: 'About',
          href: '/internal/about'
        }
      ]
    },
    [FooterLinkType.INFO]: {
      title: 'Info',
      links: [
        {
          text: 'Support',
          href: '/internal/support'
        },
        {
          text: 'Customer Service',
          href: '/internal/customer-service'
        },
        {
          text: 'Get Started',
          href: '/internal/get-started'
        }
      ]
    },
    [FooterLinkType.SOCIAL]: {
      title: 'Follow Us',
      links: [
        {
          image: {
            src: facebook,
            alt: 'Facebook'
          },
          href: 'https://www.facebook.com/MenofManual'
        },
        {
          image: {
            src: google,
            alt: 'Google'
          },
          href: 'https://www.google.com'
        },
        {
          image: {
            src: twitter,
            alt: 'Twitter'
          },
          href: 'https://x.com/MenofManual'
        }
      ]
    }
  },
  logo: {
    src: logo,
    alt: 'Manual Logo'
  },
  copyright: '© 2021 Manual. All rights reserverd'
};
