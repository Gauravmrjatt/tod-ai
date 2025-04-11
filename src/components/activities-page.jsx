"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  CalendarCheck,
  Clock,
  Filter,
  Medal,
  Palette,
  PlayCircle,
  Plus,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

const activities = [
  {
    id: 1,
    title: "Completed Alphabet Game",
    time: "Today, 10:30 AM",
    description: "Matched all 26 letters correctly",
    icon: Medal,
    iconColor: "text-yellow-500",
    category: "Learning",
    duration: "15 min"
  },
  {
    id: 2,
    title: "Watched Story Video",
    time: "Today, 9:15 AM",
    description: "The Very Hungry Caterpillar - 12 minutes",
    icon: PlayCircle,
    iconColor: "text-blue-500",
    category: "Entertainment",
    duration: "12 min"
  },
  {
    id: 3,
    title: "Completed Drawing Task",
    time: "Yesterday, 3:45 PM",
    description: "Drew a family portrait with all members",
    icon: Palette,
    iconColor: "text-purple-500",
    category: "Creative",
    duration: "30 min"
  },
  {
    id: 4,
    title: "Math Practice Session",
    time: "Yesterday, 2:30 PM",
    description: "Practiced addition with numbers 1-10",
    icon: CalendarCheck,
    iconColor: "text-green-500",
    category: "Learning",
    duration: "20 min"
  },
  {
    id: 5,
    title: "Reading Time",
    time: "Yesterday, 11:00 AM",
    description: "Read 'Brown Bear, Brown Bear' with assistance",
    icon: Clock,
    iconColor: "text-red-500",
    category: "Reading",
    duration: "15 min"
  }
]

const upcomingActivities = [
  {
    id: 1,
    title: "Phonics Practice",
    time: "Tomorrow, 10:00 AM",
    description: "Focus on beginning sounds",
    category: "Learning",
    duration: "20 min"
  },
  {
    id: 2,
    title: "Outdoor Nature Walk",
    time: "Tomorrow, 2:00 PM",
    description: "Identify plants and insects",
    category: "Outdoor",
    duration: "45 min"
  },
  {
    id: 3,
    title: "Story Time",
    time: "Friday, 11:00 AM",
    description: "Reading session with new books",
    category: "Reading",
    duration: "30 min"
  }
]

const recommendedActivities = [
  {
    id: 1,
    title: "Number Counting Game",
    description: "Practice counting objects from 1-20",
    category: "Learning",
    difficulty: "Easy",
    duration: "15 min"
  },
  {
    id: 2,
    title: "Letter Tracing",
    description: "Practice writing letters Q, V, X, Z",
    category: "Writing",
    difficulty: "Medium",
    duration: "20 min"
  },
  {
    id: 3,
    title: "Shape Sorting",
    description: "Sort objects by shape and size",
    category: "Cognitive",
    difficulty: "Easy",
    duration: "15 min"
  }
]

export default function ActivitiesPage() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Activities</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Activity
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle>Activity Feed</CardTitle>
                  <CardDescription>
                    Recent and upcoming activities
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search activities..."
                      className="w-[200px] pl-8"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="recent">
                <TabsList className="mb-4">
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                </TabsList>

                <TabsContent value="recent" className="space-y-4">
                  {activities.map(activity => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 rounded-lg border p-4"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted ${activity.iconColor}`}
                      >
                        <activity.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{activity.title}</h4>
                          <Badge variant="outline">{activity.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {activity.time} • {activity.duration}
                        </p>
                        <p className="text-sm">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="upcoming" className="space-y-4">
                  {upcomingActivities.map(activity => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 rounded-lg border p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{activity.title}</h4>
                          <Badge variant="outline">{activity.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {activity.time} • {activity.duration}
                        </p>
                        <p className="text-sm">{activity.description}</p>
                        <div className="pt-2 flex gap-2">
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="recommended" className="space-y-4">
                  {recommendedActivities.map(activity => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 rounded-lg border p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
                        <Medal className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{activity.title}</h4>
                          <Badge variant="outline">{activity.category}</Badge>
                        </div>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <span>{activity.duration}</span>
                          <span>•</span>
                          <span>Difficulty: {activity.difficulty}</span>
                        </div>
                        <p className="text-sm">{activity.description}</p>
                        <div className="pt-2">
                          <Button size="sm">Schedule</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Activity Calendar</CardTitle>
              <CardDescription>Schedule and view activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />

              <div className="mt-4">
                <h4 className="font-medium mb-2">
                  Activities on {date?.toLocaleDateString()}
                </h4>
                {date?.getDate() === new Date().getDate() ? (
                  <div className="space-y-2">
                    {activities.slice(0, 2).map(activity => (
                      <div
                        key={activity.id}
                        className="rounded-lg border p-2 text-sm"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{activity.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {activity.time.split(", ")[1]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : date?.getDate() === new Date().getDate() + 1 ? (
                  <div className="space-y-2">
                    {upcomingActivities.slice(0, 2).map(activity => (
                      <div
                        key={activity.id}
                        className="rounded-lg border p-2 text-sm"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{activity.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {activity.time.split(", ")[1]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No activities scheduled.
                  </p>
                )}
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Quick Add</h4>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="learning">
                        Learning Activity
                      </SelectItem>
                      <SelectItem value="reading">Reading Session</SelectItem>
                      <SelectItem value="creative">
                        Creative Activity
                      </SelectItem>
                      <SelectItem value="physical">
                        Physical Activity
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full">Add to Calendar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity Statistics</CardTitle>
          <CardDescription>
            Activity breakdown by category and time spent
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-lg border p-4 text-center">
              <h4 className="text-sm font-medium text-muted-foreground">
                Total Activities
              </h4>
              <p className="text-3xl font-bold mt-1">24</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <h4 className="text-sm font-medium text-muted-foreground">
                Learning Activities
              </h4>
              <p className="text-3xl font-bold mt-1">12</p>
              <p className="text-xs text-muted-foreground mt-1">50% of total</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <h4 className="text-sm font-medium text-muted-foreground">
                Creative Activities
              </h4>
              <p className="text-3xl font-bold mt-1">8</p>
              <p className="text-xs text-muted-foreground mt-1">33% of total</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <h4 className="text-sm font-medium text-muted-foreground">
                Time Spent
              </h4>
              <p className="text-3xl font-bold mt-1">8.5h</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
