// Archivo: App.jsx (Modificado para la búsqueda)

import React, { useState, useEffect } from 'react';
import DocenteCard from './DocenteCard'; 
import { datosDocentes } from './datos'; 
// ... (Otras importaciones)

function App() {
  const [docentes, setDocentes] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  // 1. Nuevo Estado para la Búsqueda:
  const [textoBusqueda, setTextoBusqueda] = useState(''); 
  
  // (El useEffect sigue igual, cargando los datos con el setTimeout...)
  useEffect(() => {
    setTimeout(() => {
        setDocentes(datosDocentes); 
        setCargando(false); 
    }, 3000); 
  }, []); 

  // 2. Función para manejar el cambio en el campo de texto
  const manejarBusqueda = (evento) => {
    // Tomamos el valor del campo y actualizamos el estado 'textoBusqueda'
    setTextoBusqueda(evento.target.value);
  };
  
  // 3. Lógica de Filtrado:
  // Filtramos la lista de docentes basándonos en el estado 'textoBusqueda'
  const docentesFiltrados = docentes.filter((docente) => {
    // Pasamos el nombre del docente y el texto de búsqueda a minúsculas
    // para que la búsqueda no distinga mayúsculas/minúsculas.
    return docente.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
  });


  // --- El Renderizado ---
  return (
    <div className="App">
      <h2>Listado de Docentes del Instituto (Vista de Vicerrectoría)</h2>
      
      {/* 4. El Campo de Búsqueda (Input) */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={textoBusqueda} // Conectamos el valor del input al estado
        onChange={manejarBusqueda} // Llamamos a la función al escribir
        style={{ padding: '10px', width: '300px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      {cargando ? (
        <p>Cargando listado de docentes... ¡Casi estamos!</p>
      ) : (
        // 5. Usamos la lista FILTRADA para el .map()
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {docentesFiltrados.map((docente) => (
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