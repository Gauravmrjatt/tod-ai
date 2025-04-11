"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { registerSchema } from "@/lib/validators"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"
import { signupUser } from "@/lib/api-calls"
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation"

export default function CreateAccount() {
  const [apiError, setApiError] = useState("")
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken)
  const goBack = () => {
    router.back()
      ;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const userType = watch("userType")

  const { mutate, isPending } = useMutation({
    mutationFn: signupUser,
    onSuccess: data => {
      if (data.status === true) {
        setToken(data.token);
        if (data.user.type === "parent") {
          router.push("/dashboard/parent");
        } else {
          router.push("/app");
        }
      } else {
        console.log("Login failed")
        setApiError(data.message || "An error occurred")
      }
    },
    onError: error => {
      console.log("Login error", error)
      setApiError(error.response.data.message || error.response.data?.errors[0]?.msg || error.message || "An error occurred")
    }
  })

  useEffect(() => {
    if (userType !== "child") {
      setValue("parentId", undefined)
    }
  }, [userType, setValue])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center mb-4">
          <button onClick={goBack} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-1">Create Account</h1>
        <p className="text-sm text-[#8e94a0] mb-8">
          Join us and explore the future of technology.
        </p>

        <form
          onSubmit={handleSubmit(data => { mutate(data); setApiError(""); console.log(data) })}
          className="space-y-6"
        >
          {apiError && (
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
              <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Register Failed</span> {apiError}
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Input
              {...register("name")}
              type="text"
              placeholder="Full Name"
              className="h-12 bg-[#f3f4f6] border-0 focus-visible:ring-1 focus-visible:ring-[#1798e8]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="h-12 bg-[#f3f4f6] border-0 focus-visible:ring-1 focus-visible:ring-[#1798e8]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="h-12 bg-[#f3f4f6] border-0 focus-visible:ring-1 focus-visible:ring-[#1798e8]"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <select
              {...register("userType")}
              className="w-full h-12 bg-[#f3f4f6] rounded-md px-4 border-0 focus:ring-1 focus:ring-[#1798e8]"
            >
              <option value="">Select User Type</option>
              <option value="parent">Parent</option>
              <option value="child">Child</option>
            </select>
            {errors.userType && (
              <p className="text-red-500 text-sm">{errors.userType.message}</p>
            )}
          </div>

          {userType === "child" && (
            <div className="space-y-2">
              <Input
                {...register("parentId")}
                type="text"
                placeholder="Parent Email"
                className="h-12 bg-[#f3f4f6] border-0 focus-visible:ring-1 focus-visible:ring-[#1798e8]"
              />
              {errors.parentId && (
                <p className="text-red-500 text-sm">
                  {errors.parentId.message}
                </p>
              )}
            </div>
          )}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              className="mt-1 data-[state=checked]:bg-[#1798e8] data-[state=checked]:border-[#1798e8]"
            />
            <label htmlFor="terms" className="text-sm leading-tight">
              I agree with{" "}
              <span className="text-[#1798e8]">Terms & Conditions</span>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-[#1798e8] hover:bg-[#1279b9] text-white"
            disabled={isPending}
          >
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>

          <div className="text-center text-sm">
            Already registered?{" "}
            <Link href="/auth/login" className="text-[#1798e8]">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
