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
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage="url(/img/gradientBackground.png)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100%"
    >
      {display()}
    </Flex>
  );
}
