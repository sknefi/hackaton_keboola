import { NextResponse } from "next/server"

// This would be the server-side API route for managing friends
// In a real app, this would interact with your MongoDB database

export async function GET() {
  try {
    // In a real app, this would fetch the authenticated user's friends from the database

    // Mock data for demo
    const friends = [
      { id: "1", name: "Alex Johnson", email: "alex@example.com" },
      { id: "2", name: "Sam Williams", email: "sam@example.com" },
      { id: "3", name: "Taylor Chen", email: "taylor@example.com" },
    ]

    return NextResponse.json({ friends })
  } catch (error) {
    console.error("Error fetching friends:", error)
    return NextResponse.json({ error: "Failed to fetch friends" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate input
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // In a real app, this would:
    // 1. Check if the email belongs to a registered user
    // 2. Add that user to the authenticated user's friends list
    // 3. Return the new friend object

    // Mock response for demo
    const newFriend = {
      id: String(Date.now()),
      name: email.split("@")[0], // Simple name extraction from email
      email,
    }

    return NextResponse.json({ friend: newFriend })
  } catch (error) {
    console.error("Error adding friend:", error)
    return NextResponse.json({ error: "Failed to add friend" }, { status: 500 })
  }
}

