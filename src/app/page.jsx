"use client"
import WelcomeScreen from "@/components/welcome-screen"

export default function App() {
  return (
    (<div className="flex justify-center items-center min-h-screen bg-[#f3f4f6]">
      <div
        className="w-full max-w-md h-[844px] overflow-hidden bg-white rounded-xl shadow-lg relative">
        <WelcomeScreen />
      </div>
    </div>)
  );
}

