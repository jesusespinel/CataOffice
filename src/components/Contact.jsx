import '../style-sheets/contact.css';
import Eduardo from "../assets/eduardo.jpeg";
import Aaron from "../assets/aaron.jpeg";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {

  function validate(input) {
    let errors = {}
    if (!input.name) {
      errors.name = "Nombre requerido";
    } else if ((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.name.trim()))) {
      errors.name = "Nombre solo letras";
    }
    if (!input.email) {
      errors.email = "Email requerido";
    }
    if (!input.message) {
      errors.message = "El mensaje es requerido";
    } else if ((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.message.trim()))) {
      errors.message = "El mensaje solo acepta letras";
    }
    if (!input.company) {
      errors.company = "La empresa es requerida";
    } else if ((!/^[A-Za-z0-9\s]+$/g.test(input.company.trim()))) {
      errors.company = "El mensaje solo acepta letras y números";
    }
    if (!input.phone) {
      errors.phone = "El teléfono es requerido";
    } else if (!/^[0-9]+$/.test(input.phone.trim())) {
      errors.phone = "El mensaje solo acepta números";
    }
    if (!input.projects) {
      errors.projects = "El projecto es requerido";
    }
    if (!input.networks) {
      errors.networks = "Como nos conociste es requerido";
    }
    return errors
  }

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
    projects: "",
    networks: "",
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const sendEmail = (event) => {
    event.preventDefault();
    if(input.name && input.email&& input.message && input.phone && input.projects&& input.networks){
    emailjs.sendForm('service_30yu7ik', 'template_v7ywq8k', event.target, 'oOIhgTo-qldGovjms')
      .then(response => console.log(response))
      .catch(error => console.log(error))
       Swal.fire({
          title:"Mensaje enviado correctamente",
          text: "Pulsa en el botón para continuar",
          icon: "success",
          confirmButtonText:"Volver atrás",
         })
        setInput({
            name: "",
            email: "",
            message: "",
            company: "",
            phone: "",
            projects: "",
            networks: ""
        })
  }else{
        Swal.fire({
          title:"Mensaje no enviado",
          text: "Porfavor completa todos los campos del formulario para enviar un mensaje",
          icon: "error",
          confirmButtonText:"Regresar al formulario",
    })
  }
}

  return (
    <div id="contact" className='contact_c'>
      <h1 id="form_title">¡Hablemos!</h1>
      <div id="overlay">
        <div className="contact_info">
          <div className="person">
            <img src={Eduardo} alt="Person 1" />
            <div className="name">Jesús Espinel</div>
            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-phone-call"
                viewBox="0 0 24 24"
              >
                <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
              <span>313 3477356</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-instagram"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <path d="M17.5 6.5L17.51 6.5"></path>
              </svg>
              <span>jesus_eduardo1</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-mail"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="M22 6L12 13 2 6"></path>
              </svg>
              <span>jespinel@cataoffice.com</span>
            </div>
          </div>


          <div className="person">
            <img src={Aaron} alt="Person 1" />
            <div className="name">Aaron Strober</div>
            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-phone-call"
                viewBox="0 0 24 24"
              >
                <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
              <span>304 4571600</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-instagram"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <path d="M17.5 6.5L17.51 6.5"></path>
              </svg>
              <span>aaronstrober</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-mail"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="M22 6L12 13 2 6"></path>
              </svg>
              <span>astrober@cataoffice.com</span>
            </div>
          </div>
        </div>

        <div className='container-form'>
          <form onSubmit={sendEmail} id="myform">
            <div className="custom_f">
              <input onChange={handleInputChange} name='name' value={input.name} id="name" type="text" placeholder="Escribe tu nombre"
              />
              {errors.name && <p className="danger">{errors.name}</p>}
            </div>
            <div className="custom_f">
              <input onChange={handleInputChange} name='company' value={input.company} id="company_name" type="text" placeholder="Nombre de tu empresa"
              />
              {errors.company && <p className="danger">{errors.company}</p>}
            </div>
            <div className="custom_f">
              <input onChange={handleInputChange} name='email' value={input.email} id="email" type="email" placeholder="Email"
              />
              {errors.email && <p className="danger">{errors.email}</p>}
            </div>
            <div className="custom_f">
              <input onChange={handleInputChange} name='phone' value={input.phone} id="telefono" type="text" placeholder="Número de telefono"
              />
              {errors.phone && <p className="danger">{errors.phone}</p>}
            </div>
            <div className="custom_f">
              <textarea onChange={handleInputChange} name='message' value={input.message} placeholder="Agrega cualquier detalle que nos quieras dejar saber"></textarea>
              {errors.message && <p className="danger">{errors.message}</p>}
            </div>
            <div className="custom_f">
              <select value={input.projects} name='projects' onChange={handleInputChange}>
                <option disabled selected>Tipo de proyecto</option>
                <option>Diseño</option>
                <option>Presupuesto</option>
                <option>Remodelación</option>
                <option>Obra completa</option>
              </select>
              {errors.projects && <p className="danger">{errors.projects}</p>}
            </div>
            <div className="custom_f">
              <select value={input.networks} name='networks' onChange={handleInputChange}>
                <option disabled selected>¿Cómo nos conociste?</option>
                <option>Redes sociales</option>
                <option>Email</option>
                <option>Referido</option>
                <option>Google</option>
              </select>
              {errors.networks && <p className="danger">{errors.networks}</p>}
            </div>
            <div className="custom_f">
              <button type="submit">Enviar</button>
            </div>
          </form>

          <div className="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="none"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-linkedin"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
              <path d="M2 9H6V21H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <a
              href='https://www.instagram.com/cataofficecolombia/'
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-instagram"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <path d="M17.5 6.5L17.51 6.5"></path>
              </svg>
            </a>


            <a
              href="https://www.google.com/maps/place/Cata+coworking/@7.8841556,-72.496948,17z/data=!4m14!1m7!3m6!1s0x8e66458911a9161b:0x3b6c5340b9d74895!2sCata+coworking!8m2!3d7.8841556!4d-72.4947593!16s%2Fg%2F11t85z8p_r!3m5!1s0x8e66458911a9161b:0x3b6c5340b9d74895!8m2!3d7.8841556!4d-72.4947593!16s%2Fg%2F11t85z8p_r?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                stroke="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-map-pin"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;