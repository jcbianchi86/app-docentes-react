// Archivo: App.jsx (Asegurando el pase de la prop 'imagenUrl')

import React, { useState, useEffect } from 'react';
import DocenteCard from './DocenteCard'; 
import { datosDocentes } from './datos'; 

function App() {
  const [docentes, setDocentes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [textoBusqueda, setTextoBusqueda] = useState(''); 
  
  useEffect(() => {
    setTimeout(() => {
        setDocentes(datosDocentes); 
        setCargando(false); 
    }, 3000); 
  }, []); 

  const manejarBusqueda = (evento) => {
    setTextoBusqueda(evento.target.value);
  };
  
  const docentesFiltrados = docentes.filter((docente) => {
    return docente.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
  });

  return (
    <div className="App">
      <h2>Listado de Docentes del Instituto (Vista de Vicerrectoría)</h2>
      
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={textoBusqueda}
        onChange={manejarBusqueda}
        style={{ padding: '10px', width: '300px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      {cargando ? (
        <p>Cargando listado de docentes... ¡Casi estamos!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {docentesFiltrados.map((docente) => (
            <DocenteCard 
              key={docente.id}
              nombre={docente.nombre} 
              cargo={docente.cargo} 
              unidadesCurriculares={docente.unidades} 
              imagenUrl={docente.imagenUrl} // 👈 ¡ACÁ PASAMOS LA IMAGEN!
            />
          ))}
        </div>
      )}
      
    </div>
  );
}

export default App;