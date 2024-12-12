import React from "react"
import { useState } from "react"

function TestSection () {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Answer:", selectedAnswer);
    };

    

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-20 w-full max-w-md md:max-w-[744px] h-auto md:h-[426px]">
                <h3 className="text-xl font-bold text-center text-[#67C6E3] mb-6">
                    Pertanyaan 1
                </h3>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Pertanyaan 1 */}
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                            Jawaban Kamu:
                        </p>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Olahraga"
                                    checked={selectedAnswer === "Olahraga"}
                                    onChange={handleAnswerChange}
                                    className="mr-2"
                                />
                                Olahraga
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Seni"
                                    checked={selectedAnswer === "Seni"}
                                    onChange={handleAnswerChange}
                                    className="mr-2"
                                />
                                Seni
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Akademik"
                                    checked={selectedAnswer === "Akademik"}
                                    onChange={handleAnswerChange}
                                    className="mr-2"
                                />
                                Akademik
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="Kepemimpinan"
                                    checked={selectedAnswer === "Kepemimpinan"}
                                    onChange={handleAnswerChange}
                                    className="mr-2"
                                />
                                Kepemimpinan
                            </label>
                        </div>
                    </div>

                    {/* Tombol Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            
            
            {/* <div className="bg-white rounded-lg shadow-2xl p-8 md:p-20 w-full max-w-md md:max-w-[744px] h-auto md:h-[426px]" >
                <h3 className="text-xl font-bold text-center text-[#67C6E3] mb-4">Pertanyaan 1</h3>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi ex reprehenderit asperiores</h5>
                <form action="">

                </form>
            </div> */}
        </div>
    )
}

export default TestSection