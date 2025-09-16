// Archivo: DocenteCard.jsx

import React, { useState } from 'react'; // 👈 Importamos el Hook 'useState'

function DocenteCard(props) {
  const { nombre, cargo, unidadesCurriculares } = props;

  // 1. Declaramos el Estado: 
  // 'mostrando' es la variable del estado, y 'setMostrando' es la función para cambiarla.
  // Arranca en 'false' (oculto por defecto).
  const [mostrando, setMostrando] = useState(false);

  // 2. Función que maneja el click del botón:
  // Simplemente cambia el valor actual por el opuesto (!mostrando).
  const handleClick = () => {
    setMostrando(!mostrando);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', maxWidth: '300px', margin: '20px' }}>
      
      <h3>{nombre}</h3> 
      <p><strong>Cargo:</strong> {cargo}</p>
      
      {/* 3. El Botón con un evento 'onClick' que llama a la función */}
      <button onClick={handleClick}>
        {/* Usamos el estado 'mostrando' para cambiar el texto del botón */}
        {mostrando ? 'Ocultar Materias' : 'Mostrar Materias'}
      </button>

      {/* 4. Renderizado Condicional: 
          Solo si 'mostrando' es TRUE, se renderiza la lista (<ul>).
          Si es FALSE, no se dibuja en la pantalla.
      */}
      {mostrando && (
        <> {/* Usamos un fragmento (<>) para agrupar sin agregar un div extra */}
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