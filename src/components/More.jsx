import Escritorios from "../assets/desks.png";
import '../style-sheets/More.css';
import Accordion from "./Accordion";

const More = () =>{
    return(
        <div className="container">
          <img className="random-image" src={Escritorios} alt="Escritorios" />
            <div className="titles">
             <div className="title1">
                <h1>Lo que nos mueve</h1>
                <p>Entendimos la importancia de contar con espacios de trabajo qué <strong>además de cumplir</strong> con las necesidades de los clientes, también se basen en el <strong>bienestar de los colaboradores, impactando en la efectividad.</strong></p>
              </div>
              <div className="title2">
                <h1>Lo que hacemos</h1>
                <p><strong>Creamos</strong> tu espacio de trabajo, desde la concepción de la idea, <strong>hasta la entrega</strong> del mismo, listo para ocupar,<strong>asumiendo toda la gestión e incluyendo mobiliario básico.</strong></p>
              </div>
              <Accordion/>
          </div>
        </div>
  );
}
    
export default More;