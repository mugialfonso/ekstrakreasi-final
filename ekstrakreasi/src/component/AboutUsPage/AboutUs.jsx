
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AboutUs () {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
        
    };

    return (
        <div>

            <div className="w-full mx-auto p-16 md:p-24 text-center">
                <h3 className="text-[#5356FF] font-bold text-2xl md:text-2xl py-4">
                    Tentang EkstraKreasi
                </h3>
                <p className="text-[#595959] font-semibold px-18 md:px-36">
                EkstraKreasi adalah platform yang dirancang khusus untuk membantu siswa SMKN 9 Kabupaten Tangerang menemukan kegiatan ekstrakurikuler yang sesuai dengan minat dan bakat mereka. Kami percaya bahwa setiap siswa memiliki potensi unik yang bisa dikembangkan melalui kegiatan yang tepat.
                </p>
            </div>

            <div className="bg-[#BDE7FB] w-full mx-auto p-16 md:p-24 text-center">
                <h3 className="text-[#5356FF] font-bold text-2xl md:text-2xl py-4">
                    Kenapa EkstraKreasi ?
                </h3>
                <p className="text-[#595959] font-semibold px-18 md:px-36">
                Siswa bisa lebih mudah menemukan kegiatan yang mereka sukai dan mengembangkan diri dengan lebih baik melalui kegiatan ekstrakurikuler yang sesuai.
                Ayo Temukan Ekstrakurikuler Terbaik untuk Dirimu! 
                Selamat mencoba dan temukan aktivitas yang sesuai untukmu di EkstraKreasi!
                </p>
                <button className="bg-[#378CE7] w-[284px] h-[48px]  rounded-md text-white font-medium my-6 py-3 mx-auto md:mx-0  hover:bg-blue-700 transition duration-300 " onClick={() => navigateTo('/test')} >Mulai Test</button>
            </div>

        </div>
    )
}

export default AboutUs