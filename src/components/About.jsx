import AboutImage from "../assets/about.png";
import '../style-sheets/about.css';

const About = () => {
  return(
      <>
          <div style={{display: 'flex', flexWrap: 'wrap', backgroundColor: '#ECEAC3'}}>
            <div style={{flex: 1, marginLeft: '5%', marginTop: '10%' }}>
              <h1 className="about_highlight">¿Quiénes somos?</h1>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                Nacimos como una iniciativa de construir oficinas modernas que se acoplen a las necesidades del cliente pero que sobre todo, generen ambientes óptimos para la creatividad e ingenio de los colaboradores.
              </p>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                Pasamos más tiempo en nuestro trabajo qué en cualquier otro lugar en el día a día , por tal motivo, es fundamental tener espacios que den prioridad a la luz natural , zonas de descanso y sobre todo puestos de trabajo ergonomicos que ayudan a la concentración de la tarea.
              </p>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                Desde Cata Office realizamos el diseño contigo, a tu medida. Y buscamos todas las condiciones necesarias para la obra civil, acabados, redes electricas, mobiliario, tecnología y asesoramiento en el mantemiento de tus instalaciones.
                ¡¡ Todo para que tu experiencia laboral sea ideal. !!
              </p>
              <div style={{display: 'flex', marginTop: '2rem', justifyContent: 'space-around'}}>
                <span><h1 className="about_highlight">Misión</h1></span>
                <span><h1 className="about_highlight">Visión</h1></span>
                <span><h1 className="about_highlight">Valores</h1></span>
              </div>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', width:'25%', textAlign: 'justify'}}>
              <img src={AboutImage} style={{maxWidth: '100%', height: '100%'}}/>
            </div>
          </div>
      </>
      
  )
}

export default About