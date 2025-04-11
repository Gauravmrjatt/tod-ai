"use client"

import { CalendarCheck, Clock, Medal, Palette, PlayCircle } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

const activities = [
  {
    id: 1,
    title: "Completed Alphabet Game",
    time: "Today, 10:30 AM",
    description: "Matched all 26 letters correctly",
    icon: Medal,
    iconColor: "text-yellow-500"
  },
  {
    id: 2,
    title: "Watched Story Video",
    time: "Today, 9:15 AM",
    description: "The Very Hungry Caterpillar - 12 minutes",
    icon: PlayCircle,
    iconColor: "text-blue-500"
  },
  {
    id: 3,
    title: "Completed Drawing Task",
    time: "Yesterday, 3:45 PM",
    description: "Drew a family portrait with all members",
    icon: Palette,
    iconColor: "text-purple-500"
  },
  {
    id: 4,
    title: "Math Practice Session",
    time: "Yesterday, 2:30 PM",
    description: "Practiced addition with numbers 1-10",
    icon: CalendarCheck,
    iconColor: "text-green-500"
  },
  {
    id: 5,
    title: "Reading Time",
    time: "Yesterday, 11:00 AM",
    description: "Read 'Brown Bear, Brown Bear' with assistance",
    icon: Clock,
    iconColor: "text-red-500"
  }
]

export default function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Activity Feed</CardTitle>
        <CardDescription>
          Recent learning activities and achievements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map(activity => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 rounded-lg border p-3"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted ${activity.iconColor}`}
              >
                <activity.icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
                <p className="text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
