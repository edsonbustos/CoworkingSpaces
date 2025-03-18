import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register";
import Home from "../pages/Home";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Inicio/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Home" element={<Home/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
