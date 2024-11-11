'use client';

import { ChevronLeft } from 'lucide-react';

import { Button, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';

import { useQuizStore } from '../../quiz.store';
import type { QuizQuestionProps } from './quiz-question.types';

export const QuizQuestion = ({ currentQuestion }: QuizQuestionProps) => {
  const { currentStep, answers, answerQuestion, goBack } = useQuizStore();

  const selectedAnswer = answers[currentStep];

  return (
    <div className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-8">
        <Button
          onClick={goBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      </div>

      <h2 className="mb-8 text-2xl font-bold text-brand">
        {currentQuestion.question}
      </h2>

      <div
        className={cn({
          'grid grid-cols-2 gap-4 md:grid-cols-3':
            currentQuestion.options.length > 2,
          'space-y-4': currentQuestion.options.length <= 2
        })}
      >
        {currentQuestion.options.map((option, index) => (
          <Card
            key={index}
            className={cn('cursor-pointer transition-all hover:bg-brand-50', {
              'ring-2 ring-brand-800': selectedAnswer === index
            })}
            onClick={() => answerQuestion(index)}
          >
            <CardContent className="p-4">
              {option.display.includes('img') ? (
                <div
                  dangerouslySetInnerHTML={{ __html: option.display }}
                  className="mb-2 flex items-center justify-center"
                />
              ) : null}
              <p className="text-center text-brand">
                {option.value.toString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
