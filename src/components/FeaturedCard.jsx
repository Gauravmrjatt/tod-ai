"use client"
import { Card, CardContent } from "@/components/ui/card"
import {CardSpotlight} from "@/components/ui/card-spotlight"
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect"

export default function FeatureCard({ icon, title, description }) {
  return (
    <CardSpotlight className="bg-[#7a7a7a70]">
    <div className="border-none z-5 sticky shadow-none">
      <div className="p-6 ">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4  p-4 rounded-full z-40">
            {icon} {/* ✅ Render the element directly */}
          </div>
          <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
    </CardSpotlight>
  )
}
