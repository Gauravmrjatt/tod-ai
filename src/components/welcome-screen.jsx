"use client";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#6dd5ed] to-[#2193b0]">
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <Image
          src="/placeholder.svg?height=600&width=400"
          alt="Colorful robot background"
          width={400}
          height={600}
          className="object-cover"
        />
      </div>

      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-between pt-20 pb-6 px-4 text-center text-white">
        {/* Logo circle */}
        <div className="mt-auto mb-4">
          <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border-4 border-white shadow-lg">
            <div className="text-[#2193b0] text-3xl font-extrabold">AI</div>
          </div>
        </div>

        {/* App name */}
        <div className="text-5xl font-extrabold tracking-wide drop-shadow-md">TodAI</div>

        {/* Tagline */}
        <p className="text-white/90 text-center max-w-[280px] text-lg mb-8 drop-shadow">Join us to start your learning adventure today!</p>

        {/* Start button */}
        <Link
          href="/app"
          className="w-full max-w-xs h-12 bg-white text-[#2193b0] hover:bg-[#e0f7fa] rounded-md flex items-center justify-center font-bold text-lg shadow-md transition-all duration-300">
          Start Learning
        </Link>
      </div>
    </div>
  );
}