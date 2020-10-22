import React, { Component } from "react";

class Asignatura extends Component {
    render() {
        return (

        <div className="app container ">
         
        <div className="jumbotron col-nd-12">
       
        
        
      
        <form>
            <div className="app container row col-nd-12">
              <p className="lead text-center">
                Escoja la asignatura a modificar
                <button className="padding-right ">Agregar Asignatura</button>
              </p>
              <label class="form-control">
                
                Accion:
                <select className="col-8">
                  <option>....</option>
                  <option>Editar</option>
                </select>
                <button className="maginButton">ir</button>
              </label>
            </div>
    
            <div className="col-lg-14">
              <div className="input-group">
                <span className="input-group-addon ">
                  <input type="checkbox"></input>
                </span>
                <input type="text" className="form-control" />
              </div>
            </div>
          </form>
    
    
        
        </div>
        
       
    
      
    </div>
    
       
    );
}
}
export default Asignatura;
