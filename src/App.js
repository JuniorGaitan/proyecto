import React from 'react';
import Curso from './Academia/Cursos';
import Estudiante from './Academia/Estudiantes';
import Modelo from './Academia/Modelos';
import Asignatura from './component/asignaturas';


const Botones = () => {
  return (
    <div className="app container row col-lg-12">
      <div className="form-control row col-lg-20">
        <div className="float-right">
          <button>Grabar y añadir otro</button>
          <button>Grabar y continuar editando</button>
          <button>Grabar</button>
        </div>

      </div>
    </div>
  );
};


function App() {
  return (
    < Modelo/>
   
  ); 
}


export default App;
