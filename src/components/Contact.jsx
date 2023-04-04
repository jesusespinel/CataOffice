import '../style-sheets/contact.css';

const Contact = () => {
  return (
  <div className='contact_c'>

    <div id="overlay"></div>

    <form id="myform">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Enter your name" />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Enter your email" />
      <label htmlFor="message">Message</label>
      <input id="textarea" type="textarea" placeholder="Enter your message" />
      <button type="submit">Send</button>
    </form>

    <div className="icon-container">
      <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" alt="whatsapp icon" />
      <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="instagram icon" />
      <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="linkedin icon" />
      <img src="https://cdn1.iconfinder.com/data/icons/geo-points-1/154/address-pointer-map-navigation-location-512.png" alt="location icon" />
    </div>
  </div>
  )
}

export default Contact;