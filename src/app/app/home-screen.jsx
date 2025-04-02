"use client"
import { Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomeScreen() {
  const categories = [
    {
      title: "Alphabet",
      description: "Learn letters",
      image: "/assets/images/abc.jpeg",
      link: "/app/alphabet"
    },
    {
      title: "Numbers",
      description: "Count easily",
      image: "/assets/images/num.jpeg"
    },
    {
      title: "Shapes",
      description: "Discover forms",
      image: "/assets/images/shapes.jpeg"
    },
    {
      title: "Colors",
      description: "Learn colors",
      image: "/assets/images/colors.jpeg"
    },
    {
      title: "Animals",
      description: "Learn animals",
      image: "/assets/images/animals.jpeg"
    },
    {
      title: "Time",
      description: "Tell time",
      image: "/assets/images/time.jpeg"
    },
    {
      title: "Balloon Game",
      description: "Pop balloons to learn colors",
      image: "/assets/images/baloon.jpeg"
    },
    {
      title: "Color Catcher",
      description: "Catch falling colors to score",
      image: "/assets/images/animals.jpeg"
    },
    {
      title: "Shape Matcher",
      description: "Match shapes to learn geometry",
      image: "/assets/images/matcher.jpeg"
    }
  ]

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#f3f4f6]">
        <h1 className="text-lg font-medium">Home</h1>
        <div className="flex items-center gap-2">
          <button

            className="p-1 rounded-full flex items-center justify-center text-[#8e94a0] hover:bg-[#f3f4f6] cursor-pointer"
          >
            <Bell size={20} />
          </button>
          <button
            className="p-1 bg-[#f3f4f6] rounded-full flex items-center justify-center text-[#8e94a0] hover:bg-[#fff] cursor-pointer"
          >
            <User />
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#8e94a0]" />
          </div>
          <input
            type="text"
            placeholder="Search lessons..."
            className="block w-full pl-10 pr-3 py-2 bg-[#f3f4f6] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#1798e8]"
          />
        </div>
      </div>

      {/* Welcome message */}
      <div className="px-4 py-2">
        <h2 className="text-xl font-medium">Hello, Abhay!</h2>
      </div>

      {/* Categories */}
      <div className="flex-1 overflow-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => {
            const bgColors = [
              'from-pink-500',
              'from-purple-500',
              'from-blue-500',
              'from-green-500',
              'from-yellow-500',
              'from-orange-500',
              'from-red-500',
              'from-indigo-500',
              'from-teal-500'
            ];
            return (
              <Link key={index} href={category.link || "#"}>
                <div

                  className={`relative rounded-xl p-5 transform transition-transform hover:scale-105 shadow-lg h-[250px] flex flex-col justify-between overflow-hidden text-white`}
                  style={{ backgroundImage: `url(${category.image || "/placeholder.svg"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${bgColors[index]} to-transparent`}></div>

                  <div className="relative z-10">
                    <h3 className="font-medium text-lg mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{category.description}</p>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className={`relative z-10 w-full bg-gradient-to-r ${bgColors[index]} to-white/20 text-white border-white/30 hover:opacity-80`}
                  >
                    Play Now
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}
