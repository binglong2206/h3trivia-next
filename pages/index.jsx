import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
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

  return <div>{display()}</div>;
}
