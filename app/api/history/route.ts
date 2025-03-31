import { NextResponse } from "next/server"

// This would be the server-side API route for fetching newsletter history
// In a real app, this would interact with your MongoDB database

export async function GET() {
  try {
    // In a real app, this would fetch the authenticated user's newsletter history from the database

    // Mock data for demo
    const history = [
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

    return NextResponse.json({ history })
  } catch (error) {
    console.error("Error fetching history:", error)
    return NextResponse.json({ error: "Failed to fetch newsletter history" }, { status: 500 })
  }
}

