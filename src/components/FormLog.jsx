import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import llamados from "./services/llamados";
import Swal from "sweetalert2";
import "../styles/Login.css";
import Header from "./Header";

function FormLog() {
  const [nombreUsuario, SetNombreUsuario] = useState("");
  const [passwordUsuario, SetpasswordUsuario] = useState("");
  const [emailUsuario, SetemailUsuario] = useState("");
  const [usuarios, setUsuarios] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDataUsers() {
      try {
        const datos = await llamados.getUsers();
        setUsuarios(datos);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataUsers();
  }, []);

  function usuario(evento) {
    SetNombreUsuario(evento.target.value);
  }

  function password(evento) {
    SetpasswordUsuario(evento.target.value);
  }

  function email(evento) {
    SetemailUsuario(evento.target.value);
  }

  function validateForm() {
    if (!nombreUsuario || !passwordUsuario || !emailUsuario) {
      Swal.fire("Todos los campos son requeridos!");
      return;
    }



    const userFound = usuarios?.find(
      (usuario) =>
        usuario.nombreUsuario === nombreUsuario &&
        usuario.passwordUsuario === passwordUsuario &&
        usuario.emailUsuario === emailUsuario
    );

    if (!userFound) {
      Swal.fire("Usuario incorrecto");
    } else {
      navigate("/ActivarEspacio");
    }
  }



  return (
    <div>
    <Header />

<div id="Loginpage">
    <h3>Log in page</h3>

    <label htmlFor="username">Usuario</label>
    <input
      id="username"
      value={nombreUsuario}
      onChange={usuario}
      type="text"
      placeholder="Enter your username"
    />
    <br />
    <br />
    <label htmlFor="password">Contraseña</label>
    <input
      id="password"
      value={passwordUsuario}
      onChange={password}
      type="password"
      placeholder="Enter your password"
    />
    <br />
    <br />
    <label htmlFor="email">Email</label>
    <input
      id="email"
      value={emailUsuario}
      onChange={email}
      type="email"
      placeholder="Enter your email"
    />
    <br />
    <br />
    <Link to="/Register" id="cerrar">Registrarse</Link>
    <br />
    <br />
    <button onClick={validateForm}>Log in</button>
    <br />
    <br />
    <Link to="/Home">Home</Link>
    </div>

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
};

export default FormLog;
