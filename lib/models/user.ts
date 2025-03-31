// This file would define the User model for MongoDB using Mongoose
// In a real app, this would be used by your backend API routes

/*
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the Friend schema (for embedding in User)
const FriendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

// Define the History schema (for embedding in User or as a separate collection)
const HistorySchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: [FriendSchema],
  history: [HistorySchema]
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create the model
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
*/

// For the demo, we'll use a mock model
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

