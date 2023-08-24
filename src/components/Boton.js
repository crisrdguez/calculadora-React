import React from 'react';
import '../styles/Boton.css';



//props.children - todo lo que ponemos entre la etiqueta de apertura y la de cierre lo vamos a poder usar con la popiedad children
//boton-contenedor es la clase general, si es operador se añade una clase extra: operador
function Boton(props){

  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  return(

    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
    onClick = {() => props.manejarClic(props.children)}>
      {/*añado el evento onclick al boton, cada vez que hagamos clic en el boton queremos llamar a la funcion agregarInput, */}
      {/* para decirle al div que vamos a llamar a esa funcion tenemos que añadir ()=> asi definimos una funcion anonima*/}
      
      {props.children}
    </div>

  );


}

export default Boton;