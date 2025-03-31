"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

type HistoryItem = {
  id: string
  prompt: string
  response: string
  createdAt: string
}

interface HistorySidebarProps {
  history: HistoryItem[]
  onSelect: (item: HistoryItem) => void
  selectedId: string | undefined
}

export function HistorySidebar({ history, onSelect, selectedId }: HistorySidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const isMobile = useMobile()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const getPromptPreview = (prompt: string) => {
    // Extract first few words for preview
    return prompt.split(" ").slice(0, 4).join(" ") + (prompt.split(" ").length > 4 ? "..." : "")
  }

  if (isMobile && !isOpen) {
    return (
      <Button variant="ghost" size="icon" className="fixed left-4 top-20 z-40" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <div
      className={cn(
        "relative border-r bg-muted/40 transition-all duration-300",
        isOpen ? "w-64" : "w-0",
        isMobile && isOpen && "absolute inset-y-0 left-0 z-40",
      )}
    >
      {isOpen && (
        <>
          <div className="flex h-14 items-center justify-between border-b px-4">
            <h2 className="font-semibold">History</h2>
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
          <div className="flex flex-col gap-2 p-4">
            <Button className="w-full justify-start gap-2" variant="outline">
              <PlusCircle className="h-4 w-4" />
              New Newsletter
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-8.5rem)]">
            <div className="flex flex-col gap-1 p-4 pt-0">
              {history.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "flex flex-col items-start rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent",
                    selectedId === item.id && "bg-accent",
                  )}
                  onClick={() => {
                    onSelect(item)
                    if (isMobile) setIsOpen(false)
                  }}
                >
                  <div className="font-medium">{getPromptPreview(item.prompt)}</div>
                  <div className="text-xs text-muted-foreground">{formatDate(item.createdAt)}</div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </>
      )}
    </div>
  )
}

