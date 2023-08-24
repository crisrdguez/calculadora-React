import React from 'react';
import '../styles/BotonClear.css';

const BotonClear = (props) => {
  return(
    <div className='boton-clear' onClick={props.manejarClear}>
      {props.children}
    </div>
  );
    

}

/*
function BotonClear(props){

  return(

    <div className="boton-clear">
      {props.children}
    </div>

  );


}*/

export default BotonClear;