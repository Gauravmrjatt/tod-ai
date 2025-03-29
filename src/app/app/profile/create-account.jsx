"use client";
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function CreateAccount({
  onBack
}) {
  return (
    (<div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="mr-2">
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>
      {/* Content */}
      <div className="flex-1 px-6 py-4">
        <h1 className="text-2xl font-bold mb-1">Create Account</h1>
        <p className="text-sm text-[#8e94a0] mb-8">Join us and explore the future of technology.</p>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-2 text-[#8e94a0]">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-sm text-[#8e94a0]">Personal Information</span>
            </div>
            <Input
              type="text"
              placeholder="Email"
              className="h-12 bg-[#f3f4f6] border-0 focus-visible:ring-1 focus-visible:ring-[#1798e8]" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-2 text-[#8e94a0]">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-sm text-[#8e94a0]">Create strong password</span>
            </div>
            <Input
              type="password"
              placeholder="Password"
              className="h-12 bg-[#f3f4f6] border-0 focus-visible:ring-1 focus-visible:ring-[#1798e8]" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-2 text-[#8e94a0]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span className="text-sm text-[#8e94a0]">Security verification</span>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                className="mt-1 data-[state=checked]:bg-[#1798e8] data-[state=checked]:border-[#1798e8]" />
              <label htmlFor="terms" className="text-sm leading-tight">
                I agree with <span className="text-[#1798e8]">Terms & Conditions</span>
              </label>
            </div>
          </div>

          <Button className="w-full h-12 bg-[#1798e8] hover:bg-[#1279b9] text-white">Create Account</Button>

          <div className="text-center text-sm">
            Already registered?{" "}
            <Link href="#" className="text-[#1798e8]">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>)
  );
}

