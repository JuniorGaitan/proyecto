import React, { Component } from "react";

const Calatologo = () => {
  return (
    <form>
      <div className="app container row col-lg-12">
        <p className="lead text-center">Añadir Asignatura</p>
        <label class="form-control">
          Nombre:
          <input></input>
        </label>
        
      </div>
    </form>
  );
};

const Person = () => {
  return (
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
  );
};

class Modelo extends Component {


  render() {
    return <Person />;
  }
  
}

export default Modelo;
