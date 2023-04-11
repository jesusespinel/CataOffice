import React from "react"
import { useState ,useEffect} from "react"
import axios from "axios"
import '../style-sheets/Footer.css'

const Footer = () =>{
    const [imagesInstagram, setimagesInstagram] = useState([])
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    useEffect(()=>{
        const token ="IGQVJYY2FENl92ZADdYWlZANenhGR2hRd291b2YzaTZACOV9FcERkcWwwYjNhZAmlyVDNjVEFZAU2I2UTE0QmZAXVGZAxQ0FxTGp0YjJrQ3dpTWZA1NGw0eld2d2NpeXZAZAZA043MDE1cWdVZAXJn"
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
        <div className="carousel-wrapper">
            <div id="carousel"  className="carousel" onScroll={handleScroll}>
            {imagesInstagram.map((image) => (
                <div key={image.id} className="slide">
                    <img src={image.media_url} alt={image.caption} />
                </div>
                ))}
            </div>
            {showPrevButton && <button className="prev" onClick={handlePrev}>Anterior</button>}
            {showNextButton && <button className="next" onClick={handleNext}>Siguiente</button>} 
        </div>
    )

}
export default Footer