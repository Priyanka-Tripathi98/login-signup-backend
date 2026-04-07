const express = require("express");

const cors = require ("cors")
const app = express();

require("dotenv").config();
const useRoutes = require("./routes/useRoutes")
const loginRoutes = require("./routes/loginRoutes")
const dashRoutes = require("./routes/dashboardRoute")
const productRoutes = require("./routes/productRoutes")
const connectDB = require("./config/db")
connectDB()

// app.get("/", (req, res) => {
//   res.send("API is working");
// });

const cors = require('cors');
app.use(cors({
  origin: 'https://login-signup-frontend-bx3j.onrender.com'
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/signup",useRoutes)
app.use("/login",loginRoutes)
app.use("/dashboard",dashRoutes)
app.use("/product",productRoutes)
app.listen(8001, () =>{
    console.log("server is running or port http://localhost:8001")
})