import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Database Connected");
  } catch (err) {
    console.log("Database connection error:", err);
    throw err;
  }
}

export const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String
});

export const Order = mongoose.model("Order", {
  items: String,
  total: Number,
  date: { type: Date, default: Date.now }
});
