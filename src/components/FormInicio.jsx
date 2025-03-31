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
      <h3>"Transforme su jornada laboral. Descubra el mejor lugar para colaborar, crear y crecer". "Únase a nuestra dinámica comunidad de emprendedores, autónomos y trabajadores remotos. Espacios de trabajo flexibles, comodidades de primer nivel e infinitas posibilidades".</h3>

      <section className="secciondescatados"> <LugaresDestacados/> </section><br /><br />

      <section>
        
      
        <section id="hero">
        <div class="hero-text">
            <h1>Trabaje de forma más inteligente.</h1>
            <p>Espacios de trabajo flexibles diseñados para emprendedores, autónomos y pequeñas empresas.</p>
            </div>
    </section>
<section id="about">
       <p>Nuestro espacio de coworking está diseñado para fomentar la colaboración y la creatividad. Ofrecemos todo lo que necesita para trabajar de manera eficiente, desde Internet de alta velocidad hasta salas de reuniones privadas, todo dentro de una comunidad dinámica.</p>
    </section>

</section>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <p id="copy">&copy; 2025 CoworkingSpaces.</p>
            <p>
              <Link to="">Privacidad</Link> |{" "}
              <Link to="">Términos</Link> |{" "}
              <Link to="">Mapa del sitio</Link>
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
