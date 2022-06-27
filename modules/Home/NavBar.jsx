import React, { useEffect } from "react";
import { useGameStore, useLocalStore } from "../../state/useStore";
import InitLocalStore from "../../state/InitLocalStore";

const NavBar = () => {
  const topScore = useLocalStore((state) => state.topScore);
  const totalGames = useLocalStore((state) => state.totalGames);
  const totalCorrect = useLocalStore((state) => state.totalCorrect);
  const totalRounds = useLocalStore((state) => state.totalRounds);
  const winRate = ((totalCorrect / totalRounds) * 100).toFixed(1);

  useEffect(() => {
    useLocalStore.setState({
      userId_h3trivia: localStorage.getItem("userId_h3trivia"),
    });
    useLocalStore.setState({ topScore: localStorage.getItem("topScore") });
    useLocalStore.setState({ totalGames: localStorage.getItem("totalGames") });
    useLocalStore.setState({
      totalCorrect: localStorage.getItem("totalCorrect"),
    });
    useLocalStore.setState({
      totalRounds: localStorage.getItem("totalRounds"),
    });
  });

  return (
    <div className="nav">
      {/* <InitLocalStore /> */}
      <div className="nav-header">
        <div className="nav-title">
          H3Trivia<span className="textGradient">.com</span>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {/* <button onClick={() => useLocalStore.setState({ topScore: 7777 })}>
        TEST
      </button> */}

      <div className="nav-links">
        <div>Top Win Streaks: {topScore ? `${topScore} rounds` : null}</div>
        <div>Games Played: {totalGames}</div>
        <div>Win Rate: {isNaN(winRate) ? null : `${winRate}%`}</div>
      </div>
    </div>
  );
};

export default NavBar;
