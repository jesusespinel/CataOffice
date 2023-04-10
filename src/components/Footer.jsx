import React from "react"
import { useState ,useEffect} from "react"
import axios from "axios"

const Footer = () =>{
    const [imagesInstagram, setimagesInstagram] = useState([])

    useEffect(()=>{
        const token = "IGQVJVQWZADRW51dnE2RzFWa1UyYXJNbFctRGZA5ME9QWlRpWU0xeGY0bXdJa1VBWFNEN3dqdDBfbzJ5VVRIV09UVzg4bjEwRl9RSVRfcGZA2bWlabzFYMWQxelA1WjlwTzhVa0hjTjBxWWtCX0wwLV9mX3FvLU1qamJDd0xF"
        axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${token}`)
      .then((response) => {
        console.log(setimagesInstagram(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
    },[])

    return(
        <div className="carousel-wrapper">
            <div id="carousel"  className="carousel">
            {imagesInstagram.map((image) => (
                <div key={image.id} className="slide">
                    <img src={image.media_url} alt={image.caption} />
                </div>
                ))}
            </div>
        </div>
    )

}
export default Footer