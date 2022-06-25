import React from "react";
import { useGameStore, useLocalStore } from "../../state/useStore";
import InitLocalStore from "../../state/InitLocalStore";

const NavBar = () => {
  const topScore = useLocalStore((state) => state.topScore);
  const totalGames = useLocalStore((state) => state.totalGames);
  const totalCorrect = useLocalStore((state) => state.totalCorrect);
  const totalRounds = useLocalStore((state) => state.totalRounds);

  const winRate = ((totalCorrect / totalRounds) * 100).toFixed(1);

  return (
    <div className="nav">
      <InitLocalStore />
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

      <div className="nav-links">
        <div>Top Win Streaks: {topScore ? `${topScore} rounds` : null}</div>
        <div>Games Played: {totalGames}</div>
        <div>Win Rate: {isNaN(winRate) ? null : `${winRate}%`}</div>
      </div>
    </div>
  );
};

export default NavBar;
