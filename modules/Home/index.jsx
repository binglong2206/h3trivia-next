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
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const Landing = () => {
  const newGame = useGameStore((state) => state.startNewGame);
  const startNewRound = useGameStore((state) => state.startNewRound);

  const startNewGame = () => {
    if (!localStorage.getItem("userId")) addNewPlayer();

    newGame(); // reset score and DB
    const { key, question, questionData, choices, correctChoiceIndex } =
      getQuestionChoices(questions);
    startNewRound(key, question, questionData, choices, correctChoiceIndex);
  };

  return (
    <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
      <Flex w="7xl" flexDir="column" alignItems="center">
        <NavBar />
        <Box id="mainTitle" textAlign="center">
          H3 Trivia
        </Box>
        <Heading color="white" textAlign="center">
          Guess who tweeted what. Prove that you are your
          favossssssssssssssssssssssssssrite streamer’s biggest superfan.
        </Heading>
        <Button
          className="learn-more"
          onClick={startNewGame}
          colorScheme="blackAlpha"
          w="xs"
        >
          START GAME
        </Button>
        <Text color="white" textAlign="center">
          Built by json
        </Text>
      </Flex>
    </Flex>
  );
};

export default Landing;
