import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import BackTopBtn from './components/BackTopBtn'
import Services from './components/Services'
import More from './components/More'
import Footer from './components/Footer'

function App() {
  const [logo, setLogo] = useState(true);

  window.onscroll = function (e) {
    // const navBar = document.querySelector("nav");
    const logoImage = document.querySelector("#cat");
    const logoImageNav = document.querySelector(".logo-nav img");

    if (this.oldScroll > this.scrollY && logo == false) {
    // navBar.style.display = "flex";
    if (window.pageYOffset > 25 && window.pageYOffset < 160) {
      logoImageNav.animate([{opacity: "1"}, {opacity: "0"}], {duration: 1000, iterations: 1});
      logoImage.animate([{bottom: "100px", opacity: "0", width: "100px"},{bottom: "0px", opacity: "1", width: "100%"}],
      {duration: 1000,
      iterations: 1});
      logoImageNav.style.opacity = "0";
      logoImage.style.opacity = "1";
      setLogo(true);
      }
      this.oldScroll = this.scrollY;
     
    } else if (this.oldScroll < this.scrollY && logo == true) {
      // navBar.style.display = "none";
      if (window.pageYOffset > 25 && window.pageYOffset < 160) {
      logoImageNav.animate([{opacity: "0"}, {opacity: "1"}], {duration: 1000, iterations: 1});
      logoImage.animate([{bottom: "0px", opacity: "1", width: "100%"},{bottom: "100px", opacity: "0", width: "100px"}],
      {duration: 1000,
      iterations: 1});
      logoImageNav.style.opacity = "1";
      logoImage.style.opacity = "0";
      setLogo(false);
       }
    }
    this.oldScroll = this.scrollY;
  }

  return (
    <div>
    <NavBar/>
    <Hero/>
    <About/>
    <More/>
    <Services/> 
    <Contact/>
    <Footer/>
    <BackTopBtn/>
    </div>
    
  )
}

export default App;
