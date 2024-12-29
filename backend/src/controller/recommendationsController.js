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
    }

    //eliminasi tahap-3
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationFilterPhaseThree({
        step1, 
        step2, 
        step3, 
        step4,
      })
    }

    //eliminasi tahap-4
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationFilterPhaseFour({
        step1, 
        step2, 
        step3, 
      })
    }

    //default
    if (recommendations.length === 0) {
      recommendations = await rulesModel.generateRecommendationsDefault({
        step1, 
      })
    }

    // validasi ketika tidak ada yang cocok sama sekali
    // if (recommendations.length === 0) {
    //   // Jika tidak ada rekomendasi
    //   return res.status(404).json({
    //     message: "Tidak ada rekomendasi yang sesuai dengan input Anda.",
    //   });
    // }


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
