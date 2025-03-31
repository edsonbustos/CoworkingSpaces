import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import "boxicons";



function Header() {
  return (
    <header id="headerInicio">
    <nav id="navInicio">
 <div >
    <ul className="nav-links">
        <li id="MyCoworkingSpace">
          <Link to="/">MyCoworkingspaces</Link>
        </li>
     
      </ul>
        </div>
     
    
      <div className="logo"></div>
      <ul className="nav-links">
     <li>
          <Link to="/Buscar"></Link>
          </li> 
        <li>
          <Link to="/Login">Activa tu espacio coworking</Link>
        </li>
      </ul>
    
      <div className="dropdown">
        <button className="dropbtn">
          <box-icon
            type="solid"
            name="home-alt-2"
            aria-label="Home Icon"
          ></box-icon>
        </button>
        <div className="dropdown-content">
          <Link className="dropdowns" to="/Register">
            Registrarse
          </Link>
          <Link className="dropdowns" to="/Login">
            Iniciar Seción
          </Link>
          <Link className="dropdowns" to="/Login">
            Activa tu espacio coworking
          </Link>
          <Link className="dropdowns" to="/Ayuda">
          Acerca de Nosotros
          </Link>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header
