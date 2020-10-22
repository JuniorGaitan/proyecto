import React,{Fragment, useState} from 'react';
import asignaturas from "./asignaturas"

const Cambiar=(props)=>{
    return(
        <asignaturas/>
    )
}
const Botones=()=>{
    return(
        <div className= "col-md-3">
            <label>editar</label>
        </div>
    )
}
const formulario=()=>{
    return (
        

         <div>
            <h1>academia</h1>
            <a href="./asignaturas.js"></a>

                <div>
                <h1>asignaturas</h1>
                 </div>
            <div>
                <h1>docentes</h1>
            </div>
            <div>
                <h1>Estudiantes</h1>
            </div>
        </div>
        

        
       
        
            
            
        
       
            
          
      
       
    )
}

export default formulario;