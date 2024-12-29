const dbPool = require("../config/database");

// Mendapatkan rekomendasi berdasarkan jawaban siswa (Full Match)
const generateRecommendation = async (answers) => {
  const { step1, step2, step3, step4, step5, step6, step7 } = answers;

  const SQLQuery = `
    SELECT kegiatan.nama_kegiatan
    FROM klasifikasi
    INNER JOIN kegiatan ON klasifikasi.kode_kegiatan = kegiatan.kode_kegiatan
    WHERE 
      klasifikasi.jenis_kegiatan = ? AND
      klasifikasi.sifat_kegiatan = ? AND
      klasifikasi.lokasi_kegiatan = ? AND
      klasifikasi.frekuensi_kegiatan = ? AND
      klasifikasi.jenis_aktivitas = ? AND
      klasifikasi.fokus_kegiatan = ? AND
      klasifikasi.waktu_kegiatan = ?
  `;

  const params = [step1, step2, step3, step4, step5, step6, step7];

  try {
    const [rows] = await dbPool.execute(SQLQuery, params);
    return rows.map((row) => ({ ...row, skor: 7 })); // skor 7
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};


//Tahapan Eliminasi aturan (untuk case fakta yang tidak match)
// Rekomendasi dengan eliminasi aturan tahap-1 (Eliminasi Fokus_Kegiatan(FOK))
const generateRecommendationFilterPhaseOne = async (answers) => {
  const { step1, step2, step3, step4, step5, step7 } = answers;

  const SQLQuery = `
    SELECT kegiatan.nama_kegiatan
    FROM klasifikasi
    INNER JOIN kegiatan ON klasifikasi.kode_kegiatan = kegiatan.kode_kegiatan
    WHERE 
      klasifikasi.jenis_kegiatan = ? AND
      klasifikasi.sifat_kegiatan = ? AND
      klasifikasi.lokasi_kegiatan = ? AND
      klasifikasi.frekuensi_kegiatan = ? AND
      klasifikasi.jenis_aktivitas = ? AND
      klasifikasi.waktu_kegiatan = ?
  `;

  const params = [step1, step2, step3, step4, step5, step7];

  try {
    const [rows] = await dbPool.execute(SQLQuery, params);
    return rows.map((row) => ({ ...row, skor: 6 })); // skor 6
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

// Mendapatkan Rekomendasi dengan eliminasi aturan tahap-2 (Eliminasi Fokus_Kegiatan(FOK) dan jenis_aktivitas(AK))
const generateRecommendationFilterPhaseTwo = async (answers) => {
  const { step1, step2, step3, step4, step7 } = answers;
  const SQLQuery = `
    SELECT kegiatan.nama_kegiatan
    FROM klasifikasi
    INNER JOIN kegiatan ON klasifikasi.kode_kegiatan = kegiatan.kode_kegiatan
    WHERE 
      klasifikasi.jenis_kegiatan = ? AND
      klasifikasi.sifat_kegiatan = ? AND
      klasifikasi.lokasi_kegiatan = ? AND
      klasifikasi.frekuensi_kegiatan = ? AND
      klasifikasi.waktu_kegiatan = ?;
  `;
  const params = [step1, step2, step3, step4, step7];
  try {
    const [rows] = await dbPool.execute(SQLQuery, params);
    return rows.map((row) => ({ ...row, skor: 5 })); // skor 5
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

//Mendapatkan Rekomendasi dengan eliminasi aturan tahap-3 (Eliminasi Fokus_Kegiatan(FOK) dan jenis_aktivitas(AK) dan waktu_kegiatan(wk))
const generateRecommendationFilterPhaseThree = async (answers) => {
  const { step1, step2, step3, step4 } = answers;
  const SQLQuery = `
    SELECT kegiatan.nama_kegiatan
    FROM klasifikasi
    INNER JOIN kegiatan ON klasifikasi.kode_kegiatan = kegiatan.kode_kegiatan
    WHERE 
      klasifikasi.jenis_kegiatan = ? AND
      klasifikasi.sifat_kegiatan = ? AND
      klasifikasi.lokasi_kegiatan = ? AND
      klasifikasi.frekuensi_kegiatan = ?;
  `;
  const params = [step1, step2, step3, step4];
  try {
    const [rows] = await dbPool.execute(SQLQuery, params);
    return rows.map((row) => ({ ...row, skor: 4 })); // skor 5
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

//Mendapatkan Rekomendasi dengan eliminasi aturan tahap-4 (Eliminasi Fokus_Kegiatan(FOK) dan jenis_aktivitas(AK) dan waktu_kegiatan(wk) dan Frekuensi_kegiatan(FRK))
const generateRecommendationFilterPhaseFour = async (answers) => {
  const { step1, step2, step3 } = answers;
  const SQLQuery = `
    SELECT kegiatan.nama_kegiatan
    FROM klasifikasi
    INNER JOIN kegiatan ON klasifikasi.kode_kegiatan = kegiatan.kode_kegiatan
    WHERE 
      klasifikasi.jenis_kegiatan = ? AND
      klasifikasi.sifat_kegiatan = ? AND
      klasifikasi.lokasi_kegiatan = ?;
  `;
  const params = [step1, step2, step3];
  try {
    const [rows] = await dbPool.execute(SQLQuery, params);
    return rows.map((row) => ({ ...row, skor: 3 })); //skor 3
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

//Mendapatkan Rekomendasi dengan eliminasi aturan tahap-akhir(default)
const generateRecommendationsDefault = async (answers) => {
  const { step1 } = answers;
  const SQLQuery = `
    SELECT kegiatan.nama_kegiatan
    FROM klasifikasi
    INNER JOIN kegiatan ON klasifikasi.kode_kegiatan = kegiatan.kode_kegiatan
    WHERE klasifikasi.jenis_kegiatan = ?;
  `;
  const params = [step1];
  try {
    const [rows] = await dbPool.execute(SQLQuery, params);
    return rows.map((row) => ({ ...row, skor: 1 })); // skor 1
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

module.exports = {
  generateRecommendation,
  generateRecommendationFilterPhaseOne,
  generateRecommendationFilterPhaseTwo,
  generateRecommendationFilterPhaseThree,
  generateRecommendationFilterPhaseFour,
  generateRecommendationsDefault,
};
