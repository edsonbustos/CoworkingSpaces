import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import llamadoTareas from './services/llamadoTareas';
import Header from "./Header";

function FormAdmin() {
  const [tareas, setTareas] = useState([]);
  const [formData, setFormData] = useState({
    nombreLocal: '',
    descripcion: '',
    provincia: '',
    canton: '',
    horarios: '',
    correoElectronico: '',
    cedula: '',
    nombreCompleto: '',
    telefono: '',
  });

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const tareasData = await llamadoTareas.getTareas();
        setTareas(tareasData);
      } catch (error) {
        console.error(error)
      }
    };

    fetchTareas();
  }, []);

  // Maneja cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Agregar nueva tarea
  const handleAddTarea = async () => {
    if (Object.values(formData).some((field) => field.trim() === '')) {
      Swal.fire({
        icon: 'error',
        title: '¡Por favor completa todos los campos!',
      });
      return;
    }


    try {
      const nuevaTarea = await llamadoTareas.postTareas(formData);
      setTareas((prevTareas) => prevTareas.concat(nuevaTarea));

      //Restablecer formulario y centrarse en el primer campo
      setFormData({
        nombreLocal: '',
        descripcion: '',
        provincia: '',
        canton: '',
        horarios: '',
        correoElectronico: '',
        cedula: '',
        nombreCompleto: '',
        telefono: '',
      });

    Swal.fire('¡Tarea agregada!', 'Tu solicitud ha sido enviada correctamente.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo agregar la tarea', 'error');
    }
  };

  // Editar tarea
  const handleEditTarea = async (id, tarea) => {
    const { value: nuevaTarea } = await Swal.fire({
      title: 'Editar Solicitud',
      html: `
        <input type="text" id="nombreLocal" class="swal2-input" value="${tarea.nombreLocal}" placeholder="Nombre del local">
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${tarea.descripcion}</textarea>
        <input type="text" id="provincia" class="swal2-input" value="${tarea.provincia}" placeholder="Provincia">
        <input type="text" id="canton" class="swal2-input" value="${tarea.canton}" placeholder="Cantón">
        <input type="text" id="horarios" class="swal2-input" value="${tarea.horarios}" placeholder="Horarios">
        <input type="email" id="correoElectronico" class="swal2-input" value="${tarea.correoElectronico}" placeholder="Correo electrónico">
        <input type="text" id="cedula" class="swal2-input" value="${tarea.cedula}" placeholder="Cédula">
        <input type="text" id="nombreCompleto" class="swal2-input" value="${tarea.nombreCompleto}" placeholder="Nombre completo">
        <input type="tel" id="telefono" class="swal2-input" value="${tarea.telefono}" placeholder="Número de teléfono">`, });

    if (nuevaTarea) {
      try {
        const tareaActualizada = await llamadoTareas.updateTareas(nuevaTarea, id);
        setTareas((prevTareas) =>
          prevTareas.map((tarea) => (tarea.id === id ? tareaActualizada : tarea))
        );
        Swal.fire('Solicitud actualizada', 'La solicitud se actualizó correctamente', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo actualizar la tarea', 'error');
      }
    }
  };

  // Eliminar tarea
  const handleDeleteTarea = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
        await llamadoTareas.deleteTareas(id);
        Swal.fire('Solicitud eliminada', 'La solicitud se ha eliminado con éxito.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar la tarea', 'error');
      }
    }
  };

  return (

    <div>

<header><Header/></header>
    <div id="home">
      <h1 id="Tph">Activa tu espacio coworking</h1>
      <div>
        <input
          type="text"
          name="nombreLocal"
          value={formData.nombreLocal}
          onChange={handleInputChange}
          placeholder="Nombre del local"
        />
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
          placeholder="Descripción"
        />
        <input
          type="text"
          name="provincia"
          value={formData.provincia}
          onChange={handleInputChange}
          placeholder="Provincia"
        />
        <input
          type="text"
          name="canton"
          value={formData.canton}
          onChange={handleInputChange}
          placeholder="Cantón"
        />
        <input
          type="text"
          name="horarios"
          value={formData.horarios}
          onChange={handleInputChange}
          placeholder="Horarios"
        />
        <input
          type="email"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
        />
        <input
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleInputChange}
          placeholder="Cédula"
        />
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleInputChange}
          placeholder="Nombre completo"
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
          placeholder="Número de teléfono"
        />
        <button onClick={handleAddTarea} id="agregar">
          Agregar Solicitud
        </button>
      </div>
      <div>
        <h2>Mis Solicitudes</h2>
        {tareas.length > 0 ? (
          tareas.map((tarea) => (
            <div key={tarea.id} id="home2">
              <div className="tarea-info">
                <p><strong>Nombre del Local:</strong> {tarea.nombreLocal}</p>
                <p><strong>Descripción:</strong> {tarea.descripcion}</p>
                <p><strong>Provincia:</strong> {tarea.provincia} - <strong>Cantón:</strong> {tarea.canton}</p>
                <p><strong>Horarios:</strong> {tarea.horarios}</p>
                <p><strong>Correo Electrónico:</strong> {tarea.correoElectronico}</p>
                <p><strong>Cédula:</strong> {tarea.cedula}</p>
                <p><strong>Nombre Completo:</strong> {tarea.nombreCompleto}</p>
                <p><strong>Teléfono:</strong> {tarea.telefono}</p>
              </div>
              <div id="flex">
                <button onClick={() => handleEditTarea(tarea.id, tarea)} id="Editar">
                  Editar
                </button>
                <button onClick={() => handleDeleteTarea(tarea.id)} id="Eliminar">
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No tienes tareas registradas.</p>
        )}
      </div>
      <Link to="/" id="cerrar">
        Cerrar Página
      </Link>
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
}

export default FormAdmin;
