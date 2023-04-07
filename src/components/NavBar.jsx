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
        <li><a href="#">Hola</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">¿Qué hacemos?</a></li>
        <li><a href="#">Escríbenos</a></li>
        <li><a href="#">Más</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;