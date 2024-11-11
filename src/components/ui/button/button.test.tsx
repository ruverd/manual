import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button';

const defaultProps = {
  children: 'Click me',
  className: 'custom-class',
  onClick: vi.fn()
};

const renderComponent = (props = {}) => {
  return render(<Button {...defaultProps} {...props} />);
};

describe('Button', () => {
  it('should render button with correct text', () => {
    renderComponent();

    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should apply custom className along with default styles', () => {
    renderComponent();

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('inline-flex');
    expect(button).toHaveClass('bg-primary');
  });

  it('should handle click events', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render as a different element when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Link Button');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-20');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button with ref</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when disabled', () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with asChild', () => {
    const { container } = render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    expect(container).toMatchSnapshot();
  });
});
