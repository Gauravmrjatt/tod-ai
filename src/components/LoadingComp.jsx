import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Loading({
  message = "Loading...",
  className,
  fullPage = true
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-muted-foreground",
        fullPage ? "h-screen w-full" : "h-full",
        className
      )}
    >
      <Loader2 className="h-8 w-8 animate-spin mb-2" />
      <p className="text-sm">{message}</p>
    </div>
  )
}
