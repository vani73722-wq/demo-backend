const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// API routes
app.use("/api/auth", authRoutes);

// Protected test route
const authMiddleware = require("./middleware/authMiddleware");


app.get("/", (req, res) => { 
    res.send("Node.js Server Running Successfully!");
});

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`);
});