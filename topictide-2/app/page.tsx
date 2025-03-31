"use client"

import { useState } from "react"
import { NewsletterGenerator } from "@/components/newsletter-generator"
import { NewsletterViewer } from "@/components/newsletter-viewer"

export default function Home() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<any>(null)

  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-3xl font-bold">TopicTide Newsletter Generator</h1>
      
      <div className="mb-8">
        <NewsletterGenerator onGenerate={setSelectedNewsletter} />
      </div>

      {selectedNewsletter && (
        <NewsletterViewer selectedNewsletter={selectedNewsletter} />
      )}
    </main>
  )
} 