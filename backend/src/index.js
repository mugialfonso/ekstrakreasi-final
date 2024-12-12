const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 4000;
const userRoutes = require("./routes/usersRoute");
const middleWareLogRequest = require("./middleware/log");

// Middleware untuk parsing JSON
app.use(express.json());

//Middleware CORS
app.use(cors());

//Middleware Log Request
app.use(middleWareLogRequest);

// users routes
app.use("/users", userRoutes);

// run server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
