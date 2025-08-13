
"use client"

import { useState,useEffect  } from "react"
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
import LoadingComp from "@/components/LoadingComp"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import useAuthStore from "@/store/useAuthStore"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { getProfile, updateParentProfile } from "@/lib/api-calls"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
export default function Profile() {
    const token = useAuthStore.getState().token
    const queryClient = useQueryClient()
  
    const {
        data,
        isPending,
        isError,
        error,
      } = useQuery({
        queryKey: ["my-profile"],
        queryFn: () =>
            getProfile({ headers: { Authorization: `Bearer ${token}` } }),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        retry: 1,
       
      })

    const mutation = useMutation({
      mutationFn: (data) => updateParentProfile(data, token),
      onSuccess: () => {
        toast.success("Profile updated successfully!")
        queryClient.invalidateQueries(["my-profile"])
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Failed to update profile")
      }
    })

    const handleInputChange = (e) => {
      const { id, value } = e.target
      setFormData(prev => ({
        ...prev,
        [id]: value
      }))
    }

    const handleSubmit = () => {
      mutation.mutate(formData)
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
      })
      useEffect(() => {
        if (data?.parent) {
          setFormData({
            name: data.parent.name,
            email: data.parent.email,
            phone: data.parent.phone || ""
          })
        }
      }, [data])
    
    if(isPending) return <LoadingComp/>
    if(isError) return <div>Error: {error.message}</div>

    // Update form data when API data is available
   
  return (
    <div className="grid gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Parent Profile</CardTitle>
        <CardDescription>
          Update your personal information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src="/placeholder.svg?height=80&width=80"
              alt="Parent"
            />
            <AvatarFallback className="text-lg">PD</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h3 className="font-medium">Profile Photo</h3>
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

        <div className="grid gap-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">First Name</Label>
              <Input 
                id="name" 
                defaultValue={formData.name}
                onChange={handleInputChange}
              />
            </div>
          
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              defaultValue={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="relationship">Relationship to Child</Label>
            <Select defaultValue="mother">
              <SelectTrigger id="relationship">
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mother">Mother</SelectItem>
                <SelectItem value="father">Father</SelectItem>
                <SelectItem value="guardian">Legal Guardian</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          onClick={() => setFormData({
            name: data.parent.name,
            email: data.parent.email,
            phone: data.parent.phone || ""
          })}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Saving..." : "Save Changes"}
        </Button>
      </CardFooter>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>
          Manage your account preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select defaultValue="en">
            <SelectTrigger id="language">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
      
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">Time Zone</Label>
          <Select defaultValue="ist">
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select time zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem  value="ist">Indian Standard Time (UTC+5:30)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={() => { toast.success("Saved!")}}>Save Changes</Button>
      </CardFooter>
    </Card>
  </div>
  )
}