"use client";
import { Search, Bell, User } from "lucide-react";
export default function MyProfile() {
    return (
        <div className="flex items-center gap-3">
        <span>Hey, Kid!</span>
          <div className="relative group">
            <button className="p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors duration-200 group-hover:ring-2 ring-primary/20">
              <Bell className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 p-2 bg-popover rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="text-sm font-medium mb-2 text-foreground/80">Notifications</div>
              <div className="text-xs text-muted-foreground">No new notifications</div>
            </div>
          </div>
          <div className="relative group">
            <button className="p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors duration-200 group-hover:ring-2 ring-primary/20">
              <User className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 p-2 bg-popover rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="text-sm font-medium mb-2 text-foreground/80">Profile</div>
              <div className="text-xs text-muted-foreground">View your profile</div>
            </div>
          </div>
        </div>
    )
}