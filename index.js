const express = require("express");
const cors = require("cors"); // Kept this one
const app = express();

require("dotenv").config();
const useRoutes = require("./routes/useRoutes");
const loginRoutes = require("./routes/loginRoutes");
const dashRoutes = require("./routes/dashboardRoute");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

// --- Middleware Setup ---

// 1. Fixed CORS (Removed the duplicate 'const cors' line)
app.use(cors({
  origin: 'https://login-signup-frontend-bx3j.onrender.com',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
app.use("/signup", useRoutes);
app.use("/login", loginRoutes);
app.use("/dashboard", dashRoutes);
app.use("/product", productRoutes);

// Use process.env.PORT for Render compatibility, fallback to 8001 locally
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});