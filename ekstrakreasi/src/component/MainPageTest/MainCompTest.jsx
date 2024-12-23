import InputDataSiswa from "./InputDataSiswa";
import WelcomingSection from "./WelcomingSection";
import TestSection from "./TestSection";

import React,{useState} from "react";

function MainCompTest () {
    const [stepper, setStepper] = useState(1)
    const [namaSiswa,setNamaSiswa] = useState('')

    const nextStepper = () => setStepper((prev) => prev + 1)

    const handleNamaSiswa = (nama) => {
        setNamaSiswa(nama)
        nextStepper()
    }
    
    return (
        <div>
            {stepper === 1 && <InputDataSiswa onNext={handleNamaSiswa}/>}
            {stepper === 2 && <WelcomingSection nama={namaSiswa} onNext={nextStepper}/>}
            {stepper === 3 && <TestSection/>}
            {/* <InputDataSiswa/> */}
            {/* <WelcomingSection/> */}
            {/* <TestSection/> */}
        </div>
    )
}

export default MainCompTest