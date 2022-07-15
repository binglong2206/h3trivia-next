import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";
import { useGameStore } from "../state/useStore";
import Landing from "../modules/Home";
import Game from "../modules/Game";

export default function View() {
  const gameMode = useGameStore((state) => state.mode);

  const display = () => {
    switch (gameMode) {
      case "landing":
        return <Landing />;
      case "game":
        return <Game />;
      case "gameOver":
        return "done";
    }
  };

  return (
    <Box
      // flexDir="column"
      // justifyContent="center"
      // alignItems="center"
      background="linear-gradient(#2d16e6, #c417f1)"
      // backgroundImage="url(/img/gradientBackground.png)"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="cover"
      h="100%"
      w="100%"
      overflow="hidden"
    >
      {display()}
    </Box>
  );
}
