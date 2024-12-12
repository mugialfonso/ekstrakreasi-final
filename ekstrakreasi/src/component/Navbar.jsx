import React from "react"
import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"


function Navbar () {
    // Untuk menampilkan button menu ketika layar <700px
    const [nav,setNav] = useState (false) 

    const handleNav = () => {
        setNav(!nav)
    }
    // Navigate to other page
    const navigate = useNavigate()
    
    const navigateTo = (path) => {
        navigate(path)
        setNav(false)
    }


    return (
        <div className="bg-[#67C6E3] w-full"> 
            <div className="  text-white filter drop-shadow-[0_0_1px_rgba(0,0,0,0.18)]  flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 md:px-36 ">
                <h1 className=" w-full text-2xl md:text-3xl font-bold  flex cursor-pointer" onClick={() => navigateTo("/")} >EkstraKreasi</h1>
                {/* Mobile-MenuIcon-Function untuk menampilkan menu sidebar */}
                <div onClick={handleNav} className="md:hidden text-white cursor-pointer">
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20}/> } 
                </div>

                <ul className=" font-bold hidden md:flex ">
                    <li className="p-4 cursor-pointer" onClick={() => navigateTo("/")}>Home</li>
                    <li className="p-4 cursor-pointer" onClick={() => navigateTo("/test")}>Test</li>
                    <li className="p-4 cursor-pointer whitespace-nowrap" onClick={() => navigateTo("/aboutus")}>About Us</li>
                </ul>
            </div>
            {/* Menu sidebar - close Icon*/}
            <div className={`fixed top-0 left-0 h-full w-[60%] bg-[#67C6E3] p-4 z-50 transform 
                ${ nav ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                
                {/* <AiOutlineClose onClick={handleNav} className="absolute top-4 right-4 text-white cursor-pointer" size={20}/> */}
                <ul className=" p-2 mt-6 uppercase text-white filter drop-shadow-[0_0_1px_rgba(0,0,0,0.18)]">
                    <li className="p-4 border-b border-white cursor-pointer" onClick={() => navigateTo("/")}>Home</li>
                    <li className="p-4 border-b border-white cursor-pointer" onClick={() => navigateTo("/test")}>Test</li>
                    <li className="p-4 whitespace-nowrap cursor-pointer" onClick={() => navigateTo("/aboutus")}>About Us</li>
                </ul>
            </div> 

        </div>
    )
}

export default Navbar