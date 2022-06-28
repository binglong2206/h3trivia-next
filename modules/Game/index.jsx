import React from "react";
import GameNavBar from "./GameNavBar";
import PopUp from "./PopUp";
import Prompt from "./Prompt";
import MultipleChoice from "./MultipleChoice";
import { useGameStore } from "../../state/useStore";
import HandleAnswer from "../../hooks/handleAnswer";
import HandleNext from "../../hooks/handleNext";
import { Flex, Button, Box, Grid, GridItem } from "@chakra-ui/react";

export default function Game() {
  return (
    <Flex h="100%" bgColor="green" flexDir="column" justifyContent="center">
      <GameNavBar />
      <Box bgColor="red">
        <Prompt />
      </Box>
      <Flex bgColor="blue">
        <MultipleChoice />
      </Flex>
    </Flex>
  );
}
