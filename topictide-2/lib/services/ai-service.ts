export function assemblePrompt(topic: string, keywords?: string, additionalText?: string): string {
  let fullPrompt = topic

  // Add the admin template
  fullPrompt += " You are an expert newsletter writer. Compose a well-structured newsletter on the given topic."

  // Add keywords if provided
  if (keywords && keywords.trim()) {
    fullPrompt += " Keywords: " + keywords.trim()
  }

  // Add additional text if provided
  if (additionalText && additionalText.trim()) {
    fullPrompt += " " + additionalText.trim()
  }

  return fullPrompt
}

export async function generateNewsletter(topic: string, keywords?: string, additionalText?: string): Promise<string> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Mock HTML response
  return `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h1 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">${topic}</h1>
    <p style="color: #666;">Generated on ${new Date().toLocaleDateString()}</p>
    <div style="margin: 20px 0;">
      <h2 style="color: #0070f3;">Introduction</h2>
      <p>Welcome to our latest newsletter! We're excited to share updates and insights on ${topic}.</p>
    </div>
    <div style="margin: 20px 0;">
      <h2 style="color: #0070f3;">Key Highlights</h2>
      <p>This section covers the most important developments related to ${topic} ${keywords ? `with focus on ${keywords}` : ""}.</p>
      <ul style="padding-left: 20px;">
        <li>First major point about ${topic}</li>
        <li>Second important update</li>
        <li>Third significant development</li>
      </ul>
    </div>
    <div style="margin: 20px 0;">
      <h2 style="color: #0070f3;">Looking Ahead</h2>
      <p>What to expect in the coming weeks and how these developments might impact the industry.</p>
    </div>
    <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin-top: 30px;">
      <p style="margin: 0; font-style: italic;">This newsletter was generated using TopicTide's AI technology.</p>
    </div>
  </div>`
}

