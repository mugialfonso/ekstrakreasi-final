const rulesModel = require("../models/rulesModel");

const getRecommendations = async (req, res) => {
  const { step1, step2, step3, step4, step5, step6, step7 } = req.body;

  // Validasi input dari form frontend
  if (!step1 || !step2 || !step3 || !step4 || !step5 || !step6 || !step7) {
    return res.status(400).json({
      message: "Semua jawaban harus diisi.",
    });
  }

  try {
    const recommendations = await rulesModel.generateRecommendation({
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
    });

    res.status(200).json({
      message: "Recommendations fetched successfully",
      data: recommendations,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error processing recommendations",
      error,
    });
  }
};

module.exports = { getRecommendations };
