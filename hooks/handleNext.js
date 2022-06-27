import { useGameStore } from "../state/useStore"
import { setLocalStorageEnd } from "../helper/setLocalStorage";
import {getQuestionChoices, removeButtonColor } from "../helper/gameHelper";



export default function HandleNext() {
  const correct = useGameStore((state) => state.correct);
  const stateQuestions = useGameStore((state) => state.questionData);
  const startNewRound = useGameStore((state) => state.startNewRound);

  const handleNext = () => {
    if (correct) {
      removeButtonColor();
      const { key, question, questionData, choices, correctChoiceIndex } = getQuestionChoices(stateQuestions);
      startNewRound(key, question, questionData, choices, correctChoiceIndex);
    } else {
      useGameStore.setState({
        mode: "gameOver",
      });
    }
  };

  return {handleNext}
}