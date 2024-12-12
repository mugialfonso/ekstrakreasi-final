import InputDataSiswa from "./InputDataSiswa";
import WelcomingSection from "./WelcomingSection";
import TestSection from "./TestSection";

import React,{useState} from "react";

function MainCompTest () {
    const [stepper, setStepper] = useState(1)
    const nextStepper = () => setStepper((prev) => prev + 1)
    
    return (
        <div>
            {stepper === 1 && <InputDataSiswa onNext={nextStepper}/>}
            {stepper === 2 && <WelcomingSection onNext={nextStepper}/>}
            {stepper === 3 && <TestSection/>}
            {/* <InputDataSiswa/> */}
            {/* <WelcomingSection/> */}
            {/* <TestSection/> */}
        </div>
    )
}

export default MainCompTest