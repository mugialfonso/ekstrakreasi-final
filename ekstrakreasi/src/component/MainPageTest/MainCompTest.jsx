import InputDataSiswa from "./InputDataSiswa";
import WelcomingSection from "./WelcomingSection";
import TestSection from "./TestSection";
import HasilRekomendasi from "./HasilRekomendasi";

import React, { useState } from "react";
import axios from "axios";

function MainCompTest() {
  const [stepper, setStepper] = useState(1); // Mengelola tahapan (step) sesi
  const [studentName, setStudentName] = useState(""); // Menyimpan nama siswa
  const [testResults, setTestResults] = useState({}); // Untuk menyimpan jawaban dari TestSection
  const [recommendation, setRecommendation] = useState(""); // Menyimpan hasil rekomendasi

  //   const nextStepper = () => setStepper((prev) => prev + 1);

  // Menyimpan data profil siswa ke backend
  const handleSaveProfile = async (data) => {
    if (!data.nama || !data.gender || !data.kelas) {
      alert("Semua field wajib diisi!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/users", data); // Axios POST request
      console.log("Respons dari API:", response.data);

      const result = response.data;
      setStudentName(data.nama); // Simpan nama siswa
      setStepper(2); // Pindah ke WelcomingSection
    } catch (error) {
      console.error("Error Request to API:", error);
      alert("Terjadi kesalahan saat menyimpan data siswa!");
    }
  };

  const handleTestResults = async (results) => {
    setTestResults(results); //simpen data di state testResults
    try {
      const response = await axios.post("http://localhost:4000/recommendations", results);
      console.log("Respons dari API:", response.data);

      if (response.data && response.data.data && response.data.data.length > 0) {
        const recommendation = response.data.data[0].nama_kegiatan; // Ambil nama_kegiatan
        setRecommendation(recommendation); // Simpan rekomendasi di state
      } else {
        setRecommendation("Tidak ada rekomendasi yang tersedia."); // Atur default pesan rekomendasi
      }
      setStepper(4);
    } catch (error) {
      console.error("Error Request to API:", error);
      alert("Terjadi kesalahan saat mengirim data hasil test!");
    }
  };
  
  //Function untuk mengulangi test
  const restartTest = () => {
    setTestResults({}); // Reset hasil tes
    setStepper(3); // Kembali ke TestSection
  };

  return (
    <div>
      {stepper === 1 && <InputDataSiswa onNext={handleSaveProfile} />}
      {stepper === 2 && <WelcomingSection nama={studentName} onNext={() => setStepper(3)} />}
      {stepper === 3 && <TestSection onFinish={handleTestResults} key={testResults}/>}
      {stepper === 4 && <HasilRekomendasi nama={studentName} recommendation={recommendation} restartTest={restartTest} />}
    </div>
  );
}

export default MainCompTest;
