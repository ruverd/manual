import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Transition } from './transition';

describe('Transition', () => {
  it('should renders children correctly', () => {
    const testContent = 'Test Content';

    render(
      <Transition>
        <div>{testContent}</div>
      </Transition>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('should applies framer-motion attributes', () => {
    const testContent = 'Test Content';

    const { container } = render(
      <Transition>
        <div>{testContent}</div>
      </Transition>
    );

    const motionDiv = container.firstChild;
    expect(motionDiv).toHaveStyle('opacity: 0'); // Initial state
    expect(motionDiv).toHaveAttribute('style'); // Should have style attribute from framer-motion
  });
});
