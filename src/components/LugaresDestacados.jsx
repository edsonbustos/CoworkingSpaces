import React from 'react'
import "../styles/LugaresDestacados.css";
import { Link } from "react-router-dom";
import Destacadas1 from "../img/Carousel/image2.jpg";
import Destacadas2 from "../img/Destacadas/biblioteca.jpg";
import Destacadas3 from "../img/Destacadas/Parques y zonas al aire libre.jpg";
import Destacadas4 from "../img/Destacadas/Hoteles y hostales.jpg";
import Destacadas5 from "../img/Destacadas/Centros de negocios.jpg";
import Destacadas6 from "../img/Destacadas/Centros culturales o museos.jpg";
import Destacadas7 from "../img/Destacadas/Espacios compartidos.jpg";
import Destacadas8 from "../img/Destacadas/Espacios compartidos.jpg";


function LugaresDestacados() {
  return (
    <section>


<h2 className="descatadosh2">Lugares destacados</h2>


<div className="property-list">
<Link to="/CafeteriasRestaurantes" className="precio">
  <div className="Propiedad">
 <img className="Destacadas" src={Destacadas1} alt="Description" />
 <p className="nombre-Propiedad">
     Ver Cafeterías y restaurantes con wifi 
    </p>
    <p className="nombre-Propiedad">Disponibles</p>
 </div>
  </Link>
  <Link to="/Bibliotecas" className="precio">
  <div className="Propiedad">
    <img className="Destacadas" src={Destacadas2} alt="Description" /><br /><br />
    <p className="nombre-Propiedad">Ver Bibliotecas</p><br />
    <p className="nombre-Propiedad" > Disponibles </p>
  </div>
  </Link>
  <Link to="/Parques" className="precio">
  <div className="Propiedad">
    <img  className="Destacadas" src={Destacadas3} alt="#" />
    <p className="nombre-Propiedad">Ver Parques y zonas al aire libre</p><br />
    <p className="nombre-Propiedad">Disponibles</p>
  </div>
  </Link>
  <Link to="/HotelesYhosteles" className="precio">
  <div className="Propiedad">
  <img  className="Destacadas" src={Destacadas4} alt="#" />
    <p className="nombre-Propiedad">Ver Hoteles y hostales</p><br />
    <p className="nombre-Propiedad">Disponibles</p>
  </div>
  </Link>
  <Link to="/CentrosDeNegocios" className="precio">
  <div className="Propiedad">
  <img  className="Destacadas" src={Destacadas5} alt="#" />
    <p className="nombre-Propiedad">Ver Centros de negocios</p><br />
    <p className="nombre-Propiedad">Disponibles</p>
  </div>
  </Link>
  <Link to="/CentrosCulturalesOMuseos" className="precio">
  <div className="Propiedad">
  <img  className="Destacadas" src={Destacadas6} alt="#" />
    <p className="nombre-Propiedad">Ver Centros culturales o museos</p>
    <p className="nombre-Propiedad">Disponibles</p>
  </div>
  </Link>
  <Link to="/CentrosComunitarios" className="precio">
  <div className="Propiedad">
  <img  className="Destacadas" src={Destacadas7} alt="#" />
    <p className="nombre-Propiedad">Ver Centros comunitarios </p><br />
    <p className="nombre-Propiedad">Disponibles</p>
  </div>
  </Link>

</div>

</section>
  )
}

export default LugaresDestacados