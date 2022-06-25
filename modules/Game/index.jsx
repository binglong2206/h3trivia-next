import React from "react";
import GameNavBar from "./GameNavBar";
import Prompt from "./Prompt";
import QuestionAnswer from "./QuestionAnswer";
import MultipleChoice from "./MultipleChoice";
import { useGameStore } from "../../state/useStore";
import HandleAnswer from "../../hooks/handleAnswer";
import HandleNext from "../../hooks/handleNext";

export default function Game() {
  const score = useGameStore((state) => state.score);
  const question = useGameStore((state) => state.question);
  const { checkAnswer } = HandleAnswer();
  const { handleNext } = HandleNext();

  return (
    <div>
      <GameNavBar highScore={localStorage.getItem("topScore")} score={score} />
      {/* {console.log(Object.keys(stateQuestions).length)} */}
      <div id="game">
        <Prompt />
        <div id="tweet-placeholder">
          <QuestionAnswer />
        </div>
        <MultipleChoice
          checkAnswer={(selected) => checkAnswer(selected, question.answer)}
          nextArrow={handleNext}
        />
      </div>
    </div>
  );
}
