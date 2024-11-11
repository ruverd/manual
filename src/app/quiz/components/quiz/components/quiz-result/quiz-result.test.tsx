import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { QuizResult } from './quiz-result';
import { COMPONENT_MAP } from './quiz-result.constants';

describe('QuizResult', () => {
  const mockResetQuiz = vi.fn();

  it('should renders success message when showRejection is false', () => {
    render(<QuizResult showRejection={false} resetQuiz={mockResetQuiz} />);

    expect(screen.getByText(COMPONENT_MAP.title)).toBeInTheDocument();
    expect(screen.getByText(COMPONENT_MAP.successMessage)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(
      COMPONENT_MAP.buttonText
    );
  });

  it('should renders rejection message when showRejection is true', () => {
    render(<QuizResult showRejection={true} resetQuiz={mockResetQuiz} />);

    expect(screen.getByText(COMPONENT_MAP.title)).toBeInTheDocument();
    expect(
      screen.getByText(COMPONENT_MAP.rejectionMessage)
    ).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(
      COMPONENT_MAP.buttonText
    );
  });

  it('should calls resetQuiz when button is clicked', async () => {
    const user = userEvent.setup();
    render(<QuizResult showRejection={false} resetQuiz={mockResetQuiz} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockResetQuiz).toHaveBeenCalledOnce();
  });
});
