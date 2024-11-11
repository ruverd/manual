import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { QuizQuestion } from './quiz-question';

vi.mock('../../../quiz.store', () => ({
  useQuizStore: () => ({
    currentStep: 0,
    answers: {},
    answerQuestion: vi.fn(),
    goBack: vi.fn()
  })
}));

const mockQuestion = {
  question: 'What is 2 + 2?',
  type: 'ChoiceType' as const,
  options: [
    { display: '3', value: '3', isRejection: false },
    { display: '4', value: '4', isRejection: false },
    { display: '5', value: '5', isRejection: false }
  ]
};

describe('QuizQuestion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the question text correctly', () => {
    render(<QuizQuestion currentQuestion={mockQuestion} />);
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
  });

  it('renders all answer options', () => {
    render(<QuizQuestion currentQuestion={mockQuestion} />);
    mockQuestion.options.forEach(option => {
      expect(screen.getByText(option.value)).toBeInTheDocument();
    });
  });

  it('renders Previous button', () => {
    render(<QuizQuestion currentQuestion={mockQuestion} />);
    expect(screen.getByText('Previous')).toBeInTheDocument();
  });

  it('disables Previous button when on first question', () => {
    render(<QuizQuestion currentQuestion={mockQuestion} />);
    const previousButton = screen.getByText('Previous').closest('button');
    expect(previousButton).toBeDisabled();
  });
});
