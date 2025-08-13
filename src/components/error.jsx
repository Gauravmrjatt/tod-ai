import { AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Error({
  message = "Something went wrong.",
  className,
  fullPage = false
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-destructive text-center",
        fullPage ? "h-screen w-full" : "h-full",
        className
      )}
    >
      <AlertTriangle className="h-8 w-8 mb-2" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}
