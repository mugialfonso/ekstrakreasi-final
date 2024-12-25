const dbPool = require("../config/database");

// Mendapatkan rekomendasi berdasarkan jawaban siswa
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
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

module.exports = { generateRecommendation };
