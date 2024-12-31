import React, { useState, useEffect } from 'react';
import './App.css';

const TrafficLight = () => {
  const [currentState, setCurrentState] = useState('red');

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (currentState) {
        case 'red':
          setCurrentState('red-yellow');
          break;
        case 'red-yellow':
          setCurrentState('green');
          break;
        case 'green':
          setCurrentState('green-blink');
          break;
        case 'green-blink':
          setCurrentState('yellow');
          break;
        case 'yellow':
          setCurrentState('red');
          break;
        default:
          break;
      }
    }, currentState === 'green-blink' ? 500 : 1000);

    return () => clearTimeout(timer);
  }, [currentState]);

  return (
    <div className="traffic-light">
      <div className={`light red ${currentState === 'red' || currentState === 'red-yellow' ? 'active' : ''}`}></div>
      <div className={`light yellow ${currentState === 'red-yellow' || currentState === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${currentState === 'green' || currentState === 'green-blink' ? 'active' : ''}`}></div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Светофор</h1>
      <TrafficLight />
    </div>
  );
};

export default App;