"use client";
import Image from "next/image"
import Link from "next/link"
export default function WelcomeScreen() {
  return (
    (<div
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#f1f9fe] to-[#fcddef]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=400"
          alt="Colorful robot background"
          width={400}
          height={600}
          className="object-cover" />
      </div>
      {/* Content overlay */}
      <div
        className="relative h-full flex flex-col items-center justify-between pt-20 pb-6 px-4 text-center">
        {/* Logo circle */}
        <div className="mt-auto mb-4">
          <div
            className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border-4 border-white">
            <div className="text-[#171a1f] text-3xl font-bold">AI</div>
          </div>
        </div>

        {/* App name */}
        <div className="text-4xl font-bold text-white mb-2">TodAI</div>

        {/* Tagline */}
        <p className="text-white text-center max-w-[250px] mb-8">Join us to start your learning adventure today!</p>

        {/* Start button */}
        <Link
          href="/app"
          className="w-full max-w-xs h-12 bg-white text-[#171a1f] hover:bg-white/90 rounded-md">
          Start Learning
        </Link>
      </div>
    </div>)
  );
}

