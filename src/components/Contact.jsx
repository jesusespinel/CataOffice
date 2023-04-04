import '../style-sheets/contact.css';

const Contact = () => {
  return (
  <div className='contact_c'>
    <div id="overlay">
      <form id="myform">
        <h1>Contáctanos</h1>
        <div className="custom_f">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input id="textarea" type="textarea" placeholder="Enter your message" />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      <div className="icon-container">
        <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="instagram icon" />
        <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="linkedin icon" />
      </div>
    </div>
  </div>
  )
}

export default Contact;