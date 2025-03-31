"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

interface NewsletterGeneratorProps {
  onGenerate: (newsletter: any) => void
}

export function NewsletterGenerator({ onGenerate }: NewsletterGeneratorProps) {
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [additionalText, setAdditionalText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isConfigOpen, setIsConfigOpen] = useState(false)
  const { toast } = useToast()

  const generateNewsletter = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic required",
        description: "Please enter a newsletter topic.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          keywords,
          additionalText,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate newsletter")
      }

      // Call the onGenerate callback with the new newsletter
      onGenerate(data.data)

      toast({
        title: "Newsletter generated",
        description: "Your newsletter has been created successfully.",
      })

      // Reset form
      setTopic("")
      setKeywords("")
      setAdditionalText("")
    } catch (error) {
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : "There was a problem generating your newsletter.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-2">
        <div className="flex-1">
          <Input
            placeholder="Enter newsletter topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-background"
          />
        </div>
        <Dialog open={isConfigOpen} onOpenChange={setIsConfigOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Customize</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Customize AI Prompt</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="keywords">Keywords</label>
                <Input
                  id="keywords"
                  placeholder="AI, blockchain, fintech..."
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="additional-text">Additional Instructions</label>
                <Textarea
                  id="additional-text"
                  placeholder="Make it humorous, target a technical audience..."
                  value={additionalText}
                  onChange={(e) => setAdditionalText(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button">Apply</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button onClick={generateNewsletter} disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Generate"}
        </Button>
      </div>
    </div>
  )
}

