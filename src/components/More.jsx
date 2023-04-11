import Escritorios from "../assets/desks.png";
import '../style-sheets/More.css';
import Accordion from "./Accordion";
import punta from "../assets/about2.png";

const More = () =>{
    return(
        <div className="container">
          <img className="random-image" src={Escritorios} alt="Escritorios" />
            <div className="titles">
              <img id="punta" src ={punta}/>
             <div className="title1">
                <h1>Lo que nos mueve</h1>
                <p>Entendimos la importacia de contar con espacios de trabajo qué además de cumplir con las necesidades de los clientes,también se basen en el bienestar de los colaboradores, impactando en la efectividad.</p>
              </div>
              <div className="title2">
                <h1>Lo que hacemos</h1>
                <p>Creamos tu espacio de trabajo, desde la concepción de la idea, hasta la entrega del mismo, listo para ocupar,asumiendo toda la gestión e incluyendo mobiliario básico.</p>
              </div>
              <Accordion/>
          </div>
        </div>
  );
}
    
export default More