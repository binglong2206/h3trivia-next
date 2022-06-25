import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useGameStore, useLocalStore } from "../../state/useStore";
import {
  addNewPlayer,
  addAnswerToFirebase,
  addScoreToFirebase,
} from "../../service/useFirebase";
import questions from "../../data/questionData";
import { getQuestionChoices } from "../../helper/gameHelper";

const Landing = () => {
  const newGame = useGameStore((state) => state.startNewGame);
  const startNewRound = useGameStore((state) => state.startNewRound);

  const startNewGame = () => {
    // if (!localStorage.getItem("userId")) addNewPlayer();
    newGame(); // reset score and DB
    const { key, question, questionData, choices } =
      getQuestionChoices(questions);
    startNewRound(key, question, questionData, choices);
  };

  return (
    <div>
      <NavBar />
      <div id="mainTitle">H3 Trivia</div>
      <h2>
        Guess who tweeted what. Prove that you are your favorite streamer’s
        biggest superfan.
      </h2>
      <button className="learn-more" onClick={startNewGame}>
        START GAME
      </button>
    </div>
  );
};

export default Landing;
