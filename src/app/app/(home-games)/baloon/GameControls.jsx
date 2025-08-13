import React from "react";

const GameControls = ({ difficulty, setDifficulty }) => (
  <div className="controls">
    <div className="difficulty-selector">
      <label htmlFor="difficulty">Difficulty:</label>
      <select id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
    <div className="sound-controls">
      <button>🎵</button>
      <button>🔊</button>
    </div>
  </div>
);

export default GameControls;
