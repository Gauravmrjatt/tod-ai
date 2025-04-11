"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { loginSchema } from "@/lib/validators"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { loginUser } from "@/lib/api-calls"
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const [apiError, setApiError] = useState("");
    const router = useRouter();
    const setToken = useAuthStore((state) => state.setToken)
    const goBack = () => {
        router.back()
            ;
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const { mutate, isPending } = useMutation({
        mutationFn: loginUser,
        onSuccess: data => {
            setApiError("")
            setToken(data.token);
            if (data.user.type === "parent") {
                router.push("/dashboard/parent");
            } else {
                router.push("/app");
            }
            console.log("Login success", data)
        },
        onError: error => {
            console.log("Login error", error)
            setApiError(error.response.data.message || error.message || "An error occurred")
        }
    })

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-md space-y-6">
                <div className="flex items-center mb-4">
                    <button onClick={goBack} className="mr-2">
                        <ArrowLeft className="h-5 w-5 text-gray-600 hover:text-gray-800" />
                    </button>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-1 text-gray-900">Welcome Back</h1>
                    <p className="text-sm text-gray-500 mb-6">
                        Sign in to continue your tech journey.
                    </p>
                </div>
                {apiError && (
                    <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Login Failed</span> {apiError}
                        </div>
                    </div>
                )}
                <form
                    onSubmit={handleSubmit(data => { mutate(data); setApiError(""); })}
                    className="space-y-6"
                >
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

                    <Button
                        type="submit"
                        className="w-full h-12 bg-[#1798e8] hover:bg-[#1279b9] text-white"
                        disabled={isPending}
                    >
                        {isPending ? "Signing in..." : "Sign In"}
                    </Button>

                    <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="text-[#1798e8] hover:underline">
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
