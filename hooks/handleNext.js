import { useGameStore } from "../state/useStore"
import { setLocalStorageEnd } from "../helper/setLocalStorage";
import { revealButtonColor, getQuestionChoices } from "../helper/gameHelper";



export default function HandleNext() {
  const correct = useGameStore((state) => state.correct);
  const stateQuestions = useGameStore((state) => state.questionData);
  const startNewRound = useGameStore((state) => state.startNewRound);

  const handleNext = () => {
    if (correct) {
      let choiceElems = document.querySelectorAll(".choice");
      choiceElems.forEach((el) => {
        el.classList.remove("disabled");
        el.classList.remove("choice-correct");
        el.classList.remove("choice-wrong");
        el.classList.add("choice-default");
      });
      const { key, question, questionData, choices } = getQuestionChoices(stateQuestions);
      startNewRound(key, question, questionData, choices);
    } else {
      useGameStore.setState({
        mode: "gameOver",
      });
    }
  };

  return {handleNext}
}