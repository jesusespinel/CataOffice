import '../style-sheets/contact.css';
import Location from '../assets/location.jpg';

const Contact = () => {
  return (
  <div className='contact_c'>
    <div id="overlay">
      <form id="myform">
        ¡<h1 id="form_title">¡Hablemos!</h1>
        <div className="custom_f">
          <input id="name" type="text" placeholder="Nombre" />
        </div>
        <div className="custom_f">
          <input id="company_name" type="text" placeholder="Nombre de tu empresa" />
        </div>
        <div className="custom_f"> 
          <input id="email" type="email" placeholder="Email" />
        </div>
        <div className="custom_f">
          <textarea placeholder="Agrega cualquier detalle que nos quieras dejar saber"></textarea>
        </div>
        <div className="custom_f">
          <select>
            <option disabled selected>Tipo de proyecto</option>
            <option>Diseño</option>
            <option>Presupuesto</option>
            <option>Remodelación</option>
            <option>Obra completa</option>
          </select>
        </div>
        <div className="custom_f">
          <select>
            <option disabled selected>¿Cómo nos conociste?</option>
            <option>Redes sociales</option>
            <option>Email</option>
            <option>Referido</option>
            <option>Google</option>
          </select>
        </div>
        <div className="custom_f">
          <button type="submit">Enviar</button>
        </div>

       
      </form>

      <div className="icon-container">
        <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="instagram icon" />
        <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="linkedin icon" />
        <img src={Location} alt="location icon"/>
      </div>
    </div>
  </div>
  )
}

export default Contact;