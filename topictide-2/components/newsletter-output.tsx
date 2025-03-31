"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface NewsletterOutputProps {
  content: string
}

export function NewsletterOutput({ content }: NewsletterOutputProps) {
  const [view, setView] = useState<"preview" | "code">("preview")

  return (
    <Card>
      <Tabs defaultValue="preview" onValueChange={(value) => setView(value as "preview" | "code")}>
        <div className="flex items-center justify-between border-b px-4 py-2">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">HTML</TabsTrigger>
          </TabsList>
        </div>
        <CardContent className="p-0">
          <TabsContent value="preview" className="m-0">
            <div className="p-4">
              <div
                className="newsletter-preview rounded border bg-white p-6 dark:bg-gray-950"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </TabsContent>
          <TabsContent value="code" className="m-0">
            <div className="p-4">
              <pre className="overflow-auto rounded-md bg-muted p-4">
                <code className="text-sm">{content}</code>
              </pre>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}

