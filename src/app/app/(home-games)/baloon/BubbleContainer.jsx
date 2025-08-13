import React, { useEffect, useRef, useState } from "react";
import { useAudio } from "./AudioManager";

// 🎨 Kid-friendly gradient options
const kidFriendlyGradients = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",   // pink
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",   // purple-pink
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",   // pink-blue
  "linear-gradient(135deg, #f6d365, #fda085)",   // peach-orange
  "linear-gradient(135deg, #84fab0, #8fd3f4)",   // green-blue
  "linear-gradient(135deg, #cfd9df, #e2ebf0)",   // soft blue
  "linear-gradient(135deg, #fccb90, #d57eeb)",   // orange-purple
  "linear-gradient(135deg, #e0c3fc, #8ec5fc)",   // lavender-blue
];

// 🎈 Single bubble component with colorful styles
const Bubble = ({ letter, x, y, onClick, blasting }) => {
  const [gradient] = useState(
    kidFriendlyGradients[Math.floor(Math.random() * kidFriendlyGradients.length)]
  );

  const style = {
    left: `${x}px`,
    top: `${y}px`,
    position: "absolute",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: gradient,
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    transform: blasting ? "scale(1.5)" : "scale(1)",
    opacity: blasting ? 0 : 1,
    transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
    pointerEvents: blasting ? "none" : "auto",
    userSelect: "none",
  };

  return (
    <div style={style} onClick={onClick}>
      {letter}
    </div>
  );
};

// 🎉 BubbleContainer manages logic, movement & animation
const BubbleContainer = ({ word, clicked, setClicked, onCorrect, setEmoji }) => {
  const containerRef = useRef(null);
  const animationRef = useRef();
  const { playSound } = useAudio();

  const [bubbles, setBubbles] = useState([]);

  // Generate bubbles on new word
  useEffect(() => {
    generateBubbles();
  }, [word]);

  const generateBubbles = () => {
    const container = containerRef.current.getBoundingClientRect();
    const letters = word.split("");
    const distractors = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .filter(ch => !letters.includes(ch))
      .sort(() => 0.5 - Math.random())
      .slice(0, letters.length + 2);

    const all = [...letters, ...distractors].sort(() => 0.5 - Math.random());

    const newBubbles = all.map((letter, i) => ({
      id: `${letter}-${i}`, // unique key
      letter,
      x: Math.random() * (container.width - 60),
      y: Math.random() * (container.height - 60),
      dx: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.7 + 0.3),
      dy: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.7 + 0.3),
      blasting: false,
    }));

    setBubbles(newBubbles);
  };

  // Handle bubble movement animation
  useEffect(() => {
    const move = () => {
      setBubbles((prev) => {
        const container = containerRef.current.getBoundingClientRect();

        return prev.map(b => {
          let newX = b.x + b.dx;
          let newY = b.y + b.dy;

          if (newX <= 0 || newX >= container.width - 60) b.dx *= -1;
          if (newY <= 0 || newY >= container.height - 60) b.dy *= -1;

          return { ...b, x: newX, y: newY, dx: b.dx, dy: b.dy };
        });
      });

      animationRef.current = requestAnimationFrame(move);
    };

    animationRef.current = requestAnimationFrame(move);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Handle user clicking a bubble
  const handleClick = (letter, id) => {
    const expected = word[clicked.length];
    playSound("pop");

    if (letter === expected) {
      const updated = [...clicked, letter];
      setClicked(updated);

      // Animate and remove blasted bubble
      setBubbles(prev =>
        prev.map(b => (b.id === id ? { ...b, blasting: true } : b))
      );

      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== id));
      }, 300);

      if (updated.join("") === word) {
        playSound("correct");
        onCorrect();
      }
    } else {
      setEmoji("😔");
      playSound("fail");
      setTimeout(() => setEmoji("🧠"), 1500);
      setClicked([]);
    }
  };

  return (
    <div
      id="bubbleContainer"
      ref={containerRef}
      style={{
        position: "relative",
        width: "90%",
        height: "60vh",
        maxWidth: "800px",
        maxHeight: "500px",
        minHeight: "300px",
        margin: "20px auto",
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.5)",
      }}
    >
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          letter={bubble.letter}
          x={bubble.x}
          y={bubble.y}
          blasting={bubble.blasting}
          onClick={() => handleClick(bubble.letter, bubble.id)}
        />
      ))}
    </div>
  );
};  

export default BubbleContainer;
