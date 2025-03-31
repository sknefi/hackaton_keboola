"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { Trash2 } from "lucide-react"

// Mock data for friends
const initialFriends = [
  { id: "1", name: "Alex Johnson", email: "alex@example.com" },
  { id: "2", name: "Sam Williams", email: "sam@example.com" },
  { id: "3", name: "Taylor Chen", email: "taylor@example.com" },
]

export default function FriendsPage() {
  const [friends, setFriends] = useState(initialFriends)
  const [newFriendEmail, setNewFriendEmail] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const addFriend = () => {
    if (!newFriendEmail.trim() || !newFriendEmail.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    // Check if email already exists
    if (friends.some((friend) => friend.email === newFriendEmail)) {
      toast({
        title: "Friend already exists",
        description: "This email is already in your friends list.",
        variant: "destructive",
      })
      return
    }

    setIsAdding(true)

    // Simulate API call
    setTimeout(() => {
      const newFriend = {
        id: String(Date.now()),
        name: newFriendEmail.split("@")[0], // Simple name extraction from email
        email: newFriendEmail,
      }

      setFriends((prev) => [...prev, newFriend])
      setNewFriendEmail("")
      setIsAdding(false)

      toast({
        title: "Friend added",
        description: "Your friend has been added to your list.",
      })
    }, 1000)
  }

  const removeFriend = (id: string) => {
    setFriends((prev) => prev.filter((friend) => friend.id !== id))

    toast({
      title: "Friend removed",
      description: "Your friend has been removed from your list.",
    })
  }

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-2xl font-bold">Friends</h1>

        <div className="mb-8 flex items-end gap-2">
          <div className="flex-1">
            <Input
              placeholder="Enter friend's email..."
              value={newFriendEmail}
              onChange={(e) => setNewFriendEmail(e.target.value)}
              type="email"
            />
          </div>
          <Button onClick={addFriend} disabled={isAdding}>
            {isAdding ? "Adding..." : "Add Friend"}
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {friends.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    No friends added yet. Add friends to send them newsletters.
                  </TableCell>
                </TableRow>
              ) : (
                friends.map((friend) => (
                  <TableRow key={friend.id}>
                    <TableCell>{friend.name}</TableCell>
                    <TableCell>{friend.email}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => removeFriend(friend.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

