export interface User {
  id: string
  name: string
  email: string
  password: string // In a real app, this would be hashed
  friends: Friend[]
  history: HistoryItem[]
}

export interface Friend {
  id: string
  name: string
  email: string
}

export interface HistoryItem {
  id: string
  prompt: string
  response: string
  createdAt: string
}

