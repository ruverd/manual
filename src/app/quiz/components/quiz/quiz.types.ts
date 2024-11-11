export interface QuizOption {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}

export interface QuizQuestion {
  question: string;
  type: 'ChoiceType';
  options: QuizOption[];
}

export interface QuizData {
  questions: QuizQuestion[];
}

export interface QuizStore {
  currentStep: number;
  answers: Record<number, number>;
  showQuiz: boolean;
  showRejection: boolean;
  startQuiz: () => void;
  answerQuestion: (optionIndex: number) => void;
  goBack: () => void;
  resetQuiz: () => void;
}
