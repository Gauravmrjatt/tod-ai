"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Rocket, Loader } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  { id: 1, bgColor: "#ffcc00", text: "Welcome to Tod-Ai!", emoji: "🎠" },
  { id: 2, bgColor: "#ff6699", text: "Explore Magical Features!", emoji: "✨" },
  { id: 3, bgColor: "#66ccff", text: "Customize Your Experience!", emoji: "🎭" },
  { id: 4, bgColor: "#66ff66", text: "Learn & Play!", emoji: "📖" },
  { id: 5, bgColor: "#ff9966", text: "Unlock Cool Stuff!", emoji: "🔓" },
  { id: 6, bgColor: "#9966ff", text: "Ready? Let’s Go!", emoji: "🏁" }
];

export default function WelcomeScreen() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => stepIndex < steps.length - 1 && setStepIndex(stepIndex + 1);
  const handlePrevious = () => stepIndex > 0 && setStepIndex(stepIndex - 1);

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => router.push("/app"), 2000);
  };

  return (
    <motion.div
      animate={{ backgroundColor: steps[stepIndex].bgColor }}
      transition={{ type: "spring", stiffness: 30 }}
      className="relative flex flex-col items-center justify-center h-screen text-white p-6 font-cartoon overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-50" style={{
        background: `
          radial-gradient(circle at 20% 80%, ${steps[stepIndex].bgColor}99 10%, transparent 40%),
          linear-gradient(45deg, ${steps[stepIndex].bgColor}44 25%, transparent 25%),
          linear-gradient(-45deg, ${steps[stepIndex].bgColor}44 25%, transparent 25%)
        `,
        backgroundSize: "60px 60px",
        animation: "diagonalMove 20s linear infinite"
      }} />

      {/* Floating Emoji */}
      <motion.div
        className="absolute top-24 z-10 text-8xl"
        animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {steps[stepIndex].emoji}
      </motion.div>

      {/* Comic Text Bubble */}
      <motion.div
        key={steps[stepIndex].id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", bounce: 0.6 }}
        className="relative z-10 text-4xl text-center p-8 bg-white text-black rounded-3xl shadow-2xl border-[6px] border-black"
      >
        {steps[stepIndex].text}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 
          border-l-[24px] border-r-[24px] border-t-[24px] border-transparent border-t-black" />
      </motion.div>

      {/* Navigation Buttons */}
      <div className="mt-16 flex gap-6 relative z-10">
        <AnimatePresence>
          {stepIndex > 0 && (
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="flex items-center gap-2 px-8 py-4 bg-white text-lg font-bold text-black rounded-2xl shadow-xl border-[4px] border-black"
            >
              <ArrowLeft size={28} /> Previous
            </motion.button>
          )}
        </AnimatePresence>

        <motion.div
          key={`button-${stepIndex}`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          {stepIndex < steps.length - 1 ? (
            <motion.button
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 bg-white text-lg font-bold text-black rounded-2xl shadow-xl border-[4px] border-black"
            >
              Next <ArrowRight size={28} />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleStart}
              className="flex items-center gap-2 px-8 py-4 bg-yellow-300 text-lg font-bold text-black rounded-2xl shadow-xl border-[4px] border-black"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Rocket size={28} />
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
            className={`w-6 h-6 rounded-full cursor-pointer border-[3px] border-black ${index === stepIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        ))}
      </div>

      {/* Animated Confetti */}
      {stepIndex === steps.length - 1 && !isLoading && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `hsl(${Math.random() * 360}deg 100% 50%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: "100vh", opacity: 1 }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                rotate: Math.random() * 360
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}