import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { QuizIntro } from './quiz-intro';
import { COMPONENT_MAP } from './quiz-intro.constants';

describe('QuizIntro', () => {
  const mockStartQuiz = vi.fn();

  it('should renders quiz intro content correctly', () => {
    render(<QuizIntro startQuiz={mockStartQuiz} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      COMPONENT_MAP.title
    );
    expect(screen.getByText(COMPONENT_MAP.description)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(
      COMPONENT_MAP.buttonText
    );
  });

  it('should calls startQuiz when button is clicked', async () => {
    const user = userEvent.setup();
    render(<QuizIntro startQuiz={mockStartQuiz} />);

    const startButton = screen.getByRole('button');
    await user.click(startButton);

    expect(mockStartQuiz).toHaveBeenCalledTimes(1);
  });
});
