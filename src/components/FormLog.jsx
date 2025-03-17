import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import llamados from "./services/llamados";
import Swal from "sweetalert2";


function FormLog() {
  const [nombreUsuario, SetNombreUsuario] = useState();
  const [passwordUsuario, SetpasswordUsuario] = useState();
  const [emailUsuario, SetemailUsuario] = useState();
  const [usuarios, setUsuarios] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function fechDataUsers() {
      const datos = await llamados.getUsers();

      setUsuarios(datos);
    }
    fechDataUsers();
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
  function validar() {
    console.log(nombreUsuario, passwordUsuario, emailUsuario);
    console.log(usuarios);

    const encontrado = usuarios.find((usuario) => usuario.nombreUsuario === nombreUsuario && usuario.passwordUsuario === passwordUsuario && usuario.emailUsuario === emailUsuario);

      if (!encontrado) {
      Swal.fire("Usuario incorrecto");
    } else {
      navigate("/home"); 
    }
}
return (
    <div>
       <header id="header">Log in page</header><br /><br />
      <label htmlFor="">Usuario</label>
      <input value={nombreUsuario} onChange={usuario} type="text" /> <br /> <br />
      <label htmlFor="">Contraseña</label>
      <input value={passwordUsuario} onChange={password} type="text" /><br /><br />
      <label htmlFor="">Email</label>
      <input value={emailUsuario} onChange={email} type="email" /><br /> <br />
      <Link to="/Register" id="cerrar">Registrarse</Link><br /><br />
      <button onClick={validar}>Log in</button><br /><br />
      <Link to="/Home">Home</Link>
    </div>
  );
}
export default FormLog;
