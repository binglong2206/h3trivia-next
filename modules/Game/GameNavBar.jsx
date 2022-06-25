import React from "react";

const NavBar = ({ highScore, score }) => {
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
        <div>Top Score: {highScore}</div>
        {/* <div>Win Rate: {winRate}%</div> */}
      </div>
    </div>
  );
};

export default NavBar;
