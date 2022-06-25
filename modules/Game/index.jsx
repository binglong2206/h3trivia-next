import React from "react";
import GameNavBar from "./GameNavBar";
import Prompt from "./Prompt";
import QuestionAnswer from "./QuestionAnswer";
import MultipleChoice from "./MultipleChoice";
import { useGameStore, useLocalStore } from "../../state/useStore";
import { revealButtonColor, getQuestionChoices } from "../../helper/gameHelper";
import { setLocalStorageEnd } from "../../helper/setLocalStorage";
import { addScoreToFirebase } from "../../apis/patchFirebase";

export default function Game() {
  const score = useGameStore((state) => state.score);
  const guessed = useGameStore((state) => state.guessed);
  const correct = useGameStore((state) => state.correct);
  const question = useGameStore((state) => state.question);
  const stateQuestions = useGameStore((state) => state.questionData);
  const choices = useGameStore((state) => state.choices);
  const addCorrect = useGameStore((state) => state.addCorrect);
  const startNewRound = useGameStore((state) => state.startNewRound);
  const endGame = useGameStore((state) => state.endGame);

  const checkAnswer = (selected, answer, score) => {
    if (selected === answer) {
      addCorrect();
    } else {
      // Do all end game operations here incase user dont click arrow
      // addScoreToFirebase(score);
      endGame();
      setLocalStorageEnd(score);
    }

    revealButtonColor(selected, answer);
    if (score > localStorage.getItem("topScore"))
      useGameStore.setState({ topScore: score });
  };

  const goNext = () => {
    if (correct) {
      let choiceElems = document.querySelectorAll(".choice");
      choiceElems.forEach((el) => {
        el.classList.remove("disabled");
        el.classList.remove("choice-correct");
        el.classList.remove("choice-wrong");
        el.classList.add("choice-default");
      });
      const { key, question, questionData, choices } =
        getQuestionChoices(stateQuestions);
      startNewRound(key, question, questionData, choices);
    } else {
      useGameStore.setState({
        mode: "gameOver",
      });
    }
  };

  return (
    <div>
      <GameNavBar highScore={localStorage.getItem("topScore")} score={score} />
      {/* {console.log(Object.keys(stateQuestions).length)} */}
      <div id="game">
        <Prompt guessed={guessed} correct={correct} />
        <div id="tweet-placeholder">
          <QuestionAnswer guessed={guessed} question={question} />
        </div>
        <MultipleChoice
          choices={choices}
          checkAnswer={(selected) =>
            checkAnswer(selected, question.answer, score)
          }
          guessed={guessed}
          nextArrow={goNext}
        />
      </div>
    </div>
  );
}
