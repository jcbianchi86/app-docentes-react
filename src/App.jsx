// Archivo: App.jsx

import React, { useState, useEffect } from 'react'; // 👈 Importamos useEffect
import DocenteCard from './DocenteCard'; 
import { datosDocentes } from './datos'; // 👈 Importamos la lista simulada

function App() {
  // 1. Estado para guardar la lista. Arranca como un array vacío ([]).
  const [docentes, setDocentes] = useState([]);
  const [cargando, setCargando] = useState(true); // Estado para mostrar un mensaje mientras carga

  // 2. El Hook useEffect:
  useEffect(() => {
    // Acá simulamos la demora que tiene un servidor para responder (3 segundos)
    setTimeout(() => {
        
        // 3. Una vez que "llegan los datos", actualizamos el estado:
        setDocentes(datosDocentes); 
        setCargando(false); // Terminó de cargar
        
    }, 3000); // 3000 milisegundos = 3 segundos

    // El array vacío ([]) al final es CLAVE: le dice a React 
    // que este código se ejecute UNA SOLA VEZ, cuando el componente se monta.
  }, []); 

  // --- El Renderizado (lo que se ve) ---

  return (
    <div className="App">
      <h2>Listado de Docentes del Instituto</h2>
      
      {/* 4. Renderizado condicional: Mostramos el mensaje de carga */}
      {cargando ? (
        <p>
          Cargando listado de docentes... por favor aguarde!
        </p>
      ) : (
        // 5. Cuando ya NO está cargando, mostramos la lista (usamos 'docentes' del estado)
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {docentes.map((docente) => (
            <DocenteCard 
              key={docente.id}
              nombre={docente.nombre} 
              cargo={docente.cargo} 
              unidadesCurriculares={docente.unidades} 
            />
          ))}
        </div>
      )}
      
    </div>
  );
}

export default App;