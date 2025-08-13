"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "@/store/useAuthStore";
import { toast } from "sonner";
import {getAdminGames,addGame} from "@/lib/api-calls"
import LoadingComp from "@/components/LoadingComp";
export default function GamesManagement() {
  const token = useAuthStore.getState().token
  const queryClient = useQueryClient()
  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-games"],
    queryFn: () =>
      getAdminGames({ headers: { Authorization: `Bearer ${token}` } }),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    retry: 1,
  })

  
  const [games, setGames] = useState([
    { id: 1, name: 'Memory Match', description: 'A memory matching card game', difficulty: 'Easy', ageGroup: '5-8' },
    { id: 2, name: 'Math Quest', description: 'Adventure game with math challenges', difficulty: 'Medium', ageGroup: '8-12' },
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingGame, setEditingGame] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    difficulty: '',
    ageGroup: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingGame) {
      setGames(games.map(game => 
        game.id === editingGame.id ? { ...formData, id: game.id } : game
      ))
    } else {
      setGames([...games, { ...formData, id: games.length + 1 }])
    }
    setIsAddDialogOpen(false)
    setEditingGame(null)
    setFormData({ name: '', description: '', difficulty: '', ageGroup: '' })
  }

  const handleEdit = (game) => {
    setEditingGame(game)
    setFormData(game)
    setIsAddDialogOpen(true)
  }
  if(isPending) return <LoadingComp/>

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Games Management</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add New Game</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingGame ? 'Edit Game' : 'Add New Game'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Game Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <Input
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="ageGroup">Age Group</Label>
                <Input
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit">{editingGame ? 'Update' : 'Add'} Game</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {games.map(game => (
          <Card key={game.id}>
            <CardHeader>
              <CardTitle>{game.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{game.description}</p>
              <div className="flex justify-between text-sm">
                <span>Difficulty: {game.difficulty}</span>
                <span>Age: {game.ageGroup}</span>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={() => handleEdit(game)}
              >
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}