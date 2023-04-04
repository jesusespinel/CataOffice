import React from "react"
import '../style-sheets/Hero.css'
import CataOffice from'../assets/cataoffice_copy.png'
import Waves from '../components/Waves.jsx'
import Logo2 from '../assets/logo2.png'
const Hero = () => {
    return(
        <>
            <div className="background">
                <div className="logo-container">
                <div className="logo">
                <img src ={CataOffice} alt= "Logo" />
                </div>
                <button>Escríbenos</button>
                </div>
                <div className="logo-container2">
                    <img src={Logo2}/>
                </div>
                <div className="text-container">
                <h1>Tu oficina, en un solo paso</h1>
                <p>Tener el espacio de trabajo que deseas, nunca había sido tan fácil.</p>
                <p>Tú solo muestranos el espacio y nosotros nos encargamos de lo demás.</p>
                </div>
            </div>
            <Waves/> 
        </>
        
    )
}

export default Hero