import React from 'react';
import '../estilos/Tarea.css';
import { RxCrossCircled } from "react-icons/rx";

//La clase que le añado al icono va a ser pasada como un PROP ya que éste último es un componente de react
// Al contenedor de tareas le agrego 2 clases mediante una operación ternaria de js, separándolas con un espacio 
// La operación es para decidir qué clase va a llevar el elemento: asignamos un nombre de clase CONDICIONAL
//La función (Tarea) tendrá 5 PROPS: id (p identificarla de forma única), texto (q se va a mostrar), la clase completada y las funciones de completar y eliminarTarea que se llamarán en caso de q ocurra algún evento
function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className= {completada ? 'container-tarea completada' : 'container-tarea'}>
      <div 
        className='txt-tarea'
        onClick={()=> completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='container-iconos-tarea'
        onClick={() => eliminarTarea (id)}>
        <RxCrossCircled className='icono-tarea' />
      </div>
    </div>
  )
}

export default Tarea;