"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Volume2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Canvas from "@/components/WritingCanvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Corrected letter data with proper src paths
const letterData = {
    a: {
        letter: "A",
        words: [
            { text: "Apple", src: "/assets/games/a/apple.jpeg" },
            { text: "Airplane", src: "/assets/games/a/airplane.jpeg" },
            { text: "Ant", src: "/assets/games/a/ant.jpeg" },
            { text: "Astronaut", src: "/assets/games/a/astronaut.jpeg" },
            { text: "Arrow", src: "/assets/games/a/arrow.jpeg" }
        ],
        color: "from-red-400 to-red-600",
        funFacts: [
            "A is the first letter of the alphabet",
            "A comes from the Greek letter Alpha",
            "A is a vowel sound"
        ],
        activities: ["Draw an Apple", "Act like an Ant", "Make an Airplane from paper"]
    },
};

export default function LetterPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id?.toLowerCase();  // Ensuring lowercase for safe lookup
    const letterInfo = letterData[id] || letterData["a"]; // Default to 'a' if not found

    const [completed, setCompleted] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);
    const [currentTab, setCurrentTab] = useState("learning");

    const handleNextWord = () => {
        if (currentWordIndex < letterInfo.words.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
        } else {
            setCompleted(true);
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 3000);
        }
    };

    return (
        <>
            <div className="flex bg-white items-center gap-4 mb-6 p-4">
                <Link href="/app/alphabet">
                    <button className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-white">
                        <ArrowLeft />
                    </button>
                </Link>
                <h1 className="text-lg font-semibold">Letter / {letterInfo.letter}</h1>
            </div>

            <div className="min-h-screen flex flex-col bg-[url('/assets/svg/bg3.svg')] bg-cover bg-center p-4 sm:p-8 mb-[50px]">
                <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-9xl font-bold text-red-600"
                    >
                        {letterInfo.letter}
                    </motion.div>

                    <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full max-w-lg">
                        <TabsList className="flex justify-center gap-4">
                            <TabsTrigger value="learning">Learning</TabsTrigger>
                            <TabsTrigger value="speaking">Speaking</TabsTrigger>
                            <TabsTrigger value="writing">Writing</TabsTrigger>
                        </TabsList>

                        <TabsContent value="learning" className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-700 mb-4">
                                {completed ? "Great job!" : `Word ${currentWordIndex + 1} of ${letterInfo.words.length}`}
                            </h3>

                            {!completed ? (
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        key={currentWordIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-3xl font-bold text-purple-700"
                                    >
                                        {letterInfo.words[currentWordIndex].text}
                                    </motion.div>

                                    {/* Display word image */}
                                    {letterInfo.words[currentWordIndex].src && (
                                        <div className="w-40 h-40 mt-4">
                                            <Image
                                                src={letterInfo.words[currentWordIndex].src}
                                                alt={letterInfo.words[currentWordIndex].text}
                                                width={160}
                                                height={160}
                                                className="rounded-lg shadow-md"
                                            />
                                        </div>
                                    )}

                                    {/* <div className="flex gap-2 mt-4">
                                        {letterInfo.words[currentWordIndex].text.split("").map((char, i) => (
                                            <div
                                                key={i}
                                                className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg font-bold ${char.toLowerCase() === letterInfo.letter.toLowerCase()
                                                    ? "bg-purple-600 text-white"
                                                    : "bg-gray-200 text-gray-700"
                                                    }`}
                                            >
                                                {char}
                                            </div>
                                        ))}
                                    </div> */}

                                    <Button
                                        onClick={handleNextWord}
                                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
                                    >
                                        {currentWordIndex < letterInfo.words.length - 1 ? "Next Word" : "Complete!"}
                                    </Button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-xl text-gray-700">You've completed letter {letterInfo.letter}!</p>
                                    <Button onClick={() => { setCurrentTab("speaking") }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 cursor-pointer">Try Speaking</Button>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="speaking">
                            <p className="text-gray-700 text-lg">Coming soon...</p>
                        </TabsContent>

                        <TabsContent value="writing" className="relative">
                            <Canvas />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    );
}
