import React, { useState } from "react";
import { useGameStore } from "../../state/useStore";
import { Button, ButtonGroup, Flex, Box, Stack } from "@chakra-ui/react";
import HandleAnswer from "../../hooks/handleAnswer";
import HandleNext from "../../hooks/handleNext";

export default function MultipleChoice() {
  const { checkAnswer } = HandleAnswer();
  const { handleNext } = HandleNext();
  const choices = useGameStore((state) => state.choices);
  const guessed = useGameStore((state) => state.guessed);
  const choicesDisabled = useGameStore((state) => state.choicesDisabled);

  return (
    <Box>
      <Stack direction="column">
        <ButtonGroup gap="4" colorScheme="blue" isDisabled={choicesDisabled}>
          <Button
            id="choice0"
            className="choice"
            onClick={() => checkAnswer(0)}
          >
            {choices[0]}
          </Button>
          <Button
            id="choice1"
            className="choice"
            onClick={() => checkAnswer(1)}
          >
            {choices[1]}
          </Button>
        </ButtonGroup>
        <ButtonGroup gap="4" colorScheme="blue" isDisabled={choicesDisabled}>
          <Button
            id="chocie2"
            className="choice"
            onClick={() => checkAnswer(2)}
          >
            {choices[2]}
          </Button>
          <Button
            id="choice3"
            className="choice"
            onClick={() => checkAnswer(3)}
          >
            {choices[3]}
          </Button>
        </ButtonGroup>
      </Stack>

      {guessed ? <button onClick={handleNext}> NEXT</button> : null}
    </Box>
  );
}
