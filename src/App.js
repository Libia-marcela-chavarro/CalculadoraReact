import React, { useState } from 'react';
import './App.css'; // para estilos

function Impresora() {
  const [texto, setTexto] = useState('');
  const [historial, setHistorial] = useState([]);

  const manejarImpresion = () => {
    if (texto.trim() !== '') {
      setHistorial([...historial, texto]);
      setTexto('');
    }
  };
   const [input, setInput] = useState('');

  const agregar = (valor) => setInput(input + valor);
 const calcular = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };
  const limpiar = () => setInput('');

  return (
    <div className="impresora">
      <h2>Calculadora React</h2>
      
   <textarea
  value={input}
  readOnly
  placeholder="0"
/>

<div className="botones-grid">
  {['1','2','3','+','4','5','6','-','7','8','9','*','0','.','=','/'].map((btn) =>
    btn === '=' ? (
      <button key={btn} onClick={calcular}>{btn}</button>
    ) : (
      <button key={btn} onClick={() => agregar(btn)}>{btn}</button>
    )
  )}
  <button onClick={limpiar} className="boton-limpiar">C</button>
</div>

      
    </div>
  );
}

export default Impresora;
