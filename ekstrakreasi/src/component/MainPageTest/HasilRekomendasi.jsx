import React from "react";

function HasilRekomendasi({ nama, recommendation, restartTest }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-20 w-full max-w-md md:max-w-[744px] h-auto md:h-[426px]">
        <div className="p-8">
          <h2 className=" text-lg md:text-2xl font-bold text-center text-[#67C6E3] mb-6">{nama}, Sepertinya kegiatan Ekstrakurikuler ini yang cocok buat kamu!</h2>
          {recommendation ? <p className="text-center font-bold text-gray-700 mt-4 mb-6">{recommendation}</p> : <p className="text-center text-gray-700 mt-4">Tidak ada rekomendasi yang tersedia.</p>}
          <p className="mt-4 text-center">Tekan tombol dibawah ini jika kamu ingin mengulangi test</p>
          <button
            onClick={restartTest}
            className="mt-6 w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Ulangi Test
          </button>

        </div>
      </div>
    </div>
  );
}

export default HasilRekomendasi;
