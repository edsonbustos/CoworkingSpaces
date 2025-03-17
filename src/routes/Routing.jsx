import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Inicio" element={<Inicio/>} />
          <Route path="/Register" element={<Register/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
