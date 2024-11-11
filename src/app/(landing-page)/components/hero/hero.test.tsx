import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Hero } from '.';
import { COMPONENT_MAP } from './hero.constants';

vi.mock('next/image', () => ({
  default: vi.fn(({ alt, className }) => (
    <img alt={alt} className={className} data-testid="mock-image" />
  ))
}));

const renderComponent = () => {
  return render(<Hero />);
};

describe('Hero', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('should render the title with correct text', () => {
    COMPONENT_MAP.title.lines.forEach(line => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });
  });

  it('should render the description text', () => {
    const description = screen.getByText(COMPONENT_MAP.description);

    expect(description).toBeInTheDocument();
  });

  it('should render the background image', () => {
    expect(
      screen.getByAltText(COMPONENT_MAP.background.alt)
    ).toBeInTheDocument();
  });

  it('should render the logo image', () => {
    expect(screen.getByAltText(COMPONENT_MAP.logo.alt)).toBeInTheDocument();
  });

  it('should render the CTA button with correct link', () => {
    const buttonLink = screen.getByRole('link', {
      name: COMPONENT_MAP.button.text
    });

    expect(buttonLink).toHaveTextContent(COMPONENT_MAP.button.text);
    expect(buttonLink).toHaveAttribute('href', COMPONENT_MAP.button.href);
  });

  it('should match snapshots', () => {
    const { container } = render(<Hero />);

    expect(container).toMatchSnapshot();
  });
});
