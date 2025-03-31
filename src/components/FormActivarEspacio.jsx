import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import llamadoTareas from './services/llamadoTareas'; 

function FormAdmin() {
  const [tareas, setTareas] = useState([]);
  const [ValorIngresado, setValorIngresado] = useState('');

  // Obtener las tareas al montar el componente
  useEffect(() => {
    async function fetchTareas() {
      const tareasData = await llamadoTareas.getTareas();
      setTareas(tareasData);
    }

    fetchTareas();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Manejar el cambio en el valor del input
  const Cambiar = (evento) => {
    setValorIngresado(evento.target.value);
  };

  // Agregar una tarea a la base de datos
  const Addtarea = async () => {
    if (ValorIngresado.trim()) {
      const nuevaTarea = await llamadoTareas.postTareas(ValorIngresado);
      setTareas(prevTareas => [...prevTareas, nuevaTarea]); // Añadir la nueva tarea a la lista
      setValorIngresado('');  // Limpiar el campo de entrada
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Por favor ingresa una tarea!',
      });
    }
  };

  // Editar tarea
  const EditarTarea = async (id, tareaTexto) => {
    const { value: NuevaTarea } = await Swal.fire({
      input: "textarea",
      inputLabel: "Editar tarea",
      inputValue: tareaTexto,  // Usamos el texto actual de la tarea
      showCancelButton: true
    });

    if (!NuevaTarea || NuevaTarea.trim() === "") {
      Swal.fire("Error", "Por favor, ingresar un texto válido para la tarea.");
      return; // No actualizar si el usuario cancela o el input está vacío
    }

    const confirmEdit = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres guardar los cambios en esta tarea?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });

    if (confirmEdit.isConfirmed) {
      const tareaActualizada = await llamadoTareas.updateTareas(NuevaTarea, id);
      setTareas(prevTareas =>
        prevTareas.map(tarea => tarea.id === id ? tareaActualizada : tarea)
      );
      Swal.fire("Tarea actualizada", "La tarea se actualizó correctamente", "success");
    }
  };

  // Eliminar tarea
  const EliminarTarea = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      setTareas(prevTareas => prevTareas.filter(tarea => tarea.id !== id)); // Eliminar la tarea inmediatamente del estado
      await llamadoTareas.deleteTareas(id); // Luego eliminarla del servidor
      Swal.fire({
        icon: 'success',
        title: 'Tarea eliminada',
        text: 'La tarea se ha eliminado con éxito.',
      });
    }
  };

  return (
    <div id='home'>
      <h1 id='Tph'>Tareas por hacer</h1>
      <input
        type="text"
        value={ValorIngresado}
        onChange={Cambiar}
        placeholder="Ingrese una tarea"
      />
      <button onClick={Addtarea} id='agregar'>Agregar</button><br />
      <div>
        <h2>Mis Tareas </h2>
        {tareas.map((tarea) => (
          <div key={tarea.id} id='home2'>
            <p>{tarea.text}</p>
            <div id='flex'>
              <button onClick={() => EditarTarea(tarea.id, tarea.text)} id='Editar'>Editar</button>
              <button onClick={() => EliminarTarea(tarea.id)} id='Eliminar'>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" id='cerrar'>Cerrar Página</Link>
      </div>
  );
}

export default FormAdmin