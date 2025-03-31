"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NewsletterSender } from "./newsletter-sender"

interface NewsletterViewerProps {
  selectedNewsletter: {
    id: string
    prompt: string
    response: string
    citations?: string[]
  }
}

export function NewsletterViewer({ selectedNewsletter }: NewsletterViewerProps) {
  const [showCitations, setShowCitations] = useState(false)

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{selectedNewsletter.prompt}</h2>
        <NewsletterSender
          newsletterId={selectedNewsletter.id}
          newsletterContent={selectedNewsletter.response}
        />
      </div>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: selectedNewsletter.response }}
      />

      {selectedNewsletter.citations && selectedNewsletter.citations.length > 0 && (
        <div className="mt-8">
          <Button
            variant="outline"
            onClick={() => setShowCitations(!showCitations)}
            className="mb-4"
          >
            {showCitations ? "Hide Sources" : "Show Sources"}
          </Button>
          
          {showCitations && (
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Sources:</h3>
              <ul className="list-inside list-disc space-y-1">
                {selectedNewsletter.citations.map((citation, index) => (
                  <li key={index}>
                    <a
                      href={citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {citation}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 