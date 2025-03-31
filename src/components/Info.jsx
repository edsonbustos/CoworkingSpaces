import React from "react";
import "../styles/info.css";

function Info() {
  return (
    <div>
      <div className="search-form">
        <h1 id="seccionh1">Encuentra tu lugar único para trabajar</h1>
        <form className="search-form">
          <input type="text" placeholder="¿A dónde vas?" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}

export default Info;
