import React, { useState } from 'react';
import '../estilos/Formulario.css';
import { v4 as uuiidv4 } from 'uuid';
//uuidv4 es el generador de id que necesitamos para cada tarea q se cree

 function Formulario(props) {

    const [input, setInput] = useState('');

    const handleCambio = e => {
      setInput(e.target.value);
    }

    const handleEnvio = e => {
      e.preventDefault();
      
    const tareaNueva = {
        id:uuiidv4(),
        texto: input,
        completada: false
      }
      setInput('')
      props.onSubmit(tareaNueva);
    } 

    return (
      <form 
        id='form'
        className='tarea-form'
        onSubmit={ handleEnvio } >
        <input
            className='tarea-input'
            value={input}
            type='text'
            placeholder='Ingresa una nueva tarea'
            name='texto'
            onChange={ handleCambio }
        />
        <button className='tarea-boton'>
          Agregar tarea
        </button>
      </form>
    )
  }

export default Formulario;