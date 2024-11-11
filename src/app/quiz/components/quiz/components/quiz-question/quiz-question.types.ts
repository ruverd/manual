import type { QuizData } from '../../quiz.types';

export type QuizQuestionProps = {
  currentQuestion: QuizData['questions'][number];
};
