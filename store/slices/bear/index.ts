
import { create, ExtractState } from 'zustand';

interface Question {
  id: string;
  content: string;
  imageUrl: string;
  status: string;
  categoryId: string;
  isCompleted: boolean;
  isSelected: boolean;
  activityId: string;
  createdAt: string;
  updatedAt: string;
  answers: any[];
  chat: any[];
  category: { name: string };
}

interface QuestionsState {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
}

const useQuestionsStore = create<QuestionsState>((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
}));

export default useQuestionsStore;