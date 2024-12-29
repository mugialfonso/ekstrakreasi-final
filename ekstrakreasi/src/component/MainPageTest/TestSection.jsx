import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

function TestSection({ onFinish }) {
  const [step, setStep] = useState(1); // state untuk stepper sesi test
  const [answers, setAnswers] = useState({}); // State menyimpan jawaban user

  // Function untuk menyimpan jawaban user
  const handleAnswerChange = (e) => {
    setAnswers({ ...answers, [`step${step}`]: e.target.value });
  };

  // Function Stepper ke sesi pertanyaan selanjutnya
  const handleNext = (e) => {
    e.preventDefault();

    // Validasi: Pastikan jawaban untuk step saat ini telah diisi
    if (!answers[`step${step}`]) {
      Swal.fire({
        title: "Peringatan!",
        text: "Pilih jawaban anda sebelum melanjutkan",
        icon: "warning",
      });
      return; // Berhenti di sini jika jawaban kosong
    }

    if (step < 7) {
      setStep(step + 1); // Pindah ke pertanyaan berikutnya
    } else {
      console.log("Jawaban siswa:", answers);
      onFinish(answers); //send answers to maincomp
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-14 w-full max-w-md md:max-w-[744px] h-auto md:h-[464px]">
        <h3 className="text-xl font-bold text-center text-[#67C6E3] mb-6">Pertanyaan {step}</h3>
        {/* Pertanyaan Berdasarkan Tahapan */}
        {step === 1 && (
          <>
            <p className="mb-2">Kalau punya waktu luang, kamu lebih suka ngapain biar merasa produktif?</p>
            <p className="text-sm font-medium text-gray-700 mb-4">Jawaban Kamu (Pilih salah satu):</p>
            <form onSubmit={handleNext} className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="step1" value="JK01" checked={answers.step1 === "JK01"} onChange={handleAnswerChange} className="mr-2" />
                Belajar hal baru atau diskusi seru (Akademik)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step1" value="JK02" checked={answers.step1 === "JK02"} onChange={handleAnswerChange} className="mr-2" />
                Olahraga, biar badan sehat dan pikiran segar (Olahraga)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step1" value="JK03" checked={answers.step1 === "JK03"} onChange={handleAnswerChange} className="mr-2" />
                Seni atau budaya, buat nyalurin kreativitas (Seni dan Budaya)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step1" value="JK04" checked={answers.step1 === "JK04"} onChange={handleAnswerChange} className="mr-2" />
                Ikut organisasi, biar bisa belajar kerja sama dan kenalan sama orang baru (Organisasi)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step1" value="JK05" checked={answers.step1 === "JK05"} onChange={handleAnswerChange} className="mr-2" />
                Gabung komunitas, biar bisa sharing minat bareng (Komunitas)
              </label>

              <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Selanjutnya
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <p className="mb-2">Kalau lagi ikut kegiatan, kamu lebih nyaman rame-rame atau sendirian?</p>
            <p className="text-sm font-medium text-gray-700 mb-4">Jawaban Kamu (Pilih salah satu):</p>
            <form onSubmit={handleNext} className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="step2" value="SK01" checked={answers.step2 === "SK01"} onChange={handleAnswerChange} className="mr-2" />
                Aku suka kalau rame-rame bareng teman (Berkelompok)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step2" value="SK02" checked={answers.step2 === "SK02"} onChange={handleAnswerChange} className="mr-2" />
                Lebih fokus kalau sendiri aja (Individual)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step2" value="SK03" checked={answers.step2 === "SK03"} onChange={handleAnswerChange} className="mr-2" />
                Tergantung, aku fleksibel sih (Keduanya)
              </label>
              <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Selanjutnya
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <p className="mb-2">Di mana sih kamu paling nyaman buat ngelakuin kegiatan?</p>
            <p className="text-sm font-medium text-gray-700 mb-4">Jawaban Kamu (Pilih salah satu):</p>
            <form onSubmit={handleNext} className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="step3" value="LK01" checked={answers.step3 === "LK01"} onChange={handleAnswerChange} className="mr-2" />
                Di dalam ruangan, lebih nyaman dan tenang (Indoor)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step3" value="LK02" checked={answers.step3 === "LK02"} onChange={handleAnswerChange} className="mr-2" />
                Di luar ruangan, biar sekalian nikmatin udara segar (Outdoor)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step3" value="LK03" checked={answers.step3 === "LK03"} onChange={handleAnswerChange} className="mr-2" />
                Dua-duanya oke, aku suka gonta-ganti suasana (Keduanya)
              </label>
              <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Selanjutnya
              </button>
            </form>
          </>
        )}

        {step === 4 && (
          <>
            <p className="mb-2">Seberapa sering kamu pengen ikut kegiatan eksul dalam seminggu? </p>
            <p className="text-sm font-medium text-gray-700 mb-4">Jawaban Kamu (Pilih salah satu):</p>
            <form onSubmit={handleNext} className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="step4" value="FRK01" checked={answers.step4 === "FRK01"} onChange={handleAnswerChange} className="mr-2" />
                Sekali seminggu udah cukup kok (1x Seminggu)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step4" value="FRK02" checked={answers.step4 === "FRK02"} onChange={handleAnswerChange} className="mr-2" />
                Dua kali seminggu, pas lah buat aku (2x Seminggu)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step4" value="FRK03" checked={answers.step4 === "FRK03"} onChange={handleAnswerChange} className="mr-2" />
                Tiga kali seminggu, aku emang suka aktif terus! (3x Seminggu)
              </label>
              <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Selanjutnya
              </button>
            </form>
          </>
        )}

        {step === 5 && (
          <>
            <p className="mb-2">Kegiatan yang kamu mau itu lebih ke latihan serius atau ada eksplorasi hal-hal lain juga? </p>
            <p className="text-sm font-medium text-gray-700 mb-4">Jawaban Kamu (Pilih salah satu):</p>
            <form onSubmit={handleNext} className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="step5" value="AK01" checked={answers.step5 === "AK01"} onChange={handleAnswerChange} className="mr-2" />
                Aku pengen fokus latihan aja (Latihan)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step5" value="AK02" checked={answers.step5 === "AK02"} onChange={handleAnswerChange} className="mr-2" />
                Aku suka latihan tapi juga pengen coba hal baru (Latihan dan lainnya)
              </label>

              <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Selanjutnya
              </button>
            </form>
          </>
        )}

        {step === 6 && (
          <>
            <p className="mb-2">Kalau kamu ikut kegiatan ini, lebih suka belajar teori dulu atau langsung praktek aja?</p>
            <p className="text-sm font-medium text-gray-700 mb-4">Jawaban Kamu (Pilih salah satu):</p>
            <form onSubmit={handleNext} className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="step6" value="FOK01" checked={answers.step6 === "FOK01"} onChange={handleAnswerChange} className="mr-2" />
                Aku suka belajar teori biar ngerti dasarnya (Teori)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step6" value="FOK02" checked={answers.step6 === "FOK02"} onChange={handleAnswerChange} className="mr-2" />
                Langsung Praktek aja, aku lebih suka action (Praktik)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step6" value="FOK03" checked={answers.step6 === "FOK03"} onChange={handleAnswerChange} className="mr-2" />
                Gabungan dong, teori oke, praktik juga penting (Keduanya)
              </label>

              <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Selanjutnya
              </button>
            </form>
          </>
        )}

        {step === 7 && (
          <>
            <p className="mb-2">Waktunya kapan nih kamu lebih enak buat ikut kegiatan?</p>
            <p className="text-sm font-medium text-gray-700 mb-4">Jawaban Kamu (Pilih salah satu):</p>
            <form onSubmit={handleNext} className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="step7" value="WK01" checked={answers.step7 === "WK01"} onChange={handleAnswerChange} className="mr-2" />
                Hari sekolah aja, aku lagi semangat (Hanya Weekdays)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step7" value="WK02" checked={answers.step7 === "WK02"} onChange={handleAnswerChange} className="mr-2" />
                Akhir pekan dong, waktunya santai (Hanya Weekend)
              </label>
              <label className="flex items-center">
                <input type="radio" name="step7" value="WK03" checked={answers.step7 === "WK03"} onChange={handleAnswerChange} className="mr-2" />
                Kapan aja sih, aku fleksibel banget (Keduanya)
              </label>

              <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Selasai
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default TestSection;
