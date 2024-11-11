import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Products } from '.';
import { SECTION_TITLE } from './products.constants';

vi.mock('./components/product-section', () => ({
  ProductSection: vi.fn(({ sectionNumber, title }) => (
    <div data-testid={`product-section-${sectionNumber}`}>
      <h3>{title}</h3>
    </div>
  ))
}));

vi.mock('next/image', () => ({
  default: vi.fn(({ alt, className }) => (
    <img alt={alt} className={className} data-testid="mock-image" />
  ))
}));

const renderComponent = () => {
  return render(<Products />);
};

describe('Products', () => {
  it('should render the section title', () => {
    renderComponent();

    expect(screen.getByText(SECTION_TITLE)).toBeInTheDocument();
  });
});
