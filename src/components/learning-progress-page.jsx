"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import { Button } from "@/components/ui/button"
import { Download, Info } from "lucide-react"

const learningAreas = [
  {
    name: "Alphabet Mastery",
    progress: 85,
    description: "Recognizes and writes 22/26 letters",
    details:
      "Can identify uppercase and lowercase letters. Working on Q, V, X, Z.",
    lastAssessment: "2 weeks ago"
  },
  {
    name: "Number Skills",
    progress: 70,
    description: "Can count to 50 and recognize numbers 1-20",
    details:
      "Strong with counting sequence. Working on number recognition above 20.",
    lastAssessment: "3 weeks ago"
  },
  {
    name: "Shape Recognition",
    progress: 90,
    description: "Identifies all basic shapes and some complex ones",
    details:
      "Mastered circle, square, triangle, rectangle, oval. Learning hexagon and octagon.",
    lastAssessment: "1 month ago"
  },
  {
    name: "Color Recognition",
    progress: 100,
    description: "Knows all primary and secondary colors",
    details: "Fully mastered all colors including shades and tints.",
    lastAssessment: "2 months ago"
  },
  {
    name: "Reading Skills",
    progress: 60,
    description: "Beginning to sound out simple words",
    details:
      "Can read CVC words (consonant-vowel-consonant) and recognize some sight words.",
    lastAssessment: "1 week ago"
  },
  {
    name: "Writing Skills",
    progress: 65,
    description: "Can write name and simple words",
    details: "Good pencil grip. Working on letter formation and spacing.",
    lastAssessment: "2 weeks ago"
  },
  {
    name: "Listening Comprehension",
    progress: 80,
    description: "Can follow multi-step instructions",
    details:
      "Good attention span during story time. Can recall key details from stories.",
    lastAssessment: "3 weeks ago"
  }
]

const monthlyProgressData = [
  { month: "Jan", reading: 30, writing: 25, math: 35 },
  { month: "Feb", reading: 35, writing: 30, math: 40 },
  { month: "Mar", reading: 40, writing: 35, math: 45 },
  { month: "Apr", reading: 45, writing: 40, math: 50 },
  { month: "May", reading: 50, writing: 45, math: 55 },
  { month: "Jun", reading: 55, writing: 50, math: 60 },
  { month: "Jul", reading: 60, writing: 55, math: 65 },
  { month: "Aug", reading: 65, writing: 60, math: 70 },
  { month: "Sep", reading: 70, writing: 65, math: 75 },
  { month: "Oct", reading: 75, writing: 70, math: 80 },
  { month: "Nov", reading: 80, writing: 75, math: 85 },
  { month: "Dec", reading: 85, writing: 80, math: 90 }
]

export default function LearningProgressPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Learning Progress</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
            <CardDescription>
              Monthly progress across key learning areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyProgressData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reading" name="Reading" fill="#8884d8" />
                  <Bar dataKey="writing" name="Writing" fill="#82ca9d" />
                  <Bar dataKey="math" name="Math" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Summary</CardTitle>
            <CardDescription>Current progress status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Overall Progress</h3>
                  <span className="text-lg font-bold">78%</span>
                </div>
                <Progress value={78} className="h-2 mt-2" />
                <p className="text-sm text-muted-foreground mt-2">
                  Above average for age group
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Strengths</h3>
                <ul className="mt-2 text-sm space-y-1">
                  <li>• Color recognition (100%)</li>
                  <li>• Shape identification (90%)</li>
                  <li>• Alphabet mastery (85%)</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Areas for Growth</h3>
                <ul className="mt-2 text-sm space-y-1">
                  <li>• Reading skills (60%)</li>
                  <li>• Writing skills (85%)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Learning Progress</CardTitle>
          <CardDescription>
            Track your child&apos;s educational development by area
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Areas</TabsTrigger>
              <TabsTrigger value="literacy">Literacy</TabsTrigger>
              <TabsTrigger value="numeracy">Numeracy</TabsTrigger>
              <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {learningAreas.map(area => (
                <div
                  key={area.name}
                  className="space-y-2 rounded-lg border p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-medium">{area.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                    <span className="text-lg font-medium">
                      {area.progress}%
                    </span>
                  </div>
                  <Progress value={area.progress} className="h-2" />
                  <div className="pt-2 flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      Last assessed: {area.lastAssessment}
                    </p>
                    <Button variant="ghost" size="sm" className="h-6 gap-1">
                      <Info className="h-3 w-3" />
                      <span className="text-xs">Details</span>
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="literacy" className="space-y-6">
              {learningAreas
                .filter(area =>
                  [
                    "Alphabet Mastery",
                    "Reading Skills",
                    "Writing Skills",
                    "Listening Comprehension"
                  ].includes(area.name)
                )
                .map(area => (
                  <div
                    key={area.name}
                    className="space-y-2 rounded-lg border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium">{area.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {area.description}
                        </p>
                      </div>
                      <span className="text-lg font-medium">
                        {area.progress}%
                      </span>
                    </div>
                    <Progress value={area.progress} className="h-2" />
                    <div className="pt-2">
                      <p className="text-sm">{area.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last assessed: {area.lastAssessment}
                      </p>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="numeracy" className="space-y-6">
              {learningAreas
                .filter(area => ["Number Skills"].includes(area.name))
                .map(area => (
                  <div
                    key={area.name}
                    className="space-y-2 rounded-lg border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium">{area.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {area.description}
                        </p>
                      </div>
                      <span className="text-lg font-medium">
                        {area.progress}%
                      </span>
                    </div>
                    <Progress value={area.progress} className="h-2" />
                    <div className="pt-2">
                      <p className="text-sm">{area.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last assessed: {area.lastAssessment}
                      </p>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="cognitive" className="space-y-6">
              {learningAreas
                .filter(area =>
                  ["Shape Recognition", "Color Recognition"].includes(area.name)
                )
                .map(area => (
                  <div
                    key={area.name}
                    className="space-y-2 rounded-lg border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium">{area.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {area.description}
                        </p>
                      </div>
                      <span className="text-lg font-medium">
                        {area.progress}%
                      </span>
                    </div>
                    <Progress value={area.progress} className="h-2" />
                    <div className="pt-2">
                      <p className="text-sm">{area.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last assessed: {area.lastAssessment}
                      </p>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
