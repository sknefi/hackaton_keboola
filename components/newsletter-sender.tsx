"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface Friend {
  id: string
  name: string
  email: string
}

interface NewsletterSenderProps {
  newsletterId: string
  newsletterContent: string
  newsletterTopic: string
  friends: Friend[]
}

export function NewsletterSender({ newsletterId, newsletterContent, newsletterTopic, friends }: NewsletterSenderProps) {
  const [isSending, setIsSending] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [subject, setSubject] = useState(`Newsletter: ${newsletterTopic}`)
  const [selectedFriends, setSelectedFriends] = useState<string[]>([])
  const { toast } = useToast()

  const handleFriendToggle = (email: string) => {
    setSelectedFriends((prev) => (prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]))
  }

  const handleSelectAll = () => {
    if (selectedFriends.length === friends.length) {
      setSelectedFriends([])
    } else {
      setSelectedFriends(friends.map((f) => f.email))
    }
  }

  const sendNewsletter = async () => {
    if (selectedFriends.length === 0) {
      toast({
        title: "No recipients selected",
        description: "Please select at least one recipient.",
        variant: "destructive",
      })
      return
    }

    setIsSending(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newsletterId,
          newsletterContent,
          subject,
          recipients: selectedFriends,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send newsletter")
      }

      toast({
        title: "Newsletter sent",
        description: `Your newsletter has been sent to ${data.sentCount} recipient${data.sentCount !== 1 ? "s" : ""}.`,
      })

      setIsDialogOpen(false)
    } catch (error) {
      toast({
        title: "Sending failed",
        description: error instanceof Error ? error.message : "There was a problem sending your newsletter.",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>Send Newsletter</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send Newsletter</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="subject">Subject</label>
            <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label>Recipients</label>
              <Button variant="ghost" size="sm" onClick={handleSelectAll} className="h-8 px-2 text-xs">
                {selectedFriends.length === friends.length ? "Deselect All" : "Select All"}
              </Button>
            </div>
            {friends.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                You don't have any friends yet. Add friends to send newsletters.
              </p>
            ) : (
              <div className="max-h-[200px] overflow-auto border rounded-md p-2">
                {friends.map((friend) => (
                  <div key={friend.id} className="flex items-center space-x-2 py-1">
                    <input
                      type="checkbox"
                      id={`friend-${friend.id}`}
                      checked={selectedFriends.includes(friend.email)}
                      onChange={() => handleFriendToggle(friend.email)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor={`friend-${friend.id}`} className="text-sm flex-1">
                      {friend.name} <span className="text-muted-foreground">({friend.email})</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={sendNewsletter} disabled={isSending || friends.length === 0}>
            {isSending ? "Sending..." : "Send"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

