import React from "react";
import "../style-sheets/NavBar.css";
import CataOffice from'../assets/cataoffice_copy.png';

const NavBar = () =>{
  
  return(
    <nav>
      <ul>
        <li id="ln">
          <div className="logo-nav">
            <img src ={CataOffice} alt= "Logo"/>
          </div>
        </li>
        <li><a href="#home">Hola</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#Services">¿Qué hacemos?</a></li>
        <li><a href="#contact">Escríbenos</a></li>
        <li><a href="#more">Más</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;