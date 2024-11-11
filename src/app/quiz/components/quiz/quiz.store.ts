import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import quizData from '@/data/quiz-questions.json';

import type { QuizData, QuizStore } from './quiz.types';

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      currentStep: 0,
      answers: {},
      showQuiz: false,
      showRejection: false,

      startQuiz: () => set({ showQuiz: true }),

      answerQuestion: (optionIndex: number) => {
        const currentQuestion = (quizData as QuizData).questions[
          get().currentStep
        ];
        const selectedOption = currentQuestion.options[optionIndex];

        set(state => ({
          answers: { ...state.answers, [state.currentStep]: optionIndex },
          currentStep: selectedOption.isRejection
            ? state.currentStep
            : state.currentStep + 1,
          showRejection: selectedOption.isRejection
        }));
      },

      goBack: () =>
        set(state => ({
          currentStep: state.currentStep - 1,
          showRejection: false
        })),

      resetQuiz: () =>
        set({
          currentStep: 0,
          answers: {},
          showQuiz: false,
          showRejection: false
        })
    }),
    {
      name: 'manual-quiz-storage'
    }
  )
);
