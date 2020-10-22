
import React, { Component } from "react";
import Modelo from "./Modelos";

const Cursos=()=>{
    return(
        <div>
         
        <form>
            <div className="app container row col-nd-12">
              <p className="lead text-center">
                Añadir Curso
                
              </p>
              <label class="form-control">
                
                Asignatura:
                <select className="col-8">
                  <option>....</option>
                  <option>Editar</option>
                </select>
               
              </label>
              <label class="form-control">
                
                Docente:
                <select className="col-8">
                  <option>....</option>
                  <option>Editar</option>
                </select>
               
              </label>

            </div>
            <label>
                
                Estudiante:
                 <textarea>
                   
                 </textarea>
                
               
              </label>
    

          </form>
        </div>
        
    )
}

class Curso extends Component{
    render() {
        return (
            <div>
                <Cursos/> 
               
                
            </div>
       
       
       )
      }  
}

export default Curso;