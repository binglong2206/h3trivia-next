import { useGameStore } from "../state/useStore"
import { setLocalStorageEnd } from "../helper/setLocalStorage";
import { revealButtonColor } from "../helper/gameHelper";
import { addScoreToFirebase } from "../service/useFirebase";



export default function HandleAnswer() {
  const correctChoiceIndex = useGameStore((state) => state.correctChoiceIndex);
  const question = useGameStore((state)=> state.question)
  const score = useGameStore((state) => state.score);
  const addCorrect = useGameStore((state) => state.addCorrect);
  const endGame = useGameStore((state) => state.endGame);

  const checkAnswer = (selectedIndex) => {
    if (selectedIndex === correctChoiceIndex) {
      addCorrect();
      console.log('correct')
    } else {
      // Do all end game operations here incase user dont click arrow
      addScoreToFirebase(score);
      endGame();
      setLocalStorageEnd(score);
      console.log('wrong')
    }

    revealButtonColor(selectedIndex, correctChoiceIndex);
    if (score > localStorage.getItem("topScore"))
      useGameStore.setState({ topScore: score });
  };


  return {checkAnswer}
}