import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LearningDashboard({
  onBack
}) {
  return (
    (<div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 border-b border-[#f3f4f6]">
        <div className="flex-1 text-center">
          <h1 className="text-base font-medium">Personalized Learning Dashboard</h1>
        </div>
        <div className="absolute right-4">
          <button className="w-6 h-6">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full" />
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-auto pb-16">
        {/* Video lesson */}
        <div className="p-4">
          <div className="w-full aspect-video bg-[#f3f4f6] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=350"
              alt="Video lesson"
              width={350}
              height={200}
              className="w-full h-full object-cover" />
          </div>

          <h2 className="mt-3 text-sm font-medium">Learning with Mom: A Video Lesson</h2>

          <div className="flex gap-2 mt-3">
            <Button className="flex-1 bg-[#1798e8] hover:bg-[#1279b9] text-white">Start Lesson</Button>
            <Button
              variant="outline"
              className="flex-1 border-[#1798e8] text-[#1798e8] hover:bg-[#f1f9fe]">
              Preview Video
            </Button>
          </div>

          <div className="flex gap-2 mt-2">
            <Button
              variant="outline"
              className="flex-1 border-[#d7edfb] bg-[#eaf6fd] text-[#1798e8] hover:bg-[#d7edfb]"
              size="sm">
              Quizzes
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-[#bdc1ca] text-[#565d6d] hover:bg-[#f3f4f6]"
              size="sm">
              Videos
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-[#bdc1ca] text-[#565d6d] hover:bg-[#f3f4f6]"
              size="sm">
              Games
            </Button>
          </div>
        </div>

        {/* Progress section */}
        <div className="px-4 py-2">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-xs font-medium">Level 5</span>
            </div>
            <div>
              <span className="text-xs font-medium">Overall 69%</span>
            </div>
            <div>
              <span className="text-xs font-medium">Level 6</span>
            </div>
          </div>
        </div>

        {/* Achievement badges */}
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

