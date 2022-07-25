import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import "./App.css"
import { Helmet } from 'react-helmet';


function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Departamento de Polícia</h1>
      <p>Sistema de Relógio de Ponto</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <div className='button-group'>
      <button onClick={start} className="start-button">Começar</button>
      <button onClick={pause} className="stop-button" >Parar</button>
      <button onClick={reset} className="reset-button">Reniciar</button>
      </div>
    </div>
  );
}



export default function App() {
  return (
    
    <div>
      <Helmet>
        <style>{"body { background-color: #282c34; }"}</style>
      </Helmet>
      <MyStopwatch />

    </div>
  )
}