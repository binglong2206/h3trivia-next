import React, { useState } from "react";
import { useGameStore } from "../../state/useStore";
import {
  Button,
  ButtonGroup,
  Flex,
  Box,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import HandleAnswer from "../../hooks/handleAnswer";
import HandleNext from "../../hooks/handleNext";

export default function MultipleChoice() {
  const { checkAnswer } = HandleAnswer();
  const { handleNext } = HandleNext();
  const choices = useGameStore((state) => state.choices);
  const guessed = useGameStore((state) => state.guessed);
  const choicesDisabled = useGameStore((state) => state.choicesDisabled);

  return (
    <Flex justifyContent="center">
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        // gridTemplateColumns={"1fr 1fr"}
        gap={4}
        w="80%"
        h="300px"
      >
        <GridItem>
          <Button
            id="chocie0"
            className="choice"
            colorScheme="blackAlpha"
            w="100%"
            h="100%"
            whiteSpace="normal"
            onClick={() => checkAnswer(0)}
            fontSize="20px"
          >
            {choices[0]} sdfsd sdoif; jdis;oisdj foi;djsl oifjsdifo;sdjif;oidjs
            ;ofidjs ;oifdjs ; jdis;oisdj foi;djsl oifj
          </Button>
        </GridItem>
        <GridItem>
          <Button
            id="chocie1"
            className="choice"
            colorScheme="blackAlpha"
            w="100%"
            h="100%"
            whiteSpace="normal"
            onClick={() => checkAnswer(1)}
            fontSize="20px"
          >
            {choices[1]}
          </Button>
        </GridItem>
        <GridItem>
          <Button
            id="chocie2"
            className="choice"
            colorScheme="blackAlpha"
            w="100%"
            h="100%"
            whiteSpace="normal"
            onClick={() => checkAnswer(2)}
            fontSize="20px"
          >
            {choices[2]}
          </Button>
        </GridItem>
        <GridItem>
          <Button
            id="chocie3"
            className="choice"
            colorScheme="blackAlpha"
            w="100%"
            h="100%"
            whiteSpace="normal"
            onClick={() => checkAnswer(3)}
            fontSize="20px"
          >
            {choices[3]}
          </Button>
        </GridItem>
      </Grid>

      {guessed ? (
        <Button colorScheme="blackAlpha" onClick={handleNext}>
          NEXT
        </Button>
      ) : null}
    </Flex>
  );
}
