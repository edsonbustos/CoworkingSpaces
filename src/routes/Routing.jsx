import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Ayuda from "../pages/Ayuda";
import ActivarEspacio from "../pages/ActivarEspacio";
import Buscar from "../pages/Buscar";
import CafeteriasRestaurantes from "../pages/CafeteriasRestaurantes";
import Admin from "../pages/Admin";
import FormCentrosCulturalesOMuseos from "../components/FormCentrosCulturalesOMuseos";
import CentrosCulturalesOMuseos from "../pages/CentrosCulturalesOMuseos";
import CentrosDeNegocios from "../pages/CentrosDeNegocios";
import HotelesYhosteles from "../pages/HotelesYhosteles";
import Bibliotecas from "../pages/Bibliotecas";
import Parques from "../pages/Parques";
import CentrosComunitarios from "../pages/CentrosComunitarios";
import FormCards from "../components/FormCards";
import Cards from "../pages/Cards";
import T from "../pages/T";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Inicio/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Ayuda" element={<Ayuda/>} />
          <Route path="/ActivarEspacio" element={<ActivarEspacio/>} />
          <Route path="/Buscar" element={<Buscar/>} />
          <Route path="/CafeteriasRestaurantes" element={<CafeteriasRestaurantes/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/CentrosCulturalesOMuseos" element={<CentrosCulturalesOMuseos/>} />
          <Route path="/CentrosDeNegocios" element={<CentrosDeNegocios/>} />
          <Route path="/HotelesYhosteles" element={<HotelesYhosteles/>} />
          <Route path="/Bibliotecas" element={<Bibliotecas/>} />
          <Route path="/Parques" element={<Parques/>} />
          <Route path="/CentrosComunitarios" element={<CentrosComunitarios/>} />
          <Route path="/Cards" element={<Cards/>} />
          <Route path="/T" element={<T/>} />
          
          

         </Routes>
      </Router>
    </div>
  );
}

export default Routing;
