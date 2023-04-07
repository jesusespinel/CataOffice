import AboutImage from "../assets/about.png";
import '../style-sheets/about.css';

const About = () => {
  return(
      <>
          <div className="about_c">
            <div style={{flex: 1}}>
              <h1 className="about_highlight">¿Qué es Cata Office?</h1>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                Somos una empresa dedicada al diseño, planeación,ejecución y entrega de obras, listas para iniciar operaciones,principalmente dedicadas al ámbito laboral, más no limitadas al mismo.
              </p>
              <h1 className="about_highlight">Nuestro Valor</h1>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
               Al ser una empresa joven, nos presentamos como tal, buscando conectar con Clientes y Aliados a través de comunicación y procesos cercanos y simplificados.
              </p>

              <h1 className="about_highlight">Cata Office en una frase</h1>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                Recibimos un espacio.Entregamos una empresa.
              </p>
              
            </div>
            <div id="pic">
              <img src={AboutImage} style={{maxWidth: '100%', height: '100%'}}/>
            </div>
          </div>
      </>
      
  )
}

export default About