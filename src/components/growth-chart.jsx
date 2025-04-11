"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const heightData = [
  { month: "Jan", height: 95 },
  { month: "Feb", height: 96 },
  { month: "Mar", height: 97 },
  { month: "Apr", height: 98 },
  { month: "May", height: 99 },
  { month: "Jun", height: 100 },
  { month: "Jul", height: 101 },
  { month: "Aug", height: 102 },
  { month: "Sep", height: 103 },
  { month: "Oct", height: 104 },
  { month: "Nov", height: 105 },
  { month: "Dec", height: 106 },
]

const weightData = [
  { month: "Jan", weight: 15 },
  { month: "Feb", weight: 15.5 },
  { month: "Mar", weight: 16 },
  { month: "Apr", weight: 16.2 },
  { month: "May", weight: 16.5 },
  { month: "Jun", weight: 17 },
  { month: "Jul", weight: 17.3 },
  { month: "Aug", weight: 17.5 },
  { month: "Sep", weight: 17.8 },
  { month: "Oct", weight: 18 },
  { month: "Nov", weight: 18.3 },
  { month: "Dec", weight: 18.5 },
]

export default function GrowthChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Growth Tracker</CardTitle>
            <CardDescription>Track your child&apos;s height and weight over time</CardDescription>
          </div>
          <Tabs defaultValue="height" className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="height">Height</TabsTrigger>
              <TabsTrigger value="weight">Weight</TabsTrigger>
            </TabsList>
            <TabsContent value="height">
              <div className="h-[300px] w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={heightData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorHeight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis domain={[90, 110]} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="height"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorHeight)"
                      name="Height (cm)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="weight">
              <div className="h-[300px] w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weightData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis domain={[14, 20]} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="weight"
                      stroke="#82ca9d"
                      fillOpacity={1}
                      fill="url(#colorWeight)"
                      name="Weight (kg)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mt-2">
          <p>Your child is growing at a healthy rate and is in the 75th percentile for both height and weight.</p>
        </div>
      </CardContent>
    </Card>
  )
}
