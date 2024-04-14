import './App.css';
import Logo from './Imagenes/icono.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='app-tareas'>
      <div className='container-logo'>
        <h2 className='txt-logo'> TareApp</h2>
        <img
         src={Logo}
         className='tareas-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
         <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
