"use client";
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"
import Link from "next/link"
export default function EmotionTracking() {
  return (
    (<div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-[#f3f4f6]">
        <Link href="/app">
          <button className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <h1 className="flex-1 text-center text-base font-medium">Real-Time Emotion Tracking</h1>
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
              alt="Emotion thumbnail"
              width={100}
              height={100}
              className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-[#f3f4f6] rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Emotion thumbnail"
              width={100}
              height={100}
              className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-[#f3f4f6] rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Emotion thumbnail"
              width={100}
              height={100}
              className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="p-4">
          <div className="w-full aspect-video bg-[#f3f4f6] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=350"
              alt="Emotion tracking"
              width={350}
              height={200}
              className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* Bottom navigation */}
      <BottomNavigation activeTab="games" onNavigate={() => { }} />
    </div>)
  );
}

