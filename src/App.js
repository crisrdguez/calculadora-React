import './App.css';
import logoCalculadora from './img/logoCalculadora.png'
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  //agregar input
  const agregarInput = val =>{
    setInput(input + val)
  };

  //Calcular resultado
  const calcularResultado = () => {

    if(input){
      setInput(evaluate(input)); //la funcion evaluate esta dentro del paquete mathjs
    }else{
      alert("Ingrese valores para realizar el calculo")
    }

    

  }



  return (
    <div className="App">

      <div className='logo-contenedor'>
        <img
          src={logoCalculadora} 
          className='logo'
          alt='Logo de calculadora' />
        
      </div>

      <div className="contenedor-calculadora">

        <Pantalla input={input}/>

        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>{/*paso directamente la funcion para poder llamarla, sin () porque eso devolveria el resultado. Aqui le damos acceso a la funcion agregarInput pasandole el props*/}
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className="fila">
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className="fila">
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className="fila">
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        {/**Otra opcion: con funcion anonima */}
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>

    </div>
      
  );
}

export default App;
