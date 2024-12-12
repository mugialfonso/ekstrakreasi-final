import React from "react";
import { useNavigate } from "react-router-dom";


function Hero () {
    
    //Navigate button to test-page
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
        
    };

    return (
        <div className="w-full  py-8 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center order-2 md:order-1">
                        <h1 className="md:text-3xl sm:text-2xl text-[#378CE7] font-bold py-4">
                        Jelajahi Bakatmu, Temukan Eskulmu !
                        </h1>
                        <p className="text-[#0F91B9] font-semibold py-2">Selamat Datang di EkstraKreasi!
                        </p>
                        <p className="text-[#757575] font-medium">Temukan dan kembangkan minat serta bakatmu dengan rekomendasi kegiatan ekstrakurikuler yang tepat di SMKN 9 Kabupaten Tangerang. Mulailah perjalananmu menuju prestasi dan kreativitas tanpa batas bersama EkstraKreasi.</p>
                        <button className="bg-[#378CE7] w-[284px] h-[48px]  rounded-md text-white font-medium my-6 py-3 mx-auto md:mx-0 hover:bg-blue-700 transition duration-300 " onClick={() => navigateTo("/test")} >Mulai Test</button>
                </div>
                <img className="w-[500px] mx-auto my-4 order-1 md:order-2" src= "/src/assets/image/Eskul.png" alt="Gambar-Eskul" />
            </div>

            {/* Layout img-kiri dan text-kanan
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src= "/src/assets/image/Eskul.png" alt="Gambar-Eskul" /> 
                
                <div className="flex flex-col justify-center">
                        <h1 className="md:text-3xl sm:text-2xl text-[#378CE7] font-bold py-4">
                        Jelajahi Bakatmu, Temukan Eskulmu !
                        </h1>
                        <p className="text-[#0F91B9] font-semibold py-2">Selamat Datang di EkstraKreasi!
                        </p>
                        <p className="text-[#757575] font-medium">Temukan dan kembangkan minat serta bakatmu dengan rekomendasi kegiatan ekstrakurikuler yang tepat di SMKN 9 Kabupaten Tangerang. Mulailah perjalananmu menuju prestasi dan kreativitas tanpa batas bersama EkstraKreasi.</p>
                        <button className="bg-[#378CE7] w-[284px] h-[48px]  rounded-md text-white font-medium my-6 py-3 mx-auto md:mx-0  ">Mulai Test</button>
                </div>
                
            </div> */}
        

        </div>
    )
}

export default Hero