import { NextResponse } from "next/server"
import { createOpenAI } from "@ai-sdk/openai"
import { generateText } from "ai"

// The admin-defined template that's included in every prompt
const INTER_FILE =
  "You are an expert newsletter writer. Compose a well-structured newsletter on the given topic. The newsletter should be in HTML format with inline CSS styling for email compatibility. Include sections with headings, paragraphs, and possibly lists. Make the content engaging and informative."

// Create the Perplexity client
const perplexity = createOpenAI({
  name: "perplexity",
  apiKey: process.env.PERPLEXITY_API_KEY || "",
  baseURL: "https://api.perplexity.ai/",
})

export async function POST(request: Request) {
  try {
    const { topic, keywords, additionalText } = await request.json()

    // Validate input
    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 })
    }

    // Assemble the full prompt
    let fullPrompt = topic

    // Add the admin template
    fullPrompt += " " + INTER_FILE

    // Add keywords if provided
    if (keywords && keywords.trim()) {
      fullPrompt += " Keywords to include: " + keywords.trim()
    }

    // Add additional text if provided
    if (additionalText && additionalText.trim()) {
      fullPrompt += " Additional instructions: " + additionalText.trim()
    }

    // Call the Perplexity API
    const { text } = await generateText({
      model: perplexity("llama-3.1-sonar-large-32k-online"),
      prompt: fullPrompt,
    })

    // Create a response object
    const responseObj = {
      id: String(Date.now()),
      prompt: fullPrompt,
      response: text,
      createdAt: new Date().toISOString(),
    }

    // In a real app, you would save this to the database here

    return NextResponse.json({
      success: true,
      data: responseObj,
    })
  } catch (error) {
    console.error("Error generating newsletter:", error)
    return NextResponse.json({ error: "Failed to generate newsletter" }, { status: 500 })
  }
}

