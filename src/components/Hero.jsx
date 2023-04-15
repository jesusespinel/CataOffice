import React, { useState } from "react";
import '../style-sheets/Hero.css';
import CataOffice from'../assets/cataoffice_copy.png';
import Waves from '../components/Waves';
import pictures from '../utils/photos.js';
import Logo2 from '../assets/logo2-alt.png';

const Hero = () => {

    const handleNavigation = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      };

    const [i, setI] = useState(0);


 
    return(
        <>
            
            <div id="home" className="carrousel">
                {
                    pictures.map((picture, i) => {
                        return <img src={picture} id="mujer"/>
                    })
                }
            </div>
          
            <div className="background">
                <div className="logo-container">
                    <div className="logo">
                        <img src ={CataOffice} alt= "Logo" id="cat" />
                    </div>                 
                    <button id="home-button" onClick={(e) => handleNavigation(e, "contact")}>
                    Escríbenos
                    </button>
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

export default Hero;
