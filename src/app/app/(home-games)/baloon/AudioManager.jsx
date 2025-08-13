import React, { useEffect, useRef, createContext, useContext, useState } from "react";

// 🎛️ Create an AudioContext to share across components
const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

const AudioManager = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(true);

  const backgroundMusicRef = useRef(null);
  const popSoundRef = useRef(null);
  const correctSoundRef = useRef(null);
  const failSoundRef = useRef(null);
  const winSoundRef = useRef(null);

  useEffect(() => {
    if (isMusicOn) {
      backgroundMusicRef.current?.play().catch(() => {});
    } else {
      backgroundMusicRef.current?.pause();
    }
  }, [isMusicOn]);

  const playSound = (type) => {
    if (!isSoundOn) return;

    const sounds = {
      pop: popSoundRef,
      correct: correctSoundRef,
      fail: failSoundRef,
      win: winSoundRef,
    };

    const sound = sounds[type];
    if (sound?.current) {
      sound.current.currentTime = 0;
      sound.current.play().catch(() => {});
    }
  };

  const value = {
    playSound,
    isSoundOn,
    setIsSoundOn,
    isMusicOn,
    setIsMusicOn,
  };

  return (
    <AudioContext.Provider value={value}>
      {/* Audio elements (preloaded and controlled via refs) */}
      <audio ref={backgroundMusicRef} src="/audios/background_music.mp3" loop />
      <audio ref={popSoundRef} src="/audios/bubble_pop.wav" />
      <audio ref={correctSoundRef} src="/audios/spell_complete.wav" />
      <audio ref={failSoundRef} src="/audios/fail.wav" />
      <audio ref={winSoundRef} src="/audios/wining.wav" />

      {children}
    </AudioContext.Provider>
  );
};

export default AudioManager;
