import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import HolaMundo from './components/HolaMundo';
//import Saludo from './components/Saludo';
//<HolaMundo></HolaMundo>
function App() {

  const [stateCar, setStateCar]= useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() =>{
    console.log("Total: " + contar);
  }, [contar])

  const encenderApagar = ()=>{
    setStateCar(!stateCar);
    setContar(contar + 1)
    //setStateCar(prevValue =>!prevValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche está: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Activar / apagar</button>
        
      </header>
    </div>
  );
}

export default App;
