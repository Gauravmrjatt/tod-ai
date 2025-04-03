"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { LockIcon, UnlockIcon, Star, BookOpen, Music, ImageIcon, Pencil } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

export default function AlphabetLearning() {
    const [hoveredLetter, setHoveredLetter] = useState(null)
    const alphabet = [
        { letter: "A", color: "from-red-400 to-red-600", icon: <ImageIcon className="w-4 h-4" />, theme: "Ant", src: "/assets/games/a/ant.jpeg" },
        { letter: "B", color: "from-blue-400 to-blue-600", icon: <BookOpen className="w-4 h-4" />, theme: "Books", src: "/assets/games/a/apple.jpeg" },
        { letter: "C", color: "from-green-400 to-green-600", icon: <Music className="w-4 h-4" />, theme: "Colors", src: "/assets/games/a/airplane.jpeg" },
        { letter: "D", color: "from-yellow-400 to-yellow-600", icon: <Pencil className="w-4 h-4" />, theme: "Drawing", src: "/assets/games/a/arrow.jpeg" },
        { letter: "E", color: "from-purple-400 to-purple-600", icon: <ImageIcon className="w-4 h-4" />, theme: "Earth", src: "/assets/games/a/astronaut.jpeg" },
        { letter: "F", color: "from-pink-400 to-pink-600", icon: <BookOpen className="w-4 h-4" />, theme: "Food", src: "/assets/games/e/earth.jpeg" },
        { letter: "G", color: "from-indigo-400 to-indigo-600", icon: <Music className="w-4 h-4" />, theme: "Games", src: "/assets/games/e/earth.jpeg" },
        { letter: "H", color: "from-orange-400 to-orange-600", icon: <Pencil className="w-4 h-4" />, theme: "Home", src: "/assets/games/e/earth.jpeg" },
        { letter: "I", color: "from-teal-400 to-teal-600", icon: <ImageIcon className="w-4 h-4" />, theme: "Insects", src: "/assets/games/e/earth.jpeg" },
        { letter: "J", color: "from-cyan-400 to-cyan-600", icon: <BookOpen className="w-4 h-4" />, theme: "Jobs", src: "/assets/games/e/earth.jpeg" },
        { letter: "K", color: "from-lime-400 to-lime-600", icon: <Music className="w-4 h-4" />, theme: "Kitchen", src: "/assets/games/e/earth.jpeg" },
        { letter: "L", color: "from-amber-400 to-amber-600", icon: <Pencil className="w-4 h-4" />, theme: "Letters", src: "/assets/games/e/earth.jpeg" },
        { letter: "M", color: "from-rose-400 to-rose-600", icon: <ImageIcon className="w-4 h-4" />, theme: "Music", src: "/assets/games/e/earth.jpeg" },
        { letter: "N", color: "from-fuchsia-400 to-fuchsia-600", icon: <BookOpen className="w-4 h-4" />, theme: "Nature", src: "/assets/games/e/earth.jpeg" },
        { letter: "O", color: "from-emerald-400 to-emerald-600", icon: <Music className="w-4 h-4" />, theme: "Ocean", src: "/assets/games/e/earth.jpeg" },
        { letter: "P", color: "from-violet-400 to-violet-600", icon: <Pencil className="w-4 h-4" />, theme: "Plants", src: "/assets/games/e/earth.jpeg" },
        { letter: "Q", color: "from-sky-400 to-sky-600", icon: <ImageIcon className="w-4 h-4" />, theme: "Questions", src: "/assets/games/e/earth.jpeg" },
        { letter: "R", color: "from-red-400 to-orange-600", icon: <BookOpen className="w-4 h-4" />, theme: "Reading", src: "/assets/games/e/earth.jpeg" },
        { letter: "S", color: "from-blue-400 to-purple-600", icon: <Music className="w-4 h-4" />, theme: "Space", src: "/assets/games/e/earth.jpeg" },
        { letter: "T", color: "from-green-400 to-teal-600", icon: <Pencil className="w-4 h-4" />, theme: "Travel", src: "/assets/games/e/earth.jpeg" },
        { letter: "U", color: "from-yellow-400 to-amber-600", icon: <ImageIcon className="w-4 h-4" />, theme: "Universe", src: "/assets/games/e/earth.jpeg" },
        { letter: "V", color: "from-purple-400 to-pink-600", icon: <BookOpen className="w-4 h-4" />, theme: "Vehicles", src: "/assets/games/e/earth.jpeg" },
        { letter: "W", color: "from-indigo-400 to-blue-600", icon: <Music className="w-4 h-4" />, theme: "Weather", src: "/assets/games/e/earth.jpeg" },
        { letter: "X", color: "from-pink-400 to-rose-600", icon: <Pencil className="w-4 h-4" />, theme: "X-rays", src: "/assets/games/e/earth.jpeg" },
        { letter: "Y", color: "from-teal-400 to-green-600", icon: <ImageIcon className="w-4 h-4" />, theme: "Yoga", src: "/assets/games/e/earth.jpeg" },
        { letter: "Z", color: "from-orange-400 to-red-600", icon: <BookOpen className="w-4 h-4" />, theme: "Zoo", src: "/assets/games/e/earth.jpeg" },
    ]

    return (
        <>
            <div className="flex items-center justify-between p-4 border-b border-[#f3f4f6] mb-10">
                <Link href="/app">
                    <button className="p-1 bg-[#f3f4f6] rounded-full flex items-center justify-center text-[#8e94a0] hover:bg-[#fff] cursor-pointer">
                        <ArrowLeft />
                    </button>
                </Link>
                <h1 className="text-lg font-medium ml-3 mr-auto">Alphabet</h1>
            </div>
            <div className="min-h-screen bg-red-500 bg-[url('/assets/svg/bg3.svg')] bg-repeat sm:bg-cover sm:bg-center p-6">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center mb-12">
                        <div className="inline-block relative">
                            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-green-600 mb-4 tracking-wide">
                                Alphabet Adventure!
                            </h1>
                        </div>
                    </header>

                    <div className="relative pb-16">
                        <div className="absolute w-full h-full pointer-events-none z-0">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={`star-${i}`}
                                    className="absolute z-10"
                                    style={{
                                        top: `${10 + i * 8}%`,
                                        left: `${5 + i * 9}%`,
                                        transform: `rotate(${Math.random() * 360}deg)`,
                                    }}
                                >
                                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 opacity-70" />
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 relative z-10">
                            {alphabet.map((item, index) => {
                                const isUnlocked = item.letter === "A"
                                return (
                                    <motion.div
                                        key={item.letter}

                                        className="relative flex flex-col items-center justify-center rounded-2xl p-4 h-36 sm:h-40 md:h-44 shadow-lg transition-all duration-300 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `linear-gradient(${isUnlocked ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)"}, ${isUnlocked ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)"}), url('${item.src}')`
                                        }}
                                        whileHover={isUnlocked ? { scale: 1.1, rotate: 2 } : {}}
                                        whileTap={isUnlocked ? { scale: 0.95 } : {}}
                                        onMouseEnter={() => setHoveredLetter(item.letter)}
                                        onMouseLeave={() => setHoveredLetter(null)}
                                    >
                                        <div className="absolute -top-2 -left-2 bg-white px-2 py-1 rounded-lg shadow-md text-xs font-semibold text-purple-700 flex items-center gap-1">
                                            {item.icon}
                                            <span>{item.theme}</span>
                                        </div>

                                        {isUnlocked ? (
                                            <Link
                                                href={`/app/alphabet/${item.letter.toLowerCase()}`}
                                                className="w-full h-full flex flex-col items-center justify-center"
                                            >
                                                <div className="relative">
                                                    <span className="text-5xl sm:text-6xl font-bold text-white mb-2 drop-shadow-md">
                                                        {item.letter}
                                                    </span>
                                                    <div className="absolute -top-3 -right-3 animate-pulse">
                                                        <Star className="w-5 h-5 text-yellow-200" />
                                                    </div>
                                                    <div className="absolute -bottom-3 -left-3 animate-pulse" style={{ animationDelay: "0.5s" }}>
                                                        <Star className="w-4 h-4 text-yellow-200" />
                                                    </div>
                                                </div>
                                                <div className="mt-2 flex items-center gap-1">
                                                    <UnlockIcon className="w-4 h-4 text-white" />
                                                    <span className="text-white text-sm font-medium">Unlocked</span>
                                                </div>
                                                <div className="absolute -top-2 -right-2">
                                                    <Star className="w-8 h-8 text-yellow-300 fill-yellow-300" />
                                                </div>
                                            </Link>
                                        ) : (
                                            <>
                                                <div className="relative">
                                                    <span className="text-5xl sm:text-6xl font-bold text-gray-500 mb-2">{item.letter}</span>
                                                    <div
                                                        className="absolute inset-0 opacity-10 blur-sm rounded-full"
                                                        style={{
                                                            background: `linear-gradient(to bottom right, var(--${item.color.split(" ")[0].split("-")[1]}), var(--${item.color.split(" ")[1].split("-")[1]}))`,
                                                            width: "120%",
                                                            height: "120%",
                                                            top: "-10%",
                                                            left: "-10%",
                                                            zIndex: -1,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="mt-2 flex items-center gap-1">
                                                    <LockIcon className="w-4 h-4 text-gray-500" />
                                                    <span className="text-gray-500 text-sm font-medium">Locked</span>
                                                </div>
                                            </>
                                        )}

                                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-purple-200">
                                            <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="mt-16 bg-white rounded-xl p-8 shadow-xl max-w-2xl mx-auto border border-purple-100 relative overflow-hidden mb-[50px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-full opacity-50"></div>

                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                            How to Play
                        </h2>

                        <ul className="space-y-4 text-gray-700 relative z-10">
                            <li className="flex items-start bg-purple-50 p-3 rounded-lg">
                                <div className="bg-purple-100 rounded-full p-2 mr-3 mt-0">
                                    <Star className="w-5 h-5 text-purple-500" />
                                </div>
                                <div>
                                    <span className="font-semibold">Start with letter A</span>
                                    <p className="text-sm text-gray-600 mt-1">Complete fun activities and learn words that start with A</p>
                                </div>
                            </li>
                            <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                                <div className="bg-blue-100 rounded-full p-2 mr-3 mt-0">
                                    <UnlockIcon className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <span className="font-semibold">Unlock new letters</span>
                                    <p className="text-sm text-gray-600 mt-1">Each completed letter unlocks the next one in the alphabet</p>
                                </div>
                            </li>
                            <li className="flex items-start bg-pink-50 p-3 rounded-lg">
                                <div className="bg-pink-100 rounded-full p-2 mr-3 mt-0">
                                    <Star className="w-5 h-5 text-pink-500" />
                                </div>
                                <div>
                                    <span className="font-semibold">Collect stars and rewards</span>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Earn stars for each letter you master and track your progress
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-purple-100">
                            <h3 className="text-lg font-semibold text-purple-700 mb-3">Your Progress</h3>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
                                    style={{ width: "4%" }}
                                ></div>
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-gray-600">
                                <span>1/26 Letters</span>
                                <span>4% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed top-10 right-10 z-0 opacity-10">
                    <span className="text-9xl font-bold text-purple-300">A</span>
                </div>
                <div className="fixed bottom-10 left-10 z-0 opacity-10">
                    <span className="text-9xl font-bold text-blue-300">Z</span>
                </div>
                <div className="fixed bottom-20 right-20 z-0 opacity-10 transform rotate-12">
                    <span className="text-8xl font-bold text-pink-300">B</span>
                </div>
                <div className="fixed top-20 left-20 z-0 opacity-10 transform -rotate-12">
                    <span className="text-8xl font-bold text-green-300">Y</span>
                </div>
            </div>
        </>
    )
}