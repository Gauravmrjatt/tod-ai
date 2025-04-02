"use client";
import { Home, BookOpen, Gamepad2, User } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BottomNavigation({
  activeTab,
}) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);
  const tabs = [
    { id: "app", label: "Home", icon: Home, link: "/app" },
    { id: "learn", label: "Learn", icon: BookOpen, link: "/app/learn" },
    { id: "games", label: "Games", icon: Gamepad2, link: "/app/games" },
    { id: "profile", label: "Profile", icon: User, link: "/app/profile" },
  ]

  return (
    (<div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#f3f4f6] h-16 flex items-center justify-around px-4 max-w-md mx-auto z-10">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = currentTab === tab.id
        return (
          (<Link
            href={tab.link}
            key={tab.id}
            className="flex flex-col items-center justify-center w-16"
            onClick={() => setCurrentTab(tab.id)}
          >
            <Icon className={`h-5 w-5 ${isActive ? "text-[#1798e8]" : "text-[#8e94a0]"}`} />
            <span
              className={`text-xs mt-1 ${isActive ? "text-[#1798e8] font-medium" : "text-[#8e94a0]"}`}>
              {tab.label}
            </span>
          </Link>)
        );
      })}
    </div>)
  );
}

