import { Button } from '@/components/ui';

import { COMPONENT_MAP } from './quiz-result.constants';
import type { QuizResultProps } from './quiz-result.types';

export const QuizResult = ({ showRejection, resetQuiz }: QuizResultProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl p-6 text-center text-brand">
      <h2 className="mb-6 text-4xl font-bold">{COMPONENT_MAP.title}</h2>
      <p className="mb-8 text-balance text-lg leading-relaxed tracking-widest">
        {showRejection
          ? COMPONENT_MAP.rejectionMessage
          : COMPONENT_MAP.successMessage}
      </p>
      <Button onClick={resetQuiz}>{COMPONENT_MAP.buttonText}</Button>
    </div>
  );
};
