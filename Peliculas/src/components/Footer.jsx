import "./Footer.css";
import CUCEI from "../img/CUCEI.png";

function Footer() {
  const integrantes = [
    "Llamas Guerrero Diego Maximiliano",
    "Plascencia Gonzalez Carlos Emanuel",
    "Pérez Molgado Valeria Lizzeth",
    "Ramirez Baltierra Juan Pablo",
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Integrantes</h3>
          <ul>
            {integrantes.map((nombre, index) => (
              <li key={index}>{nombre}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Información académica</h3>
          <p><strong>Profesor:</strong> Zeus Emanuel Gutierrez Ccbian</p>
          <p><strong>Materia:</strong> Desarrollo de aplicaciones web en la nube y móviles</p>
          <p><strong>Calendario escolar:</strong> 2026B</p>
          <p><strong>Fecha:</strong> Noviembre del 2026</p>
        </div>

        <div className="footer-institution">
          <img
            src={CUCEI}
            alt="Escudo de CUCEI"
            className="footer-logo"
          />
          <p>CUCEI</p>
          <p>Universidad de Guadalajara</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Centro Universitario de Ciencias Exactas e Ingenierías</p>
      </div>
    </footer>
  );
}

export default Footer;