import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ProductSection } from './product-section';
import { MOCK_PRODUCT_SECTION_PROPS } from './product-section.mock';
import { ImagePositionEnum } from './product-section.types';

vi.mock('next/image', () => ({
  default: vi.fn(({ alt, className }) => (
    <img alt={alt} className={className} data-testid="mock-image" />
  ))
}));

const renderComponent = (props = {}) => {
  return render(<ProductSection {...MOCK_PRODUCT_SECTION_PROPS} {...props} />);
};

describe('ProductSection', () => {
  it('should render the formatted section number', () => {
    renderComponent();

    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('should render the title', () => {
    renderComponent();

    expect(
      screen.getByText(MOCK_PRODUCT_SECTION_PROPS.title)
    ).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    renderComponent();

    expect(
      screen.getByText(MOCK_PRODUCT_SECTION_PROPS.subtitle)
    ).toBeInTheDocument();
  });

  it('should render the description', () => {
    renderComponent();

    expect(
      screen.getByText(MOCK_PRODUCT_SECTION_PROPS.description)
    ).toBeInTheDocument();
  });

  it('should render the product image with correct alt text', () => {
    renderComponent();

    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'alt',
      MOCK_PRODUCT_SECTION_PROPS.productImage.alt
    );
  });

  it('should apply correct styles when image position is LEFT', () => {
    renderComponent({
      imagePosition: ImagePositionEnum.LEFT
    });

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveClass('order-2');
  });

  it('should apply correct styles when image position is RIGHT', () => {
    renderComponent({
      imagePosition: ImagePositionEnum.RIGHT
    });

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveClass('order-2');
  });

  it('should use LEFT as default image position when not specified', () => {
    renderComponent({ imagePosition: undefined });

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveClass('order-2');
  });
});
