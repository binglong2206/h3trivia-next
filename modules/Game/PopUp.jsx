import React from "react";
import { useGameStore } from "../../state/useStore";

export default function PopUp({}) {
  const guessed = useGameStore((state) => state.guessed);
  const correct = useGameStore((state) => state.correct);

  const displayPrompt = () => {
    if (!guessed) return "Question";
    if (guessed && !correct) return "WRONG";
    if (guessed && correct) return "CORRECT";
  };

  return (
    <>
      <h2 id="game-prompt">{displayPrompt()}</h2>
    </>
  );
}
