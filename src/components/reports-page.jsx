"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Filter, Printer, Share2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

const progressData = [
  { month: "Jan", academic: 65, social: 70, physical: 75 },
  { month: "Feb", academic: 68, social: 72, physical: 76 },
  { month: "Mar", academic: 70, social: 74, physical: 78 },
  { month: "Apr", academic: 73, social: 75, physical: 80 },
  { month: "May", academic: 75, social: 77, physical: 81 },
  { month: "Jun", academic: 78, social: 79, physical: 82 },
  { month: "Jul", academic: 80, social: 80, physical: 83 },
  { month: "Aug", academic: 82, social: 82, physical: 84 },
  { month: "Sep", academic: 84, social: 83, physical: 85 },
  { month: "Oct", academic: 86, social: 85, physical: 86 },
  { month: "Nov", academic: 88, social: 86, physical: 87 },
  { month: "Dec", academic: 90, social: 88, physical: 88 }
]

const attendanceData = [
  { month: "Jan", attendance: 95 },
  { month: "Feb", attendance: 100 },
  { month: "Mar", attendance: 90 },
  { month: "Apr", attendance: 95 },
  { month: "May", attendance: 100 },
  { month: "Jun", attendance: 95 },
  { month: "Jul", attendance: 90 },
  { month: "Aug", attendance: 95 },
  { month: "Sep", attendance: 100 },
  { month: "Oct", attendance: 95 },
  { month: "Nov", attendance: 90 },
  { month: "Dec", attendance: 95 }
]

const subjectPerformance = [
  { subject: "Reading", score: 85 },
  { subject: "Writing", score: 75 },
  { subject: "Math", score: 80 },
  { subject: "Science", score: 90 },
  { subject: "Art", score: 95 },
  { subject: "Physical Ed", score: 85 }
]

export default function ReportsPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Reports</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Select defaultValue="current">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Term</SelectItem>
              <SelectItem value="previous">Previous Term</SelectItem>
              <SelectItem value="year">Full Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Platform Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-primary/10">
                <div className="text-4xl font-bold text-primary">A-</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Overall Grade
              </p>
            </div>
           
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-green-100 dark:bg-green-900/30">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                  95%
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Present Days</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <p>Total  Days</p>
                <p>120</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p>Days Present</p>
                <p>114</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p>Days Absent</p>
                <p>6</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Social Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-blue-100 dark:bg-blue-900/30">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  B+
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Social Grade</p>
            </div>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Writting</p>
                  <p className="text-sm font-medium">85%</p>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Communication</p>
                  <p className="text-sm font-medium">80%</p>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Progress Over Time</CardTitle>
              <CardDescription>
                Track your child&apos;s development across different areas
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="academic">
            <TabsList className="mb-4">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
            </TabsList>

            <TabsContent value="academic">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={progressData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="academic"
                      name="Academic"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="social"
                      name="Social"
                      stroke="#82ca9d"
                    />
                    <Line
                      type="monotone"
                      dataKey="physical"
                      name="Physical"
                      stroke="#ffc658"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="attendance">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={attendanceData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="attendance"
                      name="Attendance %"
                      fill="#8884d8"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="subjects">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={subjectPerformance}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="subject" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" name="Score %" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Teacher Comments</CardTitle>
          <CardDescription>Recent feedback from teachers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-primary">MS</span>
                </div>
                <div>
                  <h4 className="font-medium">Ms. Smith - Main Teacher</h4>
                  <p className="text-xs text-muted-foreground">
                    October 15, 2023
                  </p>
                </div>
              </div>
              <p className="text-sm">
                Emma has shown excellent progress in reading this term. She can
                now recognize most sight words and is beginning to sound out
                more complex words. Her enthusiasm for learning is wonderful to
                see. She participates actively in class discussions and is
                always eager to help her classmates.
              </p>
              <div className="mt-2 pt-2 border-t">
                <h5 className="text-sm font-medium mb-1">Areas of Strength:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Reading comprehension</li>
                  <li>• Classroom participation</li>
                  <li>• Helping others</li>
                </ul>

                <h5 className="text-sm font-medium mt-2 mb-1">
                  Areas for Growth:
                </h5>
                <ul className="text-sm space-y-1">
                  <li>• Writing skills - forming letters consistently</li>
                  <li>• Patience during problem-solving activities</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-primary">MJ</span>
                </div>
                <div>
                  <h4 className="font-medium">Mr. Johnson - Art Teacher</h4>
                  <p className="text-xs text-muted-foreground">
                    October 10, 2023
                  </p>
                </div>
              </div>
              <p className="text-sm">
                Emma shows remarkable creativity in art class. Her attention to
                detail and color choices demonstrate advanced artistic
                sensibility for her age. She enjoys experimenting with different
                materials and techniques.
              </p>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  )
}
