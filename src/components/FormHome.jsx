import React from "react";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";
import "boxicons";
import Carusel from "./Carusel";
import Header from "./Header";
import LugaresDestacados from "./LugaresDestacados";


function FormInicio() {
  return (
    <div>
      <header><Header/></header>
     
      <section className="seccion"><Carusel/></section>

      <section className="secciondescatados"><LugaresDestacados/> </section>

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

export default FormInicio;
