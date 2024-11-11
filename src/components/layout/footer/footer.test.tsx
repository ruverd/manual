import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Footer } from '..';
import { COMPONENT_MAP } from './footer.constants';
import { FooterLinkType } from './footer.types';

vi.mock('next/image', () => ({
  default: vi.fn(({ alt, className }) => (
    <img alt={alt} className={className} data-testid="mock-image" />
  ))
}));

const renderComponent = () => {
  return render(<Footer />);
};

describe('Footer', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('should render the logo image', () => {
    expect(screen.getByAltText(COMPONENT_MAP.logo.alt)).toBeInTheDocument();
  });

  it('should render all section titles', () => {
    Object.values(COMPONENT_MAP.pageLinks).forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  it('should render all regular links correctly', () => {
    Object.entries(COMPONENT_MAP.pageLinks).forEach(([key, section]) => {
      if (key !== FooterLinkType.SOCIAL) {
        section.links.forEach(link => {
          if ('text' in link) {
            const linkElement = screen.getByText(link.text);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.closest('a')).toHaveAttribute('href', link.href);
          }
        });
      }
    });
  });

  it('should render all social media icons', () => {
    const socialSection = COMPONENT_MAP.pageLinks[FooterLinkType.SOCIAL];
    socialSection.links.forEach(link => {
      if ('image' in link) {
        expect(screen.getByAltText(link.image.alt ?? '')).toBeInTheDocument();
      }
    });
  });

  it('should render the copyright text', () => {
    expect(screen.getByText(COMPONENT_MAP.copyright)).toBeInTheDocument();
  });

  it('should match snapshots', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
