import { useGameStore } from "../state/useStore"
import { setLocalStorageEnd } from "../helper/setLocalStorage";
import { revealButtonColor, getQuestionChoices } from "../helper/gameHelper";



export default function HandleAnswer() {
  const score = useGameStore((state) => state.score);
  const addCorrect = useGameStore((state) => state.addCorrect);
  const endGame = useGameStore((state) => state.endGame);

  const checkAnswer = (selected, answer) => {
    console.log('checking')
    if (selected === answer) {
      addCorrect();
      console.log('correct')
    } else {
      // Do all end game operations here incase user dont click arrow
      // addScoreToFirebase(score);
      endGame();
      setLocalStorageEnd(score);
            console.log('wrong')

    }

    revealButtonColor(selected, answer);
    if (score > localStorage.getItem("topScore"))
      useGameStore.setState({ topScore: score });
  };


  return {checkAnswer}
}