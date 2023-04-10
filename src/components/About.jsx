import AboutImage from "../assets/about.png";
import '../style-sheets/about.css';

const About = () => {
  return(
      <>
          <div className="about_c">
            <div>
              <h1 className="about_highlight">¿Qué es Cata Office?</h1>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                Somos una empresa dedicada al </p>
                <p style={{fontSize: '1.2rem', lineHeight: 1.5}}><strong>diseño, planeación, ejecución y entrega</strong> de obras (principalmente dedicadas a espacio de trabajo, más</p>
                <p style={{fontSize: '1.2rem', lineHeight: 1.5}}> no limitadas al mismo) <strong>listas para iniciar operaciones.</strong></p>
              <h1 className="about_highlight">Nuestro Valor</h1>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
               Al ser una empresa joven, nos presentamos como tal, buscando <strong>conectar</strong> con Clientes y Aliados a través de <strong>comunicación y procesos cercanos</strong> y simplificados.
              </p>

              <h1 className="about_highlight">Cata Office en una frase</h1>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                Recibimos un espacio.</p>
              <p style={{fontSize: '1.2rem', lineHeight: 1.5}}><strong>Entregamos una empresa.</strong></p>
              
              
            </div>
            <div id="pic">
              <img src={AboutImage}/>
            </div>
          </div>
      </>
      
  )
}

export default About