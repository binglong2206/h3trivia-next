import React from "react";
import { useGameStore } from "../../state/useStore";
import { Heading, Box, Flex } from "@chakra-ui/react";

export default function PopUp({}) {
  const guessed = useGameStore((state) => state.guessed);
  const correct = useGameStore((state) => state.correct);

  const displayPrompt = () => {
    if (!guessed) return "Question:";
    if (guessed && !correct) return "WRONG";
    if (guessed && correct) return "CORRECT";
  };

  return (
    <>
      <Heading color="white" id="game-prompt">
        {displayPrompt()}
      </Heading>
    </>
  );
}
