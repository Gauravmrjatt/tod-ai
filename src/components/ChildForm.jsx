"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { createChild } from "@/lib/api-calls"
import useAuthStore from "@/store/useAuthStore"
import { toast } from "sonner"

// 🔐 Zod Schema (from your rules)
const childAccountSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/\d/, "Password must contain a number"),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  dateOfBirth: z
    .string()
    .optional()
    .refine(
      val => {
        if (!val) return true
        return !isNaN(Date.parse(val))
      },
      {
        message: "Invalid date format"
      }
    ),
  gender: z.enum(["male", "female", "other"]).optional(),
  school: z.string().optional(),
  class: z.string().optional(),
  interests: z.string().optional()
})

export default function ChildForm() {
  const token = useAuthStore(state => state.token)
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(childAccountSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      dateOfBirth: "",
      gender: undefined,
      school: "",
      class: "",
      interests: ""
    }
  })

  const mutation = useMutation({
    mutationFn: data => createChild(data, token),
    onSuccess: () => {
      toast.success("Child created successfully!")
      reset()
      queryClient.invalidateQueries({
        queryKey: ["user-children"] // replace with your actual query key
      })
    },
    onError: error => {
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  })

  const onSubmit = data => {
    const {interests} = data;
    const int = interests.split(",")
    mutation.mutate({...data, interests : int})
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle>Create Child Account</CardTitle>
          <CardDescription>Enter your child's details</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src="/placeholder.svg?height=80&width=80"
                alt="Child"
              />
              <AvatarFallback className="text-lg">EC</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="font-medium">Child&apos;s Photo</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Upload New
                </Button>
                <Button size="sm" variant="ghost">
                  Remove
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...register("dateOfBirth")}
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-600">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <p className="text-sm text-red-600">{errors.gender.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="school">School</Label>
            <Input id="school" {...register("school")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="class">Class</Label>
            <Input id="class" {...register("class")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">Interests & Hobbies</Label>
            <Textarea
              id="interests"
              {...register("interests")}
              placeholder="e.g. Drawing, Math, Football..."
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          <Button type="reset" variant="outline">
            Cancel
          </Button>
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : "Save Child"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
