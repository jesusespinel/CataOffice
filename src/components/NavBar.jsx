import React from "react";
import "../style-sheets/NavBar.css";
import CataOffice from'../assets/cataoffice_copy.png';
import { useEffect,useRef } from "react";

const NavBar = () =>{

    const navRef = useRef(null);

    useEffect(() => {
      const navBar = navRef.current;
      const homeSection = document.querySelector("#home");

      const handleScroll = () => {
        if (window.scrollY > homeSection.offsetTop) {
          navBar.classList.add("hide-nav");
        } else {
          navBar.classList.remove("hide-nav");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  
  return(
    <nav ref={navRef}>
      <ul>
        <li id="ln">
          <div className="logo-nav">
            <img src ={CataOffice} alt= "Logo"/>
          </div>
        </li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#Services">¿Qué hacemos?</a></li>
        <li><a href="#contact">Escríbenos</a></li>
        <li><a href="#more">Más</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;