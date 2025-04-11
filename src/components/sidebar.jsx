"use client"
import Link from "next/link"
import {
  BookOpen,
  Calendar,
  FileText,
  Home,
  LineChart,
  Settings,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  selectedChild,
  currentPath
}) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: Home, path: "/dashboard/parent" },
    {
      id: "learning",
      label: "Learning Progress",
      icon: BookOpen,
      path: "/dashboard/learning-progress"
    },
    {
      id: "activities",
      label: "Activities",
      icon: Calendar,
      path: "/dashboard/activities"
    },
    { id: "reports", label: "Reports", icon: FileText, path: "/dashboard/reports" },
    { id: "settings", label: "Settings", icon: Settings, path: "/dashboard/settings" }
  ]

  const isActive = path => {
    return currentPath === path
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:h-screen lg:w-64 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col border-r">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-bold">Parent Dashboard</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border-b">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <img
              src={selectedChild.photo || "/placeholder.svg"}
              alt={selectedChild.name}
              className="h-8 w-8 rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{selectedChild.name}</p>
            <p className="text-xs text-muted-foreground">
              {selectedChild.age} years • {selectedChild.class}
            </p>
          </div>
        </div>

        <nav className="flex-1 overflow-auto p-2">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.id}>
                <Link href={item.path}>
                  <span
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive(item.path)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t p-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Parent Dashboard
          </p>
        </div>
      </div>
    </div>
  )
}
