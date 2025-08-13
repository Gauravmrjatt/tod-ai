import React from "react";

const HintButton = ({ word, clicked, showHint, setShowHint }) => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1;
    utterance.rate = 0.6;
    utterance.volume = 1;
    speechSynthesis.cancel(); // cancel ongoing speech
    speechSynthesis.speak(utterance);
  };

  const handleHint = () => {
    const nextLetter = word[clicked.length];
    if (nextLetter) {
      speak(`The next letter is ${nextLetter}`);
      setShowHint(true);

      // Optional: reset hint animation after some time
      setTimeout(() => setShowHint(false), 2000);
    }
  };

  return (
    <button onClick={handleHint} className="hint-button">
      💡 Get Hint
    </button>
  );
};

export default HintButton;
