import Escritorios from "../assets/Escritorios.jpeg"
import '../style-sheets/More.css'

const More = () =>{
    return(
        <div className="container">
      <img className="random-image" src={Escritorios} alt="Escritorios" />

      <div className="titles">
        <div className="title1">
          <h1>Lo que nos mueve</h1>
          <p>Entendimos la importacia de contar con espacios de trabajo qué además de cumplir con las necesidades de los clientes,también se basen en el bienestar de los colaboradores,impactando en la efectividad.</p>
        </div>

        <div className="title2">
          <h1>Lo que hacemos</h1>
          <p>Creamos tu espacio de trabajo, desde la concepción de la idea, hasta la entrega del mismo, listo para ocupar,asumiendo toda la gestión e incluyendo mobiliario básico.</p>
        </div>
      </div>
    </div>
  );
}
    
export default More