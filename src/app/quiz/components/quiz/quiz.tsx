'use client';

import quizData from '@/data/quiz-questions.json';

import { QuizQuestion, QuizResult } from './components';
import { QuizIntro } from './components/quiz-intro/quiz-intro';
import { useQuizStore } from './quiz.store';
import type { QuizData } from './quiz.types';

export const Quiz = () => {
  const { currentStep, showQuiz, showRejection, startQuiz, resetQuiz } =
    useQuizStore();

  const currentQuestion = (quizData as QuizData).questions[currentStep];

  if (!showQuiz) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center bg-brand-100">
        <QuizIntro startQuiz={startQuiz} />;
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-64px)] bg-brand-100">
      {currentStep < (quizData as QuizData).questions.length &&
      !showRejection ? (
        <QuizQuestion currentQuestion={currentQuestion} />
      ) : (
        <div className="flex h-[calc(100vh-64px)] items-center justify-center">
          <QuizResult showRejection={showRejection} resetQuiz={resetQuiz} />
        </div>
      )}
    </div>
  );
};
