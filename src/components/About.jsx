import AboutImage from "../assets/about.png";
import '../style-sheets/about.css';

const About = () => {
  return(
      <>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
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

              <div style={{width: "33%"}}>
                <span><h1 className="about_highlight">Misión</h1></span>
                <p>Construir espacios de trabajo dinamicos y diferentes, apoyándonos en conceptos modernos donde prime el bienestar y la naturaleza logrando asi una mejor interacción entre ambiente y usuario.</p>
                </div>
                <div style={{width: "33%"}}>
                <span><h1 className="about_highlight">Visión</h1></span>
                <p>Consolidarnos en el mercado como una empresa caracterizada por superar las expectativas de cada uno de nuestros clientes, por la calidad, cumplimiento, puntualidad, innovación y procesos simples.</p>
                </div>
                <div style={{width: "33%"}}>
                <span><h1 className="about_highlight">Valores</h1></span>
                <p><strong>Comulgamos</strong> con la idea de que todo parte desde el amor por lo que hacemos, por eso nos define.</p>
                <p>La <strong>Honestidad</strong> en cada parte del proceso.</p>
                <p>La <strong>Responsabilidad</strong> con aliados y colaboradores.</p>
                <p>La <strong>Pasión</strong>por lo que hacemos y creemos.</p>
                <p>El <strong>Compromiso</strong>en todos los niveles.</p>
                <p>El <strong>Respeto</strong>por cada una de las personas.</p>
                </div>
              </div>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', width:'25%', textAlign: 'justify'}}>
              <img src={AboutImage} style={{maxWidth: '100%', height: 'auto'}}/>
            </div>
          </div>
      </>
      
  )
}

export default About