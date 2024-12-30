const express = require("express");
const router = express.Router();
const recommendationsController = require("../controller/recommendationsController");

//endpoint recommendations
router.post("/", recommendationsController.getRecommendations);

module.exports = router;