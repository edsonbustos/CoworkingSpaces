import React from "react";
import "../styles/Inicio.css";
import { Link, } from "react-router-dom";
import "boxicons";

function FormInicio() {
  

 
  return (
    <div>
      <header>
        <nav>
    


          <div class="logo"></div>
          <ul class="nav-links">
            <li>
              <a href="#">Buscar</a>
            </li>
            <li>
              <a href="#">Anunciar</a>
            </li>
            <li>
              <a href="#">Ayuda</a>
            </li>
            <div class="dropdown">
  <button class="dropbtn"><box-icon type='solid' name='home-alt-2'></box-icon></button>
  <div class="dropdown-content">
    <a href="/Register">Registrarse</a>
    <a href="/Login">Iniciar Secion</a>
    <a href="#">Activa tu espacio</a>
    <a href="#">Ayuda</a>
  </div>
</div>
          </ul>
        </nav>
      </header>
 

      <section class="hero">
        <div class="hero-content">
          <h1>Encuentra un lugar único para trabajr</h1>
          <form class="search-form">
            <input type="text" placeholder="¿A dónde vas?" />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </section>

      <section class="properties">
        <h2>Lugares destacadas</h2>
        <div class="property-list">
          <div class="property-card">
            <p class="property-name">Cafeterías y restaurantes con wifi</p>
            <p class="precio">Ver Disponibles</p>
          </div>
          <div class="property-card">
            <p class="property-name">Bibliotecas</p>
            <p class="precio">Ver Disponibles</p>
          </div>
          <div class="property-card">
            <p class="property-name">Parques y zonas al aire libre</p>
            <p class="precio">Ver Disponibles</p>
          </div>
          <div class="property-card">
            <p class="property-name">Hoteles y hostales</p>
            <p class="precio">Ver Disponibles</p>
          </div>
          <div class="property-card">
            <p class="property-name">Centros de negocios</p>
            <p class="precio">Ver Disponibles</p>
          </div>
          <div class="property-card">
            <p class="property-name">Centros culturales o museos</p>
            <p class="precio">Ver Disponibles</p>
          </div>
          <div class="property-card">
            <p class="property-name">Centros de negocios</p>
            <p class="precio">Ver Disponibles</p>
          </div>
          <div class="property-card">
            <p class="property-name">Espacios compartidos</p>
            <p class="precio">Ver Disponibles</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormInicio;
