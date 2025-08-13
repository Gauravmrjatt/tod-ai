"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import "./style.css";
import React, { useEffect, useState } from "react";
import GameControls from "./GameControls";
import GameInfo from "./GameInfo";
import EmojiDisplay from "./EmojiDisplay";
import BubbleContainer from "./BubbleContainer";
import HintButton from "./HintButton";
import AudioManager from "./AudioManager";

const wordBank = {
  easy: ["CAT", "DOG", "BALL", "FISH", "LION", "APPLE", "MANGO", "ZEBRA"],
  medium: ["ELEPHANT", "BUTTERFLY", "KANGAROO", "GIRAFFE", "DOLPHIN"],
  hard: ["RHINOCEROS", "HIPPOPOTAMUS", "CHAMELEON", "CROCODILE", "OCTOPUS"],
};

export default function BaloonGmame() {
  const [difficulty, setDifficulty] = useState("easy");
  const [currentWord, setCurrentWord] = useState("");
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [emoji, setEmoji] = useState("🧠");
  const [level, setLevel] = useState(1);
  const [showHint, setShowHint] = useState(false);

  // Set a random word on start/reset
  useEffect(() => {
    const newWord =
      wordBank[difficulty][
        Math.floor(Math.random() * wordBank[difficulty].length)
      ];
    setCurrentWord(newWord);
    setClicked([]);
    setTimeLeft(30);
  }, [difficulty, level]);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setEmoji("⏰");
          setTimeout(() => setEmoji("🧠"), 2000);
          setLevel((l) => l + 1); // retry next
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentWord, level]);

  const handleCorrect = () => {
    setScore((s) => s + timeLeft);
    setEmoji("🎉");
    setTimeout(() => {
      setLevel((l) => l + 1);
      setEmoji("🧠");
    }, 3000);
  };

  return (
    <>
      <AudioManager>
        <div className="flex w-full items-center justify-between p-4 border-b ">
          <div className="flex items-center gap-2">
            <Link href="/app">
              <button className="p-1  rounded-full flex items-center justify-center text-[#8e94a0] hover:bg-[#fff] cursor-pointer">
                <ArrowLeft />
              </button>
            </Link>
            <h1 className="text-lg text-[#8e94a0] font-medium ml-3 mr-auto">Baloon</h1>
          </div>
        </div>
        <div className="game-container">
          <GameControls difficulty={difficulty} setDifficulty={setDifficulty} />
          <h1>🎈 Let's Spell with Tod AI!</h1>
          <GameInfo
            timeLeft={timeLeft}
            score={score}
            currentWord={currentWord}
          />
          <EmojiDisplay emoji={emoji} />
          <BubbleContainer
            word={currentWord}
            clicked={clicked}
            setClicked={setClicked}
            onCorrect={handleCorrect}
            setEmoji={setEmoji}
          />
          <HintButton
            word={currentWord}
            clicked={clicked}
            showHint={showHint}
            setShowHint={setShowHint}
          />
        </div>
      </AudioManager>
    </>
  );
}
