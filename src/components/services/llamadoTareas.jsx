async function getTareas() {
    try {
        const response = await fetch('http://localhost:3001/tareas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching tareas');
        }

        const tareas = await response.json();
        return tareas;
    } catch (error) {
        console.error('Error fetching tareas:', error);
        throw error;
    }
}



//////////LLAMADO POST//////////

async function postTareas(text) {
    try {
     
        const userData = { 
            
            text
        
        };



        const response = await fetch("http://localhost:3001/tareas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updateTareas(nombreLocal,descripcion,provincia,canton,
    horarios,
    correoElectronico,
    cedula,
    nombreCompleto,
    telefono,text,id) 
{
    try {
     
        const userData = { 
          nombreLocal,
          descripcion,
          provincia,
          canton,
          horarios,
          correoElectronico,
          cedula,
          nombreCompleto,
          telefono,
          text
        
        };


        


        const response = await fetch("http://localhost:3001/tareas/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}





//////////////LLAMADO DELETE/////////////


async function deleteTareas(id) {
    try {
        const response = await fetch(`http://localhost:3001/tareas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
export default {getTareas,postTareas,updateTareas, deleteTareas}

