import { StatHelpText } from '@chakra-ui/react';
import create from 'zustand';
import questions from '../data/questionData';


const localHighScore = () => {
  if (typeof window !== "undefined") {
  return localStorage.getItem("highScore")
}
}

export const useGameStore = create(set => ({ // Create is like a class that contains many other built-in methods
  mode: "landing",
  guessed: false,
  correct: false,
  score: 0,
  topScore: 0,
  prevTopScore: 0,
  endState: "default",
  question: null,
  questionKey: null,
  questionData: questions,
  multipleChoices: [],

  startNewGame: () => set({
      mode: "game",
      guessed: false,
      score: 0,
      questionData: questions
  }),

  addCorrect: ()=> set((state)=>({
    score: state.score + 1,
    correct: true,
    guessed: true
  })),

  endGame: ()=> set({
    correct: false,
    guessed: true
  }),

  startNewRound: (key, question, questionData, choices ) => {set({
    guessed: false,
    correct: false,
    question: question,
    questionKey: key,
    choices: choices,
    questionData: questionData
  })},

}))


export const useLocalStore = create(set => ({
  userId_h3trivia: null,
  topScore: null,
  totalGames: null,
  totalCorrect: null,
  totalRounds: null,
}))