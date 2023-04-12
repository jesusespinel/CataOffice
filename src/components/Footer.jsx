import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import CataOffice from "../assets/cataoffice.png";
import '../style-sheets/Footer.css';


const Footer = () =>{
    const [imagesInstagram, setimagesInstagram] = useState([])
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    useEffect(()=>{
        const token = import.meta.env.VITE_REACT_APP_TOKEN
        console.log(token)
        axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=${token}`)
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

    const handleImageClick = (permalink) => {
      window.open(permalink, "_blank");
    };

    return(
      <div className="footer-wrapper">
      <div className="logo-wrapper">
        <img src={CataOffice} alt="Cata Office" />
      </div>
      <div className="carousel-wrapper">
            {showPrevButton && (
                  <button className="previous" onClick={handlePrev} >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        
                        fill="transparent"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="feather feather-arrow-left"
                        viewBox="0 0 24 24"
                          >
                        <path d="M19 12L5 12"></path>
                        <path d="M12 19L5 12 12 5"></path>
                      </svg>
                    </button>
              )}
                  <div id="carousel" className="carousel" onScroll={handleScroll}>
                    {imagesInstagram.map((image) => (
                        <a 
                          key={image.id}
                          onClick={() => handleImageClick(image.permalink)}
                          className="slide"
                        >
                        <img src={image.media_url} alt={image.caption} />
                      </a>
                    ))}
                   </div>
                      {showNextButton && (
                        <button className="next" onClick={handleNext}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="transparent"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="feather feather-arrow-right"
                                  viewBox="0 0 24 24"
                                >
                                <path d="M5 12L19 12"></path>
                                <path d="M12 5L19 12 12 19"></path>
                              </svg>
                        </button>
                      )}
                    </div>
                      <div>
                        <h3>@CataOffice</h3>
                      </div>
                  </div>
                );
              };

export default Footer;
