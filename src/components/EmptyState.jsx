import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { UserPlus  } from "lucide-react"
import Link from "next/link"
export function EmptyState({ onAdd }) {
  return (
    <div className="flex items-center justify-center h-screen px-4">
    <Card className="w-full max-w-md text-center">
      <CardContent className="flex flex-col items-center gap-4 py-10">
      <UserPlus size={50} />
        <h2 className="text-lg font-semibold">Add Your Child</h2>
        <p className="text-sm text-muted-foreground">
          You haven't added child yet.
        </p>
        <Link href="/dashboard/settings">
        <Button onClick={onAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add One
        </Button>
        </Link>
      </CardContent>
    </Card>
  </div>
  )
}
