"use client"

import { Check, Clock, Plus } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const goals = [
  {
    id: 1,
    title: "Learn 5 new words",
    dueDate: "In 2 days",
    progress: 60,
    completed: false
  },
  {
    id: 2,
    title: "Complete alphabet tracing",
    dueDate: "In 5 days",
    progress: 30,
    completed: false
  },
  {
    id: 3,
    title: "Count to 50 without help",
    dueDate: "In 1 week",
    progress: 80,
    completed: false
  },
  {
    id: 4,
    title: "Recognize all basic shapes",
    dueDate: "Completed",
    progress: 100,
    completed: true
  }
]

export default function GoalsSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Goals</CardTitle>
            <CardDescription>Upcoming learning targets</CardDescription>
          </div>
          <Button size="sm" className="h-8 gap-1">
            <Plus className="h-4 w-4" />
            <span>Add Goal</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map(goal => (
            <div
              key={goal.id}
              className={`rounded-lg border p-3 ${
                goal.completed ? "bg-muted/50" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium">{goal.title}</h4>
                <div className="flex items-center text-xs text-muted-foreground">
                  {goal.completed ? (
                    <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
                  ) : (
                    <Clock className="h-3.5 w-3.5 mr-1" />
                  )}
                  <span>{goal.dueDate}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-1.5" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button variant="outline" className="w-full">
          View All Goals
        </Button>
      </CardFooter>
    </Card>
  )
}
