import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";



function FormAyuda() {


  return (
    <div>
      <header>
      <Header/>
      </header>

    <section>
        <div className="container">
     
          <div className="info">
            <h2>Acerca de Nosotros</h2>
            <p>Somos un espacio de coworking dedicado a fomentar la creatividad y el trabajo colaborativo. Nuestro objetivo es proporcionar un ambiente flexible y productivo para emprendedores, freelancers y pequeñas empresas.</p>

            <h3>Misión</h3>
            <p>Brindar un espacio de trabajo que inspire colaboración, creatividad y crecimiento profesional.</p>

            <h3>Visión</h3>
            <p>Convertirnos en el centro de referencia para la innovación y el networking entre profesionales independientes.</p>

            <h3>Valores</h3>
            <ul>
              <li>Colaboración</li>
              <li>Innovación</li>
              <li>Creatividad</li>
              <li>Flexibilidad</li>
            </ul>

            <h3>Información de Contacto</h3>
            <ul>
              <li><strong>Dirección:</strong> Calle  123, Ciudad, País</li>
              <li><strong>Teléfono:</strong> +1 234 567 890</li>
              <li><strong>Email:</strong> contacto@coworking.com</li>
              <li><strong>Redes Sociales:</strong>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>


    
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <p id="copy">&copy; 2025 CoworkingSpaces.</p>
            <p>
              <Link to="/privacy">Privacidad</Link> |{" "}
              <Link to="/terms">Términos</Link> |{" "}
              <Link to="/site-map">Mapa del sitio</Link>
            </p>
          </div>

          <div className="footer-social">
            <p>Síguenos:</p>
            <a
              target="_blank"
              href="https://www.instagram.com"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="instagram-alt"
                aria-label="Instagram Icon"
              ></box-icon>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="facebook-circle"
                aria-label="Facebook Icon"
              ></box-icon>
            </a>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default FormAyuda;
