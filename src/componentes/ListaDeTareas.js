import React, { useState } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import '../estilos/ListaDeTareas.css';

function ListaDeTareas (){
//En una constante establecemos el componente q queremos modificar (TAREAS), la función para hacerlo (setTareas) y el hook que establece su estado (useState) que como su valor inicial estará vacío, lo pasamos como un arreglo vacío dentro de su paréntesis

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [...tareas, tarea];
      setTareas(tareasActualizadas)
    }
  }
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter (tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  }

  return (
    <> 
      <Formulario onSubmit={agregarTarea} /> 
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) =>
            <Tarea 
              key= {tarea.id}
              id= {tarea.id}
              texto= {tarea.texto}
              completada= {tarea.completada}
              completarTarea={completarTarea} 
              eliminarTarea= {eliminarTarea} />
         )
       }
      </div>
    </>
  )
}

export default ListaDeTareas;