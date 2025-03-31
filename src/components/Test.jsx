import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// Simulating the asynchronous functions getUsers, deleteUser, and updatePermisos
const getUsers = async () => {
  // Replace this with your actual API call
  return [
    {
      id: 1,
      sede: "Sede 1",
      fecha: "2025-03-30",
      hora: "10:00",
      fecharegreso: "2025-03-30",
      regreso: "12:00",
      computadora: "PC001"
    },
    {
      id: 2,
      sede: "Sede 2",
      fecha: "2025-03-30",
      hora: "11:00",
      fecharegreso: "2025-03-30",
      regreso: "13:00",
      computadora: "PC002"
    }
  ];
};

const deleteUser = async (id) => {
  // Replace with actual delete function
  console.log(`User with id ${id} deleted`);
};

const updatePermisos = async (sede, fecha, hora, fecharegreso, regreso, computadora, estado, id) => {
  // Replace with actual update function
  console.log(`Updated reservation for ${id} to state: ${estado}`);
};

function Test() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    // Fetch the reservation data when the component mounts
    const fetchData = async () => {
      const data = await getUsers();
      setReservas(data);
    };

    fetchData();
  }, []);

  const handleEliminar = async (id) => {
    await deleteUser(id);
    // Re-fetch the updated reservations
    const data = await getUsers();
    setReservas(data);
  };

  const handleEstadoChange = async (reserva, estado) => {
    await updatePermisos(
      reserva.sede,
      reserva.fecha,
      reserva.hora,
      reserva.fecharegreso,
      reserva.regreso,
      reserva.computadora,
      estado,
      reserva.id
    );
    // Re-fetch the updated reservations
    const data = await getUsers();
    setReservas(data);
  };

  const handleCerrarSeccion = () => {
    window.location.href = 'index.html';
  };

  return (
    <div>
      <h1>Solicitudes</h1>

      <section id="reservar">
        <h2>Solicitudes realizadas:</h2>
        <div id="solicitudes">
          {reservas.map((reserva) => (
            <div key={reserva.id}>
              <p>
                Sede: {reserva.sede} / Fecha de Reserva: {reserva.fecha} / Hora de Reserva: {reserva.hora} / Fecha de regreso: {reserva.fecharegreso} / Hora de regreso: {reserva.regreso} / Código de la computadora: {reserva.computadora}
              </p>
              <button onClick={() => handleEliminar(reserva.id)}>Eliminar</button>
              <button onClick={() => handleEstadoChange(reserva, 'Aprobado')}>Aprobar</button>
              <button onClick={() => handleEstadoChange(reserva, 'Denegado')}>Denegar</button>
              <button onClick={() => handleEstadoChange(reserva, 'En espera')}>En espera</button>
            </div>
          ))}
        </div>
      </section>

      <button id="cerrarSeccion" onClick={handleCerrarSeccion}>Cerrar Sección</button>
    </div>
  );
}

export default Test;
