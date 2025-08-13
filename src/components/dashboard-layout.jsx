"use client"

import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useQuery } from "@tanstack/react-query"
import { getChild } from "@/lib/api-calls"
import useAuthStore from "@/store/useAuthStore"

import { Bell, Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/sidebar"
import ChildSelector from "@/components/child-selector"
import { EmptyState } from "@/components/EmptyState"
import { Toaster } from 'sonner';
import LoadingComp from "./LoadingComp"
import Error from "@/components/error"
export default function DashboardLayout({ children }) {
  const { theme, setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedChild, setSelectedChild] = useState(null)

  const pathname = usePathname()
  const router = useRouter()

  const token = useAuthStore.getState().token

  // Redirect to login if no token
  useEffect(() => {
    if (!token) {
      router.replace("/")
    }
  }, [token, router])

  // Close sidebar when pathname changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Toggle light/dark theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Fetch profile data
  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["user-children"],
    queryFn: () =>
      getChild({ headers: { Authorization: `Bearer ${token}` } }),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    retry: 1,
  })

  // Set default selected child once data is loaded
  useEffect(() => {
    if (data?.children?.length > 0 && !selectedChild) {
      setSelectedChild(data.children[0])
    }
  }, [data, selectedChild])

  if (isPending) return <LoadingComp/>
  if (isError) return <Error fullPage error={error.message || "Somthing went wrong"}/>

  const showSettings = pathname.startsWith("/dashboard/settings")
  const childrenData = data?.children;

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        selectedChild={selectedChild}
        currentPath={pathname}
      />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>

            {selectedChild && (
              <div className="hidden md:block">
                <h2 className="text-lg font-semibold">
                  Welcome to {selectedChild.name}&apos;s Parent Dashboard
                </h2>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Show selector only if more than one child */}
            {childrenData.length > 1 && (
              <ChildSelector
                children={childrenData}
                selectedChild={selectedChild}
                setSelectedChild={setSelectedChild}
              />
            )}

            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <div className="relative">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </Button>
              <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs" variant="destructive">
                3
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Parent"
                />
                <AvatarFallback>{data.name[0]}</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{data.name}</p>
              </div>
            </div>
          </div>
        </header>

        {(childrenData?.length > 0 || showSettings) ? (
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        ) : (
          <EmptyState />
        )}
      </div>
      <Toaster />
    </div>
  )
}
