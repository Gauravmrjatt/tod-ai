"use client"
import LearningProgress from "@/components/learning-progress"
import ActivityFeed from "@/components/activity-feed"
import AchievementBadges from "@/components/achievement-badges"
import MoodTracker from "@/components/mood-tracker"
import GoalsSection from "@/components/goals-section"

export default function OverviewDashboard() {
 
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MoodTracker />
        </div>
        <div className="lg:col-span-2">
          <LearningProgress />
        </div>
        <div className="lg:col-span-1">
          <AchievementBadges />
        </div>
        <div className="lg:col-span-1">
          <GoalsSection />
        </div>

        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>

      </div>
    </div>
  )
}
