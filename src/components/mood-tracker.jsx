"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Frown, Meh, Smile } from "lucide-react"

const moodData = [
  { day: "Mon", mood: "happy" },
  { day: "Tue", mood: "happy" },
  { day: "Wed", mood: "neutral" },
  { day: "Thu", mood: "sad" },
  { day: "Fri", mood: "happy" },
  { day: "Sat", mood: "neutral" },
  { day: "Sun", mood: "happy" }
]

export default function MoodTracker() {
  const [selectedDay, setSelectedDay] = useState(null)

  const getMoodIcon = mood => {
    switch (mood) {
      case "happy":
        return <Smile className="h-6 w-6 text-green-500" />
      case "neutral":
        return <Meh className="h-6 w-6 text-yellow-500" />
      case "sad":
        return <Frown className="h-6 w-6 text-red-500" />
      default:
        return <Meh className="h-6 w-6 text-gray-500" />
    }
  }

  const getMoodColor = mood => {
    switch (mood) {
      case "happy":
        return "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800"
      case "neutral":
        return "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800"
      case "sad":
        return "bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800"
      default:
        return "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mood Tracker</CardTitle>
        <CardDescription>
          Track your child&apos;s emotional well-being
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          {moodData.map((day, index) => (
            <Button
              key={day.day}
              variant="ghost"
              className={`flex flex-col items-center p-2 rounded-lg border ${
                selectedDay === index ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setSelectedDay(index)}
            >
              <span className="text-xs font-medium mb-2">{day.day}</span>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${getMoodColor(
                  day.mood
                )}`}
              >
                {getMoodIcon(day.mood)}
              </div>
            </Button>
          ))}
        </div>
        <div className="rounded-lg border p-4">
          <h4 className="text-sm font-medium mb-2">
            {selectedDay !== null
              ? `${moodData[selectedDay].day}'s Mood: ${moodData[
                  selectedDay
                ].mood
                  .charAt(0)
                  .toUpperCase() + moodData[selectedDay].mood.slice(1)}`
              : "Weekly Mood Summary"}
          </h4>
          <p className="text-sm text-muted-foreground">
            {selectedDay !== null
              ? selectedDay === 3
                ? "Had a difficult day during math class. Consider additional support with numbers."
                : "Your child had a great day and participated actively in all activities!"
              : "Overall, your child had a positive week with mostly happy moods. There was one day where they felt sad during math class."}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
