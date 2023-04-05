
import React from 'react';
import '../style-sheets/Services.css'; // Archivo de estilos CSS

function MyComponent() {
  return (
    <div className="container">
      <div className="left-column">
        <img src="https://picsum.photos/200/300" alt="Random" />
      </div>
      <div className="right-column">
        <h1 className="title">Título centrado</h1>
        <div className="cards-container">
          <div className="card">
            <i className="fas fa-palette"></i>
            <h3>Icono de diseño</h3>
            <p>Lorem Ipsum</p>
          </div>
          <div className="card">
            <i className="fas fa-dollar-sign"></i>
            <h3>Presupuesto</h3>
            <p>Lorem Ipsum</p>
          </div>
          <div className="card">
            <i className="fas fa-stopwatch"></i>
            <h3>Ejecución</h3>
            <p>Lorem Ipsum</p>
          </div>
          <div className="card">
            <i className="fas fa-calendar-check"></i>
            <h3>Entrega</h3>
            <p>Lorem Ipsum</p>
          </div>
          <div className="card">
            <i className="fas fa-wrench"></i>
            <h3>Mantenimiento</h3>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
