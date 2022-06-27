import React, { useEffect } from "react";
import { useGameStore, useLocalStore } from "../../state/useStore";

const NavBar = () => {
  const score = useGameStore((state) => state.score);
  const topScore = useLocalStore((state) => state.topScore);

  return (
    <div className="nav">
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
        <div>Score: {score}</div>
        <div>Top Score: {Math.max(score, topScore)}</div>
        {/* <div>Win Rate: {winRate}%</div> */}
      </div>
    </div>
  );
};

export default NavBar;
