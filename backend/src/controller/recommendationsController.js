const rulesModel = require("../models/rulesModel");

const getRecommendations = async (req, res) => {
  const { step1, step2, step3, step4, step5, step6, step7 } = req.body;
  console.log("Request body:", req.body);

  // Validasi input dari form frontend
  if (!step1 || !step2 || !step3 || !step4 || !step5 || !step6 || !step7) {
    return res.status(400).json({
      message: "All answer is require.",
    });
  }

  try {
    let recommendations

    //Tahap Full Match
    recommendations = await rulesModel.generateRecommendation({
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
    }); 
    console.log("Full Match recommendations:", recommendations);

    //eliminasi tahap-1
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationFilterPhaseOne({
        step1, 
        step2, 
        step3, 
        step4,
        step5, 
        step7,
  
      })
      console.log("Phase 1 recommendations:", recommendations);
    }

    //eliminasi tahap-2
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationFilterPhaseTwo({
        step1, 
        step2, 
        step3, 
        step4, 
        step7,
  
      })
      console.log("Phase 2 recommendations:", recommendations);
    }

    //eliminasi tahap-3
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationFilterPhaseThree({
        step1, 
        step2, 
        step3, 
        step4,
      })
      console.log("Phase 3 recommendations:", recommendations);
    }

    //eliminasi tahap-4
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationFilterPhaseFour({
        step1, 
        step2, 
        step3, 
      })
      console.log("Phase 4 recommendations:", recommendations);
    }

    //default
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationsDefault({
        step1, 
      })
      console.log("Default recommendations:", recommendations);
    }

    res.status(200).json({
      message: "Recommendations successfully",
      data: recommendations,
    });
  } catch (error) {
    console.error("Error processing recommendations:", error);
    res.status(500).json({
      message: "Error processing recommendations",
      error,
    });
  }
};

module.exports = { getRecommendations };
