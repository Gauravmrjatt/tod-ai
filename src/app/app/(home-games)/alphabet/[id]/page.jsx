"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Canvas from "@/components/WritingCanvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextToSpeech from "@/app/app/(home-games)/baloon/TextToSpeech";
import SpeechToText from "@/app/app/(home-games)/baloon/SpeechToText";
const letterData = {
  a: {
    letter: "A",
    words: [
      { text: "Apple", src: "/assets/games/a/apple.jpeg" },
      { text: "Airplane", src: "/assets/games/a/airplane.jpeg" },
      { text: "Ant", src: "/assets/games/a/ant.jpeg" },
      { text: "Astronaut", src: "/assets/games/a/astronaut.jpeg" },
      { text: "Arrow", src: "/assets/games/a/arrow.jpeg" },
    ],
    color: "from-red-400 to-red-600",
    funFacts: [
      "A is the first letter of the alphabet.",
      "A comes from the Greek letter Alpha.",
      "A is a vowel sound.",
    ],
    activities: ["Draw an Apple", "Act like an Ant", "Fly like an Airplane"],
  },
  b: {
    letter: "B",
    words: [
      { text: "Ball", src: "/assets/games/b/ball.png" },
      { text: "Banana", src: "/assets/games/b/banana.jpeg" },
      { text: "Bear", src: "/assets/games/b/bear.jpeg" },
      { text: "Bee", src: "/assets/games/b/bee.jpeg" },
      { text: "Boat", src: "/assets/games/b/boat.jpeg" },
    ],
    color: "from-yellow-400 to-yellow-600",
    funFacts: [
      "B is the second letter of the alphabet.",
      "B makes a 'buh' sound.",
      "B is used in many animal names.",
    ],
    activities: ["Bounce a Ball", "Buzz like a Bee", "Draw a Bear"],
  },
  c: {
    letter: "C",
    words: [
      { text: "Cat", src: "/assets/games/c/cat.jpeg" },
      { text: "Car", src: "/assets/games/c/car.jpeg" },
      { text: "Cake", src: "/assets/games/c/cake.jpeg" },
      { text: "Cow", src: "/assets/games/c/cow.jpeg" },
      { text: "Crab", src: "/assets/games/c/crab.jpeg" },
    ],
    color: "from-green-400 to-green-600",
    funFacts: [
      "C can sound like 'k' or 's'.",
      "Cats are one of the most popular pets.",
      "Cows say 'moo'!",
    ],
    activities: ["Pretend to be a Cat", "Draw a Cake", "Color a Car"],
  },
  d: {
    letter: "D",
    words: [
      { text: "Dog", src: "/assets/games/d/dog.jpeg" },
      { text: "Duck", src: "/assets/games/d/duck.jpeg" },
      { text: "Drum", src: "/assets/games/d/drum.jpeg" },
      { text: "Doll", src: "/assets/games/d/doll.jpeg" },
      { text: "Door", src: "/assets/games/d/door.jpeg" },
    ],
    color: "from-blue-400 to-blue-600",
    funFacts: [
      "D is the 4th letter in the alphabet.",
      "Dogs are loyal companions.",
      "Drums make loud beats!",
    ],
    activities: ["Bark like a Dog", "Play pretend Drums", "Draw a Duck"],
  },
  e: {
    letter: "E",
    words: [
      { text: "Elephant", src: "/assets/games/e/elephant.jpeg" },
      { text: "Egg", src: "/assets/games/e/egg.jpeg" },
      { text: "Eagle", src: "/assets/games/e/eagle.jpeg" },
      { text: "Engine", src: "/assets/games/e/engine.jpeg" },
      { text: "Ear", src: "/assets/games/e/ear.jpeg" },
    ],
    color: "from-pink-400 to-pink-600",
    funFacts: [
      "E is the most used letter in English.",
      "Elephants are the largest land animals.",
      "E is a vowel.",
    ],
    activities: ["Pretend to be an Elephant", "Crack an Egg (craft)", "Listen with your Ears"],
  },
  f: {
    letter: "F",
    words: [
      { text: "Fish", src: "/assets/games/f/fish.jpeg" },
      { text: "Frog", src: "/assets/games/f/frog.jpeg" },
      { text: "Fan", src: "/assets/games/f/fan.jpeg" },
      { text: "Fire", src: "/assets/games/f/fire.jpeg" },
      { text: "Feather", src: "/assets/games/f/feather.jpeg" },
    ],
    color: "from-teal-400 to-teal-600",
    funFacts: [
      "F makes a soft 'ffff' sound.",
      "Frogs jump high and live near water.",
      "Fish live in water and breathe through gills.",
    ],
    activities: ["Jump like a Frog", "Draw a Fish", "Make a Feather art"],
  },
  g: {
    letter: "G",
    words: [
      { text: "Goat", src: "/assets/games/g/goat.jpeg" },
      { text: "Giraffe", src: "/assets/games/g/giraffe.jpeg" },
      { text: "Guitar", src: "/assets/games/g/guitar.jpeg" },
      { text: "Glove", src: "/assets/games/g/glove.jpeg" },
      { text: "Gift", src: "/assets/games/g/gift.jpeg" },
    ],
    color: "from-indigo-400 to-indigo-600",
    funFacts: [
      "Giraffes have long necks.",
      "Goats can climb steep hills.",
      "Guitars make music!",
    ],
    activities: ["Pretend to play Guitar", "Wrap a Gift", "Draw a Giraffe"],
  },
  h: {
    letter: "H",
    words: [
      { text: "Hat", src: "/assets/games/h/hat.jpeg" },
      { text: "Horse", src: "/assets/games/h/horse.jpeg" },
      { text: "House", src: "/assets/games/h/house.jpeg" },
      { text: "Helicopter", src: "/assets/games/h/helicopter.jpeg" },
      { text: "Hammer", src: "/assets/games/h/hammer.jpeg" },
    ],
    color: "from-yellow-300 to-yellow-500",
    funFacts: [
      "H makes a 'ha' sound.",
      "Houses come in many shapes and sizes.",
      "Horses can run very fast!",
    ],
    activities: ["Draw a House", "Pretend to ride a Horse", "Make a Hammer with blocks"],
  },
  i: {
    letter: "I",
    words: [
      { text: "Ice", src: "/assets/games/i/ice.jpeg" },
      { text: "Igloo", src: "/assets/games/i/igloo.jpeg" },
      { text: "Insect", src: "/assets/games/i/insect.jpeg" },
      { text: "Ink", src: "/assets/games/i/ink.jpeg" },
      { text: "Island", src: "/assets/games/i/island.jpeg" },
    ],
    color: "from-cyan-400 to-cyan-600",
    funFacts: [
      "I is a vowel.",
      "Igloos are made of ice blocks.",
      "Insects have six legs.",
    ],
    activities: ["Draw an Igloo", "Pretend you're on an Island", "Make Insect sounds"],
  },
  j: {
    letter: "J",
    words: [
      { text: "Juice", src: "/assets/games/j/juice.jpeg" },
      { text: "Jelly", src: "/assets/games/j/jelly.jpeg" },
      { text: "Jaguar", src: "/assets/games/j/jaguar.jpeg" },
      { text: "Jeans", src: "/assets/games/j/jeans.jpeg" },
      { text: "Jump", src: "/assets/games/j/jump.jpeg" },
    ],
    color: "from-orange-400 to-orange-600",
    funFacts: [
      "J makes a 'juh' sound.",
      "Jelly is soft and wobbly.",
      "Jaguars are wild cats that live in forests.",
    ],
    activities: ["Jump up and down", "Pretend to drink Juice", "Draw a Jaguar"],
  },
  k: {
    letter: "K",
    words: [
      { text: "Kite", src: "/assets/games/k/kite.jpeg" },
      { text: "Kangaroo", src: "/assets/games/k/kangaroo.jpeg" },
      { text: "Key", src: "/assets/games/k/key.jpeg" },
      { text: "King", src: "/assets/games/k/king.jpeg" },
      { text: "Kiwi", src: "/assets/games/k/kiwi.jpeg" },
    ],
    color: "from-purple-400 to-purple-600",
    funFacts: [
      "K is a silent letter in some words like 'knee'.",
      "Kites fly in the sky.",
      "Kangaroos carry babies in their pouch.",
    ],
    activities: ["Fly a Kite", "Jump like a Kangaroo", "Pretend to be a King"],
  },
  l: {
    letter: "L",
    words: [
      { text: "Lion", src: "/assets/games/l/lion.jpeg" },
      { text: "Leaf", src: "/assets/games/l/leaf.jpeg" },
      { text: "Lamp", src: "/assets/games/l/lamp.jpeg" },
      { text: "Ladder", src: "/assets/games/l/ladder.jpeg" },
      { text: "Lemon", src: "/assets/games/l/lemon.jpeg" },
    ],
    color: "from-lime-400 to-lime-600",
    funFacts: [
      "Lions are called the king of the jungle.",
      "Leaves turn colors in fall.",
      "Lemons are very sour!",
    ],
    activities: ["Roar like a Lion", "Collect Leaves", "Pretend to climb a Ladder"],
  },
  m: {
    letter: "M",
    words: [
      { text: "Monkey", src: "/assets/games/m/monkey.jpeg" },
      { text: "Moon", src: "/assets/games/m/moon.jpeg" },
      { text: "Mouse", src: "/assets/games/m/mouse.jpeg" },
      { text: "Milk", src: "/assets/games/m/milk.jpeg" },
      { text: "Map", src: "/assets/games/m/map.jpeg" },
    ],
    color: "from-pink-400 to-pink-600",
    funFacts: [
      "Monkeys swing from trees.",
      "The moon changes shape each night.",
      "Mice are tiny animals that squeak.",
    ],
    activities: ["Act like a Monkey", "Draw the Moon", "Follow a Map"],
  },
  n: {
    letter: "N",
    words: [
      { text: "Nose", src: "/assets/games/n/nose.jpeg" },
      { text: "Nest", src: "/assets/games/n/nest.jpeg" },
      { text: "Net", src: "/assets/games/n/net.jpeg" },
      { text: "Ninja", src: "/assets/games/n/ninja.jpeg" },
      { text: "Notebook", src: "/assets/games/n/notebook.jpeg" },
    ],
    color: "from-gray-400 to-gray-600",
    funFacts: [
      "Birds build nests to keep eggs safe.",
      "Your nose helps you smell.",
      "Ninjas are sneaky and fast!",
    ],
    activities: ["Touch your Nose", "Draw a Nest", "Pretend to be a Ninja"],
  },
  o: {
    letter: "O",
    words: [
      { text: "Octopus", src: "/assets/games/o/octopus.jpeg" },
      { text: "Owl", src: "/assets/games/o/owl.jpeg" },
      { text: "Orange", src: "/assets/games/o/orange.jpeg" },
      { text: "Ocean", src: "/assets/games/o/ocean.jpeg" },
      { text: "Onion", src: "/assets/games/o/onion.jpeg" },
    ],
    color: "from-blue-400 to-blue-600",
    funFacts: [
      "O is a vowel.",
      "Octopuses have 8 arms.",
      "Owls are awake at night.",
    ],
    activities: ["Pretend to be an Octopus", "Draw an Owl", "Make waves like the Ocean"],
  },
  p: {
    letter: "P",
    words: [
      { text: "Pig", src: "/assets/games/p/pig.jpeg" },
      { text: "Pen", src: "/assets/games/p/pen.jpeg" },
      { text: "Panda", src: "/assets/games/p/panda.jpeg" },
      { text: "Pizza", src: "/assets/games/p/pizza.jpeg" },
      { text: "Parrot", src: "/assets/games/p/parrot.jpeg" },
    ],
    color: "from-rose-400 to-rose-600",
    funFacts: [
      "Pigs love mud!",
      "Pandas eat bamboo.",
      "Parrots can talk like humans.",
    ],
    activities: ["Draw Pizza", "Snort like a Pig", "Color a Parrot"],
  },
  q: {
    letter: "Q",
    words: [
      { text: "Queen", src: "/assets/games/q/queen.jpeg" },
      { text: "Quilt", src: "/assets/games/q/quilt.jpeg" },
      { text: "Quail", src: "/assets/games/q/quail.jpeg" },
      { text: "Question", src: "/assets/games/q/question.jpeg" },
      { text: "Quarter", src: "/assets/games/q/quarter.jpeg" },
    ],
    color: "from-purple-300 to-purple-500",
    funFacts: [
      "Q is usually followed by U.",
      "A Queen wears a crown.",
      "Quilts are warm and colorful.",
    ],
    activities: ["Pretend to be a Queen", "Wrap up in a Quilt", "Ask a Question"],
  },
  r: {
    letter: "R",
    words: [
      { text: "Rabbit", src: "/assets/games/r/rabbit.jpeg" },
      { text: "Rainbow", src: "/assets/games/r/rainbow.jpeg" },
      { text: "Robot", src: "/assets/games/r/robot.jpeg" },
      { text: "Rocket", src: "/assets/games/r/rocket.jpeg" },
      { text: "Ring", src: "/assets/games/r/ring.jpeg" },
    ],
    color: "from-red-300 to-red-500",
    funFacts: [
      "Rabbits have big ears.",
      "Rainbows appear after rain.",
      "Rockets blast into space!",
    ],
    activities: ["Hop like a Rabbit", "Draw a Rainbow", "Pretend to be a Robot"],
  },
  s: {
    letter: "S",
    words: [
      { text: "Sun", src: "/assets/games/s/sun.jpeg" },
      { text: "Snake", src: "/assets/games/s/snake.jpeg" },
      { text: "Star", src: "/assets/games/s/star.jpeg" },
      { text: "Snow", src: "/assets/games/s/snow.jpeg" },
      { text: "Sock", src: "/assets/games/s/sock.jpeg" },
    ],
    color: "from-yellow-400 to-yellow-600",
    funFacts: [
      "The Sun gives us light and warmth.",
      "Snakes slither silently.",
      "Stars twinkle at night.",
    ],
    activities: ["Draw the Sun", "Slide like a Snake", "Put on Socks"],
  },
  t: {
    letter: "T",
    words: [
      { text: "Tiger", src: "/assets/games/t/tiger.jpeg" },
      { text: "Train", src: "/assets/games/t/train.jpeg" },
      { text: "Tree", src: "/assets/games/t/tree.jpeg" },
      { text: "Truck", src: "/assets/games/t/truck.jpeg" },
      { text: "Toothbrush", src: "/assets/games/t/toothbrush.jpeg" },
    ],
    color: "from-emerald-400 to-emerald-600",
    funFacts: [
      "Tigers are big striped cats.",
      "Trains carry lots of people.",
      "Toothbrush keeps your teeth clean.",
    ],
    activities: ["Roar like a Tiger", "Pretend to be a Train", "Brush imaginary Teeth"],
  },
  u: {
    letter: "U",
    words: [
      { text: "Umbrella", src: "/assets/games/u/umbrella.jpeg" },
      { text: "Unicorn", src: "/assets/games/u/unicorn.jpeg" },
      { text: "Uniform", src: "/assets/games/u/uniform.jpeg" },
      { text: "Urchin", src: "/assets/games/u/urchin.jpeg" },
      { text: "Utensils", src: "/assets/games/u/utensils.jpeg" },
    ],
    color: "from-sky-400 to-sky-600",
    funFacts: [
      "U is a vowel.",
      "Unicorns are magical creatures.",
      "Umbrellas keep you dry!",
    ],
    activities: ["Open an Umbrella", "Pretend to be a Unicorn", "Name Utensils"],
  },
  v: {
    letter: "V",
    words: [
      { text: "Violin", src: "/assets/games/v/violin.jpeg" },
      { text: "Volcano", src: "/assets/games/v/volcano.jpeg" },
      { text: "Vegetables", src: "/assets/games/v/vegetables.jpeg" },
      { text: "Van", src: "/assets/games/v/van.jpeg" },
      { text: "Vase", src: "/assets/games/v/vase.jpeg" },
    ],
    color: "from-fuchsia-400 to-fuchsia-600",
    funFacts: [
      "Volcanoes erupt lava!",
      "Violins are string instruments.",
      "Vegetables help you grow strong.",
    ],
    activities: ["Pretend to play Violin", "Draw a Volcano", "Name 3 Vegetables"],
  },
  w: {
    letter: "W",
    words: [
      { text: "Whale", src: "/assets/games/w/whale.jpeg" },
      { text: "Water", src: "/assets/games/w/water.jpeg" },
      { text: "Worm", src: "/assets/games/w/worm.jpeg" },
      { text: "Watch", src: "/assets/games/w/watch.jpeg" },
      { text: "Window", src: "/assets/games/w/window.jpeg" },
    ],
    color: "from-blue-300 to-blue-500",
    funFacts: [
      "Whales are the biggest animals on Earth.",
      "Worms help soil stay healthy.",
      "Water is important for life.",
    ],
    activities: ["Swim like a Whale", "Look out the Window", "Wiggle like a Worm"],
  },
  x: {
    letter: "X",
    words: [
      { text: "Xylophone", src: "/assets/games/x/xylophone.jpeg" },
      { text: "X-ray", src: "/assets/games/x/xray.jpeg" },
      { text: "Xmas tree", src: "/assets/games/x/xmas-tree.jpeg" },
      { text: "Xenops", src: "/assets/games/x/xenops.jpeg" },
      { text: "X mark", src: "/assets/games/x/x-mark.jpeg" },
    ],
    color: "from-gray-300 to-gray-500",
    funFacts: [
      "X is used in many science words.",
      "X-rays help doctors see inside your body.",
      "Xylophone is a musical instrument.",
    ],
    activities: ["Pretend to play Xylophone", "Draw an X", "Look at X-ray images"],
  },
  y: {
    letter: "Y",
    words: [
      { text: "Yak", src: "/assets/games/y/yak.jpeg" },
      { text: "Yarn", src: "/assets/games/y/yarn.jpeg" },
      { text: "Yogurt", src: "/assets/games/y/yogurt.jpeg" },
      { text: "Yacht", src: "/assets/games/y/yacht.jpeg" },
      { text: "Yellow", src: "/assets/games/y/yellow.jpeg" },
    ],
    color: "from-yellow-300 to-yellow-500",
    funFacts: [
      "Yaks live in cold mountains.",
      "Yarn is used to knit clothes.",
      "Yellow is a bright and happy color.",
    ],
    activities: ["Touch something Yellow", "Pretend to be a Yak", "Play with Yarn"],
  },
  z: {
    letter: "Z",
    words: [
      { text: "Zebra", src: "/assets/games/z/zebra.jpeg" },
      { text: "Zoo", src: "/assets/games/z/zoo.jpeg" },
      { text: "Zip", src: "/assets/games/z/zip.jpeg" },
      { text: "Zipper", src: "/assets/games/z/zipper.jpeg" },
      { text: "Zombie", src: "/assets/games/z/zombie.jpeg" },
    ],
    color: "from-zinc-400 to-zinc-600",
    funFacts: [
      "Zebras have black and white stripes.",
      "Z is the last letter in the alphabet.",
      "Zippers are used on clothes and bags.",
    ],
    activities: ["Walk like a Zebra", "Visit a pretend Zoo", "Zip and unzip your jacket"],
  }
};

export default function LetterPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id?.toLowerCase();
  const letterInfo = letterData[id] || letterData["a"];

  const [completed, setCompleted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentTab, setCurrentTab] = useState("learning");
  const [isTrue, setIsTrue] = useState(false);

  const handleNextWord = () => {
    if (currentWordIndex < letterInfo.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setCompleted(true);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  useEffect(() => {
    // Reset the feedback state when switching to a new word
    setIsTrue(false);
  }, [currentWordIndex]);

  const handleSpeechResult = (text) => {
    const spokenText = text.toLowerCase();
    const expectedPhrase = (letterInfo.letter + " for " + letterInfo.words[currentWordIndex].text).toLowerCase();
    console.log(expectedPhrase)
    const isMatch = spokenText.includes(expectedPhrase);
    console.log(isMatch)
    if (isMatch) {
      setIsTrue(true);

      setTimeout(() => {
        handleNextWord();
      }, 1000);
    }
  };

  return (
    <>
      <div className="flex bg-background items-center gap-4 p-4">
        <Link href="/app/alphabet">
          <button className="p-2 bg-background rounded-full">
            <ArrowLeft />
          </button>
        </Link>
        <h1 className="text-lg font-semibold">Letter / {letterInfo.letter}</h1>
      </div>

      <div className="min-h-screen relative p-6 overflow-hidden">
        <div className="absolute inset-0 -z-1 bg-repeat sm:bg-cover sm:bg-center bg-[url('/assets/svg/bg3.svg')] dark:filter dark:invert dark:brightness-110 dark:opacity-90"></div>
        <div className="flex flex-col items-center text-center space-y-6 z-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-bold text-red-600"
          >
            {letterInfo.letter}
          </motion.div>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full max-w-lg">
            <TabsList className="flex justify-center gap-4 w-full">
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="speaking">Speaking</TabsTrigger>
              <TabsTrigger value="writing">Writing</TabsTrigger>
            </TabsList>

            {/* Learning Tab */}
            <TabsContent value="learning" className="bg-background p-6 rounded-lg shadow-lg">
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

                  <TextToSpeech text={`${letterInfo.letter} for ${letterInfo.words[currentWordIndex].text}`} />

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
                  <Button
                    onClick={() => {
                      setCurrentTab("speaking");
                      setCompleted(false);
                      setCurrentWordIndex(0);
                    }}
                    className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 mt-4 rounded-lg"
                  >
                    Try Speaking
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Speaking Tab */}
            <TabsContent value="speaking" className="bg-background p-6 rounded-lg shadow-lg">
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

                  <SpeechToText onResult={handleSpeechResult} />
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
                  <Button
                    onClick={() => {
                      setCurrentTab("speaking");
                      setCompleted(false);
                      setCurrentWordIndex(0);
                    }}
                    className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 mt-4 rounded-lg"
                  >
                    Try Again
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Writing Tab */}
            <TabsContent value="writing" className="relative">
              <Canvas placeholderLetter={letterInfo.letter} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
