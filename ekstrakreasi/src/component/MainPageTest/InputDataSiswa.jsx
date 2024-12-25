import React from "react";
import { useState } from "react";


function InputDataSiswa({ onNext }) {
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [kelas, setKelas] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //mencegah reload halaman

    const data = {
      nama: nama,
      gender: gender,
      kelas: kelas,
    };
    onNext(data)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-20 w-full max-w-md md:max-w-[744px] h-auto md:h-[480px]">
        <h2 className="text-2xl font-bold text-center text-[#67C6E3] mb-6">Siapakah kamu?</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Nama */}
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1 ">
              Nama Lengkap
            </label>

            <input
              type="text"
              id="nama"
              placeholder="Anthony El Gasing"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 bg-[#F5F5F5] focus:ring-2 focus:ring-[#67C6E3] outline-none"
              required
            />
          </div>

          {/* Dropdown Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 bg-[#F5F5F5] focus:ring-2 focus:ring-[#67C6E3] outline-none" required>
              <option value="" disabled>
                Pilih Gender
              </option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          {/* Dropdown Kelas */}
          <div>
            <label htmlFor="kelas" className="block text-sm font-medium text-gray-700 mb-1">
              Kelas
            </label>
            <select id="kelas" value={kelas} onChange={(e) => setKelas(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 bg-[#F5F5F5] focus:ring-2 focus:ring-[#67C6E3] outline-none" required>
              <option value="" disabled>
                {" "}
                Pilih Kelas{" "}
              </option>

              {/* Kelas-10 */}
              <option value="X-TSM"> X-TSM </option>
              <option value="X-TKJ"> X-TKJ </option>
              <option value="X-DKV"> X-DKV </option>
              <option value="X-PERAWAT"> X-PERAWAT </option>
              <option value="X-FARMASI"> X-FARMASI </option>
              <option value="X-PERKANTORAN"> X-PERKANTORAN </option>

              {/* Kelas-11 */}
              <option value="XI-TSM"> XI-TSM </option>
              <option value="XI-TKJ"> XI-TKJ </option>
              <option value="XI-DKV"> XI-DKV </option>
              <option value="XI-PERAWAT"> XI-PERAWAT </option>
              <option value="XI-FARMASI"> XI-FARMASI </option>
              <option value="XI-PERKANTORAN"> XI-PERKANTORAN </option>

              {/* Kelas-12 */}
              <option value="XII-TSM"> XII-TSM </option>
              <option value="XII-TKJ"> XII-TKJ </option>
              <option value="XII-DKV"> XII-DKV </option>
              <option value="XII-PERAWAT"> XII-PERAWAT </option>
              <option value="XII-FARMASI"> XII-FARMASI </option>
              <option value="XII-PERKANTORAN"> XII-PERKANTORAN </option>
            </select>
          </div>

          {/* Tombol Submit */}
          <button type="submit" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputDataSiswa;
