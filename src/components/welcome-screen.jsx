"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Rocket, Loader } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  { id: 1, bgColor: "#ffcc00", text: "Welcome to FunLand!", emoji: "🎠", svg: "/assets/svg/blob-haikei.svg" },
  { id: 2, bgColor: "#ff6699", text: "Explore Magical Features!", emoji: "✨", svg: "/assets/svg/blurry-gradient-haikei.svg" },
  { id: 3, bgColor: "#66ccff", text: "Customize Your Experience!", emoji: "🎭", svg: "/assets/svg/circle-scatter-haikei.svg" },
  { id: 4, bgColor: "#66ff66", text: "Learn & Play!", emoji: "📖", svg: "/assets/svg/wave-haikei.svg" },
  { id: 5, bgColor: "#ff9966", text: "Unlock Cool Stuff!", emoji: "🔓", svg: "/assets/svg/symbol-scatter-haikei.svg" },
  { id: 6, bgColor: "#9966ff", text: "Ready? Let’s Go!", emoji: "🏁", svg: "/assets/svg/blob-scene-haikei.svg" }
];

export default function WelcomeScreen() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  };

  const handlePrevious = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => router.push("/app"), 2000); // Simulate loading delay
  };

  return (
    <motion.div
      animate={{ backgroundColor: steps[stepIndex].bgColor }}
      transition={{ type: "spring", stiffness: 30, damping: 10 }}
      className="relative flex flex-col items-center justify-center h-screen text-white p-6 font-cartoon overflow-hidden"
    >
      {/* Enhanced SVG Background with Double Layer */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={steps[stepIndex].svg}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: `url(${steps[stepIndex].svg}) no-repeat center/cover`,
            filter: "blur(2px) saturate(120%)"
          }}
        />
      </AnimatePresence>

      {/* Floating Emoji Container */}
      <motion.div
        className="absolute top-20 z-10 text-8xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {steps[stepIndex].emoji}
      </motion.div>

      {/* Comic-style Text Bubble */}
      <motion.div
        key={steps[stepIndex].id}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
        transition={{ type: "spring", bounce: 0.6 }}
        className="relative z-10 text-4xl text-center p-8 bg-white text-black rounded-xl shadow-2xl border-4 border-black"
        style={{
          transformOrigin: "bottom center",
          filter: "drop-shadow(5px 5px 0 rgba(0,0,0,0.2))"
        }}
      >
        <div className="comic-triangle absolute -bottom-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-t-16 border-transparent border-t-black" />
        {steps[stepIndex].text}
      </motion.div>

      {/* Bouncy Navigation Buttons */}
      <div className="mt-16 flex gap-6 relative z-10">
        <AnimatePresence mode="wait">
          {stepIndex > 0 && (
            <motion.button
              key="previous"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handlePrevious}
              className="flex items-center gap-2 px-8 py-4 bg-white text-lg font-bold text-black rounded-2xl shadow-xl border-4 border-black hover:shadow-lg"
            >
              <ArrowLeft size={28} className="shake-x" /> Previous
            </motion.button>
          )}
        </AnimatePresence>

        <motion.div
          key={stepIndex}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          {stepIndex < steps.length - 1 ? (
            <motion.button
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 bg-white text-lg font-bold text-black rounded-2xl shadow-xl border-4 border-black hover:shadow-lg"
            >
              Next <ArrowRight size={28} className="shake-x" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleStart}
              className="flex items-center gap-2 px-8 py-4 bg-yellow-400 text-lg font-bold text-black rounded-2xl shadow-xl border-4 border-black hover:bg-yellow-300"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="flex items-center gap-2"
                >
                  <Rocket size={28} /> Blasting off...
                </motion.div>
              ) : (
                <>
                  🎉 Let’s Go! <Rocket size={28} className="jump" />
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 flex gap-4 z-10">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setStepIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${index === stepIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        ))}
      </div>

      {/* Add some floating shapes for cartoony effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}