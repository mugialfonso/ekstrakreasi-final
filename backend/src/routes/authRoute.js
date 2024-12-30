const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// Endpoint login admin
router.post("/login", authController.loginAdmin);

module.exports = router;