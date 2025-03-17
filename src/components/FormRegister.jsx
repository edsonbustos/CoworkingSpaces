import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import llamados from "./services/llamados";
import Swal from "sweetalert2";

function FormRegister() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");

  const navigate = useNavigate();

  function NombreUsuario(evento) {
    setNombreUsuario(evento.target.value);
  }

  function PasswordUsuario(evento) {
    setPasswordUsuario(evento.target.value);
  }

  function EmailUsuario(evento) {
    setEmailUsuario(evento.target.value);
  }

  const registrar = () => {
    if (nombreUsuario.trim() === "") {
      Swal.fire("Por favor, ingrese un nombre de usuario.");
      return;
    }
    if (passwordUsuario.trim() === "") {
      Swal.fire("Por favor, ingrese una contraseña.");
      return;
    }
    if (emailUsuario.trim() === "") {
      Swal.fire("Por favor, ingrese un correo electrónico.");
      return;
    } Swal.fire("Usuario registrado correctamente!");

    llamados.postUsers(nombreUsuario, passwordUsuario, emailUsuario);  

    navigate("/");
  };
return (
    <div>
      <header id="header">Register page</header><br /><br />
      <label htmlFor="nombreUsuario">Usuario</label>
      <input id="nombreUsuario" name="nombreUsuario" value={nombreUsuario} onChange={NombreUsuario} type="text"/><br /><br />
      <label htmlFor="passwordUsuario">Contraseña</label>
      <input id="passwordUsuario" name="passwordUsuario" value={passwordUsuario} onChange={PasswordUsuario} type="password"/><br /><br />
      <label htmlFor="emailUsuario">Email</label>
      <input id="emailUsuario" name="emailUsuario" value={emailUsuario} onChange={EmailUsuario} type="email"/><br /><br />
      <button onClick={registrar}>Registrar</button><br /><br />
      <Link to="/Inicio" id="cerrar">Regresar al Login</Link>
    </div>
  );
}
export default FormRegister;
