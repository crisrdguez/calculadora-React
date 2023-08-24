import React from "react";
import '../styles/Pantalla.css';

//no siempre es necesario usar la palabra function, tb se puede usar const, para componentes sencillos

const Pantalla = ({input}) => (

    <div className="input">

      {input}

    </div>


);

export default Pantalla;