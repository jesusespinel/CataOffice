import React from "react";
import '../style-sheets/Hero.css';
import CataOffice from'../assets/cataoffice_copy.png';
import Template from '../assets/marco-diseño-de-home.png';
import Mujer from '../assets/mujer.jpeg';
import Logo2 from '../assets/logo2.png';

const Hero = () => {
 
    return(
        <>
            <img src={Template} alt= "Template" id="template"/>
            <div className="carrousel">
                <img src={Mujer} alt= "mujer" id="mujer"/>
            </div>
            <div className="background">
                <div className="logo-container">
                <div className="logo">
                    <img src ={CataOffice} alt= "Logo" id="cat" />
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
        </>
        
    )
}

export default Hero;