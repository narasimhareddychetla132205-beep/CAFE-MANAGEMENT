import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
const PORT = 9999;
const SECRET = "abc123";

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/cafeDB")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));


const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String
});

const Order = mongoose.model("Order", {
  items: String,
  total: Number,
  date: { type: Date, default: Date.now }
});


app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hash
    });

    res.json({ message: "Registration successful" });

  } catch {
    res.json({ message: "Error in registration" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, SECRET);

    res.json({ token });

  } catch {
    res.json({ message: "Error in login" });
  }
});

app.post("/order", async (req, res) => {
  try {
    const { items, total } = req.body;

    await Order.create({
      items,
      total
    });

    res.json({ message: "Order placed successfully" });

  } catch {
    res.json({ message: "Error placing order" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});