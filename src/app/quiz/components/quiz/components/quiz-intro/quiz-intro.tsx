import { Button } from '@/components/ui';

import { COMPONENT_MAP } from './quiz-intro.constants';
import type { QuizIntroProps } from './quiz-intro.types';

export const QuizIntro = ({ startQuiz }: QuizIntroProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl p-6 text-center">
      <h1 className="mb-6 text-4xl font-bold">{COMPONENT_MAP.title}</h1>
      <p className="mb-8 text-balance text-lg leading-relaxed tracking-widest">
        {COMPONENT_MAP.description}
      </p>
      <Button onClick={startQuiz}>{COMPONENT_MAP.buttonText}</Button>
    </div>
  );
};
