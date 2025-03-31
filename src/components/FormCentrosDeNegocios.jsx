import React from 'react';
import Header from "./Header";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";
import "boxicons";
import FormCards from './FormCards';

function FormCentrosDeNegocios() {
  return (
    <div><header><Header/></header>

  

<div><FormCards/></div>
     
     
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
     </footer></div>
  )
}

export default FormCentrosDeNegocios