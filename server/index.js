const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client')));

mongoose
  .connect("mongodb://localhost:27017/dummy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const userData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", userData);

app.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user = new Users({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch {
    // console.log(error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    res.json({ message: "Login successful" });
  } catch (e) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// app.post("/");

// // API routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express API" });
});

// // Handles any requests that don't match the ones above
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});