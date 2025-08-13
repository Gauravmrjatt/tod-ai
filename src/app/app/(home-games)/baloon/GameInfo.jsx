import React from "react";

const GameInfo = ({ timeLeft, score, currentWord }) => (
  <div className="game-info">
    <div id="timer">Time: {timeLeft}s</div>
    <div id="targetWord">Spell: {currentWord}</div>
    <div id="score">Score: {score}</div>
  </div>
);

export default GameInfo;
