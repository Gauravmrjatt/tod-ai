"use client";
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link";
export default function GamifiedLessons() {
  return (
    (<div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-[#f3f4f6]">
        <Link href="/app">
          <button className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <h1 className="flex-1 text-center text-base font-medium">Gamified Lessons</h1>
        <button className="w-6 h-6">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Profile"
            width={24}
            height={24}
            className="rounded-full" />
        </button>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-auto pb-16">
        <div className="grid grid-cols-3 gap-2 p-4">
          <div className="aspect-square bg-[#f3f4f6] rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Lesson thumbnail"
              width={100}
              height={100}
              className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-[#f3f4f6] rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Lesson thumbnail"
              width={100}
              height={100}
              className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-[#f3f4f6] rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Lesson thumbnail"
              width={100}
              height={100}
              className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="p-4">
          <div className="w-full aspect-video bg-[#f3f4f6] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=350"
              alt="Video lesson"
              width={350}
              height={200}
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Achievement badges - same as in learning dashboard */}
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Level 1 badge"
                width={64}
                height={64}
                className="w-full h-full object-cover" />
            </div>
            <span className="mt-1 text-xs font-medium">Level 1</span>
            <span className="text-[10px] text-[#8e94a0]">Completed basics</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Quiz Pro badge"
                width={64}
                height={64}
                className="w-full h-full object-cover" />
            </div>
            <span className="mt-1 text-xs font-medium">Quiz Pro</span>
            <span className="text-[10px] text-[#8e94a0]">Perfect score</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Level 2 badge"
                width={64}
                height={64}
                className="w-full h-full object-cover" />
            </div>
            <span className="mt-1 text-xs font-medium">Level 2</span>
            <span className="text-[10px] text-[#8e94a0]">Intermediate level</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Speed Quiz badge"
                width={64}
                height={64}
                className="w-full h-full object-cover" />
            </div>
            <span className="mt-1 text-xs font-medium">Speed Quiz</span>
            <span className="text-[10px] text-[#8e94a0]">Fast and correct</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Level 3 badge"
                width={64}
                height={64}
                className="w-full h-full object-cover" />
            </div>
            <span className="mt-1 text-xs font-medium">Level 3</span>
            <span className="text-[10px] text-[#8e94a0]">Advanced skills</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Quiz Champ badge"
                width={64}
                height={64}
                className="w-full h-full object-cover" />
            </div>
            <span className="mt-1 text-xs font-medium">Quiz Champ</span>
            <span className="text-[10px] text-[#8e94a0]">Champion status</span>
          </div>
        </div>
      </div>
    </div>)
  );
}

