"use client";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import MyProfile from "@/components/MyProfile";
export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Alphabet",
      description: "Learn letters with fun!",
      image: "/assets/images/abc.jpeg",
      link: "/app/alphabet",
      icon: "🔤",
    },
    {
      title: "Balloon Game",
      description: "Pop & learn colors!",
      image: "/assets/images/baloon.jpeg",
      link: "/app/baloon",
      icon: "🎈",
    },
    {
      title: "Numbers",
      description: "Count with magic!",
      image: "/assets/images/num.jpeg",
      icon: "🔢",
    },
    {
      title: "Shapes",
      description: "Explore magical shapes",
      image: "/assets/images/shapes.jpeg",
      icon: "⭐",
    },
    {
      title: "Colors",
      description: "Paint your world!",
      image: "/assets/images/colors.jpeg",
      icon: "🎨",
    },
    {
      title: "Animals",
      description: "Meet furry friends!",
      image: "/assets/images/animals.jpeg",
      icon: "🦁",
    },
    {
      title: "Time",
      description: "Time adventures!",
      image: "/assets/images/time.jpeg",
      icon: "⏰",
    },
    
    {
      title: "Color Catcher",
      description: "Catch rainbow drops!",
      image: "/assets/images/animals.jpeg",
      icon: "🌈",
    },
    {
      title: "Shape Matcher",
      description: "Match & learn geometry!",
      image: "/assets/images/matcher.jpeg",
      icon: "🔷",
    },
  ];

  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col ">
      {/* Header */}
      <div className="flex items-center border-b justify-between p-4 bg-primary/10 mb-2">
        <h1 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Home</h1>
        <MyProfile/>
      </div>

      {/* Search bar */}
      <div className="px-4 py-3 mb-4 max-w-[600px]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#8e94a0]" />
          </div>
          <Input
            type="text"
            placeholder="Search Games..."
            className="block w-full h-14 pl-10 pr-3 py-2 ] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#1798e8]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* Categories */}
      <div className="flex-1 overflow-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((category, index) => {
            const bgColors = [
              "from-pink-500",
              "from-purple-500",
              "from-blue-500",
              "from-green-500",
              "from-yellow-500",
              "from-orange-500",
              "from-red-500",
              "from-indigo-500",
              "from-teal-500",
            ];
            return (
              <Link key={index} href={category.link || "#"}>
                <div
                  className={`relative rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-lg h-[280px] flex flex-col justify-between overflow-hidden text-white group cursor-pointer bg-cover bg-center`}
                  style={{ backgroundImage: `url(${category.image || "/placeholder.svg"})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${bgColors[index]} to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>

                  <div className="relative z-10 flex items-start gap-2 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <span className="text-2xl group-hover:animate-bounce transition-transform duration-300">{category.icon}</span>
                    <div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300">{category.title}</h3>
                      <p className="text-white/90 text-sm mb-4 group-hover:text-white transition-colors duration-300">{category.description}</p>
                    </div>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className={`relative z-10 w-full bg-gradient-to-r ${bgColors[index]} to-white/20 text-white border-white/30 hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300 rounded-xl font-bold tracking-wide transform group-hover:scale-105`}
                  >
                    Let's Play! 🚀
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
