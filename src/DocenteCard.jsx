// Archivo: DocenteCard.jsx (Modificado para incluir la imagen)

import React, { useState } from 'react';

// Ahora, la prop 'imagenUrl' también llega aquí
function DocenteCard(props) {
  const { nombre, cargo, unidadesCurriculares, imagenUrl } = props; // 👈 Agregamos imagenUrl

  const [mostrando, setMostrando] = useState(false);

  const handleClick = () => {
    setMostrando(!mostrando);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '300px', margin: '20px', textAlign: 'center' }}>
      
      
      {imagenUrl && ( // Solo si existe una imagen, la mostramos
        <img 
          src={imagenUrl} 
          alt={`Avatar de ${nombre}`} 
          style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', // Esto la hace circular
            objectFit: 'cover', // Asegura que la imagen se vea bien dentro del círculo
            marginBottom: '10px' 
          }} 
        />
      )}
      
      <h3>{nombre}</h3> 
      <p><strong>Cargo:</strong> {cargo}</p>
      
      <button onClick={handleClick}>
        {mostrando ? 'Ocultar Materias' : 'Mostrar Materias'}
      </button>

      {mostrando && (
        <>
          <h4>Unidades Curriculares:</h4>
          <ul>
            {unidadesCurriculares.map((materia, index) => (
              <li key={index}>{materia}</li> 
            ))}
          </ul>
        </>
      )}
      
    </div>
  );
}

export default DocenteCard;