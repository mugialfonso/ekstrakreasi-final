require('dotenv').config()
const express = require("express");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 4000
const userRoutes = require("./routes/usersRoute");
const middleWareLogRequest = require("./middleware/log");
const recommendationsRoute = require("./routes/recommendationRoute");

const authRoutes = require("./routes/authRoute");
const authenticateAdmin = require("./middleware/auth");

// Middleware untuk parsing JSON
app.use(express.json());

//Middleware CORS
app.use(cors());

//Middleware Log Request
app.use(middleWareLogRequest);

// users routes
app.use("/users", userRoutes);

// recommendation routes
app.use("/recommendations", recommendationsRoute);

// Rute untuk login admin
app.use("/auth", authRoutes);

// Rute khusus admin (dilindungi)
app.use("/admin", authenticateAdmin, (req, res) => {
    res.json({ message: "Welcome to admin", admin: req.admin });
});

// run server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
