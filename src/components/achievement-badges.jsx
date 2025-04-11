"use client"

import { Award, BookOpen, Brain, Lightbulb, Puzzle, Zap } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

const achievements = [
  {
    id: 1,
    name: "A+ in Letters",
    description: "Mastered all 26 letters of the alphabet",
    icon: BookOpen,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    earned: true
  },
  {
    id: 2,
    name: "Number Wizard",
    description: "Can count to 100 without mistakes",
    icon: Brain,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
    earned: true
  },
  {
    id: 3,
    name: "Perfect Attendance",
    description: "Attended all classes for a month",
    icon: Award,
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500",
    earned: true
  },
  {
    id: 4,
    name: "Creative Genius",
    description: "Completed 10 art projects",
    icon: Lightbulb,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
    earned: false
  },
  {
    id: 5,
    name: "Puzzle Master",
    description: "Solved 20 puzzles independently",
    icon: Puzzle,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    earned: false
  },
  {
    id: 6,
    name: "Quick Learner",
    description: "Mastered a new skill in record time",
    icon: Zap,
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
    earned: false
  }
]

export default function AchievementBadges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievement Badges</CardTitle>
        <CardDescription>
          Badges earned through learning milestones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <TooltipProvider>
            {achievements.map(achievement => (
              <Tooltip key={achievement.id}>
                <TooltipTrigger asChild>
                  <div
                    className={`flex aspect-square flex-col items-center justify-center rounded-lg p-2 ${
                      achievement.color
                    } ${!achievement.earned && "opacity-50 grayscale filter"}`}
                  >
                    <achievement.icon
                      className={`h-8 w-8 ${achievement.iconColor}`}
                    />
                    <span className="mt-2 text-center text-xs font-medium">
                      {achievement.name}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{achievement.description}</p>
                  {!achievement.earned && (
                    <p className="text-xs text-muted-foreground">
                      Not yet earned
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
