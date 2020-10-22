import React, { Component } from "react";
import Modelo from "./Modelos";


const Estudent=()=>{
    return(
      <div>
         <form>
    <div className="app container row col-lg-12">
      <p className="lead text-center">Añadir</p>
      <label class="form-control">
        Nombre:
        <input></input>
      </label>
      <label class="form-control">
        Apellido:
        <input></input>

      
        
      
      </label>
      
    </div>
  </form>
      </div>

   


        
    )
    
}

class Estudiante extends Component {
    render() {
      return (
      <Estudent/>)
    }
  }
  export default Estudiante;