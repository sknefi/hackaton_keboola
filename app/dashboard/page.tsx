"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { HistorySidebar } from "@/components/history-sidebar"
import { NewsletterOutput } from "@/components/newsletter-output"
import { NewsletterGenerator } from "@/components/newsletter-generator"
import { NewsletterSender } from "@/components/newsletter-sender"

// Mock data for history and friends
const mockHistory = [
  {
    id: "1",
    prompt: "Tech Newsletter about AI advancements",
    response: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">AI Advancements Newsletter</h1>
      <p style="color: #666;">The latest in artificial intelligence - March 2025</p>
      <div style="margin: 20px 0;">
        <h2 style="color: #0070f3;">Breakthrough in Natural Language Processing</h2>
        <p>Researchers have achieved a significant milestone in NLP, with new models demonstrating near-human comprehension of complex texts and nuanced instructions.</p>
      </div>
      <div style="margin: 20px 0;">
        <h2 style="color: #0070f3;">AI in Healthcare</h2>
        <p>New diagnostic tools powered by deep learning algorithms are showing promising results in early detection of diseases, with accuracy rates exceeding 95% in recent clinical trials.</p>
      </div>
      <div style="margin: 20px 0;">
        <h2 style="color: #0070f3;">Ethical AI Developments</h2>
        <p>Industry leaders have formed a coalition to establish new standards for responsible AI development, focusing on transparency, fairness, and accountability.</p>
      </div>
      <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin-top: 30px;">
        <p style="margin: 0; font-style: italic;">This newsletter was generated using TopicTide's AI technology.</p>
      </div>
    </div>`,
    createdAt: new Date(2025, 2, 15).toISOString(),
  },
  {
    id: "2",
    prompt: "Monthly company update for startup",
    response: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">Monthly Company Update</h1>
      <p style="color: #666;">March 2025 - Exciting progress and milestones</p>
      <div style="margin: 20px 0;">
        <h2 style="color: #0070f3;">Product Development</h2>
        <p>Our engineering team has successfully launched version 2.0 of our platform, featuring an improved user interface and enhanced performance metrics.</p>
      </div>
      <div style="margin: 20px 0;">
        <h2 style="color: #0070f3;">New Team Members</h2>
        <p>We're excited to welcome Sarah Chen (Senior Developer) and Michael Rodriguez (Marketing Specialist) to our growing team!</p>
      </div>
      <div style="margin: 20px 0;">
        <h2 style="color: #0070f3;">Funding Update</h2>
        <p>We've secured an additional $2M in seed funding to accelerate our growth plans for the coming year.</p>
      </div>
      <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin-top: 30px;">
        <p style="margin: 0; font-style: italic;">This newsletter was generated using TopicTide's AI technology.</p>
      </div>
    </div>`,
    createdAt: new Date(2025, 2, 20).toISOString(),
  },
]

const mockFriends = [
  { id: "1", name: "Alex Johnson", email: "alex@example.com" },
  { id: "2", name: "Sam Williams", email: "sam@example.com" },
  { id: "3", name: "Taylor Chen", email: "taylor@example.com" },
]

export default function DashboardPage() {
  const [isClient, setIsClient] = useState(false)
  const [history, setHistory] = useState(mockHistory)
  const [friends, setFriends] = useState(mockFriends)
  const [selectedNewsletter, setSelectedNewsletter] = useState<(typeof mockHistory)[0] | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    setIsClient(true)
    // Check if user is authenticated
    const token = localStorage.getItem("topictide-auth")
    if (!token) {
      router.push("/login")
    }

    // In a real app, you would fetch history and friends from the API here
  }, [router])

  const handleGenerate = (newsletter: (typeof mockHistory)[0]) => {
    setHistory((prev) => [newsletter, ...prev])
    setSelectedNewsletter(newsletter)
  }

  const selectNewsletter = (newsletter: (typeof mockHistory)[0]) => {
    setSelectedNewsletter(newsletter)
  }

  if (!isClient) {
    return null // Prevent hydration errors
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <HistorySidebar history={history} onSelect={selectNewsletter} selectedId={selectedNewsletter?.id} />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Newsletter output area */}
        <div className="flex-1 overflow-auto p-4">
          {selectedNewsletter ? (
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{selectedNewsletter.prompt.split(" ").slice(0, 5).join(" ")}...</h2>
                <NewsletterSender
                  newsletterId={selectedNewsletter.id}
                  newsletterContent={selectedNewsletter.response}
                  newsletterTopic={selectedNewsletter.prompt.split(" ").slice(0, 3).join(" ")}
                  friends={friends}
                />
              </div>
              <NewsletterOutput content={selectedNewsletter.response} />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Welcome to TopicTide</h2>
                <p className="text-muted-foreground">Generate a newsletter or select one from the sidebar.</p>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="border-t bg-muted/40 p-4">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            <NewsletterGenerator onGenerate={handleGenerate} />
          </div>
        </div>
      </div>
    </div>
  )
}

