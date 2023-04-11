import React from "react"
import { useState ,useEffect} from "react"
import axios from "axios"
import CataOffice from "../assets/cataoffice.png"
import '../style-sheets/Footer.css'

const Footer = () =>{
    const [imagesInstagram, setimagesInstagram] = useState([])
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    useEffect(()=>{
        const token = "IGQVJWSkdVUUVJWERueWl3N241aW90N1BKNmZAiZAnhYZAWZAJaHdGZAmE4MzZAYYnpHX0JJSkRKNHhnWjFFU2tlX1hJMzVSS205MWdyV0NWWVBTbnpCVGRpOWRqazNXSVE5LVBERW4xaC0xaG5hcUFWQ2pOM0NrZA2hIQ2Q1NS1V"
        axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${token}`)
      .then((response) => {
        console.log(setimagesInstagram(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
    },[])

    const handleScroll = (event) => {
      const { scrollLeft, scrollWidth, offsetWidth } = event.target;
      setShowPrevButton(scrollLeft > 0);
      setShowNextButton(scrollWidth - scrollLeft - offsetWidth > 0);
    };
  
    const handlePrev = () => {
      const carousel = document.getElementById('carousel');
      carousel.scrollLeft -= carousel.offsetWidth;
    };
  
    const handleNext = () => {
      const carousel = document.getElementById('carousel');
      carousel.scrollLeft += carousel.offsetWidth;
    };

    return(
      <div className="footer-wrapper">
      <div className="logo-wrapper">
        <img src={CataOffice} alt="Cata Office" />
      </div>
      <div className="carousel-wrapper">
        <div id="carousel" className="carousel" onScroll={handleScroll}>
          {imagesInstagram.map((image) => (
            <div key={image.id} className="slide">
              <img src={image.media_url} alt={image.caption} />
            </div>
          ))}
        </div>
        {showPrevButton && (
          <button className="prev" onClick={handlePrev}>
            Anterior
          </button>
        )}
        {showNextButton && (
          <button className="next" onClick={handleNext}>
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
