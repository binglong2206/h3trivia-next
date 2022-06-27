import React from "react";
import GameNavBar from "./GameNavBar";
import PopUp from "./PopUp";
import Prompt from "./Prompt";
import MultipleChoice from "./MultipleChoice";
import { useGameStore } from "../../state/useStore";
import HandleAnswer from "../../hooks/handleAnswer";
import HandleNext from "../../hooks/handleNext";

export default function Game() {
  return (
    <div>
      <GameNavBar />
      {/* {console.log(Object.keys(stateQuestions).length)} */}
      <div id="game">
        <PopUp />
        <div id="tweet-placeholder">
          <Prompt />
        </div>
        <MultipleChoice />
      </div>
    </div>
  );
}
