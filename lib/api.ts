// Types
export interface User {
  id: string
  name: string
  email: string
}

export interface Friend {
  id: string
  name: string
  email: string
}

export interface Newsletter {
  id: string
  prompt: string
  response: string
  createdAt: string
}

// Mock API functions

// Auth
export async function login(email: string, password: string): Promise<{ token: string }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would validate credentials with the backend
  if (email && password) {
    return { token: "mock-jwt-token" }
  }

  throw new Error("Invalid credentials")
}

export async function signup(name: string, email: string, password: string): Promise<{ token: string }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would register a new user with the backend
  if (name && email && password) {
    return { token: "mock-jwt-token" }
  }

  throw new Error("Invalid registration data")
}

// Newsletters
export async function generateNewsletter(
  topic: string,
  keywords?: string,
  additionalText?: string,
): Promise<Newsletter> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // In a real app, this would call your AI service via the backend
  return {
    id: String(Date.now()),
    prompt: `${topic} ${keywords ? `Keywords: ${keywords}` : ""} ${additionalText || ""}`,
    response: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
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
    </div>`,
    createdAt: new Date().toISOString(),
  }
}

export async function getNewsletterHistory(): Promise<Newsletter[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, this would fetch the user's newsletter history from the backend
  return [
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
}

export async function sendNewsletter(newsletterId: string): Promise<{ success: boolean }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would send the newsletter to the user's friends via the backend
  return { success: true }
}

// Friends
export async function getFriends(): Promise<Friend[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, this would fetch the user's friends from the backend
  return [
    { id: "1", name: "Alex Johnson", email: "alex@example.com" },
    { id: "2", name: "Sam Williams", email: "sam@example.com" },
    { id: "3", name: "Taylor Chen", email: "taylor@example.com" },
  ]
}

export async function addFriend(email: string): Promise<Friend> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would add a friend to the user's list via the backend
  return {
    id: String(Date.now()),
    name: email.split("@")[0], // Simple name extraction from email
    email,
  }
}

export async function removeFriend(id: string): Promise<{ success: boolean }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, this would remove a friend from the user's list via the backend
  return { success: true }
}

